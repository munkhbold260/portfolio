export const About = () => {
  return (
    <div className="bigContainer bg-gray-50">
      <div className="smallContainer flex flex-col items-center gap-12 ">
        <p className="tagStyle">About me</p>
        <div className="flex gap-12">
          <div className="w-1/2 ">
            <img src="aboutPic.jpg" alt="" />
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-6">
              <h1 className="">Curious about me? Here you have it:</h1>
              <p>
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
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
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p>Finally, some quick bits about me.</p>
              <div className="flex gap-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <p className="w-[287px] h-[24px]">
                    {" "}
                    B.E. in Computer Engineering
                  </p>
                  <p className="w-[287px] h-[24px]">Full time freelancer</p>
                </div>
                <div>
                  <p className="w-[287px] h-[24px]">Avid learner</p>
                  <p className="w-[287px] h-[24px]">Aspiring indie hacker</p>
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
