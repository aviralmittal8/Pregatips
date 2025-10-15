import React from 'react';
import { AgendaItem } from './ui/AgendaItem';

export const AgendaSection: React.FC = () => {
  const agendaItems = [
    {
      time: "2:00 PM",
      duration: "15 min",
      number: "1",
      title: "Welcome & Registration",
      category: "IVF Societies",
      description: "Begin your journey with a warm welcome, registration, and networking over refreshments. Receive your delegate kit packed with exclusive resources."
    },
    {
      time: "2:15 PM",
      duration: "15 min",
      number: "2",
      title: "Pregatips Introduction + Keynote on Future of Women’s Healthcare",
      category: "IVF Societies",
      description: "Discover the Ambixous × Pregatips ecosystem and vision. Gain insights into the future of women’s healthcare through an inspiring keynote."
    },
    {
      time: "2:30 PM",
      duration: "60 min",
      number: "3",
      title: "Panel Discussion – Bridging Research, Practice & Innovation in Gynaecology",
      category: "IVF Societies",
      description: "Engage with leading experts as they discuss integrating research, clinical practice, and innovation in gynaecology. Participate in a dynamic Q&A session."
    },
    {
      time: "3:30 PM",
      duration: "30 min",
      number: "4",
      title: "Research Papers / Case Studies (2–3 Presentations)",
      category: "IVF Societies",
      description: "Explore breakthrough research and case studies in gynaecology, fertility treatments, and maternal health innovations."
    },
    {
      time: "4:00 PM",
      duration: "30 min",
      number: "5",
      title: "Product & Service Showcases (Femtech, IVF Diagnostics, Digital Health)",
      category: "IVF Societies",
      description: "Experience live demonstrations and presentations of cutting-edge products and services in femtech, IVF diagnostics, and digital health."
    },
    {
      time: "4:30 PM",
      duration: "30 min",
      number: "6",
      title: "Progressive Hospital Awards + Group Photo",
      category: "IVF Societies",
      description: "Celebrate excellence in women’s healthcare with awards for innovation and patient-centered care, followed by a group photo session."
    },
    {
      time: "5:00 PM",
      duration: "120 min",
      number: "7",
      title: "Networking & Closing",
      category: "IVF Societies",
      description: "Conclude the event with extended networking, hands-on demos, and opportunities for one-on-one conversations with innovators and peers."
    }
  ];

  return (
    <section className="flex w-full flex-col overflow-hidden items-stretch justify-center px-40 py-[100px] max-md:max-w-full max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="min-h-[69px] w-full text-center leading-[1.2] pr-6 max-md:max-w-full max-md:pr-5">
          <h2 className="text-[32px] font-semibold text-black relative max-md:max-w-full">
            Forum Agenda
          </h2>
          <p className="text-slate-600 text-base font-normal mt-2 max-md:max-w-full">
            A carefully structured 5‑hour experience balancing education, innovation, and meaningful connections.
          </p>
        </div>
        <div className="w-full mt-[60px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <div className="relative w-full max-md:max-w-full">
            <div className="border bg-[#B4C7B5] absolute z-0 min-h-[878px] w-0 h-[878px] border-[rgba(180,199,181,1)] border-solid left-20 top-0" />
            {agendaItems.map((item, index) => (
              <AgendaItem
                key={index}
                time={item.time}
                duration={item.duration}
                number={item.number}
                title={item.title}
                category={item.category}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
