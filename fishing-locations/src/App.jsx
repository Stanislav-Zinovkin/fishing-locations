import React, { useState } from "react";
import Header from "./js/Header";
import MapComponents from "./js/MapComponents";
import FishingSpots from "./js/FishingSpots";
import LocationTracker from "./js/LocationTracker";

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
