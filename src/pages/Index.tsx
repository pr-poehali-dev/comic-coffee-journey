import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-coffee-lightCream">
      {/* Header */}
      <header className="bg-coffee-brown text-white p-4 shadow-xl border-b-4 border-black">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">☕ Coffee Story</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#story" className="hover:text-coffee-orange transition-colors">История</a>
            <a href="#characters" className="hover:text-coffee-orange transition-colors">Персонажи</a>
            <a href="#cafe" className="hover:text-coffee-orange transition-colors">Кофейня</a>
            <a href="#contact" className="hover:text-coffee-orange transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      {/* Hero Section - Main Story */}
      <section id="story" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-coffee-darkBrown mb-4">
              Магия превращения ☕
            </h2>
            <p className="text-xl text-coffee-brown font-semibold">
              История о том, как грустные люди обретают счастье через кофе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Panel 1 - Before */}
            <div className="comic-panel hover-scale">
              <div className="text-center">
                <div className="text-6xl mb-4">😢</div>
                <div className="speech-bubble mb-4">
                  Ох, как грустно...
                </div>
                <p className="font-bold text-coffee-darkBrown">ДО</p>
              </div>
            </div>

            {/* Panel 2 - Process */}
            <div className="comic-panel hover-scale">
              <div className="text-center">
                <div className="text-6xl mb-4">☕</div>
                <div className="speech-bubble mb-4">
                  Глоток счастья!
                </div>
                <p className="font-bold text-coffee-brown">ПРОЦЕСС</p>
              </div>
            </div>

            {/* Panel 3 - After */}
            <div className="comic-panel hover-scale">
              <div className="text-center">
                <div className="text-6xl mb-4">😊</div>
                <div className="speech-bubble mb-4">
                  Теперь я счастлив!
                </div>
                <p className="font-bold text-coffee-orange">ПОСЛЕ</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <img 
              src="/img/ca540016-aabd-44fb-ad51-335f13a2321c.jpg" 
              alt="Coffee transformation story" 
              className="mx-auto rounded-lg border-4 border-black shadow-xl max-w-2xl w-full hover-scale"
            />
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-16 px-4 bg-coffee-cream">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-coffee-darkBrown mb-12">
            Наши герои
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Анна", before: "😔", after: "😊", phrase: "Кофе спас мой день!" },
              { name: "Максим", before: "😞", after: "😄", phrase: "Это волшебство!" },
              { name: "Елена", before: "😭", after: "😍", phrase: "Лучший латте в городе!" },
              { name: "Игорь", before: "😣", after: "🤩", phrase: "Теперь я фанат кофе!" }
            ].map((character, index) => (
              <Card key={index} className="comic-panel hover-scale">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-coffee-darkBrown mb-4">{character.name}</h3>
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <span className="text-3xl">{character.before}</span>
                    <Icon name="ArrowRight" size={24} className="text-coffee-brown" />
                    <span className="text-3xl">{character.after}</span>
                  </div>
                  <div className="speech-bubble text-sm">
                    {character.phrase}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <img 
              src="/img/1353e23b-c0d2-4af8-9aef-792701dcb412.jpg" 
              alt="Comic characters" 
              className="mx-auto rounded-lg border-4 border-black shadow-xl max-w-xl w-full hover-scale"
            />
          </div>
        </div>
      </section>

      {/* Cafe Section */}
      <section id="cafe" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-coffee-darkBrown mb-12">
            Магическая кофейня
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="comic-panel">
              <h3 className="text-2xl font-bold text-coffee-darkBrown mb-6">☕ Наше меню</h3>
              <div className="space-y-4">
                {[
                  { name: "Эспрессо счастья", price: "150₽", effect: "Мгновенная радость" },
                  { name: "Латте любви", price: "250₽", effect: "Теплые чувства" },
                  { name: "Капучино мечты", price: "220₽", effect: "Исполнение желаний" },
                  { name: "Американо энергии", price: "180₽", effect: "Заряд бодрости" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg border-2 border-coffee-brown">
                    <div>
                      <h4 className="font-bold text-coffee-darkBrown">{item.name}</h4>
                      <p className="text-sm text-coffee-brown">{item.effect}</p>
                    </div>
                    <span className="font-bold text-coffee-orange">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="comic-panel">
              <h3 className="text-2xl font-bold text-coffee-darkBrown mb-6">🏪 О нашей кофейне</h3>
              <div className="space-y-4">
                <div className="speech-bubble">
                  Добро пожаловать в место, где грусть превращается в радость!
                </div>
                <p className="text-coffee-brown">
                  Наша кофейня - это не просто место для кофе. Это магическое пространство, 
                  где каждый глоток напитка дарит новые эмоции и превращает серые будни в яркие моменты.
                </p>
                <div className="flex items-center gap-2 text-coffee-darkBrown">
                  <Icon name="MapPin" size={20} />
                  <span>ул. Счастливая, 42</span>
                </div>
                <div className="flex items-center gap-2 text-coffee-darkBrown">
                  <Icon name="Clock" size={20} />
                  <span>Ежедневно 7:00 - 23:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-coffee-cream">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-coffee-darkBrown mb-12">
            Свяжитесь с нами
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="comic-panel">
              <CardContent className="p-8">
                <div className="speech-bubble mb-6 text-center">
                  Расскажите нам свою историю превращения!
                </div>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-coffee-darkBrown font-bold mb-2">Ваше имя</label>
                    <Input className="border-4 border-coffee-brown rounded-lg" placeholder="Как к вам обращаться?" />
                  </div>
                  
                  <div>
                    <label className="block text-coffee-darkBrown font-bold mb-2">Email</label>
                    <Input type="email" className="border-4 border-coffee-brown rounded-lg" placeholder="your@email.com" />
                  </div>
                  
                  <div>
                    <label className="block text-coffee-darkBrown font-bold mb-2">Ваша история</label>
                    <Textarea 
                      className="border-4 border-coffee-brown rounded-lg" 
                      rows={4}
                      placeholder="Расскажите, как кофе изменил ваш день..."
                    />
                  </div>
                  
                  <Button className="comic-button w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить историю
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coffee-darkBrown text-white p-8 border-t-4 border-black">
        <div className="container mx-auto text-center">
          <div className="speech-bubble bg-coffee-darkBrown text-white border-white mb-6">
            Спасибо, что стали частью нашей кофейной истории! ☕
          </div>
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="hover:text-coffee-orange transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="#" className="hover:text-coffee-orange transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="#" className="hover:text-coffee-orange transition-colors">
              <Icon name="MapPin" size={24} />
            </a>
          </div>
          <p className="text-coffee-cream">© 2024 Coffee Story. Превращаем грусть в радость с 2020 года.</p>
        </div>
      </footer>
    </div>
  );
}