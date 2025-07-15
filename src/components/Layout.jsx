import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ theme, toggleTheme, userLocation, children }) => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        fontFamily: "Segoe UI, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* ✅ Background image with alt */}
      <img
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww"
        alt="Tropical beach with palm trees and huts during sunset"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.4,
        }}
      />

      {/* ✅ Overlay for content */}
      <div
        style={{
  backgroundColor: theme === "dark" ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.3)",
  color: theme === "dark" ? "#fff" : "#fff",
  backdropFilter: "blur(4px)",
  flex: 1,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
}}
      >
        {/* 🔝 Header */}
        <header
  style={{
    backgroundImage: `url("https://images.unsplash.com/photo-1652700896351-3174534db580?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    color: "#fff",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
    borderBottom: "2px solid #fff",
  }}
>
  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
    <h2 style={{ margin: 0, color: "red", fontWeight: "700" }}>
      🌍 Tourist Attraction Finder
    </h2>
    {userLocation && (
      <span
        style={{
          backgroundColor: "#e0f7fa",
          padding: "4px 8px",
          borderRadius: "6px",
          fontSize: "0.9rem",
          color: "#00796b",
        }}
      >
        📍 {userLocation}
      </span>
    )}
  </div>

  <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
    <Link to="/" style={{ textDecoration: "none", color: "#fff", fontWeight: "500" }}>
      Home
    </Link>
    <Link to="/about" style={{ textDecoration: "none", color: "#fff", fontWeight: "500" }}>
      About
    </Link>
    <Link to="/contact" style={{ textDecoration: "none", color: "#fff", fontWeight: "500" }}>
      Contact
    </Link>
    <button
      onClick={toggleTheme}
      style={{
        padding: "8px 14px",
        backgroundColor: "transparent",
        border: "1px solid #fff",
        borderRadius: "6px",
        color: "#fff",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  </nav>
</header>

        {/* 🧠 Main Content */}
        <main style={{ flex: 1, padding: "24px" }}>{children}</main>

        {/* 📄 Footer */}
        <footer
  style={{
    backgroundImage: `url("https://img.freepik.com/free-photo/top-view-world-tourism-day-concept-with-copy-space_23-2148607938.jpg?t=st=1719992057~exp=1722598057~hmac=5f544054f30f9a19b5027b68e33821e9a0cbef71b419e3be27860a8e8b6a81cc&w=996")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    textAlign: "center",
    padding: "24px",
    borderTop: "2px solid #fff",
    fontSize: "0.9rem",
    fontWeight: "500",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
  }}
>
  <p style={{ margin: 0 }}>
    © {new Date().getFullYear()} Tourist Finder. All rights reserved.
  </p>
</footer>

      </div>
    </div>
  );
};

export default Layout;
