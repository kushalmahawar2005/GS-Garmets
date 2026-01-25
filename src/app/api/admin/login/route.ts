import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, password } = body;

        // Simple hardcoded check - in production use env vars
        const validUser = process.env.ADMIN_USERNAME || 'admin';
        const validPass = process.env.ADMIN_PASSWORD || 'password';

        if (username === validUser && password === validPass) {
            const response = NextResponse.json({ success: true });

            // Set a secure HTTP-only cookie
            response.cookies.set('admin_token', 'authenticated', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 // 24 hours
            });

            return response;
        }

        return NextResponse.json(
            { error: 'Invalid credentials' },
            { status: 401 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest) {
    const response = NextResponse.json({ success: true });
    response.cookies.delete('admin_token');
    return response;
}
