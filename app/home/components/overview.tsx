"use client";

import {
  Radar,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const max = 1200000;
const min = 0;
const data = [
  {
    subject: "보병",
    A: 250000,
    fullMark: max,
  },
  {
    subject: "궁수",
    A: 250000,
    fullMark: max,
  },
  {
    subject: "기병",
    A: 250000,
    fullMark: max,
  },
  {
    subject: "법사",
    A: 500000,
    fullMark: max,
  },
  {
    subject: "특수",
    A: 450000,
    fullMark: max,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[min, max]} />
        <Radar
          name="Troops Power"
          dataKey="A"
          stroke="#C5364C"
          fill="#C5364C"
          fillOpacity={0.9}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}
