import React from "react";
import { useLoaderData } from "react-router-dom";
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

const Statistics = () => {
  const data = useLoaderData().data;

  return (
    <div className="mx-auto shadow-lg rounded-xl w-full max-w-lg p-6 bg-white dark:bg-gray-800 bg-teal-200 dark:text-white text-gray-600 overflow-hidden mt-6">
      <h4 className="my-10  font-bold text-xl  ">Quiz Statistics</h4>
      <ResponsiveContainer height={300}>
        <LineChart
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
          <CartesianGrid strokeDasharray="8 8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            strokeWidth={3}
            stroke="#AD4335"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
