import { AGENCY_NAME } from "@/lib/constants";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose dark:prose-invert">
          <p className="mb-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <p className="mb-4">
            At {AGENCY_NAME}, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us, such as when you fill out our contact form, request a quote, or communicate with us. This may include your name, email address, and any project details or files you upload.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide, maintain, and improve our services.</li>
            <li>Communicate with you about your projects and requests.</li>
            <li>Send you updates and administrative messages.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Security</h2>
          <p className="mb-4">
            We implement reasonable security measures to protect your personal information and the files you share with us. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us via our submission form.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

