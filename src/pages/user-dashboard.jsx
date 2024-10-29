"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
} from "recharts";
import { community, personCheck } from "../assets";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

const lineChartData = [
  { name: "Mon", firstTimers: 100, soulsWon: 120 },
  { name: "Tue", firstTimers: 200, soulsWon: 180 },
  { name: "Wed", firstTimers: 150, soulsWon: 200 },
  { name: "Thu", firstTimers: 180, soulsWon: 160 },
  { name: "Fri", firstTimers: 300, soulsWon: 180 },
  { name: "Sat", firstTimers: 250, soulsWon: 140 },
  { name: "Sun", firstTimers: 180, soulsWon: 170 },
];

const genderData = [
  { name: "Male", value: 60 },
  { name: "Female", value: 40 },
];

const totalSoulWonData = [{ name: "Progress", value: 74000, fill: "#8884d8" }];

const COLORS = ["#8884d8", "#FF8042"];

export default function Dashboard() {
  const { user, isAuthenticated, clearMessages } = useAuth(); // Destructure states and functions from useAuth
  const navigate = useNavigate();

  useEffect(() => {
    clearMessages();
  }, []);

  useEffect(() => {
    if (!user || !isAuthenticated) {
      navigate("/log-in");
    }
  }, [user, isAuthenticated, navigate]);
  return (
    <div className="p-4 space-y-4 mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 md:py-12 max-w-7xl">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="bg-[#F9F9F9] shadow-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            {/* <CardTitle className="text-sm font-medium">Souls won</CardTitle> */}
            <img
              src={community}
              alt="community"
              className="h-4 w-4 text-purple-600"
            />
          </CardHeader>
          <CardContent>
            <div className="text-3xl md:text-4xl font-bold">135</div>
            <p className="text-lg font-extralight text-muted-foreground">
              Souls won
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#F9F9F9] shadow-none">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            {/* <CardTitle className="text-sm font-medium">First timer</CardTitle> */}
            <img src={personCheck} alt="" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl md:text-4xl font-bold">200</div>
            <p className="text-lg font-extralight text-muted-foreground">
              First timer
            </p>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-[#F9F9F9] shadow-none">
        <CardHeader>
          <CardTitle>Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineChartData}>
              <Line
                type="monotone"
                dataKey="firstTimers"
                stroke="#8884d8"
                name="First timers"
              />
              <Line
                type="monotone"
                dataKey="soulsWon"
                stroke="#FF8042"
                name="Souls won"
              />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#F9F9F9] shadow-none">
          <CardHeader>
            <CardTitle>Total soul won</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={230}>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                barSize={10}
                data={totalSoulWonData}
                startAngle={300}
                endAngle={0}
              >
                <RadialBar
                  minAngle={15}
                  label={{ position: "center", fill: "#8884d8" }}
                  background
                  clockWise={true}
                  dataKey="value"
                />
                <text
                  x="30%"
                  y="30%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xl font-bold fill-current -translate-x-1/2 -translate-y-1/2"
                >
                  {/* 74,000 */}
                </text>
                <text
                  x="50%"
                  y="60%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-sm fill-current"
                >
                  of 100,000
                </text>
              </RadialBarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="bg-[#F9F9F9] shadow-none">
          <CardHeader>
            <CardTitle>Gender Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={230} className="">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {genderData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
