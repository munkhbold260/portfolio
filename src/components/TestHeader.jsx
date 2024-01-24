import { useState } from "react";
import { HamburgerMenuIcon } from "./icons/HamburgerMenuIcon";
import { DarkThemeIcon } from "./icons/DarkThemeIcon";
import { LightThemeIcon } from "./icons/LightThemeIcon";
import { useTheme } from "./context/ThemeChangeContext";

export const TestHeader = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="flex justify-between w-full bg-red-100 m-auto relative sm:hidden">
      <img src="SS.svg" alt="" />
      <button onClick={() => setModalShow(true)}>
        <HamburgerMenuIcon />
      </button>
      {modalShow && <ModalMenu onClose={() => setModalShow(false)} />}
    </div>
  );
};

const ModalMenu = ({ onClose }) => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="absolute top-0 right-0 w-full bg-gray-900 text-white border min-h-[60vh] sm: flex">
      <div>
        <div className="flex  justify-between  bg-red-100 m-auto">
          <img src="SS.svg" alt="" />
          <button onClick={onClose}>X</button>
        </div>
        <div className="flex flex-col items-center gap-[24px]">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <div className="flex items-center pl-6 gap-4">
            <button
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
              }}
            >
              {theme == "dark" ? <DarkThemeIcon /> : <LightThemeIcon />}
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
