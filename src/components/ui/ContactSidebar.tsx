"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MoreVertical, X, Send, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Trigger Button - Floating Side Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-1/2 right-0 -translate-y-1/2 z-40 bg-primary hover:bg-primary-hover text-accent p-3 rounded-l-xl shadow-lg shadow-black/20 transition-all duration-300 hover:pl-5 group"
                aria-label="Open Contact Form"
            >
                <MoreVertical className="w-6 h-6 animate-pulse group-hover:animate-none" />
            </button>

            {/* Sidebar Overlay & Panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 cursor-pointer"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[51] shadow-2xl flex flex-col overflow-hidden border-l border-gray-100"
                        >
                            {/* Header */}
                            <div className="bg-primary p-6 flex items-center justify-between relative overflow-hidden">
                                {/* Decorative Gradient */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-1">Get in Touch</h2>
                                    <p className="text-gray-400 text-sm">We'd love to hear from you!</p>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors relative z-10"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto overflow-x-hidden p-6">

                                {/* Quick Contact Info */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <a href="tel:7827402572" className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-accent/5 rounded-xl border border-gray-100 hover:border-accent/20 transition-all group">
                                        <div className="bg-white p-2 rounded-full shadow-sm mb-2 group-hover:scale-110 transition-transform text-accent">
                                            <Phone size={18} />
                                        </div>
                                        <span className="text-xs font-semibold text-gray-600">Call Us</span>
                                        <span className="text-[10px] text-gray-500">7827402572</span>
                                    </a>
                                    <a href="mailto:info@gsgarments.co.in" className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-accent/5 rounded-xl border border-gray-100 hover:border-accent/20 transition-all group">
                                        <div className="bg-white p-2 rounded-full shadow-sm mb-2 group-hover:scale-110 transition-transform text-accent">
                                            <Mail size={18} />
                                        </div>
                                        <span className="text-xs font-semibold text-gray-600">Email Us</span>
                                        <span className="text-[10px] text-gray-500">info@...</span>
                                    </a>
                                </div>

                                {/* Form */}
                                <form className="space-y-5">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">Full Name *</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-400 text-sm"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">Email Address *</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-400 text-sm"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">Phone Number *</label>
                                        <input
                                            type="tel"
                                            placeholder="Enter your mobile number"
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-400 text-sm"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">Address</label>
                                        <input
                                            type="text"
                                            placeholder="City, State"
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-400 text-sm"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-primary uppercase tracking-wider ml-1">Message</label>
                                        <textarea
                                            rows={4}
                                            placeholder="How can we help you?"
                                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-gray-400 text-sm resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="button"
                                        className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-lg font-bold shadow-lg shadow-primary/20 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group mt-4"
                                    >
                                        <span>Send Message</span>
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>

                            {/* Footer */}
                            <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
                                <p className="text-[10px] text-gray-400 tracking-wide uppercase">
                                    Protected by reCAPTCHA • <a href="#" className="hover:text-primary underline">Privacy</a>
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
