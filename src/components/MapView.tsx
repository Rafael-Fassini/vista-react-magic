import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix para ícones do Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapView = () => {
  // Posição inicial aleatória (São Paulo como exemplo)
  const center: L.LatLngExpression = [-23.55052, -46.633308];
  
  // Localizações dos CRAS (serão atualizadas pelo backend futuramente)
  const locations = [
    { name: "CRAS Jardim", position: [-23.548, -46.635] as L.LatLngExpression },
    { name: "CRAS Centro", position: [-23.551, -46.631] as L.LatLngExpression },
    { name: "CRAS Vila Nova", position: [-23.553, -46.629] as L.LatLngExpression },
  ];

  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full h-[400px] md:h-[500px] bg-muted rounded-lg overflow-hidden border border-border">
          <MapContainer
            center={center}
            zoom={14}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location, index) => (
              <Marker key={index} position={location.position}>
                <Popup>
                  <div className="text-sm font-semibold">{location.name}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapView;
