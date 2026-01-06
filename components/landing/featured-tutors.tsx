"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FEATURED_TUTORS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FeaturedTutors() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Top Tutors
            </h2>
            <p className="mt-3 text-muted-foreground">
              Vetted experts ready to help
            </p>
          </div>
          <Button variant="ghost" className="hidden sm:flex group">
            View all
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible">
          {FEATURED_TUTORS.map((tutor, index) => (
            <motion.div
              key={tutor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex-shrink-0 w-[280px] sm:w-auto"
            >
              <Card
                className={cn(
                  "overflow-hidden cursor-pointer group",
                  "hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1",
                  "transition-all duration-300"
                )}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary/20">
                      {tutor.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{tutor.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {tutor.subjects.join(" • ")}
                  </p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-accent text-accent" />
                      <span className="text-sm font-medium">{tutor.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {tutor.sessions} sessions
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Button variant="outline" className="group">
            View all tutors
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}

