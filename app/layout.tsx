import type { Metadata } from "next";
import "./globals.css";

import Footer from "./footer";
import Header from "./header";
import ScrollToTop from "./components/scrollToTop";
import { Inter_Tight } from "next/font/google";
import BG from "@/public/background/Background.svg";
import Image from "next/image";

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
    icon: "/app/favicon.ico", // Points to public/favicon.ico
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

        <Image className="bg-video" src={BG} alt="background" />

        {/* <video
          controls={false}
          preload="metadata"
          className="bg-video w-full h-auto"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/default.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        <main>
          <div>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
