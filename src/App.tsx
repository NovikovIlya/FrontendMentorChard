import "./styles.css";
import React, { useState } from "react";
import { Button, Modal } from 'antd';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styles from './App.module.css'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const handle = (e: any) => {
    setMonValue(e.target.value);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.inp}>
        <input onChange={handle} />
      </div>
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
        {/* <Legend /> */}
        <Bar dataKey="pv" stackId="a" fill="#EC755D" />
      </BarChart>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
      </Modal>
      <button onClick={showModal}>sss</button>
    </div>
  );
}
