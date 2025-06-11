import HeroSection from "@/components/HeroSection";
import DonationCards from "@/components/DonationCard";
import GameFeatures from "@/components/GameFeatures";
import DonorLeaderboard from "@/components/DonorLeaderboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <HeroSection />
      <DonationCards />
      <GameFeatures />
      <DonorLeaderboard />
      <footer className="bg-slate-950 py-8 text-center text-gray-400">
        <p>© 2024 Falsi Brawl. Все права защищены.</p>
        <p className="text-sm mt-2">Карта для переводов: 2204120122660794</p>
      </footer>
    </div>
  );
};

export default Index;
