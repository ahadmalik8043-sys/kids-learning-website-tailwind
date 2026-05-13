import { Link } from 'react-router-dom';

export default function Signup() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('Account created! Welcome to BrightMinds 🎉');
  }

  return (
    <div className="py-12 px-5">
      <div className="max-w-[500px] mx-auto bg-white dark:bg-[#16213E] p-10 rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
        <div className="text-center mb-7">
          <span className="text-5xl">🎉</span>
          <h2 className="text-[1.85rem] font-extrabold text-[#2D3436] dark:text-[#F0F0F0] mt-2 mb-2.5">
            Create Your Account
          </h2>
          <p className="text-[#636E72] dark:text-[#B2BEC3] text-base m-0">
            Join 50,000+ young learners on BrightMinds!
          </p>
        </div>

        <form id="signup-form" onSubmit={handleSubmit} noValidate>
          <div className="flex gap-3.5">
            <div className="flex-1 mb-4">
              <label 
                htmlFor="first-name"
                className="block font-bold text-[0.9rem] text-[#636E72] dark:text-[#B2BEC3] mb-1.5"
              >
                First Name
              </label>
              <input 
                type="text" 
                id="first-name" 
                name="first_name" 
                placeholder="E.g. Alex" 
                required 
                className="w-full py-2.5 px-3.5 border-2 border-[#DFE6E9] dark:border-[#2D3436] rounded-[10px] font-nunito text-base bg-[#FFF9F0] dark:bg-[#1A1A2E] text-[#2D3436] dark:text-[#F0F0F0] transition-all duration-300 outline-none focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.15)] focus:bg-white dark:focus:bg-[#16213E]"
              />
            </div>
            <div className="flex-1 mb-4">
              <label 
                htmlFor="last-name"
                className="block font-bold text-[0.9rem] text-[#636E72] dark:text-[#B2BEC3] mb-1.5"
              >
                Last Name
              </label>
              <input 
                type="text" 
                id="last-name" 
                name="last_name" 
                placeholder="E.g. Smith" 
                required 
                className="w-full py-2.5 px-3.5 border-2 border-[#DFE6E9] dark:border-[#2D3436] rounded-[10px] font-nunito text-base bg-[#FFF9F0] dark:bg-[#1A1A2E] text-[#2D3436] dark:text-[#F0F0F0] transition-all duration-300 outline-none focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.15)] focus:bg-white dark:focus:bg-[#16213E]"
              />
            </div>
          </div>

          <div className="mb-4">
            <label 
              htmlFor="signup-email"
              className="block font-bold text-[0.9rem] text-[#636E72] dark:text-[#B2BEC3] mb-1.5"
            >
              Email Address
            </label>
            <input 
              type="email" 
              id="signup-email" 
              name="email" 
              placeholder="you@example.com" 
              required 
              className="w-full py-2.5 px-3.5 border-2 border-[#DFE6E9] dark:border-[#2D3436] rounded-[10px] font-nunito text-base bg-[#FFF9F0] dark:bg-[#1A1A2E] text-[#2D3436] dark:text-[#F0F0F0] transition-all duration-300 outline-none focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.15)] focus:bg-white dark:focus:bg-[#16213E]"
            />
          </div>

          <div className="mb-4">
            <label 
              htmlFor="signup-password"
              className="block font-bold text-[0.9rem] text-[#636E72] dark:text-[#B2BEC3] mb-1.5"
            >
              Password
            </label>
            <input 
              type="password" 
              id="signup-password" 
              name="password" 
              placeholder="At least 8 characters" 
              required 
              className="w-full py-2.5 px-3.5 border-2 border-[#DFE6E9] dark:border-[#2D3436] rounded-[10px] font-nunito text-base bg-[#FFF9F0] dark:bg-[#1A1A2E] text-[#2D3436] dark:text-[#F0F0F0] transition-all duration-300 outline-none focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.15)] focus:bg-white dark:focus:bg-[#16213E]"
            />
          </div>

          <div className="mb-4">
            <label 
              htmlFor="confirm-password"
              className="block font-bold text-[0.9rem] text-[#636E72] dark:text-[#B2BEC3] mb-1.5"
            >
              Confirm Password
            </label>
            <input 
              type="password" 
              id="confirm-password" 
              name="confirm_password" 
              placeholder="Repeat your password" 
              required 
              className="w-full py-2.5 px-3.5 border-2 border-[#DFE6E9] dark:border-[#2D3436] rounded-[10px] font-nunito text-base bg-[#FFF9F0] dark:bg-[#1A1A2E] text-[#2D3436] dark:text-[#F0F0F0] transition-all duration-300 outline-none focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.15)] focus:bg-white dark:focus:bg-[#16213E]"
            />
          </div>

          <div className="mb-4">
            <label 
              htmlFor="age-group"
              className="block font-bold text-[0.9rem] text-[#636E72] dark:text-[#B2BEC3] mb-1.5"
            >
              Child's Age Group
            </label>
            <div className="relative flex flex-col">
              <select 
                id="age-group" 
                name="age_group" 
                required
                className="w-full py-2.5 px-3.5 border-2 border-[#DFE6E9] dark:border-[#2D3436] rounded-[10px] bg-[#FFF9F0] dark:bg-[#1A1A2E] text-[#2D3436] dark:text-[#F0F0F0] font-nunito text-base appearance-none cursor-pointer transition-all duration-300 outline-none hover:border-[#4ECDC4] focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.15)]"
              >
                <option value="" disabled>Select age group…</option>
                <option value="5-7">5 – 7 years</option>
                <option value="8-10">8 – 10 years</option>
                <option value="11-12">11 – 12 years</option>
                <option value="13-14">13 – 14 years</option>
              </select>
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#B2BEC3] pointer-events-none">▾</span>
            </div>
          </div>

          <div className="mb-4">
            <label 
              htmlFor="role"
              className="block font-bold text-[0.9rem] text-[#636E72] dark:text-[#B2BEC3] mb-1.5"
            >
              I am a…
            </label>
            <div className="relative flex flex-col">
              <select 
                id="role" 
                name="role" 
                required
                className="w-full py-2.5 px-3.5 border-2 border-[#DFE6E9] dark:border-[#2D3436] rounded-[10px] bg-[#FFF9F0] dark:bg-[#1A1A2E] text-[#2D3436] dark:text-[#F0F0F0] font-nunito text-base appearance-none cursor-pointer transition-all duration-300 outline-none hover:border-[#4ECDC4] focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.15)]"
              >
                <option value="" disabled>Select role…</option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
                <option value="teacher">Teacher</option>
              </select>
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#B2BEC3] pointer-events-none">▾</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 mb-5">
            <input 
              type="checkbox" 
              id="agree-terms" 
              required 
              className="w-auto mt-0.5"
            />
            <label 
              htmlFor="agree-terms"
              className="text-[0.88rem] leading-relaxed text-[#636E72] dark:text-[#B2BEC3]"
            >
              I agree to <a href="#" className="text-[#FF6B35] hover:text-[#e55a26] transition-colors duration-300">Terms</a> and <a href="#" className="text-[#FF6B35] hover:text-[#e55a26] transition-colors duration-300">Privacy Policy</a>
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full font-nunito font-bold text-[1.2rem] bg-[#FF6B35] text-white border-none rounded-[18px] py-3.5 px-9 cursor-pointer transition-all duration-300 hover:bg-[#e55a26] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]"
          >
            Create Free Account 🚀
          </button>

          <div className="text-center mt-6">
            <p className="m-0 text-[0.92rem] text-[#636E72] dark:text-[#B2BEC3]">
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="text-[#FF6B35] font-bold hover:text-[#e55a26] transition-colors duration-300"
              >
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
