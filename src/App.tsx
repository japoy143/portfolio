import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";

import { Main, About, TechStack } from "./components/Sections/export";

function App() {
  const [isdark, setDark] = useState<boolean>(false);
  const theme = isdark ? "#F5F7F8" : "#000000";
  const reverse = !isdark ? "#F5F7F8" : "#000000";

  return (
    <>
      <div className=" relative" style={{ backgroundColor: theme }}>
        <Nav
          theme={theme}
          isdark={isdark}
          setDark={setDark}
          reverse={reverse}
        />

        <div className=" grid grid-rows-5 ">
          <Main theme={theme} reverse={reverse} isdark={isdark} />
          <About theme={theme} reverse={reverse} isdark={isdark} />
          <TechStack isdark={isdark} reverse={reverse} theme={theme} />
        </div>
      </div>
    </>
  );
}

export default App;
