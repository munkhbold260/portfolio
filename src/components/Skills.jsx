import { Js } from "./icons/Js";
import { Ts } from "./icons/Ts";
import { React } from "./icons/React";
import { NextJs } from "./icons/NextJs";
import { NodeIcon } from "./icons/NodeIcon";
import { ExpressIcon } from "./icons/ExpressIcon";
import { NestIcon } from "./icons/NestIcon";
import { SocketIcon } from "./icons/SocketIcon";

export const Skills = () => {
  const skillsIcon1 = [
    { images: <Js /> },
    { images: <Ts /> },
    { images: <React /> },
    { images: <NextJs /> },
    { images: <NodeIcon /> },
    { images: <ExpressIcon /> },
    { images: <NestIcon /> },
    { images: <SocketIcon /> },

    { images: <React />, qq: 123 },
    { images: <React />, qq: 123 },
    { images: <React />, qq: 123 },
    { images: <React />, qq: 123 },
    { images: <React />, qq: 123 },
    { images: <React />, qq: 123 },
    { images: <React />, qq: 123 },
    { images: <React />, qq: 123 },
  ];
  const elements1 = skillsIcon1.map((a) => {
    return <>{a.images}</>;
  });

  return (
    <div className="bigContainer">
      <div className="smallContainer gap-12 flex flex-col max-w-[1440px] m-auto">
        <div className="tagContainer">
          <p className="tagStyle">Skills</p>
          <p className="m-auto">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div className="flex flex-wrap sm:flex justify-between">
          {elements1}
        </div>
      </div>
    </div>
  );
};
