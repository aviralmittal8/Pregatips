import React from 'react';
import heroImage from '@/assets/hero-image.jpg';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const HeroSection: React.FC = () => {
  return (
    <header className="justify-center items-stretch flex w-full flex-col overflow-hidden text-base bg-[#ECF3EC] px-40 py-[120px] rounded-[0_0_60px_60px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex w-full items-center gap-[40px_72px] flex-wrap max-md:max-w-full">
        <div className="self-stretch flex min-w-60 flex-col items-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          <div className="w-full font-normal leading-[1.2] max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <div className="text-[#5d7aff] max-md:max-w-full">
                Ambixous x Pregatips presents
              </div>
              <h1 className="text-black text-[64px] font-semibold leading-[77px] mt-2 max-md:max-w-full max-md:text-[40px] max-md:leading-[53px]">
                Women's Health Innovation Forum
              </h1>
              <div className="text-slate-600 mt-2 max-md:max-w-full">
                Powered by Pregatips.com
              </div>
            </div>
            <div className="flex w-full gap-4 text-lg text-[#256429] text-center flex-wrap mt-5 max-md:max-w-full">
              <div className="justify-center border flex gap-2 whitespace-nowrap bg-[#ECF3EC] px-3 py-2 rounded-[81px] border-solid border-[#256429] text-[16px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/bbe48055d4861b17914f2d4ec5a372010fc3d9f2?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 shrink-0"
                  alt="Location icon"
                />
                <div className="text-[#256429]">Noida</div>
              </div>
              <div className="justify-center border flex gap-2 bg-[#ECF3EC] px-3 py-2 rounded-[81px] border-solid border-[#256429] text-[16px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/f2343b698ce34e57b9016c29209ceeb4/ee132d591f10e95314d25a1fe48693b5ffda126b?placeholderIfAbsent=true"
                  className="aspect-[1] object-contain w-5 shrink-0"
                  alt="Calendar icon"
                />
                <div className="text-[#256429]">Nov 21 (Fri) 2–7 pm</div>
              </div>
            </div>
            <p className="text-[#0B0B0B] text-[20px] leading-[30px] mt-9 max-md:max-w-full">
              A high-trust room for OB-GYNs, IVF leaders, fetal medicine experts, and hospital decision makers to advance maternity care using evidence, technology, and collaboration.
            </p>
          </div>
          <div className="flex items-center gap-4 font-medium text-center mt-8 max-md:max-w-full">
            <button onClick={() => scrollToSection('register')} className="justify-center items-center self-stretch flex gap-2 text-[#FBFBFB] bg-[#1b5e20] my-auto px-6 py-3 rounded-xl max-md:px-5 border-2 border-solid border-[#1b5e20] hover:bg-transparent hover:text-[#1b5e20] transition-all duration-200 hover:scale-[1.03]">
              <div className="self-stretch my-auto">
                Request Invite
              </div>
            </button>
            <button onClick={() => scrollToSection('forum-agenda')} className="justify-center items-center self-stretch flex min-w-60 gap-2 text-[#1b5e20] my-auto px-6 py-3 rounded-xl border-2 border-solid border-[#1b5e20] max-md:px-5 bg-transparent hover:bg-[#1b5e20] hover:text-[#FBFBFB] transition-all duration-200 hover:scale-[1.03]">
              <div className="self-stretch my-auto">
                Showcase your project
              </div>
            </button>
          </div>
        </div>
        <img
          src={heroImage}
          alt="Women's Health Innovation Forum - Healthcare professionals collaborating"
          className="self-stretch object-cover min-w-60 w-[440px] shrink-0 h-[520px] my-auto rounded-[20px]"
        />
      </div>
    </header>
  );
};
