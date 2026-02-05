"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const products = [
    { id: 1, image: "/assets/images/nurse-uniform.jpg", alt: "Nurse Uniform" },
    { id: 2, image: "/assets/images/corporate-uniforms.jpg", alt: "Corporate Uniform" },
    { id: 3, image: "/assets/images/lab-coat.jpg", alt: "Lab Coat" }
];

export default function NewArrivals() {
    return (
        <section className="relative w-full bg-[#0E1F74] font-quicksand">
            {/* Dotted Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: "radial-gradient(#000 2px, transparent 2px)",
                    backgroundSize: "30px 30px",
                }}
            ></div>

            <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 mb-24">

                    {/* Left Side: Main Headlines */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-quicksand text-white uppercase tracking-wider mb-6 leading-tight">
                            We Haven't Finished Yet!
                        </h2>
                        <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light font-quicksand">
                            We Have More, Keep Browsing
                        </p>
                    </motion.div>

                    {/* Right Side: Content & Action */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2 relative pl-8 md:pl-0"
                    >
                        {/* Quote Icon */}
                        <div className="mb-6 opacity-30">
                            <Quote size={48} className="text-black fill-black" strokeWidth={0} />
                        </div>

                        {/* Quote Icon (Visual Overlay) */}
                        <div className="absolute -top-4 -left-4 md:left-[-3rem] md:top-[-1rem]">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-black w-10 h-10 md:w-12 md:h-12 opacity-80" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                            </svg>
                        </div>

                        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 font-quicksand">
                            Being one of the best Hospital Uniform Manufacturers, we offer comfortable and customize industry-specific uniform to elevate your comfort and brand identity.
                        </p>

                        <Link
                            href="/products"
                            className="inline-flex items-center group relative overflow-hidden bg-black text-white px-8 py-4 font-bold tracking-widest uppercase text-sm border-r-4 border-white transition-all duration-300 hover:bg-gray-900 hover:border-accent"
                        >
                            <span className="relative z-10 group-hover:text-accent transition-colors duration-300">More Products</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Bottom Product Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 translate-y-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + (index * 0.1), duration: 0.6 }}
                            className="relative h-[400px] w-full group overflow-hidden shadow-xl"
                        >
                            <Image
                                src={product.image}
                                alt={product.alt}
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Hover Overlay & Content */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="inline-block px-3 py-1 border border-white/50 text-xs text-white uppercase tracking-wider mb-2 backdrop-blur-sm">
                                        {product.alt}
                                    </span>
                                    <h3 className="text-white text-2xl font-bold font-quicksand">
                                        {product.alt}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* White divider/brush stroke effect */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-white"
                style={{
                    clipPath: 'polygon(0 100%, 100% 100%, 100% 40%, 95% 45%, 90% 40%, 85% 50%, 80% 45%, 75% 55%, 70% 40%, 65% 50%, 60% 45%, 55% 55%, 50% 40%, 45% 50%, 40% 45%, 35% 55%, 30% 40%, 25% 50%, 20% 45%, 15% 55%, 10% 40%, 5% 50%, 0 40%)'
                }}>
            </div>
        </section>
    );
}
