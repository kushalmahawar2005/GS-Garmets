"use client";

import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        onClose();
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 flex items-center justify-center z-[9999] p-4 pointer-events-none"
                    >
                        <div className="bg-white pointer-events-auto rounded-none shadow-2xl w-full max-w-4xl max-h-[100vh] overflow-y-auto relative flex flex-col md:flex-row border-t-4 border-[#1a237e]">

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-gray-400 hover:text-[#1a237e] transition-colors transform hover:rotate-90 duration-300 z-10"
                            >
                                <X size={32} strokeWidth={1.5} />
                            </button>

                            <div className="w-full p-10 md:p-16">
                                <h2 className="text-3xl font-bold text-black mb-4 font-quicksand uppercase tracking-wide">Contact Form</h2>
                                <div className="w-16 h-1 bg-[#1a237e] mb-6"></div>
                                <p className="text-gray-500 mb-10 font-quicksand font-medium tracking-wide">
                                    Feel Free to Contact us any time. we will get back to you as soon as we can
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-8 font-quicksand">
                                    <div className="group relative">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name*"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#1a237e] transition-colors placeholder-gray-400 bg-transparent text-black"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="group relative">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email*"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#1a237e] transition-colors placeholder-gray-400 bg-transparent text-black"
                                            />
                                        </div>
                                        <div className="group relative">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone No.*"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#1a237e] transition-colors placeholder-gray-400 bg-transparent text-black"
                                            />
                                        </div>
                                    </div>

                                    <div className="group relative">
                                        <input
                                            type="text"
                                            name="address"
                                            placeholder="Address"
                                            value={formData.address}
                                            onChange={handleChange}
                                            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#1a237e] transition-colors placeholder-gray-400 bg-transparent text-black"
                                        />
                                    </div>

                                    <div className="group relative">
                                        <textarea
                                            name="message"
                                            placeholder="Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={1}
                                            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#1a237e] transition-colors placeholder-gray-400 resize-none bg-transparent text-black"
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            className="bg-[#1a237e] text-white px-10 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-[#283593] transition-all hover:shadow-xl shadow-lg transform hover:-translate-y-1"
                                        >
                                            Submit Now
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
