import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./WorldMap.css";

// Example coordinates for timezones
const timezoneCoordinates = {
  "Asia/Kolkata": [20.5937, 78.9629], // India
  "America/New_York": [40.7128, -74.006], // New York
  "Europe/London": [51.5074, -0.1278], // London
  "Asia/Tokyo": [35.6762, 139.6503], // Tokyo
  "Australia/Sydney": [-33.8688, 151.2093], // Sydney
  "America/Los_Angeles": [34.0522, -118.2437], // Los Angeles
  "Europe/Berlin": [52.52, 13.405], // Berlin
  "Asia/Shanghai": [31.2304, 121.4737], // Shanghai
  "Africa/Johannesburg": [-26.2041, 28.0473], // Johannesburg
  "America/Argentina/Buenos_Aires": [-34.6037, -58.3816], // Buenos Aires
  "Asia/Singapore": [1.3521, 103.8198], // Singapore
  "Europe/Paris": [48.8566, 2.3522], // Paris
  "America/Toronto": [43.651, -79.347], // Toronto
  "Asia/Seoul": [37.5665, 126.978], // Seoul
  "America/Mexico_City": [19.4326, -99.1332], // Mexico City
  "Pacific/Auckland": [-36.8481, 174.7626], // Auckland
};

const WorldMap = ({ selectedTimezone }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      mapInstance.current = L.map(mapRef.current, {
        center: [0, 0],
        zoom: 2,
        zoomControl: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(mapInstance.current);
    }

    if (mapInstance.current && selectedTimezone) {
      // Clear previous layers
      mapInstance.current.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          mapInstance.current.removeLayer(layer);
        }
      });

      const coords = timezoneCoordinates[selectedTimezone];
      if (coords) {
        const timezoneMarker = L.marker(coords)
          .addTo(mapInstance.current)
          .bindPopup(`Selected Timezone: ${selectedTimezone}`);
        mapInstance.current.setView(coords, 5);
      }
    }
  }, [selectedTimezone]);

  return <div className="map-container" ref={mapRef}></div>;
};

export default WorldMap;
