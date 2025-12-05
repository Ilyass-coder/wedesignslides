"use client";

import { motion } from "framer-motion";
import { Upload, Sparkles, CheckCheck, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Upload,
    title: "Submit Your Request",
    description: "Share a link to your existing presentation or a brief description of what you need.",
  },
  {
    icon: Sparkles,
    title: "Get Free Preview",
    description: "We redesign 3 key slides within 24 hours to show you the quality and style.",
  },
  {
    icon: CheckCheck,
    title: "Approve & Finish",
    description: "Love it? Pay to complete the full deck. If not, you owe nothing. Simple as that.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg">
            A simple, risk-free process to get professional slides.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-card border hover:border-primary/50 transition-colors"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-xl font-bold shadow-lg shadow-primary/20">
                {index + 1}
              </div>
              <div className="mt-6">
                <step.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Prefer to discuss your project first?</p>
          <Button variant="outline" className="gap-2" onClick={() => window.open("https://calendly.com/eliass-lalaoui/30min", "_blank")}>
            <Calendar className="w-4 h-4" />
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
}
