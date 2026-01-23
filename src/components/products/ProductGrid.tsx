"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

// Mock Data System
const PRODUCTS_DB: Record<string, any[]> = {
    school: [
        { id: 1, name: "Boys School Blazer", price: "₹1,200", image: "https://www.globaluniforms.co.in/default/images/school.jpg" },
        { id: 2, name: "Girls Pinafore", price: "₹850", image: "https://www.globaluniforms.co.in/images/banners/school-uniform.jpg" },
        { id: 3, name: "White School Shirt", price: "₹450", image: "https://www.globaluniforms.co.in/default/images/school.jpg" },
        { id: 4, name: "School Trousers", price: "₹650", image: "https://www.globaluniforms.co.in/images/banners/school-uniform.jpg" },
        { id: 5, name: "PT Tracksuit", price: "₹1,500", image: "https://www.globaluniforms.co.in/default/images/school.jpg" },
        { id: 6, name: "School Tie & Belt", price: "₹250", image: "https://www.globaluniforms.co.in/images/banners/school-uniform.jpg" },
    ],
    corporate: [
        { id: 1, name: "Formal Blazer", price: "₹2,500", image: "https://www.globaluniforms.co.in/default/images/corporate-uniforms.jpg" },
        { id: 2, name: "Executive Shirt", price: "₹950", image: "https://www.globaluniforms.co.in/default/images/corporate-uniforms.jpg" },
        { id: 3, name: "Office Trousers", price: "₹1,100", image: "https://www.globaluniforms.co.in/default/images/corporate-uniforms.jpg" },
        { id: 4, name: "Corporate Skirt", price: "₹950", image: "https://www.globaluniforms.co.in/default/images/corporate-uniforms.jpg" },
    ],
    hospital: [
        { id: 1, name: "Doctor's Lab Coat", price: "₹750", image: "https://www.globaluniforms.co.in/default/images/hospital.jpg" },
        { id: 2, name: "Nurse Scrub Suit", price: "₹1,200", image: "https://www.globaluniforms.co.in/images/banners/hospital-uniform.jpg" },
        { id: 3, name: "Surgeon Gown", price: "₹900", image: "https://www.globaluniforms.co.in/default/images/hospital.jpg" },
        { id: 4, name: "Patient Gown", price: "₹450", image: "https://www.globaluniforms.co.in/images/banners/hospital-uniform.jpg" },
    ],
    industrial: [
        { id: 1, name: "Safety Coverall", price: "₹1,800", image: "https://www.globaluniforms.co.in/default/images/housekeeping-uniform.jpg" },
        { id: 2, name: "Reflective Vest", price: "₹350", image: "https://www.globaluniforms.co.in/images/banners/sports-uniform.jpg" },
        { id: 3, name: "Worker Shirt", price: "₹600", image: "https://www.globaluniforms.co.in/default/images/housekeeping-uniform.jpg" },
        { id: 4, name: "Industrial Cargo Pants", price: "₹950", image: "https://www.globaluniforms.co.in/images/banners/sports-uniform.jpg" },
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
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>

                                    <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <Link href="/quote" className="block w-full bg-accent hover:bg-accent-hover text-white text-center py-2 rounded-lg font-bold shadow-lg">
                                            Enquire Now
                                        </Link>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
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
