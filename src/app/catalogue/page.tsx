"use client";

import PageHeader from "@/components/layout/PageHeader";
import { Download, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function CataloguePage() {
    return (
        <>
            <PageHeader
                title="E-Catalogue"
                subtitle="Download our comprehensive product brochure."
                breadcrumb={[{ label: "Catalogue", href: "/catalogue" }]}
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-2xl mx-auto bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-lg">
                        <div className="bg-primary/5 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FileText className="text-primary w-12 h-12" />
                        </div>

                        <h2 className="text-3xl font-bold text-primary mb-4">Product Catalogue 2026</h2>
                        <p className="text-gray-600 mb-8">
                            Explore our latest collection of premium uniforms for schools, corporates, hospitals, and industries.
                            Our digital brochure contains detailed specifications, fabric options, and styling guides.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-accent/20 transition-all"
                        >
                            <Download size={24} />
                            <span>Download PDF Brochure</span>
                        </motion.button>

                        <p className="mt-6 text-xs text-gray-400">File size: 5.2 MB • Format: PDF</p>
                    </div>
                </div>
            </section>
        </>
    );
}
