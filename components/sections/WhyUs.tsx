"use client";

import { stats } from "@/lib/stats";
import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";

export function WhyUs() {
  return (
    <section className="py-32 px-6 md:px-12 bg-foreground text-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-16">
        <div className="w-full md:w-1/3">
          <h2 className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-6">Why Us</h2>
          <h3 className="text-4xl md:text-6xl font-display font-black tracking-[-0.04em] uppercase mb-6 leading-none">Strategic synergy.</h3>
          <p className="text-lg text-background/80 leading-relaxed">
            Since 2012, MarcoWagon has grown into a global fashion & lifestyle powerhouse.
          </p>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-12 border-t border-background/20 md:border-none pt-12 md:pt-0">
          {stats.map((s, i) => (
            <StatCounter key={i} stat={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCounter({ stat }: { stat: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCount(stat.value);
        return;
      }

      let start = 0;
      const duration = 2000;
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCount(Math.floor(easeOutQuart * stat.value));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(stat.value);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, stat.value]);

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="text-5xl md:text-7xl font-display font-black tracking-[-0.04em] leading-none text-primary">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] mt-2 text-background/50">
        {stat.label}
      </div>
    </div>
  );
}
