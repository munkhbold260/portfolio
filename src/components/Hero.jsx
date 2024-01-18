export const Hero = () => {
  return (
    <div className="bigContainer">
      <div className="smallContainer flex gap-12 ">
        <div className=" w-2/3 text-base flex flex-col font-normal text-gray-600	gap-2">
          <h1 className="text-6xl font-bold text-gray-900  ">
            Hi, I’m Sagar 👋
          </h1>
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
        <div className="w-[400px] h-[360px]relative">
          <img
            className="shadow-[10px_10px_red,_-10px_10px_red] sm:shadow-[10px_10px_black] "
            src="Pic.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
