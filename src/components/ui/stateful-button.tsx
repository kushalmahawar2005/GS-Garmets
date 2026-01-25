"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void;
}

export const Button = ({
    children,
    className,
    onClick,
    disabled,
    ...props
}: ButtonProps) => {
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled || status === "loading" || status === "success") return;

        if (onClick) {
            try {
                setStatus("loading");
                await onClick(e);
                setStatus("success");
                setTimeout(() => {
                    setStatus("idle");
                }, 3000);
            } catch (error) {
                console.error("Button action failed", error);
                setStatus("idle");
            }
        }
    };

    return (
        <button
            disabled={disabled || status === "loading" || status === "success"}
            onClick={handleClick}
            className={cn(
                "relative flex items-center justify-center px-8 py-3 rounded-xl font-bold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden",
                // Default styling mimicking the project's golden button if no class provided, 
                // but allowing override.
                "bg-gradient-to-r from-[#ca8a04] to-[#eab308] text-white hover:shadow-lg hover:shadow-accent/20",
                className
            )}
            {...props}
        >
            <AnimatePresence mode="popLayout" initial={false}>
                {status === "loading" ? (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Processing...</span>
                    </motion.div>
                ) : status === "success" ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        <Check className="h-4 w-4" />
                        <span>Sent Successfully</span>
                    </motion.div>
                ) : (
                    <motion.div
                        key="idle"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
};
