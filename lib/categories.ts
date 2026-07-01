export type Category = {
  slug: string;
  label: string;
  brands: string[];
  images: string[];
};

export const categories: Category[] = [
  {
    slug: "athleisure",
    label: "APPARELS — ATHLEISURE",
    brands: ["Under Armour", "The North Face", "Vans", "Champion", "Puma", "Jordan", "Adidas", "Nike", "Asics", "Gymshark", "Reebok"],
    images: ["/images/athleisure-1.jpg", "/images/athleisure-2.jpg", "/images/athleisure-3.jpg", "/images/athleisure-4.jpg"]
  },
  {
    slug: "casual",
    label: "APPARELS — CASUAL",
    brands: ["Clarks", "Wrangler", "Marks & Spencer", "GAS", "Old Navy", "Superdry", "Lee", "Replay", "Levi's", "GAP", "U.S. Polo Assn.", "United Colors of Benetton"],
    images: ["/images/casual-1.jpg", "/images/casual-2.jpg", "/images/casual-3.jpg"]
  },
  {
    slug: "premium",
    label: "APPARELS — PREMIUM",
    brands: ["Diesel", "Scotch & Soda", "Daniel Hechter", "Hackett London", "La Martina", "Paul Smith", "Replay", "Ted Baker London"],
    images: ["/images/premium-1.jpg", "/images/premium-2.jpg", "/images/premium-3.jpg"]
  },
  {
    slug: "footwear",
    label: "FOOTWEAR",
    brands: ["Saucony", "Adidas", "Hoka", "Champion", "On", "UGG", "Puma", "Vans", "Cole Haan", "The North Face", "Timberland", "Nike", "Skechers"],
    images: ["/images/footwear-1.jpg", "/images/footwear-2.jpg", "/images/footwear-3.jpg", "/images/footwear-4.jpg"]
  },
  {
    slug: "handbags",
    label: "HANDBAGS",
    brands: ["Michael Kors", "Kate Spade", "Marc Jacobs", "Tumi", "Guess", "Jacquemus", "Steve Madden", "Aldo", "Coach", "DKNY", "Charles & Keith", "Ted Baker London"],
    images: ["/images/handbags-1.jpg", "/images/handbags-2.jpg", "/images/handbags-3.jpg"]
  },
  {
    slug: "luggage",
    label: "LUGGAGE / TRAVEL",
    brands: ["Michael Kors", "Tommy Hilfiger", "French Connection", "Tumi", "DKNY", "United Colors of Benetton"],
    images: ["/images/luggage-1.jpg", "/images/luggage-2.jpg", "/images/luggage-3.jpg"]
  },
  {
    slug: "backpacks",
    label: "BACKPACKS",
    brands: ["Nike", "Under Armour", "The North Face", "Vans", "Puma", "Herschel", "American Tourister", "Oakley", "Eastpak", "Adidas", "Wildcraft", "Skechers", "Slazenger"],
    images: ["/images/backpacks-1.jpg", "/images/backpacks-2.jpg", "/images/backpacks-3.jpg"]
  },
  {
    slug: "sunglasses",
    label: "SUNGLASSES",
    brands: ["Adidas", "Karl Lagerfeld", "Tom Ford", "Bottega Veneta", "Just Cavalli", "Liu Jo", "Love Moschino", "Gucci", "Lacoste", "Nautica", "Kenzo", "Loewe", "Jimmy Choo", "Marc Jacobs", "Carolina Herrera", "Longchamp Paris", "Saint Laurent"],
    images: ["/images/sunglasses-1.jpg", "/images/sunglasses-2.jpg", "/images/sunglasses-3.jpg"]
  },
  {
    slug: "watches",
    label: "WATCHES",
    brands: ["Michael Kors", "Coach", "Guess", "Maserati", "Casio", "Swarovski"],
    images: ["/images/watches-1.jpg", "/images/watches-2.jpg", "/images/watches-3.jpg"]
  },
  {
    slug: "perfumes",
    label: "PERFUMES",
    brands: ["Dior", "Versace", "Issey Miyake", "Coach", "Jimmy Choo", "Tom Ford", "Prada", "Calvin Klein", "Bvlgari", "Paco Rabanne", "Valentino", "Hugo Boss", "Davidoff", "Burberry", "Guess", "Ralph Lauren"],
    images: ["/images/perfumes-1.jpg", "/images/perfumes-2.jpg", "/images/perfumes-3.jpg", "/images/perfumes-4.jpg"]
  }
];
