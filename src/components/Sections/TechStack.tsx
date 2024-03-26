import CardsList from "../CardsList/CardsList";
import { TechStackData } from "../Models/TechstackModel";

type TechStackProps = {
  isdark: boolean;
  theme: string;
  reverse: string;
};

function TechStack({ reverse }: TechStackProps) {
  return (
    <div className=" h-screen grid grid-rows-custom z-0">
      <header className=" h-20 flex flex-row justify-center items-center  font-custom text-2xl  font-medium">
        <h1 style={{ color: reverse }}>TechStacks</h1>
      </header>
      <section>
        <CardsList
          data={TechStackData}
          grid=" grid grid-cols-2 h-full   xs:grid-cols-3   gap-4 xs:px-4 xs:space-y-0"
          className="  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex flex-row items-center justify-center "
        />
      </section>
    </div>
  );
}

export default TechStack;
