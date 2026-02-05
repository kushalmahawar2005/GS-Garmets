"use client";

import { PackageOpen, ThumbsUp, Settings, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
    {
        icon: PackageOpen,
        title: "Personalized Designs",
        description: "We blend our creativity and your ideas to create personalized designs associated with your institutional values.",
        bgColor: "bg-[#0957D0]", // Bright Blue
        bgImage: "/assets/images/featured_1.png"
    },
    {
        icon: ThumbsUp,
        title: "Durable",
        description: "Our offered uniforms are not just comfortable but highly durable to withstand daily wear and tear.",
        bgColor: "bg-[#AF1BC5]", // Purple/Magenta
        bgImage: "/assets/images/coperate.jpg"
    },
    {
        icon: Settings,
        title: "Competitive Pricing",
        description: "Moreover, we assure you that we offer the most competitive pricing in the market without compromising quality.",
        bgColor: "bg-[#FBC02D]", // Golden Yellow
        bgImage: "/assets/images/intro-pic.jpg"
    },
    {
        icon: Briefcase,
        title: "Prompt Delivery",
        description: "Moreover, we assure you that there will be no possible delays, ensuring your orders reach you on time, every time.",
        bgColor: "bg-[#E91E63]", // Pinkish Red
        bgImage: "/assets/images/school.jpg"
    }
];

export default function CoreFeatures() {
    return (
        <section className="w-full font-quicksand bg-white py-20 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative group h-[300px] overflow-hidden flex flex-col items-center justify-end text-center px-6 pb-12 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={feature.bgImage}
                                    alt={feature.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Color Overlay */}
                            <div className={`absolute inset-0 z-10 opacity-90 group-hover:opacity-95 ${feature.bgColor} transition-opacity duration-300 mix-blend-multiply`} />
                            {/* Fallback Overlay for consistent color */}
                            <div className={`absolute inset-0 z-10 opacity-80 ${feature.bgColor}`} />

                            {/* Content Wrapper */}
                            <div className="relative z-20 flex flex-col items-center text-white transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                                {/* Icon Container */}
                                <div className="mb-6 p-5 ded-full transition-all duration-300 transform group-hover:-translate-y-2">
                                    <feature.icon size={42} strokeWidth={1.5} />
                                </div>
                                roun
                                <h3 className="text-2xl font-bold mb-3 tracking-wide drop-shadow-md">{feature.title}</h3>

                                <div className="w-16 h-1 bg-white mb-4 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Description - Slides up on hover */}
                                <div className="opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-32 overflow-hidden transition-all duration-500 delay-100 ease-in-out">
                                    <p className="text-white/95 leading-relaxed font-medium text-sm lg:text-base max-w-xs drop-shadow-sm pb-2">
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
