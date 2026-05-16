import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-bg-page)] border-t border-[var(--color-border-subtle)] transition-colors duration-500">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="text-2xl font-black text-[#FF6B35] no-underline">
              🌟 BrightMinds
            </Link>
            <p className="text-[var(--color-text-muted)] font-bold leading-relaxed">
              Making learning joyful for every child, everywhere. Our interactive platform combines play with pedagogy for the best learning outcomes.
            </p>
            <div className="flex gap-4">
              {['FB', 'TW', 'IG', 'YT'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-xl bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center font-black text-xs hover:bg-[#FF6B35] hover:text-white transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-black text-[var(--color-text-page)]">Quick Links</h3>
            <div className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/subjects', label: 'Subjects' },
                { to: '/services', label: 'Courses' },
                { to: '/reviews', label: 'Player Reviews' },
              ].map(link => (
                <Link key={link.to} to={link.to} className="text-[var(--color-text-muted)] no-underline font-black hover:text-[#FF6B35] transition-all">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Account */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-black text-[var(--color-text-page)]">Account</h3>
            <div className="flex flex-col gap-3">
              {[
                { to: '/dashboard', label: 'Dashboard' },
                { to: '/profile', label: 'My Profile' },
                { to: '/cart', label: 'Learning Cart' },
                { to: '/signup', label: 'Create Account' },
                { to: '/login', label: 'Sign In' },
              ].map(link => (
                <Link key={link.to} to={link.to} className="text-[var(--color-text-muted)] no-underline font-black hover:text-[#FF6B35] transition-all">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support & Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-black text-[var(--color-text-page)]">Support</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <p className="text-[var(--color-text-muted)] font-bold text-sm">
                  123 Learning Lane,<br />Education City, EC 56789
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <a href="mailto:hello@brightminds.com" className="text-[var(--color-text-muted)] font-bold text-sm no-underline hover:text-[#FF6B35]">
                  hello@brightminds.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <p className="text-[var(--color-text-muted)] font-bold text-sm">
                  +1 (555) 987-6543
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--color-border-subtle)] py-8">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-black text-[var(--color-text-muted)] uppercase tracking-widest">
            © 2025 BrightMinds Education. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest no-underline hover:text-[#FF6B35]">Privacy</a>
            <a href="#" className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest no-underline hover:text-[#FF6B35]">Terms</a>
            <a href="#" className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest no-underline hover:text-[#FF6B35]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
