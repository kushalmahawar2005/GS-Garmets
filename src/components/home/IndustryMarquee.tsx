"use client";

import { motion } from 'framer-motion';

const MarqueeContent = ({ isOutline = false }: { isOutline?: boolean }) => {
    // Repeating text content
    const items = ["INDUSTRY", "CORPORATE", "SCHOOL", "HOSPITAL", "HOTEL", "AVIATION", "CONSTRUCTION"];

    return (
        <div className="flex whitespace-nowrap overflow-hidden">
            <motion.div
                className="flex"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
                {items.map((item, index) => (
                    <span
                        key={index}
                        className={`text-8xl md:text-9xl font-black mx-8 uppercase tracking-tighter ${isOutline
                            ? "text-transparent [-webkit-text-stroke:2px_white]"
                            : "text-white"
                            }`}
                    >
                        {item}
                    </span>
                ))}
            </motion.div>
            <motion.div
                className="flex"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            >
                {items.map((item, index) => (
                    <span
                        key={index}
                        className={`text-8xl md:text-9xl font-black mx-8 uppercase tracking-tighter ${isOutline
                            ? "text-transparent [-webkit-text-stroke:2px_white]"
                            : "text-white"
                            }`}
                    >
                        {item}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default function IndustryMarquee() {
    return (
        <section className="relative w-full h-[400px] bg-[#050A30] overflow-hidden flex items-center justify-center font-quicksand border-t border-white/5">

            {/* Layer 1: Filled Text (Bottom) */}
            <div className="absolute inset-0 flex items-center w-full">
                <MarqueeContent isOutline={false} />
            </div>

            {/* Layer 2: The Decor Circle (Middle) - Acts as the 'mask' background for ease */}
            {/* We position it similarly to the image, slightly off-center or centered */}
            <div className="absolute left-[30%] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-118 md:h-118 bg-[#FEA724] rounded-full z-10 shadow-2xl" />

            {/* Layer 3: Outlined Text (Top) */}
            <div className="absolute inset-0 flex items-center w-full z-20 pointer-events-none">
                <MarqueeContent isOutline={true} />
            </div>

        </section>
    );
}
