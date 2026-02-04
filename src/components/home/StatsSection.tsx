"use client";

import { motion } from "framer-motion";

export default function StatsSection() {
    const stats = [
        { label: "Years of Experience", value: "25+" },
        { label: "Happy Clients", value: "5000+" },
        { label: "Schools Served", value: "150+" },
        { label: "Corporate Partners", value: "300+" },
        // Duplicate for loop
        { label: "Years of Experience", value: "25+" },
        { label: "Happy Clients", value: "5000+" },
        { label: "Schools Served", value: "150+" },
        { label: "Corporate Partners", value: "300+" }
    ];

    return (
        <section className="py-16 bg-[#243037] mt-10 text-primary border-t border-primary/10 overflow-hidden mt-2">
            <div className="w-full">
                <motion.div
                    className="flex space-x-20 md:space-x-32 w-max"
                    animate={{ x: [0, -1000] }} // Approximate scroll value, better to calculate or use percentage
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Render stats multiple times for seamless infinite scroll */}
                    {[...stats, ...stats, ...stats].map((stat, index) => (
                        <div key={index} className="flex flex-col items-center flex-shrink-0 min-w-[200px]">
                            <span className="text-4xl md:text-6xl font-extrabold mb-2">{stat.value}</span>
                            <span className="text-lg md:text-xl font-medium opacity-80 uppercase tracking-wide">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
