import { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { categories } from "@/lib/categories";
import { CTABand } from "@/components/sections/CTABand";

export const metadata: Metadata = {
  title: "Brands | Zomòda",
  description: "Real brands. Fair prices.",
};

export default function BrandsPage() {
  return (
    <main className="w-full overflow-hidden pt-24 bg-white text-dark">
      <Breadcrumb page="brands" />
      
      <section className="px-6 md:px-12 pb-24 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-display font-black tracking-[-0.04em] uppercase leading-none mb-6">
          Real brands.<br/><span className="text-primary">Fair prices.</span>
        </h1>
        <p className="text-xl font-medium text-dark/60 uppercase tracking-widest">
          Curated by MarcoWagon
        </p>
      </section>

      {categories.map((cat, i) => (
        <section key={cat.slug} id={cat.slug} className="mb-32">
          {/* Black Brand Band */}
          <div className="w-full bg-dark text-white py-12 px-6 md:px-12 overflow-hidden border-y border-dark">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                {cat.brands.map((brand) => (
                  <div key={brand} className="text-2xl md:text-3xl font-display font-black tracking-[-0.04em] opacity-70 hover:opacity-100 transition-opacity">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cat.images.slice(0, 3).map((img, idx) => (
              <div key={idx} className={`h-[40vh] md:h-[60vh] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 ${idx === 0 ? "md:col-span-2" : ""}`} style={{ backgroundImage: `url('https://source.unsplash.com/random/800x1200/?fashion,${cat.slug},${idx}')` }} />
            ))}
          </div>

          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-8">
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-[-0.04em] uppercase text-dark leading-none">
              {cat.label}
            </h2>
          </div>
        </section>
      ))}

      <CTABand text="Join the Roster." />
    </main>
  );
}
