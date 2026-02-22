"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from "@/components/layout/PageHeader";
import { Send, FileText, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function QuotePage() {
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        email: '',
        phone: '',
        uniformType: 'School Uniforms',
        quantity: '',
        details: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        // Combine fields to fit into the /api/contact schema (name, email, phone, subject, message)
        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: `Quote Request for ${formData.uniformType}`,
            message: `Organization: ${formData.organization}\nQuantity: ${formData.quantity}\nAdditional Details: ${formData.details}`
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                setStatus('Your quote request has been submitted successfully!');
                setFormData({
                    name: '',
                    organization: '',
                    email: '',
                    phone: '',
                    uniformType: 'School Uniforms',
                    quantity: '',
                    details: ''
                });
            } else {
                setStatus('Failed to submit request. Please try again.');
            }
        } catch (error) {
            setStatus('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <PageHeader
                title="Request A Quote"
                subtitle="Get a customized price estimation for your bulk uniform needs."
                breadcrumb={[{ label: "Request Quote", href: "/quote" }]}
            />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-3">

                            {/* Left Side Info */}
                            <div className="bg-gray-900 p-10 text-white flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                                            <span className="text-sm text-gray-300">Premium Quality Fabrics</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                                            <span className="text-sm text-gray-300">Custom Designs & Logos</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                                            <span className="text-sm text-gray-300">Competitive Bulk Pricing</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                                            <span className="text-sm text-gray-300">Timely Delivery</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-10">
                                    <p className="text-xs text-gray-400">Need immediate assistance?</p>
                                    <p className="font-bold text-accent text-lg">+91 78274 02572</p>
                                </div>
                            </div>

                            {/* Right Side Form */}
                            <div className="col-span-2 p-10">
                                <ScrollReveal>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Tell us about your requirements</h2>
                                </ScrollReveal>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                            <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50 text-gray-900" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Name</label>
                                            <input value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50 text-gray-900" placeholder="School / Company" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                            <input required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50 text-gray-900" placeholder="john@example.com" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                            <input required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50 text-gray-900" placeholder="+91 98765 43210" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Type of Uniform</label>
                                        <select value={formData.uniformType} onChange={(e) => setFormData({ ...formData, uniformType: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50 text-gray-900">
                                            <option>School Uniforms</option>
                                            <option>Corporate Uniforms</option>
                                            <option>Hospital Uniforms</option>
                                            <option>Industrial Uniforms</option>
                                            <option>Others</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Estimated Quantity</label>
                                        <input value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} type="number" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50 text-gray-900" placeholder="e.g. 500 sets" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Details</label>
                                        <textarea required value={formData.details} onChange={(e) => setFormData({ ...formData, details: e.target.value })} rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all bg-gray-50 resize-none text-gray-900" placeholder="Specific requirements, fabric preferences, etc."></textarea>
                                    </div>

                                    <button type="submit" disabled={isSubmitting} className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-accent hover:bg-accent-hover'} text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2`}>
                                        <span>{isSubmitting ? 'Submitting Request...' : 'Submit Request'}</span>
                                        {!isSubmitting && <Send size={18} />}
                                    </button>

                                    {status && (
                                        <div className={`mt-4 p-4 rounded-lg font-medium text-center ${status.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {status}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
