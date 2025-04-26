import Navbar from '../components/Navbar';
import MemeCard from '../components/MemeCard';
import TerminalSection from '../components/TerminalSection';
import { Button } from '../components/ui/button';

const memeData = [
  {
    id: 1,
    title: "Когда багфикс создаёт 5 новых багов",
    imageUrl: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=500",
    likes: 241,
    comments: 42,
    tags: ["багфикс", "программирование", "боль"]
  },
  {
    id: 2,
    title: "Мой код в 3 часа ночи vs Мой код наутро",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500",
    likes: 512,
    comments: 78,
    tags: ["код", "дедлайн", "усталость"]
  },
  {
    id: 3,
    title: "Когда запустил код и он работает с первого раза",
    imageUrl: "https://images.unsplash.com/photo-1690132101048-01df64e419d5?q=80&w=500",
    likes: 876,
    comments: 125,
    tags: ["успех", "редкость", "удивление"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Мемы для IT-шников</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Место, где программисты могут отдохнуть от багов и посмеяться над своей профессией
          </p>
        </div>
        
        {/* Терминал-секция */}
        <TerminalSection />
        
        {/* Мем дня */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Мем дня</h2>
            <div className="h-1 flex-grow mx-4 bg-primary/30 rounded"></div>
            <span className="text-muted-foreground">26.04.2025</span>
          </div>
          
          <div className="bg-card rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?q=80&w=500" 
              alt="Мем дня" 
              className="w-full object-cover h-[400px]"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">Когда тестировщик находит баг в твоем "идеальном" коде</h3>
              <p className="text-muted-foreground mb-4">
                Классическая ситуация: ты уверен, что твой код безупречен, а тестировщик за 5 минут находит критический баг.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">#тестирование</span>
                  <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">#баги</span>
                  <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">#реальность</span>
                </div>
                <Button variant="outline" className="hover:bg-primary/20">
                  Поделиться
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Популярные мемы */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold">Популярные мемы</h2>
            <div className="h-1 flex-grow ml-4 bg-primary/30 rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memeData.map((meme) => (
              <MemeCard 
                key={meme.id}
                title={meme.title}
                imageUrl={meme.imageUrl}
                likes={meme.likes}
                comments={meme.comments}
                tags={meme.tags}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button className="px-8 py-6 text-lg">
              Загрузить больше мемов
            </Button>
          </div>
        </section>
        
        {/* Программерский юмор */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <h2 className="text-2xl font-bold">Программерские шутки</h2>
            <div className="h-1 flex-grow ml-4 bg-primary/30 rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="terminal">
              <p className="mb-2 text-green-400">$ Почему HTML это не язык программирования?</p>
              <p className="text-yellow-300">$ Потому что ему не хватает цикла while(alive) {'{'} findErrors(); fixBugs(); {'}'}</p>
            </div>
            
            <div className="terminal">
              <p className="mb-2 text-green-400">$ Сколько программистов нужно, чтобы заменить лампочку?</p>
              <p className="text-yellow-300">$ Ни одного. Это проблема на стороне железа.</p>
            </div>
            
            <div className="terminal">
              <p className="mb-2 text-green-400">$ [ERROR] Пожалуйста, закройте Firefox, чтобы продолжить установку</p>
              <p className="text-yellow-300">$ *открывает Chrome, чтобы погуглить, как закрыть Firefox*</p>
            </div>
            
            <div className="terminal">
              <p className="mb-2 text-green-400">$ Что сказал JavaScript PHP?</p>
              <p className="text-yellow-300">$ Ты на сервере, я в браузере, но мы оба неправильно поняты.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-code py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-2">© 2025 IT Мемы — место, где разработчики смеются сквозь слёзы</p>
          <p className="text-sm">Создано с использованием React, TypeScript и большого количества кофе</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
