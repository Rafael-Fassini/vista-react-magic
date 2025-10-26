import { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const MapView = () => {

  // Posição inicial aleatória (latitude entre -60 e 60 para evitar polos)
  const initialCenter = useMemo(() => {
    const lat = (Math.random() * 120 - 60).toFixed(6);
    const lng = (Math.random() * 360 - 180).toFixed(6);
    return [Number(lat), Number(lng)] as [number, number];
  }, []);

  // CRAS locations - posição em São Paulo (exemplo)
  const crasLocations = [
    { name: "CRAS Jardim", position: [-23.5505, -46.6333] as [number, number] },
    { name: "CRAS Centro", position: [-23.5489, -46.6388] as [number, number] },
    { name: "CRAS Vila Nova", position: [-23.5557, -46.6395] as [number, number] },
  ];

  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-border">
          <MapContainer
            center={initialCenter}
            zoom={5}
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {crasLocations.map((location, index) => (
              <Marker key={index} position={location.position}>
                <Popup>
                  <div className="font-semibold">{location.name}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          <div className="absolute top-4 left-4 bg-card px-3 py-2 rounded-md shadow-md text-sm text-muted-foreground z-[1000]">
            Mapa interativo (posição inicial aleatória)
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
