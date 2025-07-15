import React from "react";
import data from "../data/attractions.json";

const AttractionList = ({ query, category }) => {
  const filtered = data.filter((spot) => {
    const matchesQuery =
      spot.name?.toLowerCase().includes(query.toLowerCase()) ||
      spot.description?.toLowerCase().includes(query.toLowerCase());

    const matchesCategory =
      category === "All" || spot.category === category;

    return matchesQuery && matchesCategory;
  });

  return (
    <div>
      <h3>🗺️ Attractions</h3>
      {filtered.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {filtered.map((spot) => (
            <div
              key={spot.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                width: "280px"
              }}
            >
              <img src={spot.image} alt={spot.name} width="100%" />
              <h4>{spot.name}</h4>
              <p><strong>{spot.category}</strong></p>
              <p>{spot.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AttractionList;
