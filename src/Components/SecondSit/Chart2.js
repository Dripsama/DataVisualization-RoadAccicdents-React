import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import React, { PureComponent, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

let data = require("../../Data/casualities2.json");

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text textAnchor="end" fill="#666" transform="rotate(-90)">
          {payload.value}
        </text>
      </g>
    );
  }
}

export default function Chart2() {
  const options = ["2014", "2015", "2016", "2017"];

  const [value, setValue] = useState("2014");
  const defaultOption = options[0];

  const handleChange = (val) => {
    setValue(val.value);
  };
  return (
    <div className="Chart2">
      <Dropdown
        options={options}
        onChange={handleChange}
        value={defaultOption}
        placeholder="Select an option"
      />
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="States/UTs"
            height={120}
            interval={0}
            tick={<CustomizedAxisTick />}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={`Killed${value}`} barSize={30} fill="#8884d8" />
          <Bar dataKey={`Injured${value}`} barSize={30} fill="#82ca9d" />
          <Bar dataKey={`Total${value}`} barSize={30} fill="#84a4d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
