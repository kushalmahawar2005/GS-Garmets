"use client";

import { Package, ThumbsUp, Settings, Briefcase, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
    {
        icon: Package,
        title: "Personalized Designs",
        description: "Custom designs tailored to your specific needs.",
        isImage: false
    },
    {
        icon: ThumbsUp,
        title: "Durable",
        description: "High-quality fabrics built to last for years.",
        isImage: false
    },
    {
        icon: Settings,
        title: "Competitive Pricing",
        description: "Best market rates with uncompromised quality.",
        isImage: false
    },
    {
        icon: Truck,
        title: "All Over India",
        description: "Guaranteed on-time dispatch and delivery pan India.",
        isImage: false
    }
];

export default function WhyChooseUs() {
    return (
        <section className="pt-12 pb-16 bg-gray-50 relative overflow-hidden border-b border-gray-100">
            <div className="container mx-auto px-4 relative z-10">


                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative"
                        >

                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-3 md:gap-5 text-center md:text-left">
                                <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                                    {feature.isImage ? (
                                        <div
                                            className="w-10 h-10 md:w-12 md:h-12 bg-[#FF5B05]"
                                            style={{
                                                maskImage: `url('${feature.icon}')`,
                                                maskSize: 'contain',
                                                maskRepeat: 'no-repeat',
                                                maskPosition: 'center',
                                                WebkitMaskImage: `url('${feature.icon}')`,
                                                WebkitMaskSize: 'contain',
                                                WebkitMaskRepeat: 'no-repeat',
                                                WebkitMaskPosition: 'center'
                                            }}
                                        />
                                    ) : (
                                        <feature.icon className="text-[#FF5B05] w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-sm md:text-lg font-[500] text-gray-900 mb-1 leading-tight !font-quicksand">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-500 text-xs md:text-sm font-[400] leading-relaxed tracking-wide font-quicksand hidden md:block">
                                        {feature.description}
                                    </p>
                                    <p className="text-gray-500 text-xs font-[400] leading-tight tracking-wide font-quicksand md:hidden">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
