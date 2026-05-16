import { Link } from 'react-router-dom';

const subjectsData = [
  {
    id: 'mathematics',
    title: 'Mathematics',
    icon: '➕',
    color: 'text-[#FF6B35]',
    bg: 'bg-[#FF6B35]/5',
    lessons: [
      { title: 'Number & Place Value', icon: '🔢', age: '5-9', time: '15m' },
      { title: 'Fractions', icon: '🍕', age: '7-11', time: '20m' },
      { title: 'Geometry', icon: '📐', age: '8-14', time: '25m' },
    ]
  },
  {
    id: 'science',
    title: 'Science',
    icon: '🔬',
    color: 'text-[#4ECDC4]',
    bg: 'bg-[#4ECDC4]/5',
    lessons: [
      { title: 'The Water Cycle', icon: '💧', age: '6-10', time: '18m' },
      { title: 'Photosynthesis', icon: '🌿', age: '8-12', time: '22m' },
      { title: 'Space & Planets', icon: '🚀', age: '7-14', time: '30m' },
    ]
  },
  {
    id: 'english',
    title: 'English',
    icon: '📖',
    color: 'text-[#FFE66D]',
    bg: 'bg-[#FFE66D]/5',
    lessons: [
      { title: 'Story Writing', icon: '✏️', age: '7-12', time: '30m' },
      { title: 'Grammar Basics', icon: '📝', age: '5-10', time: '20m' },
    ]
  }
];

export default function Subjects() {
  return (
    <main className="w-full transition-colors duration-500">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#4ECDC4] to-[#3AAFA9] py-24 px-6 text-center">
        <h1 className="text-4xl md:text-[4.5rem] font-black text-white mb-6 leading-tight font-nunito">
          Explore All Subjects 📚
        </h1>
        <p className="text-xl text-white/90 font-bold max-w-2xl mx-auto">
          Dive into fun, expert-crafted lessons across 5 exciting subjects. Built for every learning level!
        </p>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-[80px] z-[90] bg-[var(--color-bg-page)]/80 backdrop-blur-md border-b border-[var(--color-border-subtle)] py-6 overflow-x-auto">
        <div className="max-w-[1300px] mx-auto px-6 flex justify-center gap-6 min-w-max">
          {subjectsData.map(s => (
            <a key={s.id} href={`#${s.id}`} className={`px-8 py-3 rounded-full font-black text-sm no-underline transition-all hover:scale-110 active:scale-95 ${s.bg} ${s.color} border-2 border-transparent hover:border-current`}>
              {s.icon} {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Subjects Content */}
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 py-20 space-y-32">
        {subjectsData.map((subject) => (
          <section key={subject.id} id={subject.id} className="scroll-mt-32">
            <div className="flex flex-col items-center mb-16">
              <span className="text-7xl mb-6">{subject.icon}</span>
              <h2 className={`text-4xl md:text-6xl font-black font-nunito ${subject.color}`}>{subject.title}</h2>
              <div className="w-24 h-2 bg-[var(--color-border-subtle)] mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {subject.lessons.map((lesson) => (
                <div key={lesson.title} className="group bg-[var(--color-bg-card)] p-10 rounded-[3rem] border border-[var(--color-border-subtle)] shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
                  <span className="text-5xl mb-8 block group-hover:rotate-12 transition-transform duration-500">{lesson.icon}</span>
                  <h3 className="text-2xl font-black mb-2 text-[var(--color-text-page)] font-nunito">{lesson.title}</h3>
                  <p className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-[0.2em] mb-8">Ages {lesson.age} · {lesson.time} Lesson</p>
                  <Link to="/signup" className={`inline-block font-black ${subject.color} hover:underline no-underline text-lg`}>Start Adventure →</Link>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Final CTA */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-24">
        <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8B94] rounded-[4rem] py-20 px-10 text-center relative overflow-hidden shadow-2xl shadow-[#FF6B35]/20 group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 relative z-10">Ready to Start Learning? 🌟</h2>
          <Link to="/signup" className="px-12 py-5 bg-white text-[#FF6B35] rounded-2xl font-black text-xl no-underline hover:scale-105 transition-all shadow-xl relative z-10 inline-block">Create Free Account 🚀</Link>
        </div>
      </section>
    </main>
  );
}
