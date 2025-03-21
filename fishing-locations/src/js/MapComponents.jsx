import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

function MapComponent({ location }) {
  const mapRef = useRef(null); // Ініціалізація ref для карти
  const containerStyle = {
    width: "100%",
    height: "400px", // Виправлено 'heigth' на 'height'
  };
  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  useEffect(() => {
    if (mapRef.current && window.google) {
      const map = mapRef.current;

      new window.google.maps.marker.AdvancedMarkerElement({
        position: center,
        map: map,
      });
    }
  }, [location, center]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBvjuZYcbBI0Xj6Ig0bp6nBAlqTxXMFIQg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={(map) => (mapRef.current = map)} // Встановлення карти в ref
      />
    </LoadScript>
  );
}

export default MapComponent;
