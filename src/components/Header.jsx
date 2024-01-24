import { useTheme } from "./context/ThemeChangeContext";
import { DarkThemeIcon } from "./icons/DarkThemeIcon";
import { LightThemeIcon } from "./icons/LightThemeIcon";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const divClassName = `hidden m-auto flex px-4 py-4 sm:block ${
    theme == "light" ? "bg-white" : "bg-black"
  }`;
  return (
    <div>
      <div className={divClassName}>
        <div className="items-center">
          <img src="SS.svg" alt="" />
        </div>
        <div className="hidden items-center gap-[24px] sm:block">
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
