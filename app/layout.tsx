import type { Metadata } from "next";
import "./globals.css";

import Footer from "./footer";
import Header from "./header";
import ScrollToTop from "./components/scrollToTop";
import Image from "next/image";
import Background from "@/public/background/Background.svg";

export const metadata: Metadata = {
  title: "LeadGen Insider",
  description:
    "I help brands grow through bold visuals and thoughtful digital experiences that drive results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ScrollToTop />
        <Header />

        <Image src={Background} alt="home" className="bg-video" />

        <main>
          <div>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
