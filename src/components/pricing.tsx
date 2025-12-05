"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PRICING_PLANS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function Pricing() {
  const scrollToUpload = () => {
    const element = document.getElementById("upload-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-16 bg-background relative">
       <div 
          onClick={scrollToUpload}
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold shadow-lg z-10 whitespace-nowrap border-4 border-background cursor-pointer hover:bg-primary/90 transition-colors"
       >
            🎉 First 3 Slides Are Always Free
       </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 pt-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-muted-foreground text-lg">
            Transparent rates. No hidden fees. Pay only after you approve the first 3 slides.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <Card 
                key={index} 
                className={cn(
                    "flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                    plan.highlight ? "border-primary shadow-md scale-105 z-10" : "border-border"
                )}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.title}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-4xl font-bold mb-6">
                  {plan.price} <span className="text-base font-normal text-muted-foreground">/ presentation</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                    className={cn("w-full", plan.highlight ? "default" : "variant='outline'")} 
                    variant={plan.highlight ? "default" : "outline"}
                    onClick={scrollToUpload}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


