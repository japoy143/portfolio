type MainProps = {
  theme: string;
  reverse: string;
  isdark: boolean;
};
function Main({ theme, reverse }: MainProps) {
  const brackets = ["{", "}"];
  const Platforms = ["Mobile", "Web"];
  const Mastery = ["Typescript", "Javascript"];
  const Databases = ["SQL", "No-SQL"];
  return (
    <main
      className="h-screen grid grid-cols-2 sm:gap-x-20 px-4"
      style={{ backgroundColor: theme }}
      id="main"
    >
      <section className=" flex flex-row justify-end items-center font-custom text-5xl font-medium">
        <h1 style={{ color: reverse }}>Hello I'm Rainier</h1>
      </section>
      <section className=" flex flex-row justify-start items-center">
        <div className="h-[200px] w-[300px]  sm:h-[300px] sm:w-[400px]  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex flex-row items-center justify-center">
          <pre className=" text-sm font-custom font-medium sm:text-xl space-y-2 text-red-500 transition-colors duration-300  hover:text-blue-500">
            <p className=" text-orange-400">
              data
              <span style={{ color: reverse }}>:</span>
              {brackets[0]}
            </p>
            <p>
              "FullStack" <span style={{ color: reverse }}>:</span> true,
            </p>
            <p>
              "Mastery" <span style={{ color: reverse }}>:</span>
              {JSON.stringify(Mastery)},
            </p>
            <p>
              "Platforms" <span style={{ color: reverse }}>:</span>
              {JSON.stringify(Platforms)},
            </p>
            <p>
              "Databases" <span style={{ color: reverse }}>:</span>
              {JSON.stringify(Databases)},
            </p>
            <p>
              "Status" <span style={{ color: reverse }}>:</span> "Graduating
              Student"
            </p>
            <p className=" text-orange-400">{brackets[1]}</p>
          </pre>
        </div>
      </section>
    </main>
  );
}

export default Main;
