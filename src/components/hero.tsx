"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, CreditCard } from "lucide-react";
import { PortfolioSlider } from "@/components/portfolio-slider";
import { TestimonialsWidget } from "@/components/testimonials-widget";

export function Hero() {
  const scrollToUpload = () => {
    const element = document.getElementById("upload-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 pb-12 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                Zero Risk Offer
              </span>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Try Before You Pay. <br />
                <span className="text-primary">First 3 Slides Are Free.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-lg"
            >
              We'll redesign the first 3 slides of your presentation at no cost. 
              If you love the result, you can order the full deck. 
              No risk. No commitment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-4"
            >
              <Button size="lg" onClick={scrollToUpload} className="text-lg h-12 px-8 w-full sm:w-auto">
                Get Your 3 Free Slides
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-6"
            >
              <TestimonialsWidget />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 md:gap-12 pt-4 text-sm font-medium text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>24h Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>100% Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                <span>No Credit Card Required</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Slider */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="w-full"
          >
            <PortfolioSlider 
              beforeImage="/Before4.png"
              afterImage="/After4.png"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
