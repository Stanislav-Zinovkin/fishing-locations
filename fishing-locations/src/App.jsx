import React, { useState } from "react";
import Header from "./components/Header";
import MapComponents from "./components/MapComponents";
import FishingSpots from "./components/FishingSpots";
import LocationTracker from "./components/LocationTracker";

function App() {
  const [location, setLocation] = useState(null);

  return (
    <div className="App">
      <Header />
      <LocationTracker setLocation={setLocation} />
      {location && (
        <>
          <MapComponents location={location} />
          <FishingSpots location={location} />
        </>
      )}
    </div>
  );
}

export default App;
