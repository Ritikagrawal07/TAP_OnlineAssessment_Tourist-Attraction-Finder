import React from "react";

const Filters = ({ selected, onChange }) => {
  const categories = ["All", "Historical", "Nature", "Art","Adventure"];

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label style={{ marginRight: "10px" }}>🎯 Filter by Category:</label>
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
