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
  const outdoorData = data.find((item) => item.name === "Outdoor");
  const filteredData = data.filter((item) => item.name !== "Outdoor");

  return (
    <div>
      {/* Temperature Chart */}
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        Temperature (°C)
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={filteredData}
          margin={{ top: 20, right: 30, left: 10, bottom: 80 }}
        >
          <XAxis
            dataKey="name"
            angle={-30}
            textAnchor="end"
            interval={0}
            height={100}
          />
          <YAxis
            domain={[0, 50]}
            ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}
          />
          <Tooltip />
          <Legend />

          <Bar dataKey="Temperature" fill="#FDAB9E">
            <LabelList
              dataKey="Temperature"
              position="top"
              formatter={(v) => `${v}°C`}
            />
          </Bar>

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
        </BarChart>
      </ResponsiveContainer>

      {/* Humidity Chart */}
      <h2 style={{ textAlign: "center", margin: "2rem 0 1rem" }}>
        Humidity (%)
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={filteredData}
          margin={{ top: 20, right: 30, left: 10, bottom: 80 }}
        >
          <XAxis
            dataKey="name"
            angle={-30}
            textAnchor="end"
            interval={0}
            height={100}
          />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />

          <Bar dataKey="Humidity" fill="#AFDDFF">
            <LabelList
              dataKey="Humidity"
              position="top"
              formatter={(v) => `${v}%`}
            />
          </Bar>

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
    </div>
  );
}

export default DataChart;
