import "./styles.css";
import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function App() {
  const [monValue, setMonValue] = useState(100);
  const data = [
    {
      name: "mon",
      pv: monValue,
      amt: 2400,
    },
    {
      name: "tue",

      pv: 1398,
      amt: 2210,
    },
    {
      name: "wed",

      pv: 9800,
      amt: 2290,
    },
    {
      name: "thu",

      pv: 3908,
      amt: 2000,
    },
    {
      name: "fri",

      pv: 4800,
      amt: 2181,
    },
    {
      name: "sat",

      pv: 3800,
      amt: 2500,
    },
    {
      name: "sun",

      pv: 4300,
      amt: 2100,
    },
  ];
  const handle = (e) => {
    setMonValue(e.target.value);
  };
  return (
    <>
      <input onChange={handle} />
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
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      </BarChart>
    </>
  );
}
