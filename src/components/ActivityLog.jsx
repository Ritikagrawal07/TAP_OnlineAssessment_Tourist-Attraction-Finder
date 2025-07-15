import React, { useState } from "react";

const ActivityLog = () => {
  const [logs, setLogs] = useState([]);

  const handleViewLogs = () => {
    const allLogs = JSON.parse(localStorage.getItem("activityLogs") || "[]");
    const recentLogs = allLogs.slice(-6); // last 6 logs (1 min)
    setLogs(recentLogs);
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <button onClick={handleViewLogs}>🧾 View Recent Activity</button>
      <ul>
        {logs.map((log, i) => (
          <li key={i}>
            <strong>{log.timestamp}</strong> – Searched: "{log.query}" | Category: {log.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
