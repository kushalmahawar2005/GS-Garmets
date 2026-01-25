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

            {/* Overlay Gradient for smooth blending */}
            <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
        </section>
    );
}
