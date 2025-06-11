import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  price: string;
  gems?: number;
}

const PaymentModal = ({
  isOpen,
  onClose,
  packageName,
  price,
  gems,
}: PaymentModalProps) => {
  const [gameId, setGameId] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (gameId && playerName) {
      setStep(2);
    }
  };

  const handlePayment = () => {
    // Здесь будет логика отправки данных для обработки платежа
    alert(
      `Платеж на сумму ${price} для игрока ${playerName} (ID: ${gameId}) отправлен на обработку. Переведите средства на карту 2204120122660794 и свяжитесь с поддержкой.`,
    );
    onClose();
    setStep(1);
    setGameId("");
    setPlayerName("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Оформление {packageName}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {step === 1
              ? "Введите данные вашего игрового аккаунта"
              : "Подтвердите покупку"}
          </DialogDescription>
        </DialogHeader>

        {step === 1 ? (
          <div className="space-y-4">
            <div>
              <Label htmlFor="gameId" className="text-white">
                Игровой ID
              </Label>
              <Input
                id="gameId"
                value={gameId}
                onChange={(e) => setGameId(e.target.value)}
                placeholder="Введите ваш игровой ID"
                className="bg-slate-800 border-slate-600 text-white"
              />
            </div>

            <div>
              <Label htmlFor="playerName" className="text-white">
                Никнейм в игре
              </Label>
              <Input
                id="playerName"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Введите ваш никнейм"
                className="bg-slate-800 border-slate-600 text-white"
              />
            </div>

            <Button
              onClick={handleNextStep}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              disabled={!gameId || !playerName}
            >
              Продолжить
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Пакет:</span>
                <span className="text-white font-semibold">{packageName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Цена:</span>
                <span className="text-purple-400 font-bold">{price}</span>
              </div>
              {gems && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Гемы:</span>
                  <span className="text-green-400 font-semibold">{gems}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-400">Игрок:</span>
                <span className="text-white">{playerName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">ID:</span>
                <span className="text-white">{gameId}</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-4 border border-purple-500/20">
              <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                <Icon name="CreditCard" className="mr-2 text-purple-400" />
                Данные для перевода
              </h4>
              <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30 mb-2">
                Карта Сбербанка
              </Badge>
              <p className="text-2xl font-mono text-green-400 font-bold tracking-wider">
                2204 1201 2266 0794
              </p>
              <p className="text-gray-400 text-sm mt-2">
                После перевода свяжитесь с поддержкой в Telegram: @falsi_support
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setStep(1)}
                variant="outline"
                className="flex-1 border-slate-600 text-gray-300 hover:bg-slate-800"
              >
                Назад
              </Button>
              <Button
                onClick={handlePayment}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Подтвердить
                <Icon name="Check" className="ml-2" />
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
