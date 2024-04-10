// MapComponent.jsx
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent = () => {
  useEffect(() => {
    const map = L.map('map').setView([18.51844, 73.85003], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    L.marker([18.51844, 73.85003]).addTo(map)
      .bindPopup('A marker pointing to Pune, India.')
      .openPopup();
  }, []);

  return (
    <div id="map" style={{ width: '600px', height: '600px' }}></div>
  );
};

export default MapComponent;
