import { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CTABand } from "@/components/sections/CTABand";
import { personas } from "@/lib/personas";

export const metadata: Metadata = {
  title: "Concept | Zomòda",
  description: "From discount hunters to treasure seekers.",
};

export default function ConceptPage() {
  return (
    <main className="w-full overflow-hidden pt-24">
      <Breadcrumb page="concept" />
      
      <section className="px-6 md:px-12 pb-24 border-b border-neutral-muted/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-[-0.04em] uppercase leading-none mb-8">
              From discount hunters to treasure seekers.
            </h1>
            <p className="text-xl font-medium text-foreground/80 max-w-lg">
              We&apos;re changing the narrative of Indian retail. Premium brands shouldn&apos;t be locked behind a glass case, nor thrown in a clearance bin.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh]">
            <div className="w-full h-full bg-cover bg-center grayscale" style={{ backgroundImage: "url('https://source.unsplash.com/random/1200x1600/?fashion,editorial')" }} />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 bg-neutral-warm text-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-[-0.04em] mb-16 max-w-3xl leading-none">
            Tapping into &apos;Affluent India&apos; — a 50-million-strong opportunity.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-dark/10 pt-12">
            {personas.map((p, i) => (
              <div key={i} className="flex flex-col gap-6">
                <h3 className="text-2xl font-display font-black tracking-[-0.04em] text-primary uppercase">{p.title}</h3>
                <p className="text-lg font-medium leading-relaxed">{p.whoTheyAre}</p>
                <div className="grid grid-cols-2 gap-4 mt-4 pt-6 border-t border-dark/10 text-sm font-medium uppercase tracking-wider">
                  <div>
                    <span className="text-primary block mb-1">Pop.</span>
                    {p.population}
                  </div>
                  <div>
                    <span className="text-primary block mb-1">Income</span>
                    {p.incomeBand}
                  </div>
                  <div className="col-span-2 mt-2">
                    <span className="text-primary block mb-1">Geography</span>
                    {p.geography}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3 flex flex-col gap-8">
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-[-0.04em] uppercase leading-none">A 5,000 sq ft semi-premium store.</h2>
            <ul className="flex flex-col gap-4 text-lg font-medium text-foreground/80 list-disc pl-5">
              <li>5,000 sq ft modelling, scalable to top metros and boom towns.</li>
              <li>Category-and-size-wise display true to the core Zomòda concept.</li>
              <li>Semi-premium fit-out to reassure customers of product genuineness and quality.</li>
            </ul>
          </div>
          
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="h-[40vh] sm:h-[60vh] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: "url('https://source.unsplash.com/random/800x1200/?retail,store,1')" }} />
            <div className="flex flex-col gap-4">
              <div className="h-[20vh] sm:h-[29vh] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: "url('https://source.unsplash.com/random/800x600/?retail,store,2')" }} />
              <div className="h-[20vh] sm:h-[29vh] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: "url('https://source.unsplash.com/random/800x600/?retail,store,3')" }} />
            </div>
          </div>
        </div>
      </section>

      <CTABand text="Partner with Zomòda." />
    </main>
  );
}
