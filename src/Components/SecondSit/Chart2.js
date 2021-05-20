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
import React, { PureComponent } from "react";

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
  const year = "2014";
  return (
    <div className="Chart2">
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
          <Bar dataKey={`Killed${year}`} barSize={30} fill="#8884d8" />
          <Bar dataKey={`Injured${year}`} barSize={30} fill="#82ca9d" />
          <Bar dataKey={`Total${year}`} barSize={30} fill="#84a4d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
