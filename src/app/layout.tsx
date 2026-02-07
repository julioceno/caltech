import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";

import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Caltech",
  description:
    "Especialista em manutenção industrial, montagens mecânicas, soldagem e fabricação. Atuamos nos setores alimentício, químico e agronegócio com equipes certificadas NR-12 e NR-13, garantindo segurança e confiabilidade operacional.",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Caltech",
    description:
      "Manutenção corretiva e preventiva, montagens e instalações mecânicas, soldagem industrial, consultoria e projetos. Excelência em construção comercial e industrial em todo o Brasil.",
    images: [
      {
        url: "/logo.svg",
        alt: "Caltech Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} antialiased bg-white min-h-screen flex flex-col px-3 pb-10 max-w-7xl mx-auto`}
      >
        <Header />
        <main className="flex-1 flex flex-col w-full mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

