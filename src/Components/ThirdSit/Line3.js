import React, { PureComponent } from "react";
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
let data = require("../../Data/timeofocc3.json");

const CreateData = (value) => {
  let x = 0;
  for (const prop in data) {
    if (value === data[prop]["States/Uts"]) {
      x = prop;
    }
  }
  let newdata = [
    {
      time: "7am",
      [value]: data[x]["7am"],
      [data[36]["States/Uts"]]: data[36]["7am"],
    },
    {
      time: "10am",
      [value]: data[x]["10am"],
      [data[36]["States/Uts"]]: data[36]["10am"],
    },
    {
      time: "1pm",
      [value]: data[x]["1pm"],
      [data[36]["States/Uts"]]: data[36]["1pm"],
    },
    {
      time: "4pm",
      [value]: data[x]["4pm"],
      [data[36]["States/Uts"]]: data[36]["4pm"],
    },
    {
      time: "7pm",
      [value]: data[x]["7pm"],
      [data[36]["States/Uts"]]: data[36]["7pm"],
    },
    {
      time: "10pm",
      [value]: data[x]["10pm"],
      [data[36]["States/Uts"]]: data[36]["10pm"],
    },
    {
      time: "1am",
      [value]: data[x]["1am"],
      [data[36]["States/Uts"]]: data[36]["1am"],
    },
    {
      time: "4am",
      [value]: data[x]["4am"],
      [data[36]["States/Uts"]]: data[36]["4am"],
    },
  ];
  return newdata;
};

export default class Line3 extends PureComponent {
  render() {
    const value = "Delhi";
    let data_state = CreateData(value);
    return (
      <div className="Line3">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data_state}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
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
            {/* <Line type="monotone" dataKey="All States" stroke="#8884d8" /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
