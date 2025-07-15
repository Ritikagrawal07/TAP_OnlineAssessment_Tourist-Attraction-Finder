import { useEffect } from "react";

const BackgroundSaver = ({ query, category }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const logs = JSON.parse(localStorage.getItem("activityLogs") || "[]");

      const newEntry = {
        timestamp: new Date().toLocaleString(),
        query,
        category
      };

      logs.push(newEntry);

      localStorage.setItem("activityLogs", JSON.stringify(logs));
      console.log("🔁 Saved to localStorage:", newEntry);
    }, 10000); // every 10 seconds

    return () => clearInterval(intervalId); // clean up on unmount
  }, [query, category]);

  return null; // No UI
};

export default BackgroundSaver;
