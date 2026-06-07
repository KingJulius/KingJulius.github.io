"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      whileInView={{
        backgroundSize: "100% 100%",
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1.6,
        ease: "linear",
        delay: 0.4,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        WebkitBoxDecorationBreak: "clone",
        boxDecorationBreak: "clone",
      }}
      className={cn(
        "relative inline px-1 py-0.5 rounded-md bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500",
        className
      )}
    >
      {children}
    </motion.span>
  );
};
