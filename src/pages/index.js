import { Inter } from "next/font/google";
import { Portfolio } from "./Portfolio";
import ThemeProvider from "@/components/context/ThemeChangeContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <ThemeProvider>
      <div className="">
        <Portfolio />
      </div>
    </ThemeProvider>
  );
}
