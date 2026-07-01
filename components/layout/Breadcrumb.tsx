import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ page }: { page: string }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-8 flex items-center gap-2 text-sm text-neutral-muted uppercase tracking-wider font-medium">
      <Link href="/" className="hover:text-primary transition-colors">home</Link>
      <ChevronRight size={14} />
      <span className="text-foreground">{page}</span>
    </div>
  );
}
