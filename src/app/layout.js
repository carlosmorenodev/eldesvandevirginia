import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  // Definimos el nombre de la variable CSS que usaremos luego
  variable: '--font-playfair',
});

export const metadata = {
  title: "El desván de Virginia",
  description: "No es solo crochet. Es tiempo, diseño y corazón",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}>
      <body>
        <Header />
        {children}</body>
    </html>
  );
}
