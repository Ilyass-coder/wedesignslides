"use client";

import { PortfolioSlider } from "@/components/portfolio-slider";
import { motion } from "framer-motion";

const projects = [
  {
    id: 2,
    title: "Dentist Services Showcase",
    description: "Building trust with a clean, reassuring slideshow featuring patient testimonials.",
    before: "/Before2.png",
    after: "/After2.png",
  },
  {
    id: 3,
    title: "Construction SWOT Analysis",
    description: "Strategic visual analysis for a major construction firm to identify strengths and opportunities.",
    before: "/Before3.png",
    after: "/After3.png",
  },
  {
    id: 4,
    title: "Nature Energy Business",
    description: "First page redesign for a sustainable energy company, focusing on impact and clarity.",
    before: "/before.png",
    after: "/after.png",
  },
];

export function Work() {
  return (
    <section id="work" className="py-16 bg-zinc-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Recent Work
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we transform average slides into powerful communication tools.
            Drag the slider to compare the before and after.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-lg text-muted-foreground">
                  {project.description}
                </p>
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <PortfolioSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                  className="shadow-xl rounded-xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
