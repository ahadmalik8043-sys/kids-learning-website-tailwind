import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/page';
import Footer from './components/Footer/page';
import Login from './pages/Login/page';
import Signup from './pages/Signup/page';
import Dashboard from './pages/Dashboard/page';
import Services from './pages/Services/page';
import Subjects from './pages/Subjects/page';
import Contact from './pages/Contact/page';

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#4ECDC4] to-[#3AAFA9] flex items-center justify-between gap-12 py-16 px-9 max-w-[1200px] mx-auto max-md:flex-col max-md:text-center max-md:py-10 max-md:px-5 max-md:gap-7">
        <div className="flex-1">
          <h1 className="text-[2.5rem] font-black text-[#2D3436] dark:text-[#F0F0F0] mb-3 leading-tight">
            Learning is an <span className="text-[#FF6B35]">Adventure!</span> 🚀
          </h1>
          <p className="text-[1.15rem] text-[#636E72] dark:text-[#B2BEC3]">
            BrightMinds makes education fun for kids aged 5–14.
          </p>
          <div className="flex gap-3.5 mt-6 flex-wrap items-center max-md:justify-center">
            <Link 
              to="/signup" 
              className="inline-block font-nunito font-bold text-[1.2rem] bg-[#FF6B35] text-white rounded-[18px] py-3.5 px-9 cursor-pointer transition-all duration-300 hover:bg-[#e55a26] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)] no-underline"
            >
              Start for Free 🎉
            </Link>
            <Link 
              to="/services" 
              className="inline-block font-nunito font-bold text-[1.2rem] bg-[#4ECDC4] text-white rounded-[18px] py-3.5 px-9 cursor-pointer transition-all duration-300 hover:bg-[#3AAFA9] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(78,205,196,0.22)] no-underline"
            >
              Browse Courses
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img 
            src="/images/image1.png" 
            alt="Happy kids learning" 
            className="w-full max-w-[460px] rounded-[18px] animate-float max-md:max-w-[280px]"
          />
        </div>
      </section>

      {/* SUBJECT IMAGE */}
      <div className="flex justify-center mb-8">
        <img 
          src="/images/image3.png" 
          alt="Subjects" 
          className="max-w-[680px] w-full rounded-[18px]"
        />
      </div>

      {/* ACTIVITY SECTION */}
      <div className="bg-[#E8F8F5] dark:bg-[#0F3460] py-16 px-9 transition-all duration-300 max-md:py-10 max-md:px-[18px]">
        <div className="flex items-center gap-12 flex-wrap max-w-[1200px] mx-auto">
          <div className="flex-1 min-w-[260px] flex justify-center">
            <img 
              src="/images/image2.png" 
              alt="Activities" 
              className="max-w-[380px] w-full rounded-[18px]"
            />
          </div>
          <div className="flex-1 min-w-[260px]">
            <h2 className="text-[1.85rem] font-extrabold text-[#2D3436] dark:text-[#F0F0F0] mb-2.5">
              Fun <span className="text-[#FF6B35]">Interactive Activities</span>
            </h2>
            <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">
              Kids don't just watch — they learn by doing.
            </p>
            <ul className="pl-5 leading-[2.2]">
              <li className="text-[#636E72] dark:text-[#B2BEC3]">✅ Quizzes and games</li>
              <li className="text-[#636E72] dark:text-[#B2BEC3]">✅ Drag &amp; drop tasks</li>
              <li className="text-[#636E72] dark:text-[#B2BEC3]">✅ Story lessons</li>
              <li className="text-[#636E72] dark:text-[#B2BEC3]">✅ Practice worksheets</li>
            </ul>
            <Link 
              to="/signup" 
              className="inline-block font-nunito font-bold text-base bg-[#FF6B35] text-white rounded-[10px] py-2.5 px-6 cursor-pointer transition-all duration-300 hover:bg-[#e55a26] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)] no-underline mt-4"
            >
              Try for Free 🎮
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8B94] py-14 px-9 text-center">
        <h2 className="text-[1.85rem] font-extrabold text-white mb-2.5">
          Ready to Start the Adventure? 🌟
        </h2>
        <p className="text-white/90 mb-7">
          Join thousands of learners today.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link 
            to="/signup" 
            className="inline-block font-nunito font-bold text-base bg-white text-[#FF6B35] rounded-[10px] py-2.5 px-6 cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)] no-underline"
          >
            Create Free Account 🚀
          </Link>
          <Link 
            to="/login" 
            className="inline-block font-nunito font-bold text-base bg-transparent text-white border-2 border-white rounded-[10px] py-2.5 px-6 cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#FF6B35] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)] no-underline"
          >
            Log In
          </Link>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-full max-w-full m-0 p-0 text-left min-h-screen flex flex-col font-nunito bg-[#FFF9F0] dark:bg-[#1A1A2E] text-[#2D3436] dark:text-[#F0F0F0] leading-relaxed transition-all duration-300">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
