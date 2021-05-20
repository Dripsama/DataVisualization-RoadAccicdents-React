import React from "react";
import "./Sit2.css";
import Chart2 from "./Chart2";
import Pie2 from "./Pie2";

export default function Sit2() {
  return (
    <div className="Sit2">
      <h1>
        Situation 2: Explore the types of casualties incurred due to road
        accidents
      </h1>
      <h2>Dropdown: value props</h2>
      <Chart2 />
      <Pie2 />
    </div>
  );
}
