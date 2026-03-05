"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

// Mock Data System
const PRODUCTS_DB: Record<string, any[]> = {
    school: [
        { id: 1, name: "Boys School Blazer", price: "₹1,200", image: "/assets/images/p4.png" },
        { id: 2, name: "Girls Pinafore", price: "₹850", image: "/assets/images/p5.png" },
        { id: 3, name: "White School Shirt", price: "₹450", image: "/assets/images/p6.png" },
        { id: 4, name: "School Trousers", price: "₹650", image: "/assets/images/p7.png" },
        { id: 5, name: "PT Tracksuit", price: "₹1,500", image: "/assets/images/p8.png" },
    ],
    corporate: [
        { id: 1, name: "Formal Blazer", price: "₹2,500", image: "/assets/images/p9.png" },
        { id: 2, name: "Executive Shirt", price: "₹950", image: "/assets/images/p11.png" },
        { id: 3, name: "Office Trousers", price: "₹1,100", image: "/assets/images/p13.png" },
        { id: 4, name: "Corporate Skirt", price: "₹950", image: "/assets/images/p14.png" },
    ],
    hospital: [
        { id: 1, name: "Doctor's Lab Coat", price: "₹750", image: "/assets/images/p15.png" },
        { id: 2, name: "Nurse Scrub Suit", price: "₹1,200", image: "/assets/images/p19.png" },
        { id: 3, name: "Surgeon Gown", price: "₹900", image: "/assets/images/p20.png" },
        { id: 4, name: "Patient Gown", price: "₹450", image: "/assets/images/p21.png" },
    ],
    industrial: [
        { id: 1, name: "Safety Coverall", price: "₹1,800", image: "/assets/images/p22.png" },
        { id: 2, name: "Reflective Vest", price: "₹350", image: "/assets/images/p23.png" },
        { id: 3, name: "Worker Shirt", price: "₹600", image: "/assets/images/p24.png" },
        { id: 4, name: "Industrial Cargo Pants", price: "₹950", image: "/assets/images/p16.png" },
    ]
};

interface ProductGridProps {
    category: string;
}

export default function ProductGrid({ category }: ProductGridProps) {
    const products = PRODUCTS_DB[category] || [];

    if (products.length === 0) {
        return (
            <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-gray-500">No products found in this category.</h3>
            </div>
        );
    }

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ScrollReveal key={product.id} delay={index * 0.1}>
                            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                                <div className="relative h-80 overflow-hidden bg-white">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>

                                    <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <Link href={`/quote?product=${encodeURIComponent(product.name)}&category=${encodeURIComponent(category)}`} className="block w-full bg-accent hover:bg-accent-hover text-white text-center py-2 rounded-lg font-bold shadow-lg">
                                            Enquire Now
                                        </Link>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors">
                                            {product.name}
                                        </h3>
                                        {/* <span className="text-lg font-semibold text-gray-600">{product.price}</span> */}
                                    </div>
                                    <p className="text-sm text-gray-500 mb-4">Premium Quality Fabric</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
