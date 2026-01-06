"use client";

import { motion } from "framer-motion";
import { SUBJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SubjectGrid() {
  return (
    <section id="subjects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Browse by Subject
          </h2>
          <p className="mt-3 text-muted-foreground">
            AP, IB, and test prep specialists
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {SUBJECTS.map((subject, index) => (
            <motion.button
              key={subject.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                "group flex flex-col items-center justify-center gap-3 p-6",
                "bg-card rounded-xl border border-border/50",
                "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
                "transition-colors duration-200 cursor-pointer"
              )}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                {subject.icon}
              </span>
              <span className="text-sm font-medium text-center leading-tight">
                {subject.name}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

