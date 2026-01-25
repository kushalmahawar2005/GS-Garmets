
import { NextResponse } from 'next/server';
import { getDB } from '@/lib/store';

export async function GET() {
    try {
        const db = getDB();
        return NextResponse.json({
            queries: db.queries,
            analytics: db.analytics
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch admin data' }, { status: 500 });
    }
}
