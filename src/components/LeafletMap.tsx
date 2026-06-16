import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "../App.css";

type Place = {
  id: number;
  name: string;
  address: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

type LeafLetMapProps = {
  places: Place[];
};

const LeafletMap = ({ places }: LeafLetMapProps) => {
  const center: LatLngExpression = [40.73061, -73.935242];

  return (
    <div className="map-wrapper">
      <MapContainer center={center} zoom={11} className="leaflet-map">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {places.map((place) => (
          <Marker
            key={place.id}
            position={[place.coordinates.lat, place.coordinates.lng]}
          >
            <Popup>
              <strong>{place.name}</strong>
              <br />
              {place.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LeafletMap;