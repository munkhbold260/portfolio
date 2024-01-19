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
  ];
  const skillsIcon2 = [
    { images: <React /> },
    { images: <React /> },
    { images: <React /> },
    { images: <React /> },
    { images: <React /> },
    { images: <React /> },
    { images: <React /> },
    { images: <React /> },
  ];
  const elements1 = skillsIcon1.map((a) => {
    return <>{a.images}</>;
  });
  const elements2 = skillsIcon2.map((b) => {
    return <> {b.images} </>;
  });
  return (
    <div className="bigContainer">
      <div className="smallContainer gap-12 flex flex-col max-w-[1440px] m-auto">
        <div className="m-auto flex flex-col gap-4">
          <img className="m-auto" src="skills.svg" alt="" />
          <p className="m-auto">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div className="flex justify-between ">{elements1}</div>
        <div className="flex justify-between"> {elements2}</div>
      </div>
    </div>
  );
};
