import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Analytics from '@/models/Analytics';

export async function POST() {
    try {
        await connectToDatabase();

        // Simply track by date. 
        // In a real app you might want to track unique visitors via cookies/IP headers
        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

        // Upsert: Find for today, increment views, or create if not exists
        const stats = await Analytics.findOneAndUpdate(
            { date: today },
            { $inc: { views: 1 } },
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );

        return NextResponse.json({ success: true, views: stats.views });
    } catch (error) {
        console.error('Analytics error:', error);
        // Fail silently for analytics to not break user experience
        return NextResponse.json({ error: 'Failed to track' }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectToDatabase();

        const allStats = await Analytics.find({}).sort({ date: 1 });

        // Aggregation needed for the frontend format
        // 1. Total Views
        const totalViews = allStats.reduce((acc, curr) => acc + curr.views, 0);

        // 2. Daily Views Map
        const dailyViews: Record<string, number> = {};
        allStats.forEach(stat => {
            dailyViews[stat.date] = stat.views;
        });

        return NextResponse.json({
            analytics: {
                totalViews,
                dailyViews
            }
        });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
    }
}
