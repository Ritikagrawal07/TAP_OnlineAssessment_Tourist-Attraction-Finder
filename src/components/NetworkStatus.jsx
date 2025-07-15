import React, { useEffect, useState } from "react";

const NetworkStatus = () => {
  const [connectionType, setConnectionType] = useState("unknown");
  const [isSlow, setIsSlow] = useState(false);

  useEffect(() => {
    if ("connection" in navigator) {
      const conn = navigator.connection;
      setConnectionType(conn.effectiveType);

      if (["slow-2g", "2g"].includes(conn.effectiveType)) {
        setIsSlow(true);
      }

      conn.addEventListener("change", () => {
        setConnectionType(conn.effectiveType);
        setIsSlow(["slow-2g", "2g"].includes(conn.effectiveType));
      });
    }
  }, []);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <p>📶 Network Type: {connectionType}</p>
      {isSlow && <p style={{ color: "red" }}>⚠️ Slow connection detected</p>}
    </div>
  );
};

export default NetworkStatus;
