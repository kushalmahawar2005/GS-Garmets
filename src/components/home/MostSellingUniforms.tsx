"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const categories = [
    {
        id: 1,
        title: "School Uniforms",
        image: "/assets/images/school-trouser.jpg",
        description: "Comfortable & Durable"
    },
    {
        id: 2,
        title: "Hospital Uniforms",
        image: "/assets/images/doctor-coat.jpg",
        description: "Professional & Sterile"
    },
    {
        id: 3,
        title: "Corporate Uniforms",
        image: "/assets/images/corporate-uniforms.jpg",
        description: "Elegant & Sharp"
    }
];

export default function MostSellingUniforms() {
    return (
        <section className="relative py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mt-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-2"
                    >
                        <h4 className="text-accent font-black uppercase tracking-widest text-lg">GO THROUGH</h4>
                        <div className="flex space-x-1">
                            <div className="w-2 h-6 bg-black -skew-x-12"></div>
                            <div className="w-2 h-6 bg-black -skew-x-12"></div>
                        </div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-black mb-2 font-serif"
                    >
                        Our Most Selling Uniforms
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-xl shadow-2xl cursor-pointer border border-black/10 hover:border-accent/50 transition-colors duration-500"
                        >
                            {/* Image */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                unoptimized
                                quality={100}
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-accent font-medium tracking-wider text-sm mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">{item.description}</span>
                                <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide group-hover:text-accent transition-colors">
                                    {item.title}
                                </h3>
                                <div className="w-12 h-1 bg-accent mt-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
