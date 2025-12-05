"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Absolutely blew me away. The turnaround was fast and the quality is top-notch.",
    author: "Sarah J.",
  },
  {
    text: "Our pitch deck looks professional and clean. Investors loved it.",
    author: "Michael R.",
  },
  {
    text: "Best design service I've used. They really understand presentation storytelling.",
    author: "David K.",
  },
];

const avatars = [
  { initials: "SJ", color: "bg-blue-500" },
  { initials: "MR", color: "bg-green-500" },
  { initials: "DK", color: "bg-purple-500" },
  { initials: "AL", color: "bg-yellow-500" },
];

export function TestimonialsWidget() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-3 max-w-md">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-3">
          {avatars.map((avatar, i) => (
            <div
              key={i}
              className={`w-10 h-10 rounded-full border-2 border-background flex items-center justify-center text-white text-xs font-bold ${avatar.color}`}
            >
              {avatar.initials}
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm font-semibold text-muted-foreground">
            Trusted by 500+ founders
          </span>
        </div>
      </div>

      <div className="h-16 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 right-0"
          >
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              "{testimonials[index].text}"
            </p>
            <p className="text-xs font-bold mt-1 text-primary">
              — {testimonials[index].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

