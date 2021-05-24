import React, { PureComponent, useState } from "react";
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
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

let data = require("../../Data/sit6.json");
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

export default function Bar6() {
  const options = [
    "Fine",
    "Cloudy",
    "Light rain",
    "Heavy rain",
    "Flooding",
    "Hail/sleet",
    "snow",
    "Strong wind",
    "Dust storm",
    "Very hot",
    "Very cold",
  ];

  const [value, setValue] = useState("Cloudy");
  const defaultOption = options[0];

  const handleChange = (val) => {
    setValue(val.value);
  };
  return (
    <div className="Bar6">
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
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="State/ UT"
            height={120}
            interval={0}
            tick={<CustomizedAxisTick />}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={`${value} - Killed`} stackId="a" fill="#1C89F9" />
          <Bar dataKey={`${value} - Injured`} stackId="a" fill="#DD005D" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
