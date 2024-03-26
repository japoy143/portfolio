type ProjectProps = {
  reverse: string;
  theme: string;
};

function Projects({ reverse, theme }: ProjectProps) {
  return (
    <div
      className=" h-screen grid grid-rows-custom  z-0  pb-6"
      style={{ backgroundColor: reverse }}
    >
      <header className="  flex flex-row justify-center items-center  font-custom text-3xl  font-medium">
        <h1 style={{ color: theme }}>Projects</h1>
      </header>
    </div>
  );
}

export default Projects;
