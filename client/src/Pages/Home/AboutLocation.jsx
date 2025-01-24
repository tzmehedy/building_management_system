import "leaflet/dist/leaflet.css"

import { MapContainer, TileLayer } from "react-leaflet";

const AboutLocation = () => {
  return (
    <div className="">
      <MapContainer className="h-96" center={[48.8566, 2.3522]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default AboutLocation;
