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
import { Experience } from "../Component/Experience";
import { Work } from "../Component/Work";
import { Ubcab } from "../Component/Ubcab";
import { Toim } from "../Component/Toim";
import { GetinTouch } from "../Component/GetinTouch";

const skills = [
  {
    id: 1,
    icon: <Javascript />,
    name: "Javascript",
  },
  {
    id: 2,
    icon: <Typescript />,
    name: "Typescript",
  },
  {
    id: 3,
    icon: <React />,
    name: "React",
  },
  {
    id: 4,
    icon: <Next />,
    name: "Next.js",
  },
  {
    id: 5,
    icon: <Node />,
    name: "Node.js",
  },
  {
    id: 6,
    icon: <Express />,
    name: "Express.js",
  },
  {
    id: 7,
    icon: <Nest />,
    name: "Nest.js",
  },
  {
    id: 8,
    icon: <Socket />,
    name: "Socket.io",
  },
  {
    id: 9,
    icon: <PostgreSQL />,
    name: "PostgreSQL",
  },
  {
    id: 10,
    icon: <MongoDB />,
    name: "MongoDB",
  },
  {
    id: 11,
    icon: <SassScss />,
    name: "Sass/Scss",
  },
  {
    id: 12,
    icon: <Tailwindcss />,
    name: "Tailwindcss",
  },
  {
    id: 13,
    icon: <Figma />,
    name: "Figma",
  },
  {
    id: 14,
    icon: <Cypress />,
    name: "Cypress",
  },
  {
    id: 15,
    icon: <Storybook />,
    name: "Storybook",
  },
  {
    id: 16,
    icon: <Git />,
    name: "Git",
  },
];

const FigmaPageMain = () => {
  return (
    <div>
      <Header />
      <Zurag />
      <TExt />
      <Location />
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
      <div>
        <Experience />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <Ubcab />
        <Toim />
        <GetinTouch />
      </div>
    </div>
  );
};
export default FigmaPageMain;
