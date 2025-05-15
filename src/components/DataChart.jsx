import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
  ReferenceLine,
} from "recharts";

function DataChart({ data }) {
  // Extract outdoor data and filter it out from bar data
  const outdoorData = data.find((item) => item.name === "Outdoor");
  const filteredData = data.filter((item) => item.name !== "Outdoor");

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={filteredData}
        margin={{ top: 20, right: 30, left: 10, bottom: 30 }}
      >
        <XAxis
          dataKey="name"
          angle={-30}
          textAnchor="end"
          interval={0}
          height={100}
        />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey="Temperature" fill="#FDAB9E">
          <LabelList
            dataKey="Temperature"
            position="top"
            formatter={(v) => `${v}°C`}
          />
        </Bar>

        <Bar dataKey="Humidity" fill="#AFDDFF">
          <LabelList
            dataKey="Humidity"
            position="top"
            formatter={(v) => `${v}%`}
          />
        </Bar>

        {/* Horizontal Reference Line for Outdoor Temperature */}
        {outdoorData && (
          <ReferenceLine
            y={outdoorData.Temperature}
            stroke="#E50046"
            strokeDasharray="3 3"
            label={{
              value: `Outdoor Temp: ${outdoorData.Temperature}°C`,
              position: "insideTopLeft",
              fill: "#E50046",
              fontSize: 12,
            }}
          />
        )}

        {/* Horizontal Reference Line for Outdoor Humidity */}
        {outdoorData && (
          <ReferenceLine
            y={outdoorData.Humidity}
            stroke="#1B56FD"
            strokeDasharray="3 3"
            label={{
              value: `Outdoor Humidity: ${outdoorData.Humidity}%`,
              position: "insideTopLeft",
              fill: "#1B56FD",
              fontSize: 12,
            }}
          />
        )}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default DataChart;
