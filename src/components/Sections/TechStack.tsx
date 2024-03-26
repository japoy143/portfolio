import CardsList from "../CardsList/CardsList";
import { TechStackData } from "../Models/TechstackModel";

type TechStackProps = {
  isdark: boolean;
  theme: string;
  reverse: string;
};

function TechStack({ reverse }: TechStackProps) {
  return (
    <div className=" h-screen grid grid-rows-custom z-0  pb-6 " id="tech_stack">
      <header className="  flex flex-row justify-center items-center  font-custom text-3xl  font-medium">
        <h1 style={{ color: reverse }}>TechStacks</h1>
      </header>

      <CardsList
        data={TechStackData}
        grid=" grid grid-cols-1 max-h-auto  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xs:px-4 xs:space-y-0"
        className="   bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex flex-row  items-center justify-evenly text-1xl font-medium font-custom md:text-2xl  lg:text-3xl"
        reverse={reverse}
      />
    </div>
  );
}

export default TechStack;
