import { ProjectType } from "../Models/Project";
import GithubIcon from "../CustomIcon/GithubIcon";
import LinkedIn from "../CustomIcon/LinkedIn";
import Gmail from "../CustomIcon/Gmail";
type ProjectListProps = {
  data: ProjectType[];
};

function ProjectList({ data }: ProjectListProps) {
  return (
    <div className="grid   grid-cols-2  lg:grid-cols-3 gap-4 py-10">
      {data.map((project) => {
        return (
          <div className=" h-auto bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex flex-col  items-center    justify-evenly text-2xl font-medium font-custom">
            <div className=" space-y-4">
              <p className=" text-4xl font-custom font-semibold">
                {project.projectname}
              </p>
              <div className=" flex flex-row text-base  space-x-4">
                {project.learnings.map((learn) => {
                  return (
                    <div className=" p-2 rounded-md bg-[#C6EBC5]">
                      <p>{learn}</p>
                    </div>
                  );
                })}
              </div>
              <p className=" text-base font-custom font-semibold  opacity-50 ">
                {project.framework} {project.platform}
              </p>
            </div>

            <div className=" indent-4 text-justify px-10 space-y-10">
              <p>{project.description}</p>
              <div className=" flex flex-row space-x-4 ">
                <a href={project.githublink} target="_blank">
                  <GithubIcon color="" className="h-14 w-14" />
                </a>
                <a href="" target="_blank">
                  <LinkedIn color="" className=" h-14 w-14" />
                </a>
              </div>
              <div className=" flex flex-row  items-center ">
                <Gmail color="" className=" h-10 w-10" />
                <p>rainierlesondato143@gmail.com</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectList;
