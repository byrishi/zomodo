"use client";

import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { site } from "@/lib/site";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { submitContact } from "@/lib/actions";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [interest, setInterest] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.interest = interest;
    
    try {
      const res = await submitContact(data);
      if (res.success) {
        toast.success("Thanks — we'll be in touch.");
        (e.target as HTMLFormElement).reset();
        setInterest("");
      } else {
        toast.error(res.error || "Failed to submit form.");
      }
    } catch (err) {
      toast.error("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="w-full overflow-hidden pt-24 bg-background">
      <Breadcrumb page="contact" />
      
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          
          {/* Left: Text & Image */}
          <div className="w-full md:w-1/2 flex flex-col gap-12">
            <h1 className="text-5xl md:text-8xl font-display font-black tracking-[-0.04em] uppercase leading-none">
              Connect<br/><span className="text-primary">with us.</span>
            </h1>
            
            <div className="w-full h-[40vh] bg-cover bg-center grayscale" style={{ backgroundImage: "url('https://source.unsplash.com/random/800x800/?fashion,shoes')" }} />
            
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-[11px] font-bold text-neutral-muted uppercase tracking-[0.2em] mb-4">Direct Contact</h3>
                <div className="flex flex-col gap-2">
                  {site.contactEmails.map(email => (
                    <a key={email} href={`mailto:${email}`} className="text-xl font-medium hover:text-primary transition-colors">
                      {email}
                    </a>
                  ))}
                </div>
                <p className="text-sm text-neutral-muted mt-4">{site.poweredBy}</p>
              </div>

              <div>
                <h3 className="text-[11px] font-bold text-neutral-muted uppercase tracking-[0.2em] mb-4">Where we&apos;re headed</h3>
                <p className="text-lg font-medium text-foreground/80 leading-relaxed max-w-md">
                  Mumbai • Bangalore • Delhi NCR • Surat • Jaipur • Pune • Ahmedabad • Lucknow
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full md:w-1/2 bg-neutral-warm text-dark p-8 md:p-12 border border-dark/10 shadow-xl">
            <h2 className="text-3xl font-display font-black tracking-[-0.04em] uppercase mb-8">Send an inquiry</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Honeypot */}
              <input type="text" name="honeypot" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-[0.2em] text-dark/60">Full Name</label>
                <Input id="name" name="name" required placeholder="Jane Doe" className="border-dark/20 focus:border-primary" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-[0.2em] text-dark/60">Email Address</label>
                <Input id="email" name="email" type="email" required placeholder="jane@example.com" className="border-dark/20 focus:border-primary" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-[0.2em] text-dark/60">Phone Number</label>
                <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" className="border-dark/20 focus:border-primary" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-dark/60">Interest</label>
                <Select value={interest} onValueChange={setInterest} required>
                  <SelectTrigger className="border-dark/20 focus:border-primary">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="partnership">Brand Partnership</SelectItem>
                    <SelectItem value="investment">Investment</SelectItem>
                    <SelectItem value="franchise">Franchise</SelectItem>
                    <SelectItem value="press">Press / Media</SelectItem>
                    <SelectItem value="general">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-[0.2em] text-dark/60">Message</label>
                <Textarea id="message" name="message" required placeholder="Tell us about your proposal..." className="border-dark/20 focus:border-primary min-h-[150px]" />
              </div>

              <Button type="submit" disabled={isSubmitting} size="lg" className="mt-4 w-full sm:w-auto self-start gap-2">
                {isSubmitting ? "Sending..." : "Submit Inquiry"} <ArrowRight size={18} />
              </Button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
