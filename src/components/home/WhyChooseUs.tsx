"use client";

import { Package, ThumbsUp, Settings, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Package,
        title: "Personalized Designs",
        description: "We blend our creativity and your requirements to bring fresh and comfortable uniforms.",
    },
    {
        icon: ThumbsUp,
        title: "Durable",
        description: "Our offered uniforms are not just comfortable but highly durable to last for years.",
    },
    {
        icon: Settings,
        title: "Competitive Pricing",
        description: "Moreover, we assure you that there will be no possible delays from our end.",
    },
    {
        icon: Briefcase,
        title: "Prompt Delivery",
        description: "Moreover, we assure you that there will be no possible delays from our end.",
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-[#0B1121] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Why Choose <span className="text-amber-500">Us</span>
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-amber-500/50 transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:to-amber-500/10 transition-all duration-500" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-6 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon size={36} className="text-white" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
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
