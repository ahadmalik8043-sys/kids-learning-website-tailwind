import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#2D3436] text-white pt-14 px-9 pb-7">
      <div className="flex flex-wrap gap-9 max-w-[1200px] mx-auto mb-9">
        <div className="flex-1 min-w-[180px]">
          <h1 className="text-[1.6rem] font-black text-white mb-2.5">🌟 BrightMinds</h1>
          <p className="text-[#B2BEC3] text-[0.88rem] m-0">
            Making learning joyful for every child, everywhere.
          </p>
        </div>
        <div className="flex-1 min-w-[180px]">
          <h2 className="text-base text-[#FFE66D] mb-3.5 font-black">Quick Links</h2>
          <Link 
            to="/" 
            className="text-[#B2BEC3] text-[0.9rem] block mb-2 hover:text-[#FFE66D] transition-colors duration-300"
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="text-[#B2BEC3] text-[0.9rem] block mb-2 hover:text-[#FFE66D] transition-colors duration-300"
          >
            Courses
          </Link>
          <Link 
            to="/subjects" 
            className="text-[#B2BEC3] text-[0.9rem] block mb-2 hover:text-[#FFE66D] transition-colors duration-300"
          >
            Subjects
          </Link>
          <Link 
            to="/contact" 
            className="text-[#B2BEC3] text-[0.9rem] block mb-2 hover:text-[#FFE66D] transition-colors duration-300"
          >
            Contact
          </Link>
          <Link 
            to="/signup" 
            className="text-[#B2BEC3] text-[0.9rem] block mb-2 hover:text-[#FFE66D] transition-colors duration-300"
          >
            Sign Up
          </Link>
          <Link 
            to="/login" 
            className="text-[#B2BEC3] text-[0.9rem] block mb-2 hover:text-[#FFE66D] transition-colors duration-300"
          >
            Login
          </Link>
        </div>
        <div className="flex-1 min-w-[180px]">
          <h2 className="text-base text-[#FFE66D] mb-3.5 font-black">Support</h2>
          <a 
            href="#" 
            className="text-[#B2BEC3] text-[0.9rem] block mb-2 hover:text-[#FFE66D] transition-colors duration-300"
          >
            Help Center
          </a>
          <a 
            href="#" 
            className="text-[#B2BEC3] text-[0.9rem] block mb-2 hover:text-[#FFE66D] transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            className="text-[#B2BEC3] text-[0.9rem] block mb-2 hover:text-[#FFE66D] transition-colors duration-300"
          >
            Terms of Service
          </a>
        </div>
      </div>
      <div className="text-center border-t border-[#444] pt-5 max-w-[1200px] mx-auto">
        <p className="text-[#B2BEC3] text-[0.88rem] m-0">
          © 2025 BrightMinds. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
