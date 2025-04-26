import { useState } from 'react';
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react';

interface MemeCardProps {
  title: string;
  imageUrl: string;
  likes: number;
  comments: number;
  tags: string[];
}

const MemeCard = ({ title, imageUrl, likes, comments, tags }: MemeCardProps) => {
  const [liked, setLiked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setCurrentLikes(currentLikes - 1);
    } else {
      setCurrentLikes(currentLikes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="meme-card">
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
      </div>
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full object-cover h-[240px]"
        loading="lazy"
      />
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <button 
            className={`flex items-center gap-1 ${liked ? 'text-primary' : 'text-gray-400'} hover:text-primary transition-colors`}
            onClick={handleLike}
          >
            <ThumbsUp size={18} />
            <span>{currentLikes}</span>
          </button>
          
          <button className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors">
            <MessageSquare size={18} />
            <span>{comments}</span>
          </button>
          
          <button className="flex items-center gap-1 text-gray-400 hover:text-primary transition-colors">
            <Share2 size={18} />
            <span>Поделиться</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemeCard;
