import React, { useState } from "react";
import ClockGrid from "./components/ClockGrid";
import WorldMap from "./components/WorldMap";
import "./App.css"; // Make sure to include this for additional styling

const App = () => {
  const [selectedTimezone, setSelectedTimezone] = useState("Asia/Kolkata");

  const handleFlagClick = (timezone) => {
    setSelectedTimezone(timezone);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>World Clock Application</h1>
      </header>
      <div className="main-content">
        <div className="map-container">
          <WorldMap selectedTimezone={selectedTimezone} />
        </div>
        <div className="clock-grid-container">
          <ClockGrid
            onFlagClick={handleFlagClick}
            selectedTimezone={selectedTimezone}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
