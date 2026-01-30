"use client";

import { motion } from 'framer-motion';

export default function HomeMap() {
    return (
        <section className="relative w-full h-[450px] overflow-hidden border-t-4 border-accent">
            <div className="absolute inset-0 z-0">
                <iframe
                    src="https://maps.google.com/maps?q=GS+Garments+pipli+choraha+bus+stand+road+bijainagar&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
