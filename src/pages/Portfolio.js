import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { GetInTouch } from "@/components/GetInTouch";
import { Footer } from "@/components/Footer";

export const Portfolio = () => {
  return (
    <div className="flex flex-col max-w-[1440px] m-auto">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <GetInTouch />
      <Footer />
    </div>
  );
};
