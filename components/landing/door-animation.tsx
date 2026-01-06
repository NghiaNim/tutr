"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DoorAnimationProps = {
  children: React.ReactNode;
};

export function DoorAnimation({ children }: DoorAnimationProps) {
  const [showDoors, setShowDoors] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const played = sessionStorage.getItem("tutr-door-played");
    if (played || mediaQuery.matches) {
      setShowDoors(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowDoors(false);
      sessionStorage.setItem("tutr-door-played", "true");
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <div className="opacity-0">{children}</div>;
  }

  if (prefersReducedMotion || !showDoors) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence>
        {showDoors && (
          <>
            <motion.div
              className="fixed inset-y-0 left-0 w-1/2 z-[100] bg-[#1A1A1A] flex items-center justify-end pr-4"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                tu
              </span>
            </motion.div>
            <motion.div
              className="fixed inset-y-0 right-0 w-1/2 z-[100] bg-[#1A1A1A] flex items-center justify-start pl-4"
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
                tr
              </span>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}

