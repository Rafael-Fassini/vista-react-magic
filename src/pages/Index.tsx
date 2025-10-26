import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import MapView from "@/components/MapView";
import LocationCard from "@/components/LocationCard";
import LocationList from "@/components/LocationList";
import Footer from "@/components/Footer";
import OnboardingProgresso from "@/components/OnboardingProgresso";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <div className="container mx-auto px-4 mb-8">
          <OnboardingProgresso />
        </div>
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
