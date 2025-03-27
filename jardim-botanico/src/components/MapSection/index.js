import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -29.717575, // Coordenadas da UFSM
  lng: -53.715126
};

const MapSection = () => (
  <LoadScript googleMapsApiKey="SUA_CHAVE_API">
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
    >
      <Marker 
        position={center}
        title="Jardim Botânico da UFSM"
      />
    </GoogleMap>
  </LoadScript>
);

export default MapSection;