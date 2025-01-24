import "leaflet/dist/leaflet.css";
import { FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const AboutLocation = () => {
  return (
    <div className="flex flex-col md:flex-row mt-40 gap-5">
      <div className="md:w-1/2 space-y-5 flex flex-col justify-center">
        <h1 className="text-5xl font-bold">Contact Info</h1>
        <h1 className="text-4xl">Get In Touch</h1>
        <p className="text-lg">
          Do you have anything in your mind to tell us? Please don&apos;t
          hesitate to get in touch to us via our contact form.
        </p>
        <div className="flex items-center space-x-5">
          <MdEmail className="text-xl"></MdEmail>
          <p>property@example.com</p>
        </div>
        <div className="flex items-center space-x-5">
          <FaPhone className="text-xl"></FaPhone>
          <p>+62-828-256-96-75</p>
        </div>
        <div className="flex items-center space-x-5">
          <MdLocationOn className="text-xl"></MdLocationOn>
          <p>32 Maria Street 196/6 New York City</p>
        </div>
      </div>
      <div className="md:w-1/2">
        <MapContainer
          className="h-96"
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default AboutLocation;
