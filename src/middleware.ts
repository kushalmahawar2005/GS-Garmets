import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Protect /admin routes
    if (pathname.startsWith('/admin')) {
        // Allows access to the login page itself
        if (pathname === '/admin/login') {
            return NextResponse.next();
        }

        // Check for the admin_token cookie
        const token = request.cookies.get('admin_token');

        // If no token, redirect to login
        if (!token) {
            const loginUrl = new URL('/admin/login', request.url);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        // Match admin paths
        '/admin/:path*',
    ],
};
