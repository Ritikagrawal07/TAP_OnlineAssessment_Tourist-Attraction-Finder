import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LocationFetcher from "./components/LocationFetcher";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ThemeContext } from "./ThemeContext";

const App = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [location, setLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(""); 
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  return (
    <Router>
      <Layout theme={theme} toggleTheme={toggleTheme} userLocation={userLocation}>
        {/* Auto-fetch user location and set location + readable location */}
        <LocationFetcher
          onLocation={(coords) => setLocation(coords)}
          onLocationDetected={(locText) => setUserLocation(locText)}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                query={query}
                setQuery={setQuery}
                category={category}
                setCategory={setCategory}
                setLocation={setLocation}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
