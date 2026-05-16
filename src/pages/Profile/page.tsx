import { useTheme } from '../../context/ThemeContext';

export default function Profile() {
  const { theme } = useTheme();

  return (
    <main className="max-w-[1300px] mx-auto px-6 md:px-10 py-12 transition-colors duration-500">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Profile Card */}
        <div className="lg:w-1/3 flex flex-col gap-8">
          <div className="bg-[var(--color-bg-card)] p-10 rounded-[3rem] border border-[var(--color-border-subtle)] shadow-2xl text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-[#FF6B35] to-[#FF8B94]"></div>
            <div className="relative z-10 mt-12">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img 
                  src="https://i.pravatar.cc/150?img=12" 
                  alt="Alex Explorer" 
                  className="w-full h-full rounded-full border-8 border-[var(--color-bg-card)] shadow-xl"
                />
                <div className="absolute bottom-1 right-1 w-8 h-8 bg-green-500 border-4 border-[var(--color-bg-card)] rounded-full"></div>
              </div>
              <h1 className="text-3xl font-black text-[var(--color-text-page)] mb-1">Alex Explorer</h1>
              <p className="text-[#FF6B35] font-black text-xs uppercase tracking-[0.2em] mb-6">Level 12 Space Scout</p>
              
              <div className="grid grid-cols-2 gap-4 py-6 border-t border-[var(--color-border-subtle)]">
                <div>
                  <div className="text-2xl font-black text-[var(--color-text-page)]">1,240</div>
                  <div className="text-[10px] font-black text-[var(--color-text-muted)] uppercase tracking-widest">Total Stars</div>
                </div>
                <div className="border-l border-[var(--color-border-subtle)]">
                  <div className="text-2xl font-black text-[var(--color-text-page)]">15</div>
                  <div className="text-[10px] font-black text-[var(--color-text-muted)] uppercase tracking-widest">Badges</div>
                </div>
              </div>
              
              <button className="w-full py-4 bg-[var(--color-bg-page-alt)] text-[var(--color-text-page)] rounded-2xl font-black text-sm hover:bg-[#FF6B35] hover:text-white transition-all duration-300">
                Edit Adventure Profile
              </button>
            </div>
          </div>

          <div className="bg-[var(--color-bg-card)] p-8 rounded-[2.5rem] border border-[var(--color-border-subtle)] shadow-xl">
            <h3 className="text-lg font-black mb-6 text-[var(--color-text-page)]">Learning Progress</h3>
            <div className="space-y-6">
              {[
                { label: 'Mathematics', progress: '75%', color: 'bg-[#FF6B35]' },
                { label: 'Science', progress: '60%', color: 'bg-[#4ECDC4]' },
                { label: 'English', progress: '90%', color: 'bg-[#FFE66D]' },
              ].map(sub => (
                <div key={sub.label}>
                  <div className="flex justify-between text-xs font-black mb-2 uppercase tracking-widest text-[var(--color-text-muted)]">
                    <span>{sub.label}</span>
                    <span>{sub.progress}</span>
                  </div>
                  <div className="h-3 bg-[var(--color-border-subtle)] rounded-full overflow-hidden">
                    <div className={`h-full ${sub.color} rounded-full`} style={{ width: sub.progress }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:flex-1 flex flex-col gap-12">
          {/* Recent Achievements */}
          <section>
            <h2 className="text-2xl font-black mb-8 font-nunito text-[var(--color-text-page)]">Recent Achievements 🏆</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: 'Math Wiz', date: '2 days ago', icon: '🔢', color: 'bg-[#FF6B35]/10 text-[#FF6B35]' },
                { title: 'Star Student', date: 'Yesterday', icon: '⭐', color: 'bg-[#FFE66D]/10 text-[#E17000]' },
                { title: 'Bookworm', date: '5 days ago', icon: '📚', color: 'bg-[#4ECDC4]/10 text-[#4ECDC4]' },
              ].map(badge => (
                <div key={badge.title} className="bg-[var(--color-bg-card)] p-6 rounded-[2rem] border border-[var(--color-border-subtle)] shadow-xl text-center group hover:scale-105 transition-all">
                  <div className={`w-16 h-16 ${badge.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 group-hover:rotate-12 transition-transform`}>{badge.icon}</div>
                  <h4 className="font-black mb-1 text-[var(--color-text-page)]">{badge.title}</h4>
                  <p className="text-[10px] font-black text-[var(--color-text-muted)] uppercase tracking-widest">{badge.date}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Current Courses */}
          <section>
            <h2 className="text-2xl font-black mb-8 font-nunito text-[var(--color-text-page)]">Active Learning Paths 🗺️</h2>
            <div className="space-y-6">
              {[
                { title: 'Mastering Fractions', lessons: '8/12 Lessons', icon: '➕' },
                { title: 'Deep Space Explorer', lessons: '5/10 Lessons', icon: '🚀' },
              ].map(course => (
                <div key={course.title} className="bg-[var(--color-bg-card)] p-8 rounded-[2.5rem] border border-[var(--color-border-subtle)] shadow-xl flex items-center justify-between hover:translate-x-2 transition-all group">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-[var(--color-bg-page-alt)] rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">{course.icon}</div>
                    <div>
                      <h4 className="text-xl font-black text-[var(--color-text-page)]">{course.title}</h4>
                      <p className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">{course.lessons}</p>
                    </div>
                  </div>
                  <button className="px-6 py-2.5 bg-[#FF6B35]/10 text-[#FF6B35] rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#FF6B35] hover:text-white transition-all">Continue</button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
