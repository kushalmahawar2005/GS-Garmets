"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
    const [analyticsData, setAnalyticsData] = useState<any>(null);
    const [enquiries, setEnquiries] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const handleLogout = async () => {
        await fetch('/api/admin/login', { method: 'DELETE' });
        router.push('/admin/login');
        router.refresh();
    };

    const fetchData = async () => {
        try {
            const [analyticsRes, contactRes] = await Promise.all([
                fetch('/api/analytics'),
                fetch('/api/contact')
            ]);

            const analytics = await analyticsRes.json();
            const contacts = await contactRes.json();

            setAnalyticsData(analytics.analytics);
            if (contacts.success) {
                setEnquiries(contacts.enquiries);
            }
            setLoading(false);
        } catch (error) {
            console.error("Failed to load dashboard data", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // Optional: Auto-refresh every 30 seconds
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="text-xl font-semibold text-gray-600">Loading Dashboard...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8 border-b pb-4 flex justify-between items-center bg-white p-6 rounded-lg shadow-sm">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                        <p className="text-gray-500 mt-2">Real-time overview & enquiries.</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={fetchData}
                            className="px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors text-sm font-medium"
                        >
                            Refresh Data
                        </button>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors text-sm font-medium"
                        >
                            Sign Out
                        </button>
                    </div>
                </header>

                <div className="grid gap-8">
                    {/* Analytics Section */}
                    {analyticsData ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <h2 className="text-sm uppercase tracking-wide text-gray-500 font-semibold mb-2">Total Page Views</h2>
                                <p className="text-5xl font-bold text-blue-600">{analyticsData.totalViews}</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 col-span-1 lg:col-span-2">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Daily Views</h2>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-gray-100">
                                                <th className="pb-2 text-gray-600 font-medium">Date</th>
                                                <th className="pb-2 text-gray-600 font-medium text-right">Views</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.entries(analyticsData.dailyViews || {}).reverse().slice(0, 5).map(([date, count]: any) => (
                                                <tr key={date} className="border-b border-gray-50 last:border-0 hover:bg-gray-50">
                                                    <td className="py-2 text-gray-800">{date}</td>
                                                    <td className="py-2 text-right font-medium text-blue-600">{count}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-red-500">Failed to load analytics.</div>
                    )}

                    {/* Enquiries Section */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900">Recent Enquiries</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
                                        <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {enquiries.length > 0 ? (
                                        enquiries.map((enquiry) => (
                                            <tr key={enquiry._id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {new Date(enquiry.createdAt).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {enquiry.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                    <div>{enquiry.email}</div>
                                                    <div className="text-xs text-gray-400">{enquiry.phone}</div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-600 max-w-md truncate">
                                                    {enquiry.message}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                                No enquiries yet.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
