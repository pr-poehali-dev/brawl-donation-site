import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import PaymentModal from "./PaymentModal";

interface DonationTier {
  id: string;
  title: string;
  price: string;
  description: string;
  benefits: string[];
  popular?: boolean;
  color: string;
  icon: string;
  gems?: number;
}

const donationTiers: DonationTier[] = [
  {
    id: "starter",
    title: "Поддержка",
    price: "₽299",
    description: "Базовая поддержка проекта",
    benefits: [
      "170 гемов на аккаунт",
      "Особый значок в игре",
      "Доступ к закрытому чату",
      "Благодарность в титрах",
    ],
    color: "from-blue-500 to-cyan-500",
    icon: "Heart",
    gems: 170,
  },
  {
    id: "premium",
    title: "Falsi Premium",
    price: "₽999",
    description: "Премиум подписка",
    benefits: [
      "500 гемов на аккаунт",
      "Рандомный скин персонажа",
      "VIP статус в сообществе",
      "Ранний доступ к обновлениям",
      "Персональная благодарность",
    ],
    popular: true,
    color: "from-purple-500 to-pink-500",
    icon: "Crown",
    gems: 500,
  },
  {
    id: "legend",
    title: "Легенда",
    price: "₽2499",
    description: "Максимальная поддержка",
    benefits: [
      "1500 гемов на аккаунт",
      "Именной NPC в игре",
      "Участие в тестировании",
      "Прямая связь с разработчиками",
      "Все предыдущие награды",
    ],
    color: "from-orange-500 to-red-500",
    icon: "Zap",
    gems: 1500,
  },
];

interface DonationCardProps {
  tier: DonationTier;
}

const DonationCard = ({ tier }: DonationCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Card
      className={`relative bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 ${tier.popular ? "ring-2 ring-purple-500" : ""}`}
    >
      {tier.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            🔥 Популярный
          </Badge>
        </div>
      )}

      <CardHeader className="text-center pb-4">
        <div
          className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center`}
        >
          <Icon name={tier.icon as any} size={32} className="text-white" />
        </div>
        <CardTitle className="text-2xl text-white">{tier.title}</CardTitle>
        <div className="text-3xl font-bold text-purple-400 mb-2">
          {tier.price}
        </div>
        <CardDescription className="text-gray-400">
          {tier.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {tier.benefits.map((benefit, index) => (
          <div key={index} className="flex items-center text-gray-300">
            <Icon
              name="Check"
              size={16}
              className="text-green-400 mr-3 flex-shrink-0"
            />
            <span>{benefit}</span>
          </div>
        ))}
      </CardContent>

      <CardFooter>
        <Button
          onClick={handleBuyClick}
          className={`w-full bg-gradient-to-r ${tier.color} hover:opacity-90 text-white font-semibold`}
          size="lg"
        >
          <Icon name="Heart" className="mr-2" />
          Поддержать
        </Button>

        <PaymentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          packageName={tier.title}
          price={tier.price}
          gems={tier.gems}
        />
      </CardFooter>
    </Card>
  );
};

const DonationCards = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Выбери свой уровень поддержки
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Каждый донат помогает нам создавать лучший игровой контент и
            добавлять новые фичи
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {donationTiers.map((tier) => (
            <DonationCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonationCards;
