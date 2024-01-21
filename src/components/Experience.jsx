import { Js } from "./icons/Js";
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
      <div className="flex flex-col sm:flex gap-12 justify-between max-w-[896px] m-auto">
        <div>
          <div className="order-1 sm: ">{a.images}</div>
        </div>
        <div className=" order-3 sm:`flex flex-col gap-4">
          <h1>{a.h1}</h1>
          <ul>
            <li>{a.p1}</li>
            <li>{a.p2}</li>
            <li>{a.p3}</li>
            <li>{a.p4}</li>
          </ul>
        </div>

        <div className="order-2 sm:">
          <p>{a.dates}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="bigContainer bg-gray-50">
      <div className="smallContainer  ">
        <div className="tagContainer">
          <p className="tagStyle">Experience</p>
          <p className="text-xl m-auto">
            Here is a quick summary of my most recent experiences:
          </p>
        </div>
        <div className=" sm:flex flex-col gap-12">{elements}</div>
      </div>
    </div>
  );
};
