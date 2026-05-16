import { Link } from 'react-router-dom';

export default function Services() {
  const subjects = [
    { title: 'Mathematics', desc: 'Numbers, algebra, and fun logic puzzles.', icon: '➕', lessons: '120+', age: '5–14', color: 'border-[#FF6B35]' },
    { title: 'Science', desc: 'Experiments, nature, and space exploration.', icon: '🔬', lessons: '95+', age: '6–14', color: 'border-[#4ECDC4]' },
    { title: 'English', desc: 'Grammar, creative writing, and storytelling.', icon: '📖', lessons: '110+', age: '5–14', color: 'border-[#FFE66D]' },
    { title: 'Art & Craft', desc: 'Drawing, digital art, and DIY creativity.', icon: '🎨', lessons: '60+', age: '5–12', color: 'border-[#FF8B94]' },
    { title: 'Geography', desc: 'Maps, cultures, and our amazing environment.', icon: '🌍', lessons: '75+', age: '7–14', color: 'border-[#A8E6CF]' },
  ];

  return (
    <main className="w-full transition-colors duration-500">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#4ECDC4] to-[#3AAFA9] py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-[120px]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-[4rem] font-black text-white mb-6 leading-tight font-nunito">
            Our <span className="text-[#FFE66D]">Courses</span> & Services 🎓
          </h1>
          <p className="text-xl text-white/90 font-bold mb-10">
            Explore expert-crafted lessons designed to spark curiosity and build real skills. Fun, engaging, and age-appropriate!
          </p>
          <Link to="/signup" className="px-12 py-5 bg-white text-[#3AAFA9] rounded-2xl font-black text-lg no-underline hover:scale-105 shadow-2xl transition-all">Get Started Free 🚀</Link>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 font-nunito text-[var(--color-text-page)]">All <span className="text-[#FF6B35]">Subjects</span></h2>
          <p className="text-xl text-[var(--color-text-muted)] font-bold">Hundreds of interactive lessons at your fingertips.</p>
          <div className="w-24 h-1.5 bg-[#4ECDC4] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {subjects.map((subject) => (
            <div key={subject.title} className={`group bg-[var(--color-bg-card)] p-12 rounded-[3.5rem] border-t-8 ${subject.color} shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 flex flex-col`}>
              <span className="text-6xl mb-8 block group-hover:scale-125 transition-transform duration-500">{subject.icon}</span>
              <h3 className="text-2xl font-black mb-4 text-[var(--color-text-page)]">{subject.title}</h3>
              <p className="text-[var(--color-text-muted)] font-bold leading-relaxed mb-8 flex-1">{subject.desc}</p>
              <div className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-[0.2em] mb-8">{subject.lessons} Lessons · Ages {subject.age}</div>
              <Link to="/signup" className="inline-block px-10 py-4 bg-[#FF6B35]/10 text-[#FF6B35] rounded-2xl font-black no-underline hover:bg-[#FF6B35] hover:text-white transition-all text-center">Enrol Now →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Table */}
      <section className="bg-[var(--color-bg-page-alt)] py-24 px-6 transition-colors">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl md:text-[3rem] font-black text-center mb-16 font-nunito text-[var(--color-text-page)]">Simple <span className="text-[#FF6B35]">Pricing</span> 💰</h2>
          <div className="overflow-hidden rounded-[3rem] border border-[var(--color-border-subtle)] shadow-2xl">
            <table className="w-full text-center bg-[var(--color-bg-card)]">
              <thead className="bg-[#FF6B35] text-white">
                <tr className="text-xs font-black uppercase tracking-widest">
                  <th className="py-8 px-4">Feature</th>
                  <th className="py-8 px-4">Free</th>
                  <th className="py-8 px-4">Explorer</th>
                  <th className="py-8 px-4">Champion</th>
                </tr>
              </thead>
              <tbody className="font-bold text-[var(--color-text-muted)]">
                {[
                  ['Lessons / Mo', '10', 'Unlimited', 'Unlimited'],
                  ['Subjects', '2', 'All 5', 'All 5'],
                  ['Tracking', '❌', '✅', '✅'],
                  ['Badges', '❌', '✅', '✅'],
                  ['Parent Hub', '❌', '❌', '✅'],
                  ['Price', '$0', '$4.99', '$8.99'],
                ].map((row, i) => (
                  <tr key={i} className={`transition-colors ${i % 2 === 0 ? 'bg-[var(--color-bg-page-alt)]' : ''}`}>
                    <td className="py-6 px-4 text-left pl-10 text-[var(--color-text-page)] font-black">{row[0]}</td>
                    <td className="py-6 px-4">{row[1]}</td>
                    <td className="py-6 px-4 font-black text-[#4ECDC4]">{row[2]}</td>
                    <td className="py-6 px-4 font-black text-[#FF6B35]">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
