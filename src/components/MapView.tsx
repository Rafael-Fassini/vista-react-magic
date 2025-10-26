import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in react-leaflet
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = new Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const MapView = () => {

  // CRAS locations - posição inicial em São Paulo
  const crasLocations = [
    {
      name: "CRAS Jardim",
      position: [-23.5505, -46.6333] as [number, number],
    },
    {
      name: "CRAS Centro",
      position: [-23.5489, -46.6388] as [number, number],
    },
    {
      name: "CRAS Vila Nova",
      position: [-23.5557, -46.6395] as [number, number],
    },
  ];

  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-border">
          <MapContainer
            center={[-23.5505, -46.6333]}
            zoom={13}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {crasLocations.map((location, index) => (
              <Marker key={index} position={location.position} icon={DefaultIcon}>
                <Popup>
                  <div className="font-semibold">{location.name}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          
          <div className="absolute top-4 left-4 bg-card px-3 py-2 rounded-md shadow-md text-sm text-muted-foreground z-[1000]">
            Mapa interativo
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
