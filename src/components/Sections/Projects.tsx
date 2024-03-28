import ProjectList from "../CardsList/ProjectList";
import { ProjectData } from "../Models/Project";
type ProjectProps = {
  reverse: string;
  theme: string;
};

function Projects({ reverse, theme }: ProjectProps) {
  return (
    <div
      className=" h-screen grid grid-rows-custom  z-0  pb-6 gap-6 px-4"
      style={{ backgroundColor: reverse }}
    >
      <header className="  flex flex-row justify-center items-center  font-custom text-5xl  font-semibold">
        <h1 style={{ color: theme }}>Projects</h1>
      </header>
      <ProjectList data={ProjectData} />
    </div>
  );
}

export default Projects;
