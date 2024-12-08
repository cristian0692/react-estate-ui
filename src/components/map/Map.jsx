import "./map.scss";
import { MapContainer, TileLayer } from "react-leaflet";
import Pin from "../../components/pin/pin";
import "leaflet/dist/leaflet.css";

function Map({ items }) {
  return (
    <MapContainer
      center={[52.4797, -1.98269]}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items?.map((item) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
}

export default Map;
