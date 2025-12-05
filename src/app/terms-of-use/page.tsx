import { AGENCY_NAME } from "@/lib/constants";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        <div className="prose dark:prose-invert">
          <p className="mb-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <p className="mb-4">
            Welcome to {AGENCY_NAME}. By accessing or using our website and services, you agree to be bound by these Terms of Use.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Services</h2>
          <p className="mb-4">
            {AGENCY_NAME} provides presentation design services. We offer a "First 3 Slides Free" trial, after which you may choose to purchase our full design services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Intellectual Property</h2>
          <p className="mb-4">
            Upon full payment, you grant {AGENCY_NAME} the right to use the designed slides for portfolio purposes unless explicitly agreed otherwise. You retain ownership of your original content.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Limitation of Liability</h2>
          <p className="mb-4">
            {AGENCY_NAME} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us via our submission form.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

