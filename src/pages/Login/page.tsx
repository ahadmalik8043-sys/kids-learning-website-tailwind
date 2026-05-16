import { Link } from 'react-router-dom';

export default function Login() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('Login successful! Welcome to the adventure.');
  }

  return (
    <main className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6 transition-colors duration-500">
      <div className="w-full max-w-[500px] relative">
        {/* Decorative elements */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-[#FF6B35]/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-[#4ECDC4]/20 rounded-full blur-2xl animate-pulse-slow"></div>

        <form 
          onSubmit={handleSubmit}
          className="relative z-10 bg-[var(--color-bg-card)] p-10 md:p-14 rounded-[3rem] border border-[var(--color-border-subtle)] shadow-2xl flex flex-col gap-8"
        >
          <div className="text-center">
            <span className="text-6xl mb-6 block animate-bounce">👋</span>
            <h1 className="text-3xl md:text-4xl font-black mb-2 text-[var(--color-text-page)]">Welcome Back!</h1>
            <p className="text-[var(--color-text-muted)] font-bold">Log in to continue your adventure.</p>
          </div>

          <div className="space-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="ml-1 text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="you@example.com" 
                className="w-full px-6 py-4 rounded-2xl bg-[var(--color-input-bg)] border-2 border-[var(--color-input-border)] text-[var(--color-text-page)] text-lg font-bold outline-none focus:border-[#FF6B35] focus:bg-[var(--color-bg-card)] transition-all duration-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center px-1">
                <label htmlFor="password" className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Password</label>
                <a href="#" className="text-xs font-black text-[#FF6B35] hover:underline uppercase tracking-widest">Forgot?</a>
              </div>
              <input 
                type="password" 
                id="password" 
                placeholder="••••••••" 
                className="w-full px-6 py-4 rounded-2xl bg-[var(--color-input-bg)] border-2 border-[var(--color-input-border)] text-[var(--color-text-page)] text-lg font-bold outline-none focus:border-[#FF6B35] focus:bg-[var(--color-bg-card)] transition-all duration-300"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-5 bg-[#FF6B35] text-white rounded-2xl font-black text-lg shadow-xl shadow-[#FF6B35]/30 hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            Start Learning 🚀
          </button>

          <div className="text-center">
            <p className="font-bold text-[var(--color-text-muted)]">
              New to BrightMinds? {' '}
              <Link to="/signup" className="text-[#FF6B35] hover:underline">Sign Up Free</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
