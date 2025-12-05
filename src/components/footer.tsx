"use client";

import Link from "next/link";
import { AGENCY_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight inline-block mb-4">
              {AGENCY_NAME}
              <span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Premium presentation design for startups, students, and professionals. 
              Turn your ideas into persuasive visual stories.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/#work" className="hover:text-foreground">Work</Link></li>
              <li><Link href="/#services" className="hover:text-foreground">Services</Link></li>
              <li><Link href="/#pricing" className="hover:text-foreground">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-foreground">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {AGENCY_NAME}. All rights reserved.</p>
          <p>Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
}
