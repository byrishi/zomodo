"use client";

import { motion } from "motion/react";

export function Positioning() {
  const statements = [
    { label: "The Problem", text: "Traditional retail markups make goods feel inaccessible, while discount stores feel like clearance bins." },
    { label: "The Solution", text: "A curated, high-excitement retail destination where the price matches the reality of the product." },
    { label: "The Mission", text: "Democratize quality by making every shopping trip a high-reward discovery." }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-neutral-warm text-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-8xl font-display font-black tracking-[-0.04em] uppercase mb-24 max-w-5xl leading-none">
          Redefining value in Indian retail<span className="text-primary">.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-dark/10 pt-12">
          {statements.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">{s.label}</h3>
              <p className="text-lg md:text-xl font-medium leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
