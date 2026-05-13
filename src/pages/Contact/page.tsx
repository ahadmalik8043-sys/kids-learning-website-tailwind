import { Link } from 'react-router-dom';

export default function Contact() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('Message sent! We will get back to you soon 📬');
  }

  return (
    <>
      {/* HERO */}
      <div className="bg-gradient-to-br from-[#4ECDC4] to-[#3AAFA9] py-14 px-9 text-center">
        <h1 className="text-white text-[2.4rem] font-black mb-3 leading-tight">
          Get In Touch 📬
        </h1>
        <p className="text-white/92 max-w-[580px] mx-auto mb-0">
          Have a question or feedback? We'd love to hear from you!
        </p>
      </div>

      {/* CONTACT LAYOUT */}
      <section className="py-16 px-9 max-w-[1200px] mx-auto max-md:py-10 max-md:px-[18px]">
        <div className="flex gap-12 flex-wrap items-start">
          {/* INFO CARDS */}
          <div className="flex flex-col gap-5 flex-1 min-w-[240px]">
            <div className="bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
              <span className="text-[2.6rem] mb-2.5 block">📧</span>
              <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Email Us</h3>
              <p className="text-[#636E72] dark:text-[#B2BEC3] text-base m-0">hello@brightminds.com</p>
            </div>
            <div className="bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
              <span className="text-[2.6rem] mb-2.5 block">📞</span>
              <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Call Us</h3>
              <p className="text-[#636E72] dark:text-[#B2BEC3] text-base m-0">+44 20 1234 5678</p>
            </div>
            <div className="bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
              <span className="text-[2.6rem] mb-2.5 block">📍</span>
              <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Our Office</h3>
              <p className="text-[#636E72] dark:text-[#B2BEC3] text-base m-0">123 Learning Lane, London, UK</p>
            </div>
            <div className="bg-white dark:bg-[#16213E] rounded-[18px] p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]">
              <span className="text-[2.6rem] mb-2.5 block">⏰</span>
              <h3 className="text-xl font-bold text-[#2D3436] dark:text-[#F0F0F0] mb-2">Support Hours</h3>
              <p className="text-[#636E72] dark:text-[#B2BEC3] text-base m-0">Mon–Fri, 9am – 5pm GMT</p>
            </div>
          </div>

          {/* FORM */}
          <div className="flex-[2] min-w-[300px] bg-white dark:bg-[#16213E] rounded-[18px] p-9 shadow-[0_4px_20px_rgba(0,0,0,0.12)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] max-md:p-6 max-md:px-[18px]">
            <h2 className="text-[1.85rem] font-extrabold text-[#2D3436] dark:text-[#F0F0F0] mb-6">
              Send a Message ✉️
            </h2>
            <form id="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="flex gap-3.5">
                <div className="flex-1 mb-4">
                  <label 
                    htmlFor="contact-first"
                    className="block font-bold text-[0.9rem] text-[#636E72] dark:text-[#B2BEC3] mb-1.5"
                  >
                    First Name
                  </label>
                  <input 
                    type="text" 
                    id="contact-first" 
                    name="first_name" 
                    placeholder="Alex" 
                    required 
                    className="w-full py-2.5 px-3.5 border-2 border-[#DFE6E9] dark:border-[#2D3436] rounded-[10px] font-nunito text-base bg-[#FFF9F0] dark:bg-[#1A1A2E] text-[#2D3436] dark:text-[#F0F0F0] transition-all duration-300 outline-none focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.15)] focus:bg-white dark:focus:bg-[#16213E]"
                  />
                </div>
                <div className="flex-1 mb-4">
                  <label 
                    htmlFor="contact-last"
                    className="block font-bold text-[0.9rem] text-[#636E72] dark:text-[#B2BEC3] mb-1.5"
                  >
                    Last Name
                  </label>
                  <input 
                    type="text" 
                    id="contact-last" 
                    name="last_name" 
                    placeholder="Smith" 
                    required 
                    className="w-full py-2.5 px-3.5 border-2 border-[#DFE6E9] dark:border-[#2D3436] rounded-[10px] font-nunito text-base bg-[#FFF9F0] dark:bg-[#1A1A2E] text-[#2D3436] dark:text-[#F0F0F0] transition-all duration-300 outline-none focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.15)] focus:bg-white dark:focus:bg-[#16213E]"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label 
                  htmlFor="contact-email"
                  className="block font-bold text-[0.9rem] text-[#636E72] dark:text-[#B2BEC3] mb-1.5"
                >
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="contact-email" 
                  name="email" 
                  placeholder="you@example.com" 
                  required 
                  className="w-full py-2.5 px-3.5 border-2 border-[#DFE6E9] dark:border-[#2D3436] rounded-[10px] font-nunito text-base bg-[#FFF9F0] dark:bg-[#1A1A2E] text-[#2D3436] dark:text-[#F0F0F0] transition-all duration-300 outline-none focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.15)] focus:bg-white dark:focus:bg-[#16213E]"
                />
              </div>

              <div className="mb-4">
                <label 
                  htmlFor="contact-subject"
                  className="block font-bold text-[0.9rem] text-[#636E72] dark:text-[#B2BEC3] mb-1.5"
                >
                  Subject
                </label>
                <input 
                  type="text" 
                  id="contact-subject" 
                  name="subject" 
                  placeholder="How can we help?" 
                  required 
                  className="w-full py-2.5 px-3.5 border-2 border-[#DFE6E9] dark:border-[#2D3436] rounded-[10px] font-nunito text-base bg-[#FFF9F0] dark:bg-[#1A1A2E] text-[#2D3436] dark:text-[#F0F0F0] transition-all duration-300 outline-none focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.15)] focus:bg-white dark:focus:bg-[#16213E]"
                />
              </div>

              <div className="mb-4">
                <label 
                  htmlFor="contact-message"
                  className="block font-bold text-[0.9rem] text-[#636E72] dark:text-[#B2BEC3] mb-1.5"
                >
                  Message
                </label>
                <textarea 
                  id="contact-message" 
                  name="message" 
                  placeholder="Write your message here..." 
                  required 
                  className="w-full py-2.5 px-3.5 border-2 border-[#DFE6E9] dark:border-[#2D3436] rounded-[10px] font-nunito text-base bg-[#FFF9F0] dark:bg-[#1A1A2E] text-[#2D3436] dark:text-[#F0F0F0] transition-all duration-300 outline-none resize-y min-h-[100px] focus:border-[#FF6B35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.15)] focus:bg-white dark:focus:bg-[#16213E]"
                />
              </div>

              <button 
                type="submit" 
                className="w-full font-nunito font-bold text-[1.2rem] bg-[#FF6B35] text-white border-none rounded-[18px] py-3.5 px-9 cursor-pointer transition-all duration-300 hover:bg-[#e55a26] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.22)]"
              >
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8B94] py-14 px-9 text-center">
        <h2 className="text-[1.85rem] font-extrabold text-white mb-2.5">
          Join Our Learning Community 🌟
        </h2>
        <p className="text-white/90 mb-7">
          Start your child's learning adventure today — for free!
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
