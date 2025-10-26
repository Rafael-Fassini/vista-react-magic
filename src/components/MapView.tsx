import { MapPin } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MapView = () => {
  const [apiKey, setApiKey] = useState("");
  const [showMap, setShowMap] = useState(false);

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  // Centro aproximado das localizações CRAS
  const center = {
    lat: -23.55052,
    lng: -46.633308,
  };

  // Localizações dos CRAS
  const locations = [
    { name: "CRAS Jardim", lat: -23.548, lng: -46.635 },
    { name: "CRAS Centro", lat: -23.551, lng: -46.631 },
    { name: "CRAS Vila Nova", lat: -23.553, lng: -46.629 },
  ];

  const handleShowMap = () => {
    if (apiKey.trim()) {
      setShowMap(true);
    }
  };

  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="max-w-6xl mx-auto">
        {!showMap ? (
          <div className="bg-card p-6 rounded-lg border border-border space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Cole sua chave de API do Google Maps
              </label>
              <p className="text-xs text-muted-foreground">
                Obtenha sua chave em:{" "}
                <a
                  href="https://console.cloud.google.com/google/maps-apis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Cloud Console
                </a>
              </p>
              <Input
                type="text"
                placeholder="AIza..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="font-mono text-sm"
              />
            </div>
            <Button onClick={handleShowMap} className="w-full">
              Carregar Mapa
            </Button>
          </div>
        ) : (
          <div className="relative w-full h-[400px] md:h-[500px] bg-muted rounded-lg overflow-hidden border border-border">
            <LoadScript googleMapsApiKey={apiKey}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={14}
                options={{
                  streetViewControl: false,
                  mapTypeControl: false,
                }}
              >
                {locations.map((location, index) => (
                  <Marker
                    key={index}
                    position={{ lat: location.lat, lng: location.lng }}
                    title={location.name}
                    icon={{
                      path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
                      fillColor: "#10b981",
                      fillOpacity: 1,
                      strokeColor: "#059669",
                      strokeWeight: 2,
                      scale: 1.5,
                    }}
                  />
                ))}
              </GoogleMap>
            </LoadScript>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapView;
