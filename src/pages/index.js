import { Header } from "../Component/Header";
import { Zurag } from "../Component/Zurag";
import { TExt } from "../Component/TExt";
import { Location } from "../Component/Location";
import { About } from "../Component/About";
import { Bodytext } from "../Component/Bodytext";
import { Second } from "../Component/Second";
import { Typescript } from "../Component/logo/Typescript";
import { React } from "../Component/logo/React";
import { Next } from "../Component/logo/Next";
import { Node } from "../Component/logo/Node";
import { Skill } from "../Component/Skill";
import { Javascript } from "../Component/logo/Javascript";
import { Socket } from "../Component/logo/Socket";
import { Express } from "../Component/logo/Express";
import { Nest } from "../Component/logo/Nest";
import { PostgreSQL } from "../Component/logo/PostgreSQL";
import { MongoDB } from "../Component/logo/MongoDB";
import { SassScss } from "../Component/logo/SassScss";
import { Tailwindcss } from "../Component/logo/Tailwindcss";
import { Figma } from "../Component/logo/Figma";
import { Cypress } from "../Component/logo/Cypress";
import { Storybook } from "../Component/logo/Storybook";
import { Git } from "../Component/logo/Git";

const skills = [
  {
    id: 1,
    icon: <Javascript />,
    name: "Javascript",
  },
  {
    id: 2,
    icon: <Javascript />,
    name: "Typescript",
  },
  {
    id: 3,
    icon: <Javascript />,
    name: "React",
  },
  {
    id: 4,
    icon: <Javascript />,
    name: "Next.js",
  },
  {
    id: 5,
    icon: <Javascript />,
    name: "Node.js",
  },
  {
    id: 6,
    icon: <Javascript />,
    name: "Express.js",
  },
  {
    id: 7,
    icon: <Javascript />,
    name: "Next.js",
  },
  {
    id: 8,
    icon: <Javascript />,
    name: "Socket.io",
  },
  {
    id: 9,
    icon: <Javascript />,
    name: "PostgreSQL",
  },
  {
    id: 10,
    icon: <Javascript />,
    name: "MongoDB",
  },
  {
    id: 11,
    icon: <Javascript />,
    name: "Sass/Scss",
  },
  {
    id: 12,
    icon: <Javascript />,
    name: "Tailwindcss",
  },
  {
    id: 13,
    icon: <Javascript />,
    name: "Figma",
  },
  {
    id: 14,
    icon: <Javascript />,
    name: "Cypress",
  },
  {
    id: 15,
    icon: <Javascript />,
    name: "Storybook",
  },
  {
    id: 16,
    icon: <Javascript />,
    name: "Git",
  },
];

const FigmaPageMain = () => {
  return (
    <div className="container mx-auto">
      <div>
        <Header />
        <Zurag />
        <TExt />
        <Location />
      </div>
      <div>
        <About />
        <Bodytext />
      </div>
      <Second />
      <div className="grid grid-cols-3 md:grid-cols-5">
        {skills.map((skill) => {
          return (
            <div key={skill.id} className="justify-self-center grid">
              <Skill icon={skill.icon} name={skill.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FigmaPageMain;
