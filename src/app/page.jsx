import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection";
import Carrusel from "@/components/Carrusel";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Carrusel />
    </>
  );
}
