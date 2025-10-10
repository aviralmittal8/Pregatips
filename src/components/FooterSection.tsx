import React from 'react';
import logo from '@/assets/logo.svg';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const FooterSection: React.FC = () => {
  return (
    <footer className="w-full">
      {/* === Forum Agenda Section (UNCHANGED) === */}
      <section className="flex w-full flex-col overflow-hidden items-stretch justify-center px-40 py-20 max-md:max-w-full max-md:px-5">
      <div
        id="forum-agenda"
          className="items-center border shadow-[0_0_8px_0_#ECF3EC] bg-white flex w-full gap-4 overflow-hidden flex-wrap p-10 rounded-[20px] border-solid border-[#B4C7B5] max-md:max-w-full max-md:px-5"
        >
          <div className="self-stretch min-w-60 flex-1 shrink basis-10 my-auto pr-6 max-md:max-w-full">
            <h2 className="text-[32px] font-semibold text-black relative max-md:max-w-full">
              Forum Agenda
            </h2>
            <p className="text-slate-600 text-[18px] font-normal leading-[19px] mt-2 max-md:max-w-full">
              A carefully structured 5-hour experience balancing education,
              innovation, and meaningful connections.
            </p>
          </div>
          <button className="justify-center items-center self-stretch flex gap-2 text-base text-[#FBFBFB] font-medium text-center bg-[#256429] my-auto px-6 py-3 rounded-xl max-md:px-5 hover:bg-[#1e5023] transition-colors">
            <div className="text-[#FBFBFB] self-stretch my-auto">
              Apply to Showcase
            </div>
          </button>
        </div>
      </section>

      {/* === Main Footer (MODIFIED) === */}
      <div className="w-full bg-[#ECF3EC] border-t border-[#BDC4C4] mt-2">
        <div className="max-w-[1400px] mx-auto px-10 md:px-20 lg:px-20 py-8 grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-10 text-center md:text-left">

          {/* Left: Logo */}
          <div className="flex justify-center md:justify-start">
            <img src={logo} alt="Ambixious x Pregatips" className="h-10 object-contain" />
          </div>

          {/* Center: Quick Links */}
          <div className="flex flex-col items-center md:items-center">
            <h3 className="text-[#256429] text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-4 text-slate-700">
              <li><a href="#home" className="hover:text-[#256429] transition-colors">Home</a></li>
              <li><a href="#schedule" className="hover:text-[#256429] transition-colors">Schedule</a></li>
              <li><a href="#audience" className="hover:text-[#256429] transition-colors">Audience</a></li>
              <li><a href="#speakers" className="hover:text-[#256429] transition-colors">Speakers</a></li>
            </ul>
          </div>

          {/* Right: Register + Socials */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <button
              onClick={() => scrollToSection('register')}
              className="justify-center items-center flex gap-2 text-[#FBFBFB] bg-[#1b5e20] px-6 py-3 rounded-xl border-2 border-solid border-[#1b5e20] hover:bg-transparent hover:text-[#1b5e20] transition-all duration-200 hover:scale-[1.03]"
            >
              Register Now
            </button>

            {/* Social Icons */}
            <div className="flex gap-5 justify-center md:justify-end">
              {[
                // Facebook
                <path key="fb" d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
                // Twitter
                <path key="tw" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />,
                // Instagram
                <path key="ig" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />,
                // LinkedIn
                <path key="ln" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#256429] flex items-center justify-center text-white hover:bg-[#1e5023] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* === Bottom Bar === */}
        <div className="border-t border-slate-300 py-5 px-10 md:px-20 lg:px-40 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-sm">
          <p>© 2025 Ambixous & Pregatips. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#256429] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#256429] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#256429] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
