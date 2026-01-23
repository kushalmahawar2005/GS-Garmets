"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
    animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right";
}

export const ScrollReveal = ({
    children,
    width = "100%",
    delay = 0,
    className = "",
    animation = "fade-up"
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants: Record<string, { hidden: Variant; visible: Variant }> = {
        "fade-up": {
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
        },
        "fade-in": {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        "slide-left": {
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 }
        },
        "slide-right": {
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 }
        }
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={variants[animation]}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};
