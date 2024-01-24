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

  return (
    <div className="flex flex-col gap-6 px-4 py-16">
      <div className="flex flex-col gap-4">
        <p className="tagStyle">Skills</p>
        <p className="m-auto  text-center">
          The skills, tools and technologies I am really good at:
        </p>
      </div>
      <div className="flex gap-4 justify-between flex-wrap">{elements1}</div>
    </div>
  );
};
