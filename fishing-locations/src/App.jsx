import React, { useState } from "react";
import Header from "./js/Header";
import MapComponents from "./js/MapComponents";
import FishingSpots from "./js/FishingSpots";
import LocationTracker from "./js/LocationTracker";
import SignUp from "./components/SignUp";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      {/* Кнопка для відкриття модального вікна реєстрації */}
      <button onClick={openModal}>SignUp</button>

      {/* Модальне вікно реєстрації */}
      <SignUp isOpen={isModalOpen} onClose={closeModal} />

      {/* Головний контент: відображення карти та місць для риболовлі */}
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
