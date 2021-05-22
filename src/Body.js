import React from "react";
import Sit1 from "./Components/FirstSit/Sit1";
import Sit2 from "./Components/SecondSit/Sit2";
import Sit3 from "./Components/ThirdSit/Sit3";
import Sit4 from "./Components/FourthSit/Sit4";
import Sit5 from "./Components/FifthSit/Sit5";
import Sit6 from "./Components/SixthSit/Sit6";
import Sit7 from "./Components/SeventhSit/Sit7";

export default function Body() {
  return (
    <div className="Body">
      <Sit1 />
      <Sit2 />
      <Sit3 />
      <Sit4 />
      <Sit5 />
      <Sit6 />
      <Sit7 />
    </div>
  );
}
