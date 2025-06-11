import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const gameFeatures = [
  {
    title: "Эпические битвы",
    description: "Сражайся в захватывающих 3v3 боях с уникальными персонажами",
    icon: "Swords",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
  },
  {
    title: "Турнирный режим",
    description: "Участвуй в еженедельных турнирах и зарабатывай призы",
    icon: "Trophy",
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400&h=300&fit=crop",
  },
  {
    title: "Кастомизация",
    description: "Создавай уникальные скины и персонализируй своих героев",
    icon: "Palette",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
  },
];

const GameFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-600/20 text-purple-300 border-purple-500/30">
            🎮 Игровые возможности
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-4">
            Почему Фальси Бравл?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Мы создаем не просто игру — мы строим целую вселенную, где каждый
            найдет что-то для себя
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {gameFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="relative mb-6 rounded-lg overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                      <Icon
                        name={feature.icon as any}
                        size={24}
                        className="text-white"
                      />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12 border border-purple-500/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Твоя поддержка делает игру лучше!
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Каждый рубль идет на разработку новых персонажей, карт и игровых
            режимов. Присоединяйся к сообществу, которое создает будущее игр!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              <Icon name="Rocket" className="mr-2" />
              Поддержать сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-300 hover:bg-purple-600/10"
            >
              <Icon name="Users" className="mr-2" />
              Присоединиться к Discord
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameFeatures;
