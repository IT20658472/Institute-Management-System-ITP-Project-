import React from "react";
import "./style.css";
import {
  
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const staffbarchart = () => {
  const data = [
    { name: "Accademic", users: 10 },
    { name: "Non-Accademic", users: 15 },
    
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Summery of staff members</h1>
      <div className="staffbarchart">
      
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

export default staffbarchart;