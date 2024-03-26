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
      className="h-screen grid grid-cols-2 gap-x-20"
      style={{ backgroundColor: theme }}
    >
      <section className=" flex flex-row justify-end items-center font-custom text-3xl font-medium">
        <h1 style={{ color: reverse }}>Hello I'm Rainier</h1>
      </section>
      <section className=" flex flex-row justify-start items-center">
        <div className="h-[200px] w-[250px]  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex flex-row items-center justify-center">
          <pre className=" font-custom font-medium text-xs space-y-2">
            <p className=" text-orange-400">
              data
              <span style={{ color: reverse }}>:</span>
              {brackets[0]}
            </p>
            <p className=" text-red-500">
              "FullStack" <span style={{ color: reverse }}>:</span> true,
            </p>
            <p className=" text-red-500">
              "Mastery" <span style={{ color: reverse }}>:</span>
              {JSON.stringify(Mastery)},
            </p>
            <p className=" text-red-500">
              "Platforms" <span style={{ color: reverse }}>:</span>
              {JSON.stringify(Platforms)},
            </p>
            <p className=" text-red-500">
              "Databases" <span style={{ color: reverse }}>:</span>
              {JSON.stringify(Databases)},
            </p>
            <p className=" text-red-500">
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
