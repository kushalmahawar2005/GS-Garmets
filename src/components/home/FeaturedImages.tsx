"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FeaturedImages() {
    return (
        <section className="w-full bg-white pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {/* Image 1 */}
                    <div className="relative overflow-hidden group h-[400px] md:h-[500px] w-full cursor-pointer">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full h-full relative"
                        >
                            <Image
                                src="/assets/images/featured_1.png"
                                alt="Featured Collection 1"
                                fill
                                className="object-cover object-center"
                            />
                        </motion.div>
                        {/* Overlay with subtle text if needed, keeping it clean for now as per image */}
                    </div>

                    {/* Image 2 */}
                    <div className="relative overflow-hidden group h-[400px] md:h-[500px] w-full cursor-pointer">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-full h-full relative"
                        >
                            <Image
                                src="/assets/images/featured_2.png"
                                alt="Featured Collection 2"
                                fill
                                className="object-cover object-center"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
