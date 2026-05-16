import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/subjects', label: 'Subjects' },
  { to: '/services', label: 'Courses' },
  { to: '/dashboard', label: 'Dashboard' },
];

const moreLinks = [
  { to: '/reviews', label: 'Reviews' },
  { to: '/cart', label: 'Cart' },
  { to: '/profile', label: 'Profile' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 font-black text-[0.95rem] rounded-xl transition-all duration-300 ${
      isActive
        ? 'bg-[#FF6B35] text-white'
        : 'text-[var(--color-text-page)] hover:bg-[#FF6B35]/10 hover:text-[#FF6B35]'
    }`;

  return (
    <nav className="sticky top-0 z-[100] w-full h-[80px] bg-[var(--color-bg-page)] border-b border-[var(--color-border-subtle)] transition-all duration-300">
      <div className="max-w-[1300px] h-full mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-black text-[#FF6B35] tracking-tight hover:scale-105 transition-transform no-underline">
          🌟 BrightMinds
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          {links.map(link => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}

          {/* More Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-4 py-2 font-black text-[0.95rem] rounded-xl text-[var(--color-text-page)] hover:bg-[#FF6B35]/10 hover:text-[#FF6B35] transition-all flex items-center gap-1"
            >
              More {dropdownOpen ? '▲' : '▼'}
            </button>
            {dropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-[180px] bg-[var(--color-bg-card)] rounded-2xl shadow-2xl border border-[var(--color-border-subtle)] p-2 flex flex-col gap-1 overflow-hidden animate-in fade-in zoom-in duration-200">
                {moreLinks.map(link => (
                  <NavLink 
                    key={link.to} 
                    to={link.to} 
                    onClick={() => setDropdownOpen(false)}
                    className={linkClass}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <div className="h-6 w-px bg-[var(--color-border-subtle)] mx-4"></div>

          <NavLink to="/login" className="px-6 py-2.5 font-black text-sm bg-[#FF6B35] text-white rounded-xl shadow-lg shadow-[#FF6B35]/20 hover:scale-105 active:scale-95 transition-all no-underline">
            Login
          </NavLink>

          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-[var(--color-bg-page-alt)] flex items-center justify-center hover:bg-[#FF6B35]/10 transition-all text-xl ml-2"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span className={`w-6 h-1 bg-[#FF6B35] rounded-full transition-all ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`w-6 h-1 bg-[#FF6B35] rounded-full transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-1 bg-[#FF6B35] rounded-full transition-all ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-[var(--color-bg-page)] border-b border-[var(--color-border-subtle)] p-6 flex flex-col gap-3 shadow-2xl animate-in slide-in-from-top duration-300">
          {[...links, ...moreLinks].map(link => (
            <NavLink 
              key={link.to} 
              to={link.to} 
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="h-px bg-[var(--color-border-subtle)] my-2"></div>
          <NavLink to="/login" className="py-4 text-center font-black bg-[#FF6B35] text-white rounded-2xl no-underline">
            Login
          </NavLink>
          <button 
            onClick={toggleTheme}
            className="py-4 font-black border-2 border-[#FF6B35] text-[#FF6B35] rounded-2xl bg-[var(--color-bg-card)]"
          >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
          </button>
        </div>
      )}
    </nav>
  );
}
