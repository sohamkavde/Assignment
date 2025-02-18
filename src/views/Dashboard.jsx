import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "../assets/Dashboard.css";

const Dashboard = () => {
  const [count, setCount] = useState(1200);

  // Animated counter
  const counterAnim = useSpring({ from: { number: 0 }, number: count, delay: 200 });

  // Dummy data for charts
  const userTrends = [
    { month: "Jan", users: 100 },
    { month: "Feb", users: 300 },
    { month: "Mar", users: 500 },
    { month: "Apr", users: 700 },
    { month: "May", users: 1200 },
  ];

  return (
    <div className="dashboard-container">
      {/* User Counter */}
      <div className="counter-box">
        <h2>Random Data : Total Users</h2>
        <animated.h1>{counterAnim.number.to((n) => n.toFixed(0))}</animated.h1>
      </div>

      {/* Line Chart */}
      <div className="chart-container">
        <h3>User Growth</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={userTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#007bff" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="chart-container">
        <h3>Monthly Signups</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={userTrends}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#28a745" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
