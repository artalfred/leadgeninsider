import type { Metadata } from "next";
import "./globals.css";

import Footer from "./footer";
import Header from "./header";
import ScrollToTop from "./components/scrollToTop";
import { Inter_Tight } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Libertinus_Serif } from "next/font/google";

const libertinus = Libertinus_Serif({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-libertinus",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "LeadGen Insider | Email infrastructure for lead gen teams",
  description:
    "We automate subdomain creation, DNS configuration, and inbox infrastructure at scale—so you can send high volumes, protect deliverability, and save significant time and costs.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.className} ${playfair.variable} ${libertinus.variable} antialiased`}
        suppressHydrationWarning
      >
        <ScrollToTop />
        <Header />

        <main>
          <div>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
