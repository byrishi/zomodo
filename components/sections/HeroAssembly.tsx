"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HeroAssembly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (matchMedia.matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
        }
      });

      // Scatter from random positions
      gsap.set(lettersRef.current, {
        x: () => gsap.utils.random(-1000, 1000),
        y: () => gsap.utils.random(-1000, 1000),
        rotation: () => gsap.utils.random(-180, 180),
        opacity: 0,
        scale: 3
      });

      gsap.set(taglineRef.current, { opacity: 0, y: 50 });

      tl.to(lettersRef.current, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out"
      })
      .to(taglineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      }, "-=0.5")
      .to(bgRef.current, {
        opacity: 0.8,
        duration: 1
      }, "<");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const word = "ZOMÒDA".split("");

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Field */}
      <div ref={bgRef} className="absolute inset-0 bg-primary opacity-10 transition-opacity duration-1000" />
      
      <div className="relative z-10 flex text-[15vw] md:text-[18vw] font-display font-black leading-none tracking-[-0.04em] text-foreground mix-blend-difference">
        {word.map((letter, i) => (
          <span 
            key={i} 
            ref={el => {
              if (el) lettersRef.current[i] = el;
            }}
            className="inline-block"
          >
            {letter}
          </span>
        ))}
      </div>

      <p 
        ref={taglineRef} 
        className="relative z-10 mt-4 text-[14px] md:text-[16px] font-bold uppercase tracking-[0.4em] text-center max-w-2xl px-6 text-foreground opacity-80"
      >
        A Multi-Brand Fair Price Retail Experience.
      </p>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs uppercase tracking-widest font-medium opacity-50">
        <span>Scroll to assemble</span>
        <div className="w-[1px] h-12 bg-current mt-4 animate-pulse" />
      </div>
    </section>
  );
}
