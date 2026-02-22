import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Enquiry from '@/models/Enquiry';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        await connectToDatabase();
        const body = await request.json();

        // Validate required fields
        if (!body.name || !body.email || !body.phone || !body.message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newEnquiry = await Enquiry.create({
            name: body.name,
            email: body.email,
            phone: body.phone,
            subject: body.subject || 'General Enquiry',
            message: body.message,
        });

        // Setup Nodemailer transporter
        // You should configure SMTP_USER, SMTP_PASS, and OWNER_EMAIL in your .env file
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your email service
            auth: {
                user: process.env.SMTP_USER || 'your-email@gmail.com',
                pass: process.env.SMTP_PASS || 'your-app-password',
            },
        });

        // Email to Owner
        const mailToOwner = {
            from: process.env.SMTP_USER || 'your-email@gmail.com',
            to: process.env.OWNER_EMAIL || 'owner-email@gmail.com',
            subject: `New Query from ${body.name} - ${body.subject || 'General Enquiry'}`,
            html: `
                <h3>New Query Received from Dashboard</h3>
                <p><strong>Name:</strong> ${body.name}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                <p><strong>Phone:</strong> ${body.phone}</p>
                <p><strong>Subject:</strong> ${body.subject || 'General Enquiry'}</p>
                <p><strong>Message:</strong></p>
                <p>${body.message}</p>
            `,
        };

        // Email to User
        const mailToUser = {
            from: process.env.SMTP_USER || 'your-email@gmail.com',
            to: body.email,
            subject: 'Thank You for Your Query - GS Garments',
            html: `
                <h3>Dear ${body.name},</h3>
                <p>Thank you for reaching out to <strong>GS Garments</strong>.</p>
                <p>We have successfully received your query regarding "<strong>${body.subject || 'General Enquiry'}</strong>".</p>
                <p>Our team will review your message and get back to you as soon as possible.</p>
                <br/>
                <p>Best Regards,<br/><strong>GS Garments Team</strong></p>
            `,
        };

        // Send emails
        try {
            await transporter.sendMail(mailToOwner);
            await transporter.sendMail(mailToUser);
        } catch (mailError) {
            console.error('Email sending failed:', mailError);
            // We still continue to return success for the query saving even if email fails
        }

        return NextResponse.json({ success: true, data: newEnquiry }, { status: 201 });
    } catch (error) {
        console.error('Submission error:', error);
        return NextResponse.json({ error: 'Failed to submit enquiry' }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectToDatabase();
        const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, enquiries });
    } catch (error) {
        console.error('Fetch error:', error);
        return NextResponse.json({ error: 'Failed to fetch enquiries' }, { status: 500 });
    }
}
