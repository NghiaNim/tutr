"use client";

import { motion } from "framer-motion";
import { Search, Calendar, Trophy } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = {
  Search,
  Calendar,
  Trophy,
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            How It Works
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {index < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
                )}

                <div
                  className={cn(
                    "relative z-10 w-24 h-24 rounded-2xl flex items-center justify-center mb-6",
                    "bg-primary text-primary-foreground shadow-lg"
                  )}
                >
                  <Icon className="w-10 h-10" />
                </div>

                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Step {step.step}
                </span>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

