import React, { useState } from "react";
import DataFetcher from "./components/DataFetcher";
import DataChart from "./components/DataChart";

function App() {
  const [chartData, setChartData] = useState([]);
  const [lastUpdate, setLastUpdate] = useState("");

  const handleDataLoaded = ({ outdoor, indoor, timestamp }) => {
    const combined = [{ name: "Outdoor", ...outdoor }, ...indoor];
    setChartData(combined);
    setLastUpdate(timestamp);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Polytunnel Temperature and Humidity Comparison</h2>
      {lastUpdate && (
        <p>
          <strong>Last Updated:</strong>{" "}
          {new Date(lastUpdate.replace("_", "T")).toLocaleString()}
        </p>
      )}
      <DataFetcher onDataLoaded={handleDataLoaded} />
      <DataChart data={chartData} />
    </div>
  );
}

export default App;
