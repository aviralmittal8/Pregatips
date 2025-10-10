import React from 'react';
import whyJoinImage from '@/assets/why-join-image.jpg';

export const WhyJoinSection: React.FC = () => {
  const benefits = [
    "Practice impact, not theory: adoptable pathways for ANC, PNC, infertility counseling, and triage.",
    "Rapid case exchange: 2–3 concise research/case presentations with peer critique.",
    "Cross-discipline collaboration: IVF, fetal medicine, and OB leaders in one room.",
    "Live Femtech/diagnostics demos curated for maternity workflows.",
    "Recognition: Progressive Hospital Awards and Expert features for standout contributors.",
    "Time-respectful format: 3h sessions + 2h targeted networking on a Friday late afternoon."
  ];

  const stats = [
    { value: "~50", label: "Leaders in one room" },
    { value: "3h + 2h", label: "Focused sessions + networking" },
    { value: "Noida", label: "Closed, invite-only" }
  ];

  return (
    <section className="flex w-full flex-col overflow-hidden items-stretch justify-center px-40 py-[100px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col max-md:max-w-full">
        <div className="flex items-start gap-12 flex-wrap max-md:max-w-full">
          <div className="self-stretch min-w-60 flex-1 my-auto max-md:max-w-full">
            <h2 className="text-[32px] font-semibold text-black relative max-md:max-w-full">
              Why Doctors Should Join
            </h2>
            <ul className="mt-8 space-y-4 max-md:max-w-full">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="min-w-[6px] w-[6px] h-[6px] rounded-full bg-[#256429] mt-2 shrink-0" />
                  <p className="text-slate-600 text-base font-normal text-[17px] leading-[24px] flex-1">
                    {benefit}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <img 
            src={whyJoinImage} 
            alt="Healthcare professionals collaborating in women's health forum" 
            className="self-stretch object-cover min-w-60 w-[520px] shrink-0 h-[440px] my-auto rounded-[20px] shadow-lg"
          />
        </div>
        
        <div className="flex w-full items-stretch gap-6 flex-wrap mt-12 max-md:max-w-full">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="border shadow-[0_0_8px_0_#ECF3EC] bg-[#ECF3EC] min-w-60 flex-1 shrink basis-[0%] p-5 rounded-[20px] border-solid border-[#B4C7B5] text-center"
            >
              <div className="text-[#256429] text-3xl font-bold leading-[1.2]">
                {stat.value}
              </div>
              <div className="text-slate-600 text-base font-medium mt-3 leading-[1.4]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
