export type ProjectType = {
  projectname: string;
  image: string;
  learnings: string[];
  framework: string;
  description: string;
  platform: string;
  githublink: string;
};

export const ProjectData: ProjectType[] = [
  {
    projectname: "Portfolio",
    image: "/images/portfolio.png",
    learnings: ["Grids", "Semantics", "Responsive", "Typescript"],
    framework: "React",
    description: "This project is a brief description about me",
    platform: "Web",
    githublink: "https://github.com/japoy143/portfolio.git",
  },
  {
    projectname: "netcoin",
    image: "/images/netcoin.png",
    learnings: ["Redux Toolkit", "MongoDB", "Rest API", "Charts", "Typescript"],
    framework: "React Native",
    description:
      "An App that can show realtime crypto price and can convert it realtime",
    platform: "Mobile Phone",
    githublink: "https://github.com/japoy143/netcoin_app.git",
  },

  {
    projectname: "WORDYwoodpicker",
    image: "/images/wordy.png",
    learnings: ["Maps", "List", "State", "NO-SQL"],
    framework: "Flutter",
    description:
      "A game application about computers, it is a guessing a computer word base of the given random letters",
    platform: "Mobile Phone",
    githublink: "https://github.com/japoy143/capstone1.git",
  },
];
