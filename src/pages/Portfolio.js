import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { GetInTouch } from "@/components/GetInTouch";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/components/context/ThemeChangeContext";
import { TestHeader } from "@/components/TestHeader";
import { useState } from "react";

export const Portfolio = () => {
  const { theme } = useTheme();
  const [size, setSize] = useState("");

  const divClassName = theme == "light" ? "" : "bg-black";
  return (
    <div className={divClassName}>
      <div>
        <TestHeader />
        <Header />
      </div>

      <Hero />
      <About />
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Work /> */}
      {/* <GetInTouch /> */}
      {/* <Footer /> */}
    </div>
  );
};
//
