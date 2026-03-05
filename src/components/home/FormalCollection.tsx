"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";

const formalProducts = [
    {
        id: 1,
        title: "Pleated Office Trousers",
        category: "Men's Formal Bottomwear",
        image: "/assets/images/1.png",
        price: "Custom Quote"
    },
    {
        id: 2,
        title: "Men's Flat Front Formal Trousers",
        category: "Corporate Formals",
        image: "/assets/images/flat.png",
        price: "Custom Quote"
    },
    {
        id: 3,
        title: "Executive Grey Office Pants",
        category: "Men's Corporate Formals",
        image: "/assets/images/list3.png",
        price: "Custom Quote"
    },
    {
        id: 4,
        title: "Charcoal Executive Pants",
        category: "Men's Corporate Formals",
        image: "/assets/images/list4.png",
        price: "Custom Quote"
    },
    {
        id: 5,
        title: "Comfort Fit Office Pants",
        category: "Men's Corporate Formals",
        image: "/assets/images/list5.png",
        price: "Custom Quote"
    },
    {
        id: 6,
        title: "Premium Check Office Pants",
        category: "Men's Corporate Formals",
        image: "/assets/images/list6.png",
        price: "Custom Quote"
    },
    {
        id: 7,
        title: "Premium Pleated Executive Pants",
        category: "Men's Premium Formals",
        image: "/assets/images/list7.png",
        price: "Custom Quote"
    },
    {
        id: 8,
        title: "Black Executive Side-Buckle Pants",
        category: "Men's Premium Formals",
        image: "/assets/images/list8.png",
        price: "Custom Quote"
    }
];

// Helper animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function FormalCollection() {
    const [showAll, setShowAll] = useState(false);

    // Show only 4 items initially, or all if showAll is true
    const visibleProducts = showAll ? formalProducts : formalProducts.slice(0, 4);

    return (
        <section className="py-20 md:py-28 bg-[#fafafa] font-quicksand relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0E1F74]/5 rounded-full blur-3xl -z-0 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-0 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <span className="h-[2px] w-10 bg-[#0E1F74]"></span>
                            <span className="uppercase tracking-widest text-[#0E1F74] font-semibold text-sm">
                                Corporate Elegance
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Our Exclusive <br className="hidden md:block" />
                            <span className="text-[#0E1F74]">Formal Collection</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link
                            href="/catalogue"
                            className="inline-flex items-center gap-2 group text-[#0E1F74] font-medium hover:text-black transition-colors"
                        >
                            <span className="relative">
                                View All Details
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                            </span>
                            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Product Grid */}
                <motion.div
                    key={showAll ? "expanded" : "collapsed"}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10"
                >
                    {visibleProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            className="group cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative h-[220px] sm:h-[300px] md:h-[400px] w-full rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-6 bg-white shadow-sm border border-gray-100">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain object-center transition-transform duration-700 ease-in-out group-hover:scale-105 p-2 md:p-4"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                />

                                {/* Hover overlay for tags or actions */}
                                <Link href={`/quote?product=${encodeURIComponent(product.title)}&category=${encodeURIComponent(product.category)}`} className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-1 md:gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                                        <ShoppingBag className="w-3 h-3 md:w-4 md:h-4 text-[#0E1F74]" />
                                        <span className="text-[10px] md:text-sm font-semibold text-[#0E1F74] uppercase tracking-wider hidden sm:inline-block">
                                            Inquire Now
                                        </span>
                                        <span className="text-[10px] md:text-sm font-semibold text-[#0E1F74] uppercase tracking-wider sm:hidden">
                                            Inquire
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            {/* Product Info */}
                            <div className="flex flex-col items-center text-center px-1 md:px-4">
                                <span className="text-[10px] md:text-sm text-gray-500 font-medium tracking-wider uppercase mb-1 md:mb-2 line-clamp-1">
                                    {product.category}
                                </span>
                                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-[#0E1F74] transition-colors line-clamp-2 md:line-clamp-none min-h-[40px] md:min-h-[56px] flex items-center justify-center">
                                    {product.title}
                                </h3>
                                <span className="text-xs md:text-sm font-semibold text-gray-800 border-b border-gray-300 pb-1 inline-block">
                                    {product.price}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More Button */}
                {formalProducts.length > 4 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-14 flex justify-center"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group flex items-center gap-2 px-8 py-3.5 bg-transparent border-2 border-[#0E1F74] text-[#0E1F74] font-bold rounded-full hover:bg-[#0E1F74] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <span>{showAll ? "View Less Products" : "View More Products"}</span>
                            <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${showAll ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
