import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/page';
import Footer from './components/Footer/page';
import Login from './pages/Login/page';
import Signup from './pages/Signup/page';
import Dashboard from './pages/Dashboard/page';
import Services from './pages/Services/page';
import Subjects from './pages/Subjects/page';
import Contact from './pages/Contact/page';
import About from './pages/About/page';
import Cart from './pages/Cart/page';
import Reviews from './pages/Reviews/page';
import Profile from './pages/Profile/page';

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#4ECDC4] to-[#3AAFA9] flex items-center justify-between gap-12 py-16 px-6 md:px-10 max-w-[1300px] mx-auto rounded-[2.5rem] mt-8 overflow-hidden relative group">
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="flex-1 relative z-10">
          <h1 className="text-4xl md:text-[3.5rem] font-black text-[var(--color-text-page)] mb-6 leading-tight font-nunito">
            Learning is an <span className="text-[#FF6B35] inline-block hover:scale-110 transition-transform duration-300">Adventure!</span> 🚀
          </h1>
          <p className="text-xl md:text-[1.3rem] text-[var(--color-text-muted)] font-bold mb-8">
            BrightMinds makes education fun for kids aged 5–14. Discover interactive lessons that spark curiosity.
          </p>
          <div className="flex gap-4 mt-8 flex-wrap items-center">
            <Link 
              to="/signup" 
              className="px-10 py-5 bg-[#FF6B35] text-white rounded-2xl font-black text-lg shadow-lg shadow-[#FF6B35]/30 hover:scale-105 hover:bg-[#e55a26] transition-all duration-300 no-underline"
            >
              Start for Free 🎉
            </Link>
            <Link 
              to="/services" 
              className="px-10 py-5 bg-white/20 backdrop-blur-md text-white border-2 border-white/30 rounded-2xl font-black text-lg hover:bg-white/30 transition-all duration-300 no-underline"
            >
              Browse Courses
            </Link>
          </div>
        </div>
        <div className="flex-1 hidden md:flex justify-center relative">
          <div className="absolute inset-0 bg-white/20 blur-[100px] rounded-full animate-pulse"></div>
          <img 
            src="/images/image1.png" 
            alt="Happy kids learning" 
            className="w-full max-w-[480px] relative z-10 animate-float drop-shadow-2xl"
          />
        </div>
      </section>

      {/* FEATURED SUBJECTS */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-[var(--color-text-page)]">Our Creative Subjects</h2>
          <div className="w-20 h-1.5 bg-[#FF6B35] mx-auto rounded-full"></div>
        </div>
        <div className="flex justify-center">
          <img 
            src="/images/image3.png" 
            alt="Subjects" 
            className="max-w-[800px] w-full rounded-[2.5rem] shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </section>

      {/* ACTIVITY SECTION */}
      <section className="bg-[var(--color-bg-section)] py-24 px-6 md:px-10 transition-all duration-500 border-y border-[var(--color-border-subtle)]">
        <div className="max-w-[1300px] mx-auto flex items-center gap-16 flex-wrap lg:flex-nowrap">
          <div className="flex-1 flex justify-center relative">
            <div className="absolute top-0 -left-4 w-24 h-24 bg-[#FF6B35]/10 rounded-full blur-2xl"></div>
            <img 
              src="/images/image2.png" 
              alt="Activities" 
              className="max-w-[450px] w-full rounded-[2.5rem] shadow-xl hover:rotate-2 transition-transform duration-500"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text-page)] mb-6 leading-tight">
              Fun <span className="text-[#4ECDC4]">Interactive Activities</span>
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] mb-8 font-bold">
              Kids don't just watch — they learn by doing. Our platform is built on interactive engagement that keeps young minds focused and excited.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {['Quizzes and games', 'Drag & drop tasks', 'Story lessons', 'Practice worksheets'].map((item) => (
                <li key={item} className="flex items-center gap-3 font-black text-[var(--color-text-muted)]">
                  <span className="w-8 h-8 rounded-lg bg-[#4ECDC4]/20 flex items-center justify-center text-[#4ECDC4]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link 
              to="/signup" 
              className="inline-block px-10 py-4 bg-[#4ECDC4] text-white rounded-2xl font-black text-lg shadow-lg shadow-[#4ECDC4]/30 hover:scale-105 hover:bg-[#3AAFA9] transition-all duration-300 no-underline"
            >
              Try for Free 🎮
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-24">
        <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8B94] rounded-[3rem] py-20 px-10 text-center relative overflow-hidden shadow-2xl shadow-[#FF6B35]/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          
          <h2 className="text-3xl md:text-[3rem] font-black text-white mb-6 relative z-10">
            Ready to Start the Adventure? 🌟
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-black relative z-10">
            Join 50,000+ happy learners today. Education that feels like play is education that stays.
          </p>
          <div className="flex justify-center gap-6 flex-wrap relative z-10">
            <Link 
              to="/signup" 
              className="px-12 py-5 bg-white text-[#FF6B35] rounded-2xl font-black text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 no-underline"
            >
              Create Free Account 🚀
            </Link>
            <Link 
              to="/login" 
              className="px-12 py-5 bg-transparent text-white border-2 border-white rounded-2xl font-black text-lg hover:bg-white hover:text-[#FF6B35] transition-all duration-300 no-underline"
            >
              Log In
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col font-nunito transition-colors duration-500">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/services" element={<Services />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
