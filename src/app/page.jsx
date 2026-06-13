import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import Carrusel from "@/components/Carrusel";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Carrusel />
      <ContactSection />
    </>
  );
}
