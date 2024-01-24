import { WorkIcon } from "./icons/WorkIcon";
import { WorkIcon2 } from "./icons/WorkIcon2";

export const Work = () => {
  const workCard = [
    {
      images: <WorkIcon />,
      h2: "Fiskil",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      tags: [
        { tag: "React" },
        { tag: "Next.js" },
        { tag: "Typescript" },
        { tag: "Nest.js" },
        { tag: "PostgreSQL" },
        { tag: "PostgreSQL" },
        { tag: "Tailwindcss" },
        { tag: "Pigma" },
        { tag: "Cypress" },
        { tag: "Storybook" },
        { tag: "Git" },
      ],
      icon: <WorkIcon2 />,
    },
    {
      images: <WorkIcon />,
      h2: "Fiskil",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      tags: [
        { tag: "React" },
        { tag: "Next.js" },
        { tag: "Typescript" },
        { tag: "Nest.js" },
        { tag: "PostgreSQL" },
        { tag: "PostgreSQL" },
        { tag: "Tailwindcss" },
        { tag: "Pigma" },
        { tag: "Cypress" },
        { tag: "Storybook" },
        { tag: "Git" },
      ],
      icon: <WorkIcon2 />,
    },
    {
      images: <WorkIcon />,
      h2: "Fiskil",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      tags: [
        { tag: "React" },
        { tag: "Next.js" },
        { tag: "Typescript" },
        { tag: "Nest.js" },
        { tag: "PostgreSQL" },
        { tag: "PostgreSQL" },
        { tag: "Tailwindcss" },
        { tag: "Pigma" },
        { tag: "Cypress" },
        { tag: "Storybook" },
        { tag: "Git" },
      ],
      icon: <WorkIcon2 />,
    },
  ];

  const element = workCard.map((a) => {
    return (
      <div className="">
        <div className="px-8 py-8 bg-gray-50">{a.images}</div>
        <div className="px-8 py-8 flex flex-col gap-6 bg-white drop-shadow-lg rounded-xl">
          <h2>{a.h2}</h2>
          <p className="">{a.p}</p>
          {/* <div>{a.tags}</div> */}
          <div>
            {" "}
            <p className="tagStyle inline-block">React</p>
            <p className="tagStyle inline-block">React</p>
            <p className="tagStyle inline-block">React</p>
            <p className="tagStyle inline-block">React</p>
            <p className="tagStyle inline-block">React</p>
            <p className="tagStyle inline-block">React</p>
            <p className="tagStyle inline-block">React</p>
          </div>

          {a.icon}
        </div>
      </div>
    );
  });

  return (
    <div className="px-4 py-16">
      <div className="tagContainer text-center">
        <p className="tagStyle">Work</p>
        <p className="text-xl m-auto">
          Some of the noteworthy projects I have built:
        </p>
      </div>
      <div className="flex flex-col gap-6">{element}</div>
    </div>
  );
};
