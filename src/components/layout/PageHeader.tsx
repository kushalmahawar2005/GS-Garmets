"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    breadcrumb?: { label: string; href: string }[];
}

export default function PageHeader({ title, subtitle, breadcrumb = [] }: PageHeaderProps) {
    return (
        <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-primary">
            {/* Background Pattern/Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.globaluniforms.co.in/images/banners/school-uniform.jpg')] bg-cover bg-center opacity-20 filter blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40"></div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 font-light">
                            {subtitle}
                        </p>
                    )}

                    {/* Breadcrumbs */}
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-400 font-medium">
                        <Link href="/" className="hover:text-accent transition-colors">Home</Link>
                        <span>/</span>
                        {breadcrumb.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <Link
                                    href={item.href}
                                    className={`${index === breadcrumb.length - 1 ? "text-accent" : "hover:text-accent"} transition-colors`}
                                >
                                    {item.label}
                                </Link>
                                {index < breadcrumb.length - 1 && <span>/</span>}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
