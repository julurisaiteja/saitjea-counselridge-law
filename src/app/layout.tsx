import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import { WishlistProvider } from "@/lib/wishlist";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AiAssistant } from "@/components/AiAssistant";
import { StickyMobileCta } from "@/components/StickyMobileCta";

const display = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500","600","700"],
});
const body = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400","500","600"],
});

export const metadata: Metadata = {
  title: "CounselRidge",
  description: "Strict counsel. Clear columns. High stakes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-style="classic-swiss">
      <body className={`${display.variable} ${body.variable} antialiased pb-20 md:pb-0`}>
        <CartProvider slug="counselridge-law">
          <WishlistProvider slug="counselridge-law">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <AiAssistant />
            <StickyMobileCta />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
