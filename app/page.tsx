import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { BeyondTechnology } from "@/components/sections/BeyondTechnology";
import { Contact } from "@/components/sections/Contact";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { HowIThink } from "@/components/sections/HowIThink";
import { Journey } from "@/components/sections/Journey";
import { Skills } from "@/components/sections/Skills";
import { Vision } from "@/components/sections/Vision";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <FeaturedWork />
      <HowIThink />
      <Skills />
      <BeyondTechnology />
      <Vision />
      <Contact />
    </>
  );
}
