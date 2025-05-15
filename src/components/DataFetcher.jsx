import React, { useEffect, useState } from "react";
import { database, ref, get, child } from "../firebase";

function DataFetcher({ onDataLoaded }) {
  const [loading, setLoading] = useState(true);

  const fetchLatestData = async () => {
    const dbRef = ref(database);
    try {
      const snapshot = await get(child(dbRef, `/`));
      if (snapshot.exists()) {
        const data = snapshot.val();

        // Outdoor data
        const outdoorTimes = Object.keys(data.Outdoor || {});
        const latestOutdoorKey = outdoorTimes[outdoorTimes.length - 1];
        const outdoor = data.Outdoor[latestOutdoorKey];

        // Indoor Sections
        const sections = ["Section1", "Section2", "Section3"];
        let indoor = [];

        sections.forEach((section) => {
          for (let i = 1; i <= 5; i++) {
            const sensorData = data[section]?.[`Sensor${i}`];
            if (sensorData) {
              const timestamps = Object.keys(sensorData);
              const latestKey = timestamps[timestamps.length - 1];
              indoor.push({
                name: `${section}-Sensor${i}`,
                ...sensorData[latestKey],
              });
            }
          }
        });

        // Send outdoor, indoor, and timestamp to parent
        onDataLoaded({
          outdoor,
          indoor,
          timestamp: latestOutdoorKey,
        });
        setLoading(false);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchLatestData();
  }, []);

  return loading ? <p>Loading...</p> : null;
}

export default DataFetcher;
