import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Enquiry from '@/models/Enquiry';

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
