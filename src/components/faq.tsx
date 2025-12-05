"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Is the 'First 3 Slides Free' offer really free?",
    answer: "Yes, absolutely. We will redesign up to 3 slides from your deck to show you what we can do. If you like them, we can move forward with the full project. If not, you don't pay a dime.",
  },
  {
    question: "How long does the redesign take?",
    answer: "For the 3 free slides, we usually deliver within 24 hours. For full presentations, it depends on the length, but typically 2-4 business days.",
  },
  {
    question: "What format do I need to send?",
    answer: "PowerPoint (.pptx), PDF, or Google Slides links are all fine. If you just have a text outline, that works too!",
  },
  {
    question: "Do you do research or just design?",
    answer: "We can do both. The 'Pitch Deck' package includes market research. For other packages, we focus on visual design and narrative flow based on your provided content.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about the process.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
