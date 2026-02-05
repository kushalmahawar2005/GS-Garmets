"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Stethoscope, Briefcase } from 'lucide-react';

const categories = [
    {
        id: 1,
        title: "School Uniform",
        image: "/assets/images/school-uniform.jpg",
        description: "We provide high-quality, comfortable, and durable school uniforms that represent the pride of your institution.",
        link: "/products/school",
        icon: GraduationCap,
        color: "text-blue-600"
    },
    {
        id: 2,
        title: "Hospital Uniform",
        image: "/assets/images/hospital.jpg",
        description: "Curated with non-absorbent fabric, these Hospital Uniforms are best for hospital staff ensuring safety and comfort.",
        link: "/products/hospital",
        icon: Stethoscope,
        color: "text-green-600"
    },
    {
        id: 3,
        title: "Corporate Uniform",
        image: "/assets/images/coperate.jpg",
        description: "Elegant and professional corporate attire designed to enhance your brand image and employee confidence.",
        link: "/products/corporate",
        icon: Briefcase,
        color: "text-purple-600"
    }
];

export default function MostSellingUniforms() {
    return (
        <section className="relative py-16 bg-white overflow-hidden font-quicksand">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-2"
                    >
                        <span className="text-[#FBBF24] font-bold tracking-[0.2em] uppercase text-sm">Go Through</span>
                        <div className="w-8 h-1 bg-[#1a237e] -skew-x-12"></div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl text-black font-bold"
                    >
                        Our Most Selling Uniforms
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
                    {categories.map((item, index) => (
                        <Link key={item.id} href={item.link} className={`block w-full ${index === 1 ? 'lg:mt-16' : ''}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group relative h-[300px] w-full overflow-hidden cursor-pointer transition-all duration-500"
                            >
                                {/* Image Container */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform tracking-wide duration-700 group-hover:scale-110"
                                    />
                                    {/* Subtle dark overlay for initial visibility if needed, but keeping it clean for now */}
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                                </div>

                                {/* Floating Content Card - Slides up from bottom */}
                                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[90%] bg-white p-6 shadow-2xl transition-all duration-500 ease-out transform translate-y-[60%] group-hover:translate-y-[-20px] rounded-sm z-10 opacity-90 group-hover:opacity-100">

                                    <div className="flex flex-col items-center text-center">
                                        {/* Icon */}
                                        <div className={`mb-3 p-2 bg-gray-50 rounded-lg ${item.color}`}>
                                            <item.icon size={32} strokeWidth={1.5} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 tracking-wide mb-3 group-hover:text-[#1a237e] transition-colors">
                                            {item.title}
                                        </h3>

                                        {/* Description (Hidden initially, visible on hover) */}
                                        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100 mb-2">
                                            <p className="text-gray-500 text-sm leading-relaxed tracking-wide mb-4">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Read More Link */}
                                        <div className="flex items-center text-[#1a237e] font-bold text-sm tracking-uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-2">
                                            READ MORE
                                            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
