import React, { useState, useEffect } from "react";

function FishingSpots({ location }) {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const fetchSpots = async () => {
      const response = await fetch();
      //find a normal api for fishing spots or remind this
      const data = await response.json();
      setSpots(data.spots);
    };

    fetchSpots();
  }, [location]);
  return (
    <div>
      <h2>Fishing spots</h2>
      <ul>
        {spots.map((spot) => (
          <li key={spot.id}>
            <h3>{spot.name}</h3>
            <p>{spot.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FishingSpots;
