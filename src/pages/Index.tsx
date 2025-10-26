import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import MapView from "@/components/MapView";
import LocationCard from "@/components/LocationCard";
import LocationList from "@/components/LocationList";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <SearchBar />
        <MapView />
        <LocationCard
          name="CRAS Jardim América"
          address="R: das Acácias, 123, Jardim América"
          distance="2,5 km"
          hours="Atendimento: 08 h - 17 h"
        />
        <LocationList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
