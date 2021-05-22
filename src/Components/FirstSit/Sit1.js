import React from "react";
import Chart1 from "./Chart1";
import Map1 from "./Map1";
import "./Sit1.css";

export default function Sit1() {
  return (
    <div className="Sit1">
      <h1>Situation 1: Analyse state-wise trends of Road accidents.</h1>
      <Chart1 />
      <Map1 />
    </div>
  );
}
