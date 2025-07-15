import React, { useEffect, useState } from "react";

const LocationFetcher = ({ onLocation, onLocationDetected }) => {
  const [status, setStatus] = useState("🌀 Detecting location...");

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("❌ Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        const { latitude, longitude } = coords;
        onLocation({ latitude, longitude }); // Send lat/lon to App.jsx

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          const address = data.address;

          const city =
            address.city ||
            address.town ||
            address.village ||
            address.state ||
            "Unknown";
          const country = address.country || "Unknown";

          const locationText = `${city}, ${country}`;
          setStatus(`📍 Your Location: ${locationText}`);
          onLocationDetected(locationText); // Send readable location to App.jsx
        } catch (err) {
          console.error("Reverse geocoding error:", err);
          setStatus("❌ Could not determine city name.");
          onLocationDetected("Unknown");
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        if (error.code === 1) {
          setStatus("❌ Location permission denied.");
        } else {
          setStatus("❌ Failed to retrieve location.");
        }
        onLocationDetected("Unknown");
      }
    );
  }, []);

  return <span>{status}</span>;
};

export default LocationFetcher;
