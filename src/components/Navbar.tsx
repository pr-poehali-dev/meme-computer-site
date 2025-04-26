import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code, Home, Calendar, Coffee, Upload } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-code py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-primary">IT Мемы</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" icon={<Home size={18} />} text="Главная" />
          <NavLink to="/top" icon={<Coffee size={18} />} text="Топ мемы" />
          <NavLink to="/new" icon={<Calendar size={18} />} text="Свежее" />
          <NavLink to="/upload" icon={<Upload size={18} />} text="Загрузить" />
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-code-light mt-2 py-4 px-6 rounded-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <MobileNavLink to="/" icon={<Home size={18} />} text="Главная" setIsOpen={setIsOpen} />
            <MobileNavLink to="/top" icon={<Coffee size={18} />} text="Топ мемы" setIsOpen={setIsOpen} />
            <MobileNavLink to="/new" icon={<Calendar size={18} />} text="Свежее" setIsOpen={setIsOpen} />
            <MobileNavLink to="/upload" icon={<Upload size={18} />} text="Загрузить" setIsOpen={setIsOpen} />
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  text: string;
}

const NavLink = ({ to, icon, text }: NavLinkProps) => (
  <Link 
    to={to} 
    className="flex items-center gap-2 text-gray-300 hover:text-white transition duration-200"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  setIsOpen: (value: boolean) => void;
}

const MobileNavLink = ({ to, icon, text, setIsOpen }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className="flex items-center gap-2 text-code p-2 hover:bg-primary/20 rounded transition duration-200"
    onClick={() => setIsOpen(false)}
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;
