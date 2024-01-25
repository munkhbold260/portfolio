import { useTheme } from "./context/ThemeChangeContext";
// import { GoDotFill } from "react-icons/go";

export const About = () => {
  const { theme } = useTheme();
  const themeChanger = theme == "light" ? "bg-gray-50" : "bg-gray-900";
  return (
    <div className={themeChanger}>
      <div className=" flex flex-col px-4 py-16 gap-6 xl:bigContainer xl:gap-12">
        <p className="tagStyle">About me</p>
        <div className="flex flex-col gap-12 xl:flex-row">
          <div className="m-auto">
            <img
              className="shadow-[10px_10px_#E5E7EB,_-10px_10px_#E5E7EB] sm:shadow-[40px_40px_#E5E7EB] "
              src="aboutPic.jpg"
              alt=""
            />
          </div>
          <div className="">
            <div className="flex flex-col gap-6">
              <h1 className=" text-gray-900 text-2xl font-bold ">
                Curious about me? Here you have it:
              </h1>
              <p>
                I'm a passionate,
                <span className="underline">self-proclaimed designer</span> who
                specializes in full stack development (React.js & Node.js). I am
                very enthusiastic about bringing the technical and visual
                aspects of digital products to life. User experience, pixel
                perfect design, and writing clear, readable, highly performant
                code matters to me.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p>
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p>
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                <span className="underline">Twitter</span> where I share
                tech-related bites and build in public, or you can follow me on
                <span className="underline">GitHub.</span>
              </p>
              <p>Finally, some quick bits about me.</p>
              <div className="flex gap-[10px]">
                <div className="w-1/2 flex flex-col gap-[10px]">
                  <div className="">
                    <p className="flex-wrap flex">
                      B.E. in Computer Engineering
                    </p>
                  </div>
                  <p className="">Full time freelancer</p>
                </div>
                <div>
                  <p className="">Avid learner</p>
                  <p className="">Aspiring indie hacker</p>
                </div>
              </div>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
