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
        icon: "/assets/icons/india_icon.png" as any,
        title: "All Over India",
        description: "Guaranteed on-time dispatch and delivery pan India.",
        isImage: true
    }
];

export default function WhyChooseUs() {
    return (
        <section className="pt-24 pb-16 bg-white relative overflow-hidden border-b border-gray-100">
            <div className="container mx-auto px-4 relative z-10">


                <div className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 overflow-x-auto md:overflow-visible pb-4 md:pb-0 scrollbar-hide snap-x px-2">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative flex-shrink-0 min-w-[85%] sm:min-w-[60%] md:min-w-0 snap-center first:pl-2 last:pr-2"
                        >

                            <div className="relative z-10 flex flex-row items-center gap-4 text-left h-full">
                                <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                                    {feature.isImage ? (
                                        <div
                                            className="w-12 h-12 bg-[#FF5D08]"
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
                                        <feature.icon className="text-[#FF5D08] w-12 h-12" strokeWidth={1} />
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-base md:text-lg font-[600] text-gray-900 mb-1 leading-tight !font-quicksand whitespace-nowrap">
                                        {feature.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm font-[400] leading-relaxed tracking-wide font-quicksand block">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>

                            {/* Mobile Divider (Except last item) */}
                            {index !== features.length - 1 && (
                                <div className="absolute right-[-0.75rem] top-1/2 -translate-y-1/2 h-8 w-[1px] bg-gray-200 md:hidden block"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
