import React from "react";

const SearchBar = ({ query, onChange }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder="🔎 Search attractions..."
        style={{ padding: "8px", width: "300px" }}
      />
    </div>
  );
};

export default SearchBar;
