"use client";

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ContactOverview() {
    return (
        <section className="py-20 bg-[#09090b] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Info Card (Redesigned from Red Card to Premium Navy) */}
                    <ScrollReveal animation="slide-right">
                        <div className="bg-[#18181b] text-white p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/5">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-accent/10"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#09090b] rounded-full blur-3xl -ml-10 -mb-10"></div>

                            <h3 className="text-accent font-bold text-lg uppercase tracking-widest mb-2">Get In Touch</h3>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                                Share Your Feedback <br />
                                <span className="text-gray-400">And Fresh Ideas!</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 max-w-md">
                                We always welcome fresh and innovative ideas regarding our uniforms.
                                So, if you have any, do right to us. We'd be happy to hear.
                            </p>

                            <div className="space-y-6 mb-10">
                                <a href="tel:+917827402572" className="flex items-center space-x-4 group/item">
                                    <div className="bg-white/5 p-3 rounded-full group-hover/item:bg-accent transition-colors">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-xl font-medium text-white">7827402572, 0120-2696995</span>
                                </a>
                                <a href="mailto:info@gsgarments.co.in" className="flex items-center space-x-4 group/item">
                                    <div className="bg-white/5 p-3 rounded-full group-hover/item:bg-accent transition-colors">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <span className="text-xl font-medium text-white">info@gsgarments.co.in</span>
                                </a>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button className="bg-gradient-to-r from-[#ca8a04] to-[#eab308] text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Company Profile
                                </button>
                                <button className="bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-bold transition-all border border-white/10">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Right: Phone Mockup Form */}
                    <ScrollReveal animation="slide-left" delay={0.2} className="flex justify-center w-full">
                        <div className="relative w-[300px] h-[650px] bg-[#18181b] rounded-[3rem] border-[8px] border-[#27272a] shadow-2xl overflow-hidden ring-1 ring-white/5 flex-shrink-0">
                            {/* Phone Notch/Camera */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-[#27272a] rounded-b-xl z-20"></div>

                            {/* Screen Content */}
                            <div className="absolute inset-0 bg-[#09090b] overflow-y-auto pt-10 pb-4 px-6 scrollbar-hide">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-white">Enquire Now</h3>
                                    <p className="text-xs text-gray-500">Get Our Quick Assistance Now!</p>
                                </div>

                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 mb-1 ml-1">Name*</label>
                                        <input type="text" className="w-full px-4 py-3 bg-[#18181b] rounded-xl border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-sm transition-all text-white placeholder-gray-600" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 mb-1 ml-1">Email Us*</label>
                                        <input type="email" className="w-full px-4 py-3 bg-[#18181b] rounded-xl border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-sm transition-all text-white placeholder-gray-600" placeholder="john@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 mb-1 ml-1">Phone*</label>
                                        <input type="tel" className="w-full px-4 py-3 bg-[#18181b] rounded-xl border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-sm transition-all text-white placeholder-gray-600" placeholder="+91 98765 43210" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 mb-1 ml-1">Address</label>
                                        <input type="text" className="w-full px-4 py-3 bg-[#18181b] rounded-xl border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-sm transition-all text-white placeholder-gray-600" placeholder="City, State" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-500 mb-1 ml-1">Message</label>
                                        <textarea rows={3} className="w-full px-4 py-3 bg-[#18181b] rounded-xl border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none text-sm transition-all resize-none text-white placeholder-gray-600" placeholder="How can we help?"></textarea>
                                    </div>

                                    <button type="button" className="w-full bg-gradient-to-r from-[#ca8a04] to-[#eab308] hover:shadow-lg hover:shadow-accent/20 text-white py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group">
                                        <span>Submit Now</span>
                                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>

                                <div className="mt-8 text-center">
                                    <p className="text-[10px] text-gray-600">Trusted by 500+ Schools & Corporate Clients</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                </div>
            </div>
        </section>
    );
}
