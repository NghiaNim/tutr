"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DoorAnimationProps = {
  children: React.ReactNode;
};

export function DoorAnimation({ children }: DoorAnimationProps) {
  const [showDoors, setShowDoors] = useState(true);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const played = sessionStorage.getItem("tutr-door-played");
    if (played) {
      setShowDoors(false);
      setHasPlayed(true);
    } else {
      const timer = setTimeout(() => {
        setShowDoors(false);
        sessionStorage.setItem("tutr-door-played", "true");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  const doorVariants = {
    initial: { x: 0 },
    animate: (direction: "left" | "right") => ({
      x: direction === "left" ? "-100%" : "100%",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  if (hasPlayed) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence>
        {showDoors && (
          <>
            <motion.div
              className="fixed inset-y-0 left-0 w-1/2 z-[100] bg-primary"
              variants={doorVariants}
              initial="initial"
              animate="animate"
              exit="animate"
              custom="left"
            >
              <div className="absolute inset-0 flex items-center justify-end pr-8">
                <span 
                  className="text-4xl md:text-6xl font-bold text-primary-foreground tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  tu
                </span>
              </div>
            </motion.div>
            <motion.div
              className="fixed inset-y-0 right-0 w-1/2 z-[100] bg-primary"
              variants={doorVariants}
              initial="initial"
              animate="animate"
              exit="animate"
              custom="right"
            >
              <div className="absolute inset-0 flex items-center justify-start pl-8">
                <span 
                  className="text-4xl md:text-6xl font-bold text-primary-foreground tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  tr
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showDoors ? 0 : 1 }}
        transition={{ duration: 0.3, delay: showDoors ? 0 : 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}

