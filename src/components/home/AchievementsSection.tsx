"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function AchievementsSection() {
    return (
        <section className="relative py-20 bg-[#09090b] text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop"
                    alt="Background"
                    fill
                    className="object-cover opacity-5"
                    unoptimized
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/95 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-10 leading-tight"
                        >
                            Our Achievements – We Are <span className="text-white">Guinness World Records</span> Title Holder!
                        </motion.h2>

                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {[1, 2, 3].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative h-24 md:h-32 border-2 border-white/20 rounded-lg overflow-hidden hover:border-accent transition-colors"
                                >
                                    {/* Placeholders for the specific record images */}
                                    <Image
                                        src={`/assets/images/light-room${item === 1 ? '' : item === 2 ? '-2' : '-3'}.jpg`}
                                        alt="Achievement Thumbnail"
                                        fill
                                        className="object-cover"
                                        unoptimized
                                        quality={100}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-300 text-lg italic"
                        >
                            "The Entire Uniform Has Been Made By GS Garments"
                        </motion.p>
                    </div>

                    {/* Right Content - Video Player */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[300px] md:h-[400px] bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10 group cursor-pointer"
                    >
                        {/* Video Thumbnail */}
                        <video
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                            poster="/assets/images/video-img.jpg"
                            controls
                        >
                            <source src="/assets/images/globaluniforms-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Play Button Removed */}

                        {/* Top Right Logo Overlay */}
                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-sm">Howard</span>
                                <span className="text-red-500 font-bold text-lg">30</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
