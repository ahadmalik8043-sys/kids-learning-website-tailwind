import { Link } from 'react-router-dom';

export default function Login() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('Login successful! Redirecting to dashboard...');
  }

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-130px)] py-10 px-5">
      <form 
        id="login-form" 
        onSubmit={handleSubmit} 
        noValidate
        className="bg-white dark:bg-[#16213E] p-10 rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] w-full max-w-[440px]"
      >
        <div className="text-center mb-7">
          <span className="text-5xl">👋</span>
          <h2 className="text-[1.85rem] font-extrabold text-[#2D3436] dark:text-[#F0F0F0] mt-2 mb-2.5">
            Welcome Back!
          </h2>
          <p className="text-[#636E72] dark:text-[#B2BEC3] text-base m-0">
            Log in to continue your adventure.
          </p>
        </div>

        <div className="mb-4">
          <label 
            htmlFor="login-email"
            className="block font-bold text-[0.9rem] text-[#636E72] dark:text-[#B2BEC3] mb-1.5"
          >
            Email Address
          </label>
          <input 
            type="email" 
            id="login-email" 
            name="email" 
            placeholder="you@example.com" 
            required 
            className="w-full py-2.5 px-3.5 border-2 border-[#DFE6E9] dark:border-[#2D3436] rounded-[10px] font-nunito text-base bg-[#FFF9F0] dark:bg-[#1A1A2E] text-[#2D3436] dark:text-[#F0F0F0] transition-all duration-300 outline-none focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.15)] focus:bg-white dark:focus:bg-[#16213E]"
          />
        </div>

        <div className="mb-4">
          <label 
            htmlFor="login-password"
            className="block font-bold text-[0.9rem] text-[#636E72] dark:text-[#B2BEC3] mb-1.5"
          >
            Password
          </label>
          <input 
            type="password" 
            id="login-password" 
            name="password" 
            placeholder="Enter your password" 
            required 
            className="w-full py-2.5 px-3.5 border-2 border-[#DFE6E9] dark:border-[#2D3436] rounded-[10px] font-nunito text-base bg-[#FFF9F0] dark:bg-[#1A1A2E] text-[#2D3436] dark:text-[#F0F0F0] transition-all duration-300 outline-none focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.15)] focus:bg-white dark:focus:bg-[#16213E]"
          />
        </div>

        <div className="flex justify-between items-center mb-5">
          <label className="flex items-center gap-2 text-[0.9rem] cursor-pointer m-0">
            <input 
              type="checkbox" 
              id="remember-me" 
              name="remember" 
              className="w-auto"
            />
            <span className="text-[#636E72] dark:text-[#B2BEC3]">Remember me</span>
          </label>
          <a 
            href="#" 
            className="text-[0.88rem] text-[#FF6B35] font-bold hover:text-[#e55a26] transition-colors duration-300"
          >
            Forgot Password?
          </a>
        </div>

        <button 
          type="submit" 
          className="w-full font-nunito font-bold text-[1.2rem] bg-[#FF6B35] text-white border-none rounded-[18px] py-3.5 px-9 cursor-pointer transition-all duration-300 hover:bg-[#e55a26] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]"
        >
          Login 🚀
        </button>

        <div className="text-center mt-6">
          <p className="m-0 text-[0.92rem] text-[#636E72] dark:text-[#B2BEC3]">
            Don't have an account?{' '}
            <Link 
              to="/signup" 
              className="text-[#FF6B35] font-bold hover:text-[#e55a26] transition-colors duration-300"
            >
              Sign Up Free
            </Link>
          </p>
        </div>

        <div className="text-center mt-4">
          <p className="text-xs text-[#B2BEC3] dark:text-[#636E72] m-0">
            By logging in you agree to our{' '}
            <a href="#" className="text-[#FF6B35] hover:text-[#e55a26] transition-colors duration-300">
              Terms
            </a> &amp; <a href="#" className="text-[#FF6B35] hover:text-[#e55a26] transition-colors duration-300">
              Privacy Policy
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
