"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";
import { site } from "@/lib/site";
import { toast } from "sonner";
import { submitNewsletter } from "@/lib/actions";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const res = await submitNewsletter(email);
      if (res.success) {
        toast.success("You're on the list.");
        setEmail("");
      } else {
        toast.error(res.error || "Something went wrong.");
      }
    } catch (err) {
      toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-background pt-24 pb-8 border-t border-neutral-muted/20 overflow-hidden relative">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        
        {/* Left Col */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <h3 className="text-xl font-display font-black tracking-tight">stay in the know.</h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-transparent border border-foreground/20 px-4 py-3 outline-none focus:border-primary transition-colors squared-radius"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-primary hover:bg-amber text-white px-6 py-3 font-medium uppercase tracking-wide flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
            >
              notify me <ArrowRight size={18} />
            </button>
          </form>
        </div>

        {/* Mid Col */}
        <div className="md:col-span-4 md:col-start-7 flex flex-col gap-4">
          <h4 className="text-[11px] font-bold text-neutral-muted uppercase tracking-[0.2em] mb-2">Connect</h4>
          {site.contactEmails.map(email => (
            <a key={email} href={`mailto:${email}`} className="text-lg hover:text-primary transition-colors">
              {email}
            </a>
          ))}
          <div className="mt-4 flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Right Col */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h4 className="text-[11px] font-bold text-neutral-muted uppercase tracking-[0.2em] mb-2">Navigation</h4>
          {site.links.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Giant Wordmark */}
      <div className="w-full flex justify-center overflow-hidden pointer-events-none mt-12 mb-8">
        <h2 className="text-[15vw] leading-none font-display font-black tracking-[-0.04em] text-foreground translate-y-1/4">
          zomòda.
        </h2>
      </div>

      {/* Bottom Bar */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-muted pt-8 border-t border-neutral-muted/20">
        <p>&copy; {new Date().getFullYear()} Zomòda. All rights reserved.</p>
        <p>{site.poweredBy}</p>
      </div>
    </footer>
  );
}
