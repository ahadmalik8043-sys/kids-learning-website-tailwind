import { Link } from 'react-router-dom';

const activityData = [
  { id: 1, lesson: 'Addition & Subtraction', subject: 'Mathematics', date: '2025-05-08', score: '95%', status: '✅ Done' },
  { id: 2, lesson: 'The Water Cycle', subject: 'Science', date: '2025-05-07', score: '88%', status: '✅ Done' },
  { id: 3, lesson: 'Adjectives & Adverbs', subject: 'English', date: '2025-05-06', score: '76%', status: '✅ Done' },
  { id: 4, lesson: 'World Continents', subject: 'Geography', date: '2025-05-05', score: '91%', status: '✅ Done' },
  { id: 5, lesson: 'Colour Theory', subject: 'Art & Craft', date: '2025-05-04', score: '—', status: '🔄 In Progress' },
];

export default function Dashboard() {
  return (
    <div className="min-h-[calc(100vh-68px)] py-10 px-9 max-w-[1200px] mx-auto max-md:py-7 max-md:px-[18px]">
      {/* WELCOME */}
      <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8B94] rounded-[18px] p-8 px-9 mb-9 flex items-center justify-between flex-wrap gap-5">
        <div>
          <h1 className="text-white text-[1.9rem] font-black mb-1.5">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-white/90 m-0">
            You're on a 🔥 7-day streak! Keep it up, Champion!
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <Link 
            to="/services" 
            className="inline-block font-nunito font-bold text-base bg-white text-[#FF6B35] rounded-[10px] py-2.5 px-6 cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)] no-underline"
          >
            Browse Lessons
          </Link>
          <a 
            href="#activity-table" 
            className="inline-block font-nunito font-bold text-base bg-transparent text-white border-2 border-white rounded-[10px] py-2.5 px-6 cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#FF6B35] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)] no-underline"
          >
            My Activity
          </a>
        </div>
      </div>

      {/* STATS */}
      <h2 className="text-[1.85rem] font-extrabold text-[#2D3436] dark:text-[#F0F0F0] my-9 mt-9 mb-3">
        My Progress 📊
      </h2>
      <div className="flex flex-wrap justify-start gap-[22px] my-2">
        <div className="flex flex-col items-center justify-center bg-white dark:bg-[#16213E] rounded-[18px] p-7 px-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[175px] text-center flex-shrink-0 border-t-4 border-[#FF6B35] text-[#FF6B35] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
          <span className="text-[2.2rem]">📚</span>
          <h3 className="text-[2rem] font-extrabold my-2 mt-2 mb-1">42</h3>
          <p className="text-[0.85rem] text-[#636E72] dark:text-[#B2BEC3] m-0">Lessons Completed</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white dark:bg-[#16213E] rounded-[18px] p-7 px-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[175px] text-center flex-shrink-0 border-t-4 border-[#FFE66D] text-[#E17000] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
          <span className="text-[2.2rem]">⭐</span>
          <h3 className="text-[2rem] font-extrabold my-2 mt-2 mb-1">380</h3>
          <p className="text-[0.85rem] text-[#636E72] dark:text-[#B2BEC3] m-0">Stars Earned</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white dark:bg-[#16213E] rounded-[18px] p-7 px-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[175px] text-center flex-shrink-0 border-t-4 border-[#4ECDC4] text-[#4ECDC4] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
          <span className="text-[2.2rem]">🔥</span>
          <h3 className="text-[2rem] font-extrabold my-2 mt-2 mb-1">7</h3>
          <p className="text-[0.85rem] text-[#636E72] dark:text-[#B2BEC3] m-0">Day Streak</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white dark:bg-[#16213E] rounded-[18px] p-7 px-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[175px] text-center flex-shrink-0 border-t-4 border-[#FF8B94] text-[#FF8B94] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
          <span className="text-[2.2rem]">🏆</span>
          <h3 className="text-[2rem] font-extrabold my-2 mt-2 mb-1">5</h3>
          <p className="text-[0.85rem] text-[#636E72] dark:text-[#B2BEC3] m-0">Badges Earned</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white dark:bg-[#16213E] rounded-[18px] p-7 px-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[175px] text-center flex-shrink-0 border-t-4 border-[#A8E6CF] text-[#27AE60] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
          <span className="text-[2.2rem]">✅</span>
          <h3 className="text-[2rem] font-extrabold my-2 mt-2 mb-1">88%</h3>
          <p className="text-[0.85rem] text-[#636E72] dark:text-[#B2BEC3] m-0">Quiz Accuracy</p>
        </div>
      </div>

      {/* TABLE */}
      <h2 
        id="activity-table" 
        className="text-[1.85rem] font-extrabold text-[#2D3436] dark:text-[#F0F0F0] my-9 mt-9 mb-3"
      >
        Recent Activity 📋
      </h2>
      <div className="w-full overflow-x-auto mt-5">
        <table className="w-full border-collapse rounded-[10px] overflow-hidden text-[0.95rem] bg-white dark:bg-[#16213E] shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] min-w-[560px] max-w-full">
          <thead className="bg-[#FF6B35] text-white">
            <tr>
              <th className="py-3.5 px-4 text-left font-extrabold text-[0.85rem] tracking-wider uppercase">#</th>
              <th className="py-3.5 px-4 text-left font-extrabold text-[0.85rem] tracking-wider uppercase">Lesson</th>
              <th className="py-3.5 px-4 text-left font-extrabold text-[0.85rem] tracking-wider uppercase">Subject</th>
              <th className="py-3.5 px-4 text-left font-extrabold text-[0.85rem] tracking-wider uppercase">Date</th>
              <th className="py-3.5 px-4 text-left font-extrabold text-[0.85rem] tracking-wider uppercase">Score</th>
              <th className="py-3.5 px-4 text-left font-extrabold text-[0.85rem] tracking-wider uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {activityData.map((row, index) => (
              <tr 
                key={row.id}
                className={`${index % 2 === 0 ? 'bg-white dark:bg-[#16213E]' : 'bg-[#FFF3EC] dark:bg-[rgba(255,107,53,0.08)]'} hover:bg-[rgba(78,205,196,0.15)] cursor-pointer transition-colors duration-300`}
              >
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">{row.id}</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">{row.lesson}</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">{row.subject}</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">{row.date}</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">{row.score}</td>
                <td className="py-3 px-4 border-b border-[#DFE6E9] dark:border-[#2D3436] align-middle text-[#2D3436] dark:text-[#F0F0F0]">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* RECOMMENDED */}
      <h2 className="text-[1.85rem] font-extrabold text-[#2D3436] dark:text-[#F0F0F0] my-9 mt-9 mb-3">
        Recommended for You 💡
      </h2>
      <div className="flex flex-wrap justify-center gap-[22px] my-2">
        <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-l-4 border-[#FF6B35] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
          <span className="text-[2.6rem] mb-2.5 block">➕</span>
          <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Fractions Made Easy</h3>
          <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Master halves, quarters, and thirds with fun pizza examples!</p>
          <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">Mathematics · 20 min · ⭐ 30 stars</p>
          <Link 
            to="/services" 
            className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
          >
            Start Lesson →
          </Link>
        </div>
        <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-l-4 border-[#4ECDC4] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
          <span className="text-[2.6rem] mb-2.5 block">🔬</span>
          <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">States of Matter</h3>
          <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Explore solids, liquids, and gases through cool experiments!</p>
          <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">Science · 25 min · ⭐ 35 stars</p>
          <Link 
            to="/services" 
            className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
          >
            Start Lesson →
          </Link>
        </div>
        <div className="flex flex-col bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 w-[260px] flex-shrink-0 border-l-4 border-[#FFE66D] hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
          <span className="text-[2.6rem] mb-2.5 block">📖</span>
          <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Story Writing</h3>
          <p className="text-[#636E72] dark:text-[#B2BEC3] text-base mb-2.5">Learn to write amazing stories with characters and plot twists!</p>
          <p className="text-[0.82rem] text-[#B2BEC3] dark:text-[#636E72] mb-2.5">English · 30 min · ⭐ 40 stars</p>
          <Link 
            to="/services" 
            className="text-[#FF6B35] font-bold pt-3 mt-auto inline-block hover:text-[#e55a26] transition-colors duration-300 no-underline"
          >
            Start Lesson →
          </Link>
        </div>
      </div>
    </div>
  );
}
