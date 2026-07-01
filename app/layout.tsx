import type {Metadata} from 'next';
import { Inter, League_Spartan } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { Toaster } from 'sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-league-spartan',
});

export const metadata: Metadata = {
  title: 'Zomòda | Redefining value in Indian retail',
  description: 'A Multi-Brand Fair Price Retail Experience',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${leagueSpartan.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="data-theme" defaultTheme="light">
          <SmoothScroll>
            <CustomCursor />
            <Nav />
            {children}
            <Footer />
            <Toaster position="bottom-right" />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
