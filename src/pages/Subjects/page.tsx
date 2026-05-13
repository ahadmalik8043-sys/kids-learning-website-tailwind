import { Link } from 'react-router-dom';

export default function Subjects() {
  return (
    <>
      {/* HERO */}
      <div className="bg-gradient-to-br from-[#4ECDC4] to-[#3AAFA9] py-14 px-9 text-center">
        <h1 className="text-white text-[2.4rem] font-black mb-3 leading-tight">
          Explore All Subjects 📚
        </h1>
        <p className="text-white/92 max-w-[580px] mx-auto mb-0">
          Dive into fun, expert-crafted lessons across 5 exciting subjects.
        </p>
      </div>

      {/* FILTER BAR */}
      <div className="flex flex-wrap gap-3 justify-center py-7 px-9 bg-white dark:bg-[#16213E] shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
        <a 
          href="#mathematics" 
          className="inline-block py-2 px-5 rounded-[18px] font-bold text-[0.95rem] text-white cursor-pointer transition-all duration-300 no-underline bg-[#FF6B35] hover:opacity-85 hover:-translate-y-0.5"
        >
          ➕ Maths
        </a>
        <a 
          href="#science" 
          className="inline-block py-2 px-5 rounded-[18px] font-bold text-[0.95rem] text-white cursor-pointer transition-all duration-300 no-underline bg-[#4ECDC4] hover:opacity-85 hover:-translate-y-0.5"
        >
          🔬 Science
        </a>
        <a 
          href="#english" 
          className="inline-block py-2 px-5 rounded-[18px] font-bold text-[0.95rem] text-white cursor-pointer transition-all duration-300 no-underline bg-[#b5a000] hover:opacity-85 hover:-translate-y-0.5"
        >
          📖 English
        </a>
        <a 
          href="#art" 
          className="inline-block py-2 px-5 rounded-[18px] font-bold text-[0.95rem] text-white cursor-pointer transition-all duration-300 no-underline bg-[#FF8B94] hover:opacity-85 hover:-translate-y-0.5"
        >
          🎨 Art
        </a>
        <a 
          href="#geography" 
          className="inline-block py-2 px-5 rounded-[18px] font-bold text-[0.95rem] text-[#2D3436] cursor-pointer transition-all duration-300 no-underline bg-[#A8E6CF] hover:opacity-85 hover:-translate-y-0.5"
        >
          🌍 Geography
        </a>
      </div>

      {/* MATHEMATICS */}
      <section className="py-16 px-9 max-w-[1200px] mx-auto max-md:py-10 max-md:px-[18px]" id="mathematics">
        <div className="text-center mb-10">
          <h2 className="text-[1.85rem] font-extrabold text-[#FF6B35] mb-2.5">
            ➕ Mathematics
          </h2>
          <p className="text-[1.1rem] text-[#636E72] dark:text-[#B2BEC3] max-w-[580px] mx-auto m-0">
            Build strong number skills step by step.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[22px] my-2">
          <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#FF6B35] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
            <span className="text-[2.6rem] mb-2.5 block">🔢</span>
            <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Number &amp; Place Value</h3>
            <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Understand numbers up to millions.</p>
            <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">Ages 5–9 · 15 min</p>
            <Link 
              to="/signup" 
              className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
            >
              Start →
            </Link>
          </div>
          <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#FF6B35] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
            <span className="text-[2.6rem] mb-2.5 block">➕</span>
            <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Fractions</h3>
            <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Halves, quarters and more with pizza!</p>
            <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">Ages 7–11 · 20 min</p>
            <Link 
              to="/signup" 
              className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
            >
              Start →
            </Link>
          </div>
          <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#FF6B35] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
            <span className="text-[2.6rem] mb-2.5 block">📐</span>
            <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Geometry</h3>
            <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Shapes, angles and coordinates.</p>
            <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">Ages 8–14 · 25 min</p>
            <Link 
              to="/signup" 
              className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
            >
              Start →
            </Link>
          </div>
        </div>
      </section>

      {/* SCIENCE */}
      <div className="bg-[#E8F8F5] dark:bg-[#0F3460] py-16 px-9 transition-all duration-300 max-md:py-10 max-md:px-[18px]" id="science">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[1.85rem] font-extrabold text-[#2D3436] dark:text-[#F0F0F0] mb-2.5">
              🔬 Science
            </h2>
            <p className="text-[1.1rem] text-[#636E72] dark:text-[#B2BEC3] max-w-[580px] mx-auto m-0">
              Explore the world through experiments.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-[22px] my-2">
            <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#4ECDC4] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
              <span className="text-[2.6rem] mb-2.5 block">💧</span>
              <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">The Water Cycle</h3>
              <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">How rain, rivers and clouds connect.</p>
              <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">Ages 6–10 · 18 min</p>
              <Link 
                to="/signup" 
                className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
              >
                Start →
              </Link>
            </div>
            <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#4ECDC4] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
              <span className="text-[2.6rem] mb-2.5 block">🌿</span>
              <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Plants &amp; Photosynthesis</h3>
              <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">How plants make their own food.</p>
              <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">Ages 8–12 · 22 min</p>
              <Link 
                to="/signup" 
                className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
              >
                Start →
              </Link>
            </div>
            <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#4ECDC4] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
              <span className="text-[2.6rem] mb-2.5 block">🚀</span>
              <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Space &amp; Planets</h3>
              <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Travel through our solar system!</p>
              <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">Ages 7–14 · 30 min</p>
              <Link 
                to="/signup" 
                className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
              >
                Start →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ENGLISH */}
      <section className="py-16 px-9 max-w-[1200px] mx-auto max-md:py-10 max-md:px-[18px]" id="english">
        <div className="text-center mb-10">
          <h2 className="text-[1.85rem] font-extrabold text-[#2D3436] dark:text-[#F0F0F0] mb-2.5">
            📖 English
          </h2>
          <p className="text-[1.1rem] text-[#636E72] dark:text-[#B2BEC3] max-w-[580px] mx-auto m-0">
            Read, write and communicate with confidence.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[22px] my-2">
          <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#b5a000] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
            <span className="text-[2.6rem] mb-2.5 block">✏️</span>
            <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Story Writing</h3>
            <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Create amazing stories with plot and characters.</p>
            <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">Ages 7–12 · 30 min</p>
            <Link 
              to="/signup" 
              className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
            >
              Start →
            </Link>
          </div>
          <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#b5a000] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
            <span className="text-[2.6rem] mb-2.5 block">📝</span>
            <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Grammar Basics</h3>
            <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Nouns, verbs, adjectives made fun!</p>
            <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">Ages 5–10 · 20 min</p>
            <Link 
              to="/signup" 
              className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
            >
              Start →
            </Link>
          </div>
        </div>
      </section>

      {/* ART */}
      <div className="bg-[#E8F8F5] dark:bg-[#0F3460] py-16 px-9 transition-all duration-300 max-md:py-10 max-md:px-[18px]" id="art">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[1.85rem] font-extrabold text-[#2D3436] dark:text-[#F0F0F0] mb-2.5">
              🎨 Art &amp; Craft
            </h2>
            <p className="text-[1.1rem] text-[#636E72] dark:text-[#B2BEC3] max-w-[580px] mx-auto m-0">
              Unleash creativity with every lesson.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-[22px] my-2">
            <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#FF8B94] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
              <span className="text-[2.6rem] mb-2.5 block">🖌️</span>
              <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Colour Theory</h3>
              <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Mix colours and create magic.</p>
              <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">Ages 5–12 · 25 min</p>
              <Link 
                to="/signup" 
                className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
              >
                Start →
              </Link>
            </div>
            <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#FF8B94] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
              <span className="text-[2.6rem] mb-2.5 block">✂️</span>
              <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Paper Craft</h3>
              <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Fold and cut amazing shapes.</p>
              <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">Ages 5–10 · 20 min</p>
              <Link 
                to="/signup" 
                className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
              >
                Start →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* GEOGRAPHY */}
      <section className="py-16 px-9 max-w-[1200px] mx-auto max-md:py-10 max-md:px-[18px]" id="geography">
        <div className="text-center mb-10">
          <h2 className="text-[1.85rem] font-extrabold text-[#2D3436] dark:text-[#F0F0F0] mb-2.5">
            🌍 Geography
          </h2>
          <p className="text-[1.1rem] text-[#636E72] dark:text-[#B2BEC3] max-w-[580px] mx-auto m-0">
            Discover maps, countries and cultures.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[22px] my-2">
          <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#A8E6CF] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
            <span className="text-[2.6rem] mb-2.5 block">🗺️</span>
            <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">World Continents</h3>
            <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Learn all 7 continents and their features.</p>
            <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">Ages 7–12 · 20 min</p>
            <Link 
              to="/signup" 
              className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
            >
              Start →
            </Link>
          </div>
          <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-t-4 border-[#A8E6CF] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
            <span className="text-[2.6rem] mb-2.5 block">🌋</span>
            <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Volcanoes &amp; Earthquakes</h3>
            <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Earth's forces explained simply.</p>
            <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">Ages 9–14 · 28 min</p>
            <Link 
              to="/signup" 
              className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
            >
              Start →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8B94] py-14 px-9 text-center">
        <h2 className="text-[1.85rem] font-extrabold text-white mb-2.5">
          Ready to Start Learning? 🌟
        </h2>
        <p className="text-white/90 mb-7">
          Create your free account today!
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
