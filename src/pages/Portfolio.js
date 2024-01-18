import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";

export const Portfolio = () => {
  return (
    <div className="flex flex-col m-auto">
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  );
};
