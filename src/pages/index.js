import Image from "next/image";
import { Inter } from "next/font/google";
import { Portfolio } from "./Portfolio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="max-w-1440 px-20 bg-red-100">
      <Portfolio />
    </div>
  );
}
