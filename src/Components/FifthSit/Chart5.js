import React from "react";
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

let data = require("../../Data/reason5.json");

export default function Chart5() {
  return (
    <div className="Chart5">
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
          <XAxis dataKey="Reason" interval={0} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Killed" stackId="a" fill="#8884d8" />
          <Bar dataKey="Injured" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
