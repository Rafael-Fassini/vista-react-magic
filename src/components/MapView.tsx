import { MapPin } from "lucide-react";

const MapView = () => {
  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full h-[400px] md:h-[500px] bg-muted rounded-lg overflow-hidden border border-border">
          {/* Map placeholder with pins */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-50" />
          
          {/* Sample map pins */}
          <div className="absolute top-1/3 left-1/3">
            <MapPin className="h-8 w-8 text-accent drop-shadow-lg" fill="currentColor" />
          </div>
          <div className="absolute top-1/2 left-1/2">
            <MapPin className="h-8 w-8 text-accent drop-shadow-lg" fill="currentColor" />
          </div>
          <div className="absolute bottom-1/3 right-1/3">
            <MapPin className="h-8 w-8 text-accent drop-shadow-lg" fill="currentColor" />
          </div>
          
          {/* Decorative grid lines to simulate map */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          <div className="absolute top-4 left-4 bg-card px-3 py-2 rounded-md shadow-md text-sm text-muted-foreground">
            Mapa interativo (integração disponível)
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
