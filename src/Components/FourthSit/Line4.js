import React from "react";
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
  let value = 2014;
  let new_data = CreateData(value);

  return (
    <div>
      <div className="Line4">
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
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey={value}
              stroke="#8884d8"
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
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
