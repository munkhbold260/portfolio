import { useTheme } from "./context/ThemeChangeContext";

export const Hero = () => {
  const { theme } = useTheme();
  const divClassName = theme == "light" ? "" : "bg-black";
  return (
    <div className="flex-col sm: flex px-28 py-14">
      <div className="m-auto">
        <img
          className="shadow-[10px_10px_#E5E7EB,_-10px_10px_#E5E7EB] sm:shadow-[40px_40px_#E5E7EB] "
          src="Pic.jpg"
          alt=""
        />
      </div>
      <div className=" sm:w-2/3 text-base flex flex-col font-normal text-gray-600	gap-2">
        <h1 className="text-4xl font-bold text-gray-900  ">Hi, I’m Sagar 👋</h1>
        <div className=" flex flex-col justify-between gap-12">
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div>
            <p className="flex items-center">
              <img src="hero1.svg" alt="" />
              Ahmedabad, India
            </p>

            <p className="flex items-center">
              <img src="hero2.svg" alt="" /> Available for new projects
            </p>
          </div>
          <div className="flex">
            <img src="hero5.svg" alt="" />
            <img src="hero3.svg" alt="" />
            <img src="hero4.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
