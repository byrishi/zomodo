"use client";

import Link from "next/link";
import { categories } from "@/lib/categories";
import { motion } from "motion/react";

export function CategoryTeaser() {
  return (
    <section className="py-24 bg-background border-t border-neutral-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-[11px] font-bold text-neutral-muted uppercase tracking-[0.2em] mb-2">The Roster</h2>
        <p className="text-4xl md:text-5xl font-display font-black uppercase tracking-[-0.04em] leading-none">Shop by Category.</p>
      </div>

      <div className="flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory px-6 md:px-12 gap-6 w-full">
        {categories.map((cat, i) => (
          <Link
            key={cat.slug}
            href={`/brands#${cat.slug}`}
            className="group relative flex-none w-[280px] h-[360px] md:w-[320px] md:h-[420px] snap-center overflow-hidden border border-neutral-muted/20"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('https://source.unsplash.com/random/600x800/?fashion,${cat.slug}')` }}
            />
            <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-primary/80" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-white font-display font-bold text-2xl tracking-tight translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {cat.label}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
