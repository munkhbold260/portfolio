import { useTheme } from "./context/ThemeChangeContext";
import { UpWork } from "./icons/Upwork";

export const Experience = () => {
  const experienceCards = [
    {
      images: <UpWork />,
      h1: "Sr. Frontend Developer",
      p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      p2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
      p3: "Sed quis justo ac magna.",
      p4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      dates: "Nov 2021 - Present",
    },
    {
      images: <UpWork />,
      h1: "Team Lead",
      p1: "Sed quis justo ac magna.",
      p2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      p3: "Sed quis justo ac magna.",
      p4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      dates: "Jul 2017 - Oct 2021",
    },
    {
      images: <UpWork />,
      h1: "Full Stack Developer",
      p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      dates: "Dec 2015 - May 2017",
    },
  ];

  const elements = experienceCards.map((a) => {
    return (
      <div className=" m-auto px-8 py-8 flex flex-col rounded-xl drop-shadow-lg bg-white">
        <div className="flex flex-col gap-4">
          <div>{a.images}</div>
          <p>{a.dates}</p>
          <h1 className="text-gray-900 text-lg font-semibold  leading-7">
            {a.h1}
          </h1>
          <div className="w-[279px] xl:w-[900px]">
            <p>{a.p1}</p>
            <p>{a.p2}</p>
            <p>{a.p3}</p>
            <p>{a.p4}</p>
          </div>
        </div>
      </div>
    );
  });

  const { theme } = useTheme();
  const themeChanger = theme == "light" ? "" : "bg-gray-900";
  return (
    <div className={themeChanger}>
      <div className="px-4 py-16 m-auto">
        <div className="flex flex-col gap-6">
          <div className="tagContainer text-center">
            <p className="tagStyle">Experience</p>
            <p className="text-xl m-auto">
              Here is a quick summary of my most recent experiences: Here is a
              quick summary of my most recent experiences: Here is a quick
              summary of my most recent experiences: Here is a quick summary of
              my most recent experiences: Here is a quick summary of my most
              recent experiences:
            </p>
          </div>
          <div className="flex flex-col gap-6">{elements}</div>
        </div>
      </div>
    </div>
  );
};
