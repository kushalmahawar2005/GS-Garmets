"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: "https://www.globaluniforms.co.in/images/banners/school-uniform.jpg",
        title: "Premium School Uniforms",
        subtitle: "Comfortable, Durable & Stylish Standards",
        link: "/products/school"
    },
    {
        id: 2,
        image: "https://www.globaluniforms.co.in/images/banners/hospital-uniform.jpg",
        title: "Professional Healthcare Attire",
        subtitle: "Hygiene, Comfort & Protection for Staff",
        link: "/products/hospital"
    },
    {
        id: 3,
        image: "https://www.globaluniforms.co.in/images/banners/sports-uniform.jpg",
        title: "High Performance Sports Wear",
        subtitle: "Designed for Champions & Athletes",
        link: "/products/industrial"
    }
];

export default function PremiumHero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden bg-primary">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[current].image}
                        alt={slides[current].title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="container mx-auto px-4 text-center text-white">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={current}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-2xl">
                                {slides[current].title}
                            </h1>
                            <p className="text-xl md:text-2xl mb-10 font-light max-w-2xl mx-auto text-gray-200">
                                {slides[current].subtitle}
                            </p>

                            <Link href={slides[current].link}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-accent hover:bg-accent-hover text-white px-10 py-4 rounded-full font-bold text-lg uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
                                >
                                    Explore Collection
                                </motion.button>
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-accent backdrop-blur-md p-3 rounded-full text-white transition-all border border-white/20 hover:border-accent"
            >
                <ChevronLeft size={32} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-accent backdrop-blur-md p-3 rounded-full text-white transition-all border border-white/20 hover:border-accent"
            >
                <ChevronRight size={32} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all ${current === index ? "bg-accent w-10" : "bg-white/50 hover:bg-white"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
