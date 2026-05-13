import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      {/* HERO */}
      <div className="bg-gradient-to-br from-[#4ECDC4] to-[#3AAFA9] py-14 px-9 text-center">
        <h1 className="text-white text-[2.4rem] font-black mb-3 leading-tight">
          Our Courses &amp; Services 🎓
        </h1>
        <p className="text-white/92 max-w-[580px] mx-auto mb-7">
          Explore expert-crafted lessons across subjects. Fun, engaging, and built for every learning level!
        </p>
        <Link 
          to="/signup" 
          className="inline-block font-nunito font-bold text-base bg-white text-[#4ECDC4] rounded-[10px] py-3 px-8 cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(78,205,196,0.22)] no-underline"
        >
          Get Started Free 🚀
        </Link>
      </div>

      {/* SUBJECTS */}
      <section className="py-16 px-9 max-w-[1200px] mx-auto max-md:py-10 max-md:px-[18px]">
        <div className="text-center mb-10">
          <h2 className="text-[1.85rem] font-extrabold text-[#2D3436] dark:text-[#F0F0F0] mb-2.5">
            All <span className="text-[#FF6B35]">Subjects</span>
          </h2>
          <p className="text-[1.1rem] text-[#636E72] dark:text-[#B2BEC3] max-w-[580px] mx-auto m-0">
            Choose from 5 subjects with hundreds of lessons.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[22px] my-2">
          <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#FF6B35] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
            <span className="text-[2.6rem] mb-2.5 block">➕</span>
            <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Mathematics</h3>
            <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Numbers, algebra, and problem solving.</p>
            <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">120+ Lessons · Ages 5–14</p>
            <Link 
              to="/signup" 
              className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
            >
              Enrol Now →
            </Link>
          </div>
          <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#4ECDC4] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
            <span className="text-[2.6rem] mb-2.5 block">🔬</span>
            <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Science</h3>
            <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Experiments, nature, and space.</p>
            <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">95+ Lessons · Ages 6–14</p>
            <Link 
              to="/signup" 
              className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
            >
              Enrol Now →
            </Link>
          </div>
          <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#b5a000] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
            <span className="text-[2.6rem] mb-2.5 block">📖</span>
            <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">English</h3>
            <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Grammar, reading, and writing.</p>
            <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">110+ Lessons · Ages 5–14</p>
            <Link 
              to="/signup" 
              className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
            >
              Enrol Now →
            </Link>
          </div>
          <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#FF8B94] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
            <span className="text-[2.6rem] mb-2.5 block">🎨</span>
            <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Art &amp; Craft</h3>
            <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Drawing and creativity skills.</p>
            <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">60+ Lessons · Ages 5–12</p>
            <Link 
              to="/signup" 
              className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
            >
              Enrol Now →
            </Link>
          </div>
          <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#A8E6CF] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
            <span className="text-[2.6rem] mb-2.5 block">🌍</span>
            <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Geography</h3>
            <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Maps, cultures, and environment.</p>
            <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">75+ Lessons · Ages 7–14</p>
            <Link 
              to="/signup" 
              className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
            >
              Enrol Now →
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <div className="bg-[#E8F8F5] dark:bg-[#0F3460] py-16 px-9 transition-all duration-300 max-md:py-10 max-md:px-[18px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[1.85rem] font-extrabold text-[#2D3436] dark:text-[#F0F0F0] mb-2.5">
              How It <span className="text-[#FF6B35]">Works</span>
            </h2>
            <p className="text-[1.1rem] text-[#636E72] dark:text-[#B2BEC3] max-w-[580px] mx-auto m-0">
              Getting started is simple!
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-[22px] my-2">
            <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 text-center items-center hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
              <span className="text-[2rem] w-[60px] h-[60px] rounded-full flex items-center justify-center font-black text-white bg-[#FF6B35]">1</span>
              <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] my-2 mt-4">Create Account</h3>
              <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Sign up free in seconds.</p>
            </div>
            <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 text-center items-center hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
              <span className="text-[2rem] w-[60px] h-[60px] rounded-full flex items-center justify-center font-black text-white bg-[#4ECDC4]">2</span>
              <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] my-2 mt-4">Pick Subject</h3>
              <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Choose your lessons.</p>
            </div>
            <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 text-center items-center hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
              <span className="text-[2rem] w-[60px] h-[60px] rounded-full flex items-center justify-center font-black text-black bg-[#FFE66D]">3</span>
              <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] my-2 mt-4">Learn &amp; Earn</h3>
              <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Earn stars and badges.</p>
            </div>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <section className="py-16 px-9 max-w-[1200px] mx-auto max-md:py-10 max-md:px-[18px]">
        <div className="text-center mb-10">
          <h2 className="text-[1.85rem] font-extrabold text-[#2D3436] dark:text-[#F0F0F0] mb-2.5">
            Simple <span className="text-[#FF6B35]">Pricing</span> 💰
          </h2>
        </div>
        <div className="w-full overflow-x-auto mt-5">
          <table className="w-full border-collapse rounded-[10px] overflow-hidden text-[0.95rem] bg-white dark:bg-[#16213E] shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] min-w-[520px] max-w-[860px] mx-auto text-center">
            <thead className="bg-[#FF6B35] text-white">
              <tr>
                <th className="py-3.5 px-4 text-center font-extrabold text-[0.85rem] tracking-wider uppercase">Feature</th>
                <th className="py-3.5 px-4 text-center font-extrabold text-[0.85rem] tracking-wider uppercase">Free</th>
                <th className="py-3.5 px-4 text-center font-extrabold text-[0.85rem] tracking-wider uppercase">Explorer</th>
                <th className="py-3.5 px-4 text-center font-extrabold text-[0.85rem] tracking-wider uppercase">Champion</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-[#16213E] hover:bg-[rgba(78,205,196,0.15)] cursor-pointer transition-colors duration-300">
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">Lessons per month</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">10</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">Unlimited</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">Unlimited</td>
              </tr>
              <tr className="bg-[#FFF3EC] dark:bg-[rgba(255,107,53,0.08)] hover:bg-[rgba(78,205,196,0.15)] cursor-pointer transition-colors duration-300">
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">Subjects</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">2</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">All 5</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">All 5</td>
              </tr>
              <tr className="bg-white dark:bg-[#16213E] hover:bg-[rgba(78,205,196,0.15)] cursor-pointer transition-colors duration-300">
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">Progress tracking</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">❌</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">✅</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">✅</td>
              </tr>
              <tr className="bg-[#FFF3EC] dark:bg-[rgba(255,107,53,0.08)] hover:bg-[rgba(78,205,196,0.15)] cursor-pointer transition-colors duration-300">
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">Badges &amp; rewards</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">❌</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">✅</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">✅</td>
              </tr>
              <tr className="bg-white dark:bg-[#16213E] hover:bg-[rgba(78,205,196,0.15)] cursor-pointer transition-colors duration-300">
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">Parent dashboard</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">❌</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">❌</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">✅</td>
              </tr>
              <tr className="bg-[#FFF3EC] dark:bg-[rgba(255,107,53,0.08)] hover:bg-[rgba(78,205,196,0.15)] cursor-pointer transition-colors duration-300">
                <td className="py-3 px-4 align-middle text-[#2D3436] dark:text-[#F0F0F0]">Price / month</td>
                <td className="py-3 px-4 align-middle text-[#2D3436] dark:text-[#F0F0F0]">£0</td>
                <td className="py-3 px-4 align-middle text-[#2D3436] dark:text-[#F0F0F0]">£4.99</td>
                <td className="py-3 px-4 align-middle text-[#2D3436] dark:text-[#F0F0F0]">£8.99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8B94] py-14 px-9 text-center">
        <h2 className="text-[1.85rem] font-extrabold text-white mb-2.5">
          Start Your Learning Adventure Today! 🌟
        </h2>
        <p className="text-white/90 mb-7">
          Join thousands of kids learning daily.
        </p>
        <Link 
          to="/signup" 
          className="inline-block font-nunito font-bold text-base bg-white text-[#FF6B35] rounded-[10px] py-3.5 px-9 cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)] no-underline"
        >
          Create Free Account 🚀
        </Link>
      </div>
    </>
  );
}
