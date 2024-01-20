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
    // const element1 = workCard.map((b) => {
    //   return (
    //     <p className="bg-gray-200 rounded-xl px-5 py-1 m-auto max-w-fit">
    //       {b.tag}
    //     </p>
    //   );
    // });
    return (
      <div className="flex">
        <div className="p-12 w-1/2">{a.images}</div>
        <div className="p-12 w-1/2 flex flex-col gap-6">
          <h2>{a.h2}</h2>
          <p className="">{a.p}</p>
          {/* <div>{a.tags}</div> */}
          {a.icon}
        </div>
      </div>
    );
  });
  return (
    <div className="bigContainer">
      <div className="smallContainer flex flex-col max-w-[1440px] gap-12">
        <div className="tagContainer">
          <p className="tagStyle">Work</p>
          <p className="text-xl m-auto">
            Some of the noteworthy projects I have built:
          </p>
        </div>
        <div>{element}</div>
      </div>
    </div>
  );
};
