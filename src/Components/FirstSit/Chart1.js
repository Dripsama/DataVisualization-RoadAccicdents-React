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

let data = require("../../Data/statedata.json");

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

export default function Chart1() {
  const options = [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
  ];

  const [value, setValue] = useState("2010");
  const defaultOption = options[0];

  const handleChange = (val) => {
    setValue(val.value);
  };
  return (
    <div className="Chart1">
      <h2>Presentation of number of road accidents State-wise</h2>
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
            dataKey="States/Uts"
            height={120}
            interval={0}
            tick={<CustomizedAxisTick />}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={value} barSize={30} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
