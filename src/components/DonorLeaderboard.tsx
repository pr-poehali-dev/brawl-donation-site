import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

interface Donor {
  id: number;
  name: string;
  amount: string;
  rank: number;
  badge: string;
  color: string;
  initials: string;
}

const topDonors: Donor[] = [
  {
    id: 1,
    name: "GameMaster2024",
    amount: "₽25,000",
    rank: 1,
    badge: "👑 Легенда",
    color: "from-yellow-400 to-orange-500",
    initials: "GM",
  },
  {
    id: 2,
    name: "ProGamer_RU",
    amount: "₽18,500",
    rank: 2,
    badge: "⚡ Герой",
    color: "from-purple-400 to-pink-500",
    initials: "PG",
  },
  {
    id: 3,
    name: "FalsyFan123",
    amount: "₽15,200",
    rank: 3,
    badge: "🔥 Чемпион",
    color: "from-blue-400 to-cyan-500",
    initials: "FF",
  },
  {
    id: 4,
    name: "BrawlKing",
    amount: "₽12,800",
    rank: 4,
    badge: "💎 Элита",
    color: "from-green-400 to-emerald-500",
    initials: "BK",
  },
  {
    id: 5,
    name: "NightWarrior",
    amount: "₽10,300",
    rank: 5,
    badge: "⭐ Рыцарь",
    color: "from-indigo-400 to-purple-500",
    initials: "NW",
  },
  {
    id: 6,
    name: "CyberHero88",
    amount: "₽8,900",
    rank: 6,
    badge: "🎯 Снайпер",
    color: "from-red-400 to-pink-500",
    initials: "CH",
  },
  {
    id: 7,
    name: "FalsySupporter",
    amount: "₽7,500",
    rank: 7,
    badge: "🛡️ Защитник",
    color: "from-teal-400 to-blue-500",
    initials: "FS",
  },
  {
    id: 8,
    name: "GameChanger",
    amount: "₽6,200",
    rank: 8,
    badge: "⚔️ Воин",
    color: "from-amber-400 to-orange-500",
    initials: "GC",
  },
];

const DonorLeaderboard = () => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Icon name="Crown" className="text-yellow-400" size={20} />;
      case 2:
        return <Icon name="Medal" className="text-gray-300" size={20} />;
      case 3:
        return <Icon name="Award" className="text-amber-600" size={20} />;
      default:
        return <span className="text-gray-400 font-bold">#{rank}</span>;
    }
  };

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Зал славы донатеров
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Благодарим наших героев, которые делают Фальси Бравл лучше каждый
            день!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Top 3 Special Display */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {topDonors.slice(0, 3).map((donor) => (
              <Card
                key={donor.id}
                className={`bg-gradient-to-br ${donor.color} p-1 ${donor.rank === 1 ? "transform scale-105" : ""}`}
              >
                <div className="bg-slate-900 rounded-lg p-6 h-full">
                  <div className="text-center">
                    <div className="mb-4">{getRankIcon(donor.rank)}</div>
                    <Avatar className="w-16 h-16 mx-auto mb-4">
                      <AvatarFallback
                        className={`bg-gradient-to-br ${donor.color} text-white font-bold`}
                      >
                        {donor.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {donor.name}
                    </h3>
                    <div className="text-2xl font-bold text-purple-400 mb-2">
                      {donor.amount}
                    </div>
                    <Badge
                      className={`bg-gradient-to-r ${donor.color} text-white border-0`}
                    >
                      {donor.badge}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Rest of the leaderboard */}
          <Card className="bg-slate-900/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Icon name="Trophy" className="mr-2 text-yellow-400" />
                Топ донатеров
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topDonors.slice(3).map((donor) => (
                <div
                  key={donor.id}
                  className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 text-center">
                      {getRankIcon(donor.rank)}
                    </div>
                    <Avatar className="w-10 h-10">
                      <AvatarFallback
                        className={`bg-gradient-to-br ${donor.color} text-white text-sm`}
                      >
                        {donor.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-white font-semibold">
                        {donor.name}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {donor.badge}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-purple-400">
                    {donor.amount}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Become a donor CTA */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Хочешь попасть в зал славы?
            </h3>
            <p className="text-gray-300 mb-6">
              Поддержи проект и получи особое признание в сообществе!
            </p>
            <div className="flex justify-center">
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2">
                <Icon name="Star" className="mr-2" size={16} />
                Следующий донат: ₽5,000 для входа в топ-10
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonorLeaderboard;
