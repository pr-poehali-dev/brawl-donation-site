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
    </div>
  );
};

export default Index;
