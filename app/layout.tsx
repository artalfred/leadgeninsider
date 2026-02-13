import type { Metadata } from "next";
import "./globals.css";

import Footer from "./footer";
import Header from "./header";
import ScrollToTop from "./components/scrollToTop";
import { Inter_Tight } from "next/font/google";
import BG from "@/public/background/Background.svg";

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
        className={`${interTight.className} antialiased`}
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
