import { Link } from 'react-router-dom';

export default function Signup() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('Account created! Welcome to the family.');
  }

  const inputCls = "w-full px-6 py-4 rounded-2xl bg-[var(--color-input-bg)] border-2 border-[var(--color-input-border)] text-[var(--color-text-page)] text-lg font-bold outline-none focus:border-[#FF6B35] focus:bg-[var(--color-bg-card)] transition-all duration-300";

  return (
    <main className="min-h-screen py-20 px-6 transition-colors duration-500">
      <div className="max-w-[700px] mx-auto relative">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#4ECDC4]/20 rounded-full blur-3xl animate-pulse"></div>
        
        <form 
          onSubmit={handleSubmit}
          className="relative z-10 bg-[var(--color-bg-card)] p-10 md:p-16 rounded-[3rem] border border-[var(--color-border-subtle)] shadow-2xl flex flex-col gap-10"
        >
          <div className="text-center">
            <span className="text-6xl mb-6 block animate-bounce">🚀</span>
            <h1 className="text-3xl md:text-5xl font-black mb-4 text-[var(--color-text-page)]">Join the Mission!</h1>
            <p className="text-lg text-[var(--color-text-muted)] font-bold max-w-md mx-auto">
              Create your account and start your personalized learning journey today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="ml-1 text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">First Name</label>
              <input type="text" placeholder="E.g. Alex" className={inputCls} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="ml-1 text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Last Name</label>
              <input type="text" placeholder="E.g. Smith" className={inputCls} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="ml-1 text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Email Address</label>
            <input type="email" placeholder="explorer@adventure.com" className={inputCls} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="ml-1 text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Password</label>
              <input type="password" placeholder="••••••••" className={inputCls} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="ml-1 text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Confirm Password</label>
              <input type="password" placeholder="••••••••" className={inputCls} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="ml-1 text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Age Group</label>
              <select className={inputCls}>
                <option value="" disabled selected>Select age…</option>
                <option>5 – 7 years</option>
                <option>8 – 10 years</option>
                <option>11 – 12 years</option>
                <option>13 – 14 years</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="ml-1 text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">I am a…</label>
              <select className={inputCls}>
                <option value="" disabled selected>Select role…</option>
                <option>Student</option>
                <option>Parent</option>
                <option>Teacher</option>
              </select>
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-5 bg-[#4ECDC4] text-white rounded-2xl font-black text-xl shadow-xl shadow-[#4ECDC4]/30 hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            Launch Account 🛸
          </button>

          <div className="text-center">
            <p className="font-bold text-[var(--color-text-muted)]">
              Already a member? {' '}
              <Link to="/login" className="text-[#FF6B35] hover:underline">Log In Here</Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
