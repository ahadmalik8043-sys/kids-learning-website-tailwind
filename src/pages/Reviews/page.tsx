export default function Reviews() {
  const reviews = [
    { id: 1, name: 'Happy Parent', role: 'Parent of 8yo', avatar: 'https://i.pravatar.cc/150?img=45', rating: 5, comment: 'My son loves the interactive math games! He used to struggle with numbers, but now he asks to practice every day.', date: 'May 12, 2025' },
    { id: 2, name: 'Digital Explorer', role: 'Student, 10yo', avatar: 'https://i.pravatar.cc/150?img=12', rating: 5, comment: 'The coding course is super fun. I just built my first mini-game using what I learned on BrightMinds!', date: 'May 10, 2025' },
    { id: 3, name: 'Cool Teacher', role: 'School Teacher', avatar: 'https://i.pravatar.cc/150?img=33', rating: 4, comment: 'I recommend this platform to all my students. The curriculum is well-structured and follows educational standards perfectly.', date: 'May 8, 2025' },
    { id: 4, name: 'Bright Star', role: 'Parent of 6yo', avatar: 'https://i.pravatar.cc/150?img=47', rating: 5, comment: 'Story lessons are so engaging. My daughter has improved her reading skills significantly in just a month.', date: 'May 5, 2025' },
    { id: 5, name: 'Math Whiz', role: 'Student, 12yo', avatar: 'https://i.pravatar.cc/150?img=68', rating: 5, comment: 'The advanced science experiments are amazing. I love the drag-and-drop tasks!', date: 'May 1, 2025' },
    { id: 6, name: 'Learning Fan', role: 'Parent of 11yo', avatar: 'https://i.pravatar.cc/150?img=25', rating: 4, comment: 'Excellent platform for homeschooling. We love the diverse subjects and the progress tracking.', date: 'April 28, 2025' },
  ];

  return (
    <main className="max-w-[1300px] mx-auto px-6 md:px-10 py-20 transition-colors duration-500">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-[4rem] font-black font-nunito mb-6 leading-tight text-[var(--color-text-page)]">
          What Our <span className="text-[#FF6B35]">Community</span> Says 💬
        </h1>
        <p className="text-xl text-[var(--color-text-muted)] font-bold max-w-2xl mx-auto">
          Over 50,000 happy families trust BrightMinds for their children's education. Here are some of their stories.
        </p>
      </div>

      {/* Stats Summary */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {[
          { label: 'Average Rating', value: '4.9/5', icon: '⭐' },
          { label: 'Happy Families', value: '50K+', icon: '👨‍👩‍👧‍👦' },
          { label: 'Verified Reviews', value: '12K+', icon: '✅' },
        ].map(stat => (
          <div key={stat.label} className="bg-[var(--color-bg-card)] p-10 rounded-[2.5rem] border border-[var(--color-border-subtle)] shadow-xl text-center">
            <span className="text-4xl mb-4 block">{stat.icon}</span>
            <div className="text-4xl font-black text-[#FF6B35] font-nunito mb-2">{stat.value}</div>
            <p className="text-xs font-black text-[var(--color-text-muted)] uppercase tracking-[0.2em]">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div 
            key={review.id}
            className="group bg-[var(--color-bg-card)] p-8 rounded-[2.5rem] border border-[var(--color-border-subtle)] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#FF6B35]/20 group-hover:border-[#FF6B35] transition-colors" />
              <div>
                <h3 className="font-black text-lg leading-tight text-[var(--color-text-page)]">{review.name}</h3>
                <p className="text-xs font-black text-[#FF6B35]">{review.role}</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => <span key={i} className="text-[#FFE66D] text-lg">★</span>)}
            </div>
            <p className="text-[var(--color-text-muted)] font-bold leading-relaxed italic mb-8 flex-1">
              "{review.comment}"
            </p>
            <div className="text-[10px] font-black text-[var(--color-text-muted)] uppercase tracking-[0.2em]">{review.date}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-24 p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-[#4ECDC4] to-[#3AAFA9] text-center relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Want to share your story? 🌟</h2>
          <button className="px-12 py-5 bg-white text-[#3AAFA9] rounded-2xl font-black text-lg shadow-2xl hover:scale-105 transition-all">Write a Review</button>
        </div>
      </div>
    </main>
  );
}
