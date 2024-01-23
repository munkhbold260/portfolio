import { useState } from "react";
import { useTheme } from "./context/ThemeChangeContext";
import { DarkThemeIcon } from "./icons/DarkThemeIcon";
import { LightThemeIcon } from "./icons/LightThemeIcon";

export const Header = () => {
  const [icon, setIcon] = useState(30);
  let icon1 = 100;

  const { theme, setTheme } = useTheme();
  const divClassName = theme == "light" ? "bg-blue-600" : "bg-red-600";
  return (
    <div className={divClassName}>
      <div className="flex items-center  justify-between px-[32px] ">
        <div className="items-center">
          <img src="SS.svg" alt="" />
        </div>
        <div className="flex items-center gap-[24px]">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <div className="flex items-center pl-6 gap-4">
            <button
              className="bg-green-500"
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
                setIcon(icon + icon1);
              }}
            >
              {icon}
            </button>

            <button className="w-[136px] h-[36px] py-1.5 px-4 rounded-xl text-#F9FAFB font-medium  bg-black">
              <p className="text-white">Download CV</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
