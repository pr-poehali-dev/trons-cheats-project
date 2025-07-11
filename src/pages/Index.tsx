import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            STANDOFF2
            <span className="block text-gray-600">CHEATS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Профессиональные читы для Standoff 2. Аимбот и Wallhack с защитой от
            античита.
          </p>
          <Button
            size="lg"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-6 text-lg rounded-none"
          >
            СКАЧАТЬ ЧИТЫ
          </Button>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500/5 to-transparent pointer-events-none" />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            ВОЗМОЖНОСТИ
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Aimbot Card */}
            <Card className="bg-gray-50 border-gray-200 hover:border-gray-400 transition-colors duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-600 rounded-full flex items-center justify-center">
                  <Icon name="Truck" size={24} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  АИМБОТ
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Автоматическое наведение на цель
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-700">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-gray-600" />
                    Точное наведение на голову
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-gray-600" />
                    Настраиваемая скорость
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-gray-600" />
                    FOV настройки
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-gray-600" />
                    Smooth aim режим
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Wallhack Card */}
            <Card className="bg-gray-50 border-gray-200 hover:border-gray-400 transition-colors duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-600 rounded-full flex items-center justify-center">
                  <Icon name="Truck" size={24} className="text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  WALLHACK
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Видение сквозь стены
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-700">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-gray-600" />
                    ESP боксы вокруг игроков
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-gray-600" />
                    Информация о здоровье
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-gray-600" />
                    Отображение оружия
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="Check" size={16} className="text-gray-600" />
                    Дистанция до цели
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            ГОТОВ К ДОМИНИРОВАНИЮ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Получи преимущество над противниками уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-6 text-lg rounded-none"
            >
              <Icon name="Download" size={20} className="mr-2" />
              СКАЧАТЬ БЕСПЛАТНО
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-400 text-gray-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-none"
            >
              <Icon name="Shield" size={20} className="mr-2" />
              ПРЕМИУМ ВЕРСИЯ
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-300">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2025 Standoff2 Cheats. Только для образовательных целей.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
