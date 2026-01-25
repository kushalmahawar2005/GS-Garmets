"use client";

import { motion } from 'framer-motion';

export default function HomeMap() {
    return (
        <section className="relative w-full h-[450px] overflow-hidden border-t-4 border-accent">
            <div className="absolute inset-0 z-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544.205218767909!2d75.80931536128038!3d26.91572978937923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3ecc2395561%3A0x6bba416c8052f559!2sGs%20Garments!5e0!3m2!1sen!2sin!4v1706180000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0%) contrast(1.1)' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GS Garments Location"
                    className="w-full h-full"
                ></iframe>
            </div>

            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 hidden md:block">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/95 backdrop-blur-md p-6 rounded-lg shadow-2xl border-l-4 border-accent max-w-sm"
                >
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Visit Our Store</h3>
                    <div className="w-16 h-1 bg-accent mb-4"></div>
                    <p className="text-gray-600 mb-4">
                        Experience the quality of our premium uniforms firsthand.
                    </p>
                    <div className="space-y-3">
                        <div className="flex items-start items-center">
                            <span className="text-accent font-bold mr-2">📍</span>
                            <span className="text-sm font-semibold text-gray-800">Jaipur, Rajasthan, India</span>
                        </div>
                        <div className="flex items-start items-center">
                            <span className="text-accent font-bold mr-2">📞</span>
                            <span className="text-sm font-semibold text-gray-800">+91 98765 43210</span>
                        </div>
                        <div className="flex items-start items-center">
                            <span className="text-accent font-bold mr-2">🕒</span>
                            <span className="text-sm font-semibold text-gray-800">Mon - Sat: 10:00 AM - 8:00 PM</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Overlay Gradient for smooth blending */}
            <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
        </section>
    );
}
