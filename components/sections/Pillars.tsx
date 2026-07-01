"use client";

import { pillars } from "@/lib/pillars";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Pillars() {
  return (
    <section className="bg-background w-full">
      {pillars.map((pillar, i) => (
        <PillarBlock key={i} pillar={pillar} index={i} />
      ))}
    </section>
  );
}

function PillarBlock({ pillar, index }: { pillar: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="w-full flex flex-col md:flex-row min-h-[70vh] border-t border-neutral-muted/20 overflow-hidden group">
      {/* Text Half */}
      <div className={`w-full md:w-1/2 flex flex-col justify-center px-6 md:px-24 py-24 order-2 ${isEven ? 'md:order-1 border-r border-neutral-muted/20' : 'md:order-2 border-l border-neutral-muted/20'}`}>
        <h3 className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-6">Pillar 0{index + 1}</h3>
        <h2 className="text-4xl md:text-6xl font-display font-black tracking-[-0.04em] uppercase mb-8 leading-none">{pillar.title}</h2>
        <div className="relative pl-6 border-l-2 border-primary">
          <p className="text-xl md:text-2xl text-foreground font-medium italic">
            &quot;{pillar.quote}&quot;
          </p>
        </div>
      </div>

      {/* Image Half */}
      <div className={`w-full md:w-1/2 h-[50vh] md:h-auto overflow-hidden relative order-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
        <motion.div 
          style={{ y, backgroundImage: `url('https://source.unsplash.com/random/1200x1600/?fashion,retail,${index}')` }}
          className="absolute inset-[-20%] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-background/10" />
      </div>
    </div>
  );
}
