import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapComponent({ location }) {
  const containerStyle = {
    width: "100%",
    heigth: "400px",
  };
  const center = {
    lat: location.lat,
    lng: location.lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBvjuZYcbBI0Xj6Ig0bp6nBAlqTxXMFIQg">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center}></Marker>
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponents;
