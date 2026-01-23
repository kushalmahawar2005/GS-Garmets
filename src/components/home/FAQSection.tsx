"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const faqs = [
    {
        question: "Why Are You The Best School Uniform Manufacturer?",
        answer: "We use premium, durable fabrics designed for comfort and longevity. Our rigorous quality control ensures every uniform meets international standards."
    },
    {
        question: "What Are The Various Other Uniforms You Offer?",
        answer: "Beyond school uniforms, we specialize in corporate, hospital, industrial, security, and sports uniforms, as well as lab coats and housekeeping attire."
    },
    {
        question: "How Good Is The Quality Of Your School Uniform?",
        answer: "Exceptional. We use high-grade cotton blends that are color-fast, shrink-resistant, and breathable, perfect for daily wear."
    },
    {
        question: "Do You Offer A Brochure?",
        answer: "Yes, you can request a digital or physical brochure by contacting our sales team or downloading it from our 'Resources' section."
    },
    {
        question: "How Do You Offer School Uniform; In Bulk Or Retail?",
        answer: "We primarily cater to bulk institutional orders but also support retail partners and school shops. Contact us for specific minimum order quantities."
    },
    {
        question: "What Type Of Customer Service Should I Expect From You?",
        answer: "We provide end-to-end support, from design consultation and fabric selection to timely delivery and after-sales service."
    },
    {
        question: "Do You Customize The School Uniform?",
        answer: "Absolutely. We offer full customization including logos, specific color codes, patterns, and sizes tailored to your institution's branding."
    },
    {
        question: "How Competitive Are Your Prices For School Uniform?",
        answer: "We offer factory-direct pricing, ensuring premium quality at affordable rates without middleman markups."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <h2 className="text-4xl font-bold text-center mb-16 text-primary">FAQ'S</h2>
                </ScrollReveal>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} width="100%">
                            <div className="rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 bg-primary text-white text-left transition-colors hover:bg-primary-hover"
                                >
                                    <span className="font-semibold text-lg md:text-xl pr-4">{faq.question}</span>
                                    <div className="flex-shrink-0 bg-white/10 rounded-full p-1">
                                        {openIndex === index ? (
                                            <Minus className="text-accent w-6 h-6" />
                                        ) : (
                                            <Plus className="text-accent w-6 h-6" />
                                        )}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="bg-white p-6 text-gray-700 border-x border-b border-gray-200">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
