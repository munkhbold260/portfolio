import { useState } from "react";
import { HamburgerMenuIcon } from "./icons/HamburgerMenuIcon";
import { DarkThemeIcon } from "./icons/DarkThemeIcon";
import { LightThemeIcon } from "./icons/LightThemeIcon";
import { useTheme } from "./context/ThemeChangeContext";

export const TestHeader = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="px-4 py-4 h-[68px] flex justify-between w-full m-auto relative sm:hidden">
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
    <div className="absolute top-0 right-0 w-full bg-white pb-4 ">
      <div className="flex  justify-between h-[68px] px-4 py-4  m-auto">
        <img src="SS.svg" alt="" />
        <button onClick={onClose}>
          <img src="modalXIcon.svg" alt="" />
        </button>
      </div>
      <div className="flex flex-col justify-start gap-4 px-4">
        <p>About</p>
        <p>Work</p>
        <p>Testimonials</p>
        <p>Contact</p>
        <div className=" flex justify-between">
          <p>Switch Theme</p>
          <button
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            {theme == "dark" ? <DarkThemeIcon /> : <LightThemeIcon />}
          </button>
        </div>
        <button className="w-1/2 m-auto h-[36px] py-1.5 px-4 rounded-xl font-medium  bg-black">
          <p className="text-white">Download CV</p>
        </button>
      </div>
    </div>
  );
};
