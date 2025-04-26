import { useState, useEffect } from 'react';

const TerminalSection = () => {
  const [text, setText] = useState('');
  const fullText = '> Добро пожаловать в мир IT мемов!\n> Загружаем дейли дозу хихикалок...\n> sudo apt-get install humor\n> npm install --save memes\n> Успешно! Счастливого кодинга!';
  
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);
    
    return () => clearInterval(typing);
  }, []);
  
  return (
    <div className="terminal mb-8 overflow-hidden">
      <div className="flex items-center mb-2">
        <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <div className="ml-4 text-gray-400 text-sm">bash ~ programming-humor</div>
      </div>
      <pre className="whitespace-pre-line text-green-400">
        {text}
        <span className="animate-pulse">_</span>
      </pre>
    </div>
  );
};

export default TerminalSection;
