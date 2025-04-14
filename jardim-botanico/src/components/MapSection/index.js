import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';


//COLOCAR EM UM .ENV DEPOIS
const API_KEY = 'AIzaSyCvLkzPcr3l8HjR9AphjViWiLb6a3McGeA';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const center = {
  lat: -29.717575,
  lng: -53.715126
};

const MapSection = () => {
    const markerIcon = window.google && window.google.maps ? {
    url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
    scaledSize: new window.google.maps.Size(40, 40)
  } : null;

  return (
    <LoadScript
      googleMapsApiKey={API_KEY}
      loadingElement={<div style={{ height: '400px' }} />}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        options={{
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false
        }}
      >
        {markerIcon && (
          <Marker
            position={center}
            title="Jardim Botânico da UFSM"
            icon={markerIcon}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapSection;