export function MarketGap() {
  const competitors = ["Iconic", "Shoppers Stop", "Lifestyle"];

  return (
    <section className="bg-white text-dark py-32 px-6 md:px-12 border-t border-neutral-muted/20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-[11px] font-bold text-neutral-muted uppercase tracking-[0.2em] mb-8">The Market Gap</h2>
        <p className="text-2xl md:text-4xl lg:text-5xl font-display font-black tracking-[-0.04em] max-w-4xl leading-none mb-16">
          Existing multi-brand formats run on a space-share model with high overheads passed to the customer, and are losing freshness to e-commerce.
        </p>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-30 grayscale pointer-events-none">
          {competitors.map(c => (
            <div key={c} className="text-3xl md:text-5xl font-display font-black tracking-[-0.04em]">
              {c}.
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
