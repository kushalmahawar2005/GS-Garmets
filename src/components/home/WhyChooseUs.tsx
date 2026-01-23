"use client";

import { Package, ThumbsUp, Settings, Briefcase, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Package,
        title: "Personalized Designs",
        description: "We blend our creativity and your requirements to bring fresh and comfortable uniforms.",
        colorString: "bg-[#0066FF]", // Blue
    },
    {
        icon: ThumbsUp,
        title: "Durable",
        description: "Our offered uniforms are not just comfortable but highly durable to last for years.",
        colorString: "bg-[#A810D6]", // Purple
    },
    {
        icon: Settings,
        title: "Competitive Pricing",
        description: "Moreover, we assure you that there will be no possible delays from our end.", // Text from screenshot
        colorString: "bg-[#F5BA18]", // Yellow
    },
    {
        icon: Briefcase,
        title: "Prompt Delivery",
        description: "Moreover, we assure you that there will be no possible delays from our end.",
        colorString: "bg-[#E91E47]", // Red
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className={`${feature.colorString} text-white p-8 h-full min-h-[320px] flex flex-col items-center text-center justify-center relative overflow-hidden shadow-lg group`}
                        >
                            {/* Background Overlay Effect */}
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>

                            {/* Decorative Circle behind Icon */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full blur-2xl transform scale-0 group-hover:scale-150 transition-transform duration-700"></div>

                            {/* Icon */}
                            <div className="relative z-10 mb-6">
                                <feature.icon size={48} strokeWidth={1.5} className="text-white drop-shadow-md" />
                            </div>

                            {/* Text */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-white/90 text-sm leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
