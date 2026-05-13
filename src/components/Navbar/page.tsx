import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('brightminds-theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  function toggleMenu() {
    setMenuOpen(prev => !prev);
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('brightminds-theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('brightminds-theme', 'dark');
      setDarkMode(true);
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="sticky top-0 z-[1000] flex items-center justify-between h-[68px] px-9 bg-white dark:bg-[#16213E] shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300">
      <Link to="/" className="text-2xl font-black text-[#FF6B35] tracking-tight">
        🌟 BrightMinds
      </Link>

      <button 
        className="hidden max-md:block text-[1.7rem] text-[#2D3436] dark:text-[#F0F0F0] p-1 px-2 bg-transparent border-none cursor-pointer hover:text-[#FF6B35] transition-colors duration-300"
        onClick={toggleMenu}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <ul className={`flex items-center gap-7 list-none m-0 p-0 max-md:${menuOpen ? 'flex' : 'hidden'} max-md:absolute max-md:top-[68px] max-md:left-0 max-md:w-full max-md:bg-white dark:max-md:bg-[#16213E] max-md:flex-col max-md:items-start max-md:pt-4 max-md:px-6 max-md:pb-6 max-md:gap-1 max-md:shadow-[0_4px_20px_rgba(0,0,0,0.12)]`}>
        <li className="max-md:w-full">
          <Link 
            to="/" 
            onClick={closeMenu}
            className="font-semibold text-[0.95rem] text-[#2D3436] dark:text-[#F0F0F0] py-1.5 px-0 hover:text-[#FF6B35] transition-colors duration-300 max-md:block max-md:py-2.5 max-md:border-b max-md:border-[#DFE6E9] dark:max-md:border-[#2D3436]"
          >
            Home
          </Link>
        </li>
        <li className="max-md:w-full">
          <Link 
            to="/subjects" 
            onClick={closeMenu}
            className="font-semibold text-[0.95rem] text-[#2D3436] dark:text-[#F0F0F0] py-1.5 px-0 hover:text-[#FF6B35] transition-colors duration-300 max-md:block max-md:py-2.5 max-md:border-b max-md:border-[#DFE6E9] dark:max-md:border-[#2D3436]"
          >
            Subjects
          </Link>
        </li>
        <li className="max-md:w-full">
          <Link 
            to="/services" 
            onClick={closeMenu}
            className="font-semibold text-[0.95rem] text-[#2D3436] dark:text-[#F0F0F0] py-1.5 px-0 hover:text-[#FF6B35] transition-colors duration-300 max-md:block max-md:py-2.5 max-md:border-b max-md:border-[#DFE6E9] dark:max-md:border-[#2D3436]"
          >
            Courses
          </Link>
        </li>
        <li className="max-md:w-full">
          <Link 
            to="/dashboard" 
            onClick={closeMenu}
            className="font-semibold text-[0.95rem] text-[#2D3436] dark:text-[#F0F0F0] py-1.5 px-0 hover:text-[#FF6B35] transition-colors duration-300 max-md:block max-md:py-2.5 max-md:border-b max-md:border-[#DFE6E9] dark:max-md:border-[#2D3436]"
          >
            Dashboard
          </Link>
        </li>
        <li className="max-md:w-full">
          <Link 
            to="/contact" 
            onClick={closeMenu}
            className="font-semibold text-[0.95rem] text-[#2D3436] dark:text-[#F0F0F0] py-1.5 px-0 hover:text-[#FF6B35] transition-colors duration-300 max-md:block max-md:py-2.5 max-md:border-b max-md:border-[#DFE6E9] dark:max-md:border-[#2D3436]"
          >
            Contact
          </Link>
        </li>
        <li className="max-md:w-full">
          <Link to="/login" onClick={closeMenu}>
            <button className="font-nunito font-bold text-base bg-[#FF6B35] text-white border-none rounded-[10px] py-2 px-[18px] cursor-pointer transition-all duration-300 hover:bg-[#e55a26] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
              Login
            </button>
          </Link>
        </li>
        <li className="max-md:w-full">
          <Link to="/signup" onClick={closeMenu}>
            <button className="font-nunito font-bold text-base bg-transparent text-[#FF6B35] border-2 border-[#FF6B35] rounded-[10px] py-2 px-[18px] cursor-pointer transition-all duration-300 hover:bg-[#FF6B35] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
              Sign Up
            </button>
          </Link>
        </li>
        <li className="max-md:w-full">
          <button 
            className="font-nunito font-bold text-xs bg-transparent text-[#FF6B35] border-2 border-[#FF6B35] rounded-md py-1 px-2.5 cursor-pointer transition-all duration-300 hover:bg-[#FF6B35] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]"
            onClick={toggleTheme}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  );
}
