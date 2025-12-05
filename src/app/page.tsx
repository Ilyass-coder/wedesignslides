import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
import { OrderForm } from "@/components/order-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Work />
      <Pricing />
      <FAQ />
      <OrderForm />
      <Footer />
    </main>
  );
}
