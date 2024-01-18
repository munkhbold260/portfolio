import { Js } from "@/components/icons/Js";
import { Ts } from "@/components/icons/Ts";
import { React } from "@/components/icons/React";
import { NextJs } from "@/components/icons/NextJs";
import { NodeIcon } from "@/components/icons/NodeIcon";
import { ExpressIcon } from "@/components/icons/ExpressIcon";
import { NestIcon } from "@/components/icons/NestIcon";
import { SocketIcon } from "@/components/icons/SocketIcon";

export const Skills = () => {
  const skillsIcon1 = [
    { images: <Js />, qwer: 1 },
    { images: <Ts />, qwer: 1 },
    { images: <React />, qwer: 1 },
    { images: <NextJs />, qwer: 1 },
    { images: <NodeIcon />, qwer: 1 },
    { images: <ExpressIcon />, qwer: 1 },
    { images: <NestIcon />, qwer: 1 },
    { images: <SocketIcon />, qwer: 1 },
  ];
  const skillsIcon2 = [
    { images: <React />, qwer: 1 },
    { images: <React />, qwer: 1 },
    { images: <React />, qwer: 1 },
    { images: <React />, qwer: 1 },
    { images: <React />, qwer: 1 },
    { images: <React />, qwer: 1 },
    { images: <React />, qwer: 1 },
    { images: <React />, qwer: 1 },
  ];
  const elements1 = skillsIcon1.map((a) => {
    return <>{a.images}</>;
  });
  const elements2 = skillsIcon2.map((b) => {
    return <> {b.images} </>;
  });
  return (
    <div className="bigContainer">
      <div className="smallContainer">
        <div>
          <img src="skills.svg" alt="" />
        </div>
        <div>
          <div className="flex">{elements1}</div>
          <div className="flex"> {elements2}</div>
        </div>
      </div>
    </div>
  );
};
