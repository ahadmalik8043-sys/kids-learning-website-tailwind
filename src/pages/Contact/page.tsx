import { Link } from 'react-router-dom';

export default function Contact() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('Message sent! We will get back to you soon 📬');
  }

  const inputCls = "w-full px-6 py-4 rounded-2xl bg-[var(--color-input-bg)] border-2 border-[var(--color-input-border)] text-lg font-bold outline-none focus:border-[#FF6B35] focus:bg-[var(--color-bg-card)] transition-all duration-300";

  return (
    <main className="w-full transition-colors duration-500">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#4ECDC4] to-[#3AAFA9] py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-white/5 blur-3xl rounded-full"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-[4rem] font-black text-white mb-6 leading-tight font-nunito">
            Get In Touch 📬
          </h1>
          <p className="text-xl text-white/90 font-bold">
            Have a question about our courses? Want to partner with us? Our team of educators is here to help!
          </p>
        </div>
      </section>

      <section className="max-w-[1300px] mx-auto px-6 md:px-10 py-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Info Side */}
          <div className="lg:w-1/3 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {[
              { icon: '📧', title: 'Email Us', desc: 'hello@brightminds.com', color: 'bg-[#FF6B35]/10 text-[#FF6B35]' },
              { icon: '📞', title: 'Call Us', desc: '+1 (555) 123-4567', color: 'bg-[#4ECDC4]/10 text-[#4ECDC4]' },
              { icon: '📍', title: 'Visit Us', desc: '123 Learning Lane, CA', color: 'bg-[#FFE66D]/10 text-[#E17000]' },
              { icon: '⏰', title: 'Support', desc: 'Mon-Fri, 9am - 6pm', color: 'bg-[#FF8B94]/10 text-[#FF8B94]' },
            ].map(card => (
              <div key={card.title} className="bg-[var(--color-bg-card)] p-8 rounded-[2.5rem] border border-[var(--color-border-subtle)] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all group">
                <div className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>{card.icon}</div>
                <h3 className="text-xl font-black mb-2 text-[var(--color-text-page)]">{card.title}</h3>
                <p className="text-[var(--color-text-muted)] font-bold">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Form Side */}
          <div className="lg:flex-1 w-full">
            <form 
              onSubmit={handleSubmit}
              className="bg-[var(--color-bg-card)] p-10 md:p-16 rounded-[3rem] border border-[var(--color-border-subtle)] shadow-2xl flex flex-col gap-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ECDC4]/5 rounded-bl-[100px]"></div>
              <h2 className="text-3xl font-black font-nunito relative z-10 text-[var(--color-text-page)]">Send a Message ✉️</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="ml-1 text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">First Name</label>
                  <input type="text" placeholder="Alex" className={inputCls} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="ml-1 text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Last Name</label>
                  <input type="text" placeholder="Smith" className={inputCls} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="ml-1 text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Email Address</label>
                <input type="email" placeholder="you@example.com" className={inputCls} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="ml-1 text-xs font-black text-[var(--color-text-muted)] uppercase tracking-widest">Message</label>
                <textarea placeholder="How can we help your child today?" rows={5} className={`${inputCls} resize-none`}></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-[#FF6B35] text-white rounded-2xl font-black text-xl shadow-xl shadow-[#FF6B35]/30 hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                Send Rocket Message 🚀
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Join */}
      <section className="bg-[var(--color-bg-page-alt)] py-24 px-6 text-center">
        <h2 className="text-3xl font-black mb-8 text-[var(--color-text-page)]">Follow the Adventure</h2>
        <div className="flex justify-center gap-6">
          {['Instagram', 'Facebook', 'YouTube', 'TikTok'].map(platform => (
            <a key={platform} href="#" className="px-8 py-3 bg-[var(--color-bg-card)] rounded-xl font-black text-[#FF6B35] border-2 border-[var(--color-border-subtle)] hover:bg-[#FF6B35] hover:text-white transition-all no-underline">
              {platform}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
