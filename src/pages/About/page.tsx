export default function About() {
  const teamMembers = [
    { name: 'Dr. Sarah Bright', role: 'Chief Educator', image: 'https://i.pravatar.cc/150?img=32', bio: 'PhD in Child Psychology with 15 years in digital pedagogy.' },
    { name: 'Mike Adventure', role: 'Lead Game Designer', image: 'https://i.pravatar.cc/150?img=12', bio: 'Expert in gamified learning systems and interactive storytelling.' },
    { name: 'Emily Curiosity', role: 'Curriculum Director', image: 'https://i.pravatar.cc/150?img=44', bio: 'Former teacher passionate about making complex subjects simple.' },
    { name: 'Leo Discovery', role: 'Student Success', image: 'https://i.pravatar.cc/150?img=68', bio: 'Ensuring every child finds their unique path to knowledge.' },
  ];

  return (
    <main className="w-full transition-colors duration-500">
      {/* Hero Section */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-20">
        <div className="bg-[var(--color-bg-card)] rounded-[3rem] p-12 md:p-24 border border-[var(--color-border-subtle)] shadow-2xl relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4ECDC4]/5 rounded-full -mr-[250px] -mt-[250px] blur-[120px]"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-[5rem] font-black font-nunito mb-8 leading-tight text-[var(--color-text-page)]">
              Learning is an <span className="text-[#FF6B35]">Adventure</span> 🌈
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] font-bold leading-relaxed">
              BrightMinds was founded to replace boring lectures with interactive digital playgrounds. We believe that when kids are having fun, they learn faster and dream bigger.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-12 grid md:grid-cols-2 gap-10">
        <div className="p-12 rounded-[3rem] bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] shadow-xl hover:shadow-2xl transition-all group">
          <div className="w-16 h-16 rounded-2xl bg-[#FF6B35] text-white flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">🎯</div>
          <h2 className="text-3xl font-black mb-4 text-[var(--color-text-page)] font-nunito">Our Mission</h2>
          <p className="text-[var(--color-text-muted)] font-bold leading-relaxed text-lg">
            To provide world-class, interactive education that is accessible to every child, fostering a lifelong love for learning through innovation.
          </p>
        </div>
        <div className="p-12 rounded-[3rem] bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] shadow-xl hover:shadow-2xl transition-all group">
          <div className="w-16 h-16 rounded-2xl bg-[#4ECDC4] text-white flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">🚀</div>
          <h2 className="text-3xl font-black mb-4 text-[var(--color-text-page)] font-nunito">Our Vision</h2>
          <p className="text-[var(--color-text-muted)] font-bold leading-relaxed text-lg">
            To be the global leader in digital education, where technology and imagination meet to create the next generation of explorers.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-24">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-[3.5rem] font-black font-nunito mb-6 text-[var(--color-text-page)]">Meet the <span className="text-[#FF6B35]">Explorers</span></h2>
          <p className="text-xl text-[var(--color-text-muted)] font-bold italic">"Passionate educators, dreamers, and designers."</p>
          <div className="w-32 h-2 bg-[#4ECDC4] mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              className="group bg-[var(--color-bg-card)] p-10 rounded-[3rem] border border-[var(--color-border-subtle)] shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 text-center"
            >
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="absolute inset-0 bg-[#FF6B35] rounded-full scale-110 opacity-10 group-hover:scale-125 transition-transform duration-500"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="relative w-full h-full rounded-full object-cover border-4 border-[var(--color-bg-page)] shadow-2xl"
                />
              </div>
              <h3 className="text-2xl font-black mb-1 text-[var(--color-text-page)] font-nunito">{member.name}</h3>
              <p className="text-[#FF6B35] font-black text-xs uppercase tracking-widest mb-6">{member.role}</p>
              <p className="text-[var(--color-text-muted)] font-bold leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
