"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, Send, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  projectType: string;
  details: string;
  access_key: string;
};

export function OrderForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [submitted, setSubmitted] = React.useState(false);
  const [submissionResult, setSubmissionResult] = React.useState("");

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("projectType", data.projectType);
    formData.append("details", data.details);
    formData.append("access_key", "1b315233-2fdc-402c-b0cf-a3ad32d96106");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setSubmissionResult("Success!");
        // Change URL to /success for conversion tracking
        window.history.pushState({}, "", "/success");
      } else {
        setSubmissionResult("Error submitting form. Please try again.");
      }
    } catch (error) {
      setSubmissionResult("Error submitting form. Please try again.");
    }
  };

  if (submitted) {
    return (
      <section id="upload-section" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-md">
           <Card className="text-center p-8 border-primary/20 bg-background">
             <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Send className="h-8 w-8 text-primary" />
             </div>
             <CardTitle className="text-2xl mb-2">Request Received!</CardTitle>
             <CardDescription className="text-lg">
               We'll review your materials and send your 3 free slides within 24 hours.
             </CardDescription>
             <Button 
                variant="outline" 
                className="mt-8"
                onClick={() => {
                  setSubmitted(false);
                  window.history.pushState({}, "", "/");
                }}
             >
                Submit Another
             </Button>
           </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="upload-section" className="py-16 bg-muted/30 scroll-mt-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your 3 Free Slides</h2>
          <p className="text-muted-foreground text-lg">
            Send us a link to your deck or describe what you need. No payment required.
          </p>
        </div>

        <Card className="border-primary/20 shadow-xl bg-background">
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>
              Fill out the form below to get started.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <input type="hidden" value="1b315233-2fdc-402c-b0cf-a3ad32d96106" {...register("access_key")} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    {...register("email", { 
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    })}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type</Label>
                <select
                  id="projectType"
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...register("projectType")}
                >
                  <option value="business">Business Presentation</option>
                  <option value="student">Student Assignment</option>
                  <option value="pitch">Startup Pitch Deck</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="details">Instructions / Brief / Link to Slides</Label>
                <Textarea
                  id="details"
                  placeholder="Tell us about your goals, target audience, and any specific requirements. Please include a link to your slides (Google Slides, Dropbox, Drive) if you have them."
                  className="min-h-[120px]"
                  {...register("details")}
                />
              </div>

              <Button type="submit" className="w-full text-lg h-12" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Get My Free Slides"}
              </Button>

              {submissionResult && !submitted && (
                 <p className="text-center text-sm text-destructive">{submissionResult}</p>
              )}

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or
                  </span>
                </div>
              </div>

              <Button 
                type="button" 
                variant="outline" 
                className="w-full text-lg h-12 gap-2"
                onClick={() => window.open("https://calendly.com/eliass-lalaoui/30min", "_blank")}
              >
                <Calendar className="w-4 h-4" />
                Schedule a Call
              </Button>
              
              <p className="text-center text-xs text-muted-foreground mt-4">
                By submitting, you agree to our terms. Your data is secure.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
