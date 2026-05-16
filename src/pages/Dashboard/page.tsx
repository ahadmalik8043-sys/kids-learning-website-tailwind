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
    <main className="max-w-[1300px] mx-auto px-6 md:px-10 py-12 transition-colors duration-500">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8B94] rounded-[2.5rem] p-10 md:p-14 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group shadow-2xl shadow-[#FF6B35]/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-3xl md:text-[2.5rem] font-black text-white mb-2 font-nunito">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-xl text-white/90 font-bold mb-8">
            You're on a 🔥 7-day streak! Keep exploring, Champion!
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link to="/services" className="px-8 py-3 bg-white text-[#FF6B35] rounded-xl font-black no-underline hover:scale-105 transition-all shadow-lg">My Courses</Link>
            <Link to="/profile" className="px-8 py-3 bg-white/20 text-white border-2 border-white/30 rounded-xl font-black no-underline hover:bg-white/30 transition-all">View Profile</Link>
          </div>
        </div>
        <div className="relative z-10 hidden lg:block">
          <span className="text-[120px] animate-bounce-slow inline-block drop-shadow-2xl">🚀</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { label: 'Completed', value: '42', icon: '📚', color: 'bg-[#FF6B35]/10 text-[#FF6B35]' },
          { label: 'Stars Earned', value: '380', icon: '⭐', color: 'bg-[#FFE66D]/10 text-[#E17000]' },
          { label: 'Streak', value: '7 Days', icon: '🔥', color: 'bg-[#FF8B94]/10 text-[#FF8B94]' },
          { label: 'Badges', value: '12', icon: '🏆', color: 'bg-[#4ECDC4]/10 text-[#4ECDC4]' },
        ].map(stat => (
          <div key={stat.label} className="bg-[var(--color-bg-card)] p-8 rounded-[2rem] border border-[var(--color-border-subtle)] shadow-xl text-center hover:scale-105 transition-all duration-300">
            <div className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4`}>{stat.icon}</div>
            <div className="text-3xl font-black mb-1 text-[var(--color-text-page)]">{stat.value}</div>
            <p className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Activity Table */}
      <div className="bg-[var(--color-bg-card)] rounded-[2.5rem] p-8 md:p-12 border border-[var(--color-border-subtle)] shadow-2xl mb-16">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <h2 className="text-2xl font-black font-nunito text-[var(--color-text-page)]">Recent Learning Activity 📋</h2>
          <button className="px-6 py-2 bg-[var(--color-bg-page-alt)] text-[var(--color-text-page)] rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#FF6B35]/10 hover:text-[#FF6B35] transition-all">Download Report</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="border-b border-[var(--color-border-subtle)] text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">
                <th className="pb-6 px-4">Lesson</th>
                <th className="pb-6 px-4">Subject</th>
                <th className="pb-6 px-4">Date</th>
                <th className="pb-6 px-4">Score</th>
                <th className="pb-6 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="font-bold">
              {activityData.map((row) => (
                <tr key={row.id} className="border-b border-[var(--color-border-subtle)]/50 hover:bg-[var(--color-bg-page-alt)] transition-colors group">
                  <td className="py-6 px-4 text-[var(--color-text-page)] group-hover:text-[#FF6B35] transition-colors">{row.lesson}</td>
                  <td className="py-6 px-4 text-[var(--color-text-muted)]">{row.subject}</td>
                  <td className="py-6 px-4 text-sm text-[var(--color-text-muted)]">{row.date}</td>
                  <td className="py-6 px-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-black ${parseInt(row.score) > 80 ? 'bg-[rgba(34,197,94,0.1)] text-green-600' : 'bg-[#FF6B35]/10 text-[#FF6B35]'}`}>
                      {row.score}
                    </span>
                  </td>
                  <td className="py-6 px-4 text-sm text-[var(--color-text-muted)]">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recommended Lessons */}
      <div className="space-y-8">
        <h2 className="text-3xl font-black font-nunito text-[var(--color-text-page)]">Pick Up Where You Left Off 💡</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Fractions Made Easy', subject: 'Math', time: '20m', icon: '➕', color: 'border-[#FF6B35]' },
            { title: 'States of Matter', subject: 'Science', time: '25m', icon: '🔬', color: 'border-[#4ECDC4]' },
            { title: 'Story Writing 101', subject: 'English', time: '30m', icon: '📖', color: 'border-[#FFE66D]' },
          ].map(lesson => (
            <div key={lesson.title} className={`bg-[var(--color-bg-card)] p-8 rounded-[2.5rem] border border-[var(--color-border-subtle)] border-l-8 ${lesson.color} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group`}>
              <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500">{lesson.icon}</div>
              <h3 className="text-xl font-black mb-2 text-[var(--color-text-page)]">{lesson.title}</h3>
              <p className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest mb-6">{lesson.subject} · {lesson.time} · ⭐ 30 stars</p>
              <Link to="/services" className="inline-block font-black text-[#FF6B35] hover:gap-4 transition-all flex items-center gap-2 no-underline">
                Start Lesson <span className="text-lg">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
