"use client";

import { useEffect, useRef } from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTABand } from "@/components/sections/CTABand";
import { roadmap } from "@/lib/roadmap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function RoadmapPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (matchMedia.matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 20%",
          end: "+=150%",
          scrub: 1,
          pin: true,
        }
      });

      gsap.set(itemsRef.current, { opacity: 0, y: 100, scale: 0.9 });

      itemsRef.current.forEach((item, i) => {
        tl.to(item, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out"
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full overflow-hidden pt-24 bg-background">
      <Breadcrumb page="roadmap" />
      
      <section className="px-6 md:px-12 pb-24 border-b border-neutral-muted/20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-[-0.04em] uppercase leading-none mb-8">
            Roadmap to 100 stores.
          </h1>
          <p className="text-xl font-medium text-foreground/80 leading-relaxed">
            Zomòda&apos;s five-year scaling horizon is built on a proven, repeatable unit model. Year 1 stress-tests the economics; Years 2–3 accelerate through growth equity; Year 5 delivers a dominant national footprint with institutional-grade operating metrics.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="py-24 px-6 md:px-12 min-h-screen bg-neutral-warm text-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-dark/10 -translate-y-1/2" />
          
          {roadmap.map((milestone, i) => (
            <div 
              key={i} 
              ref={el => {
                if (el) itemsRef.current[i] = el;
              }}
              className="relative bg-white p-8 border border-dark/10 shadow-xl flex flex-col gap-6"
            >
              <div className="text-primary font-bold uppercase tracking-widest text-sm">{milestone.year}</div>
              <div className="text-6xl font-display font-black tracking-[-0.04em] text-dark">
                {milestone.stores} <span className="text-2xl text-dark/50">stores</span>
              </div>
              <div className="w-full h-[2px] bg-primary/20" />
              <p className="text-lg font-medium text-dark/80">{milestone.note}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand text="Partner on the next 90 stores." />
    </main>
  );
}
