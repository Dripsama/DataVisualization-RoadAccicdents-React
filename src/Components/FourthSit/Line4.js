import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

let data = require("../../Data/monthwise.json");

const CreateData = (value) => {
  const x = value - 2004;
  let new_data = [
    {
      month: "JANUARY",
      [value]: data[x].JANUARY,
    },
    {
      month: "FEBRUARY",
      [value]: data[x].FEBRUARY,
    },
    {
      month: "MARCH",
      [value]: data[x].MARCH,
    },
    {
      month: "APRIL",
      [value]: data[x].APRIL,
    },
    {
      month: "MAY",
      [value]: data[x].MAY,
    },
    {
      month: "JUNE",
      [value]: data[x].JUNE,
    },
    {
      month: "JULY",
      [value]: data[x].JULY,
    },
    {
      month: "AUGUST",
      [value]: data[x].AUGUST,
    },
    {
      month: "SEPTEMBER",
      [value]: data[x].SEPTEMBER,
    },
    {
      month: "OCTOBER",
      [value]: data[x].OCTOBER,
    },
    {
      month: "NOVEMBER",
      [value]: data[x].NOVEMBER,
    },
    {
      month: "DECEMBER",
      [value]: data[x].DECEMBER,
    },
  ];
  return new_data;
};

export default function Line4() {
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
  let new_data = CreateData(value);
  return (
    <div>
      <div className="Line4">
        <Dropdown
          options={options}
          onChange={handleChange}
          value={defaultOption}
          placeholder="Select an option"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={new_data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey={value}
              stroke="#DD005D"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="Line4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
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
            <XAxis dataKey="YEAR" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Total"
              stroke="#DD005D"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
