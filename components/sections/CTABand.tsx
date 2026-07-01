import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTABand({ text = "Be part of the find." }: { text?: string }) {
  return (
    <section className="bg-primary text-white py-24 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="text-4xl md:text-6xl font-display font-black tracking-[-0.04em] uppercase leading-none">{text}</h2>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            <Link href="/contact">Partner with us</Link>
          </Button>
          <Button asChild className="bg-white text-primary hover:bg-foreground/10 hover:text-white border border-white">
            <Link href="/concept">Explore Concept</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
