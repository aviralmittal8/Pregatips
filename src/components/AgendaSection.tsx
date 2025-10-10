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
      description: "Check-in, networking refreshments, and event orientation. Collect your delegate kit with exclusive resources."
    },
    {
      time: "2:00 PM",
      duration: "15 min",
      number: "1",
      title: "Welcome & Registration",
      category: "IVF Societies",
      description: "Introduction to Ambixous × Pregatips ecosystem and vision. Set the stage for innovation, research collaboration, and thought leadership in women's health."
    },
    {
      time: "2:00 PM",
      duration: "15 min",
      number: "1",
      title: "Welcome & Registration",
      category: "IVF Societies",
      description: "Leading gynaecologists, researchers, and innovators discuss translating clinical insights into practice. Q&A with the expert panel."
    },
    {
      time: "2:00 PM",
      duration: "15 min",
      number: "1",
      title: "Welcome & Registration",
      category: "IVF Societies",
      description: "Check-in, networking refreshments, and event orientation. Collect your delegate kit with exclusive resources."
    },
    {
      time: "2:00 PM",
      duration: "15 min",
      number: "1",
      title: "Welcome & Registration",
      category: "IVF Societies",
      description: "2–3 presentations showcasing breakthrough research in gynaecology, fertility treatments, and maternal health innovations."
    },
    {
      time: "2:00 PM",
      duration: "15 min",
      number: "1",
      title: "Welcome & Registration",
      category: "IVF Societies",
      description: "Recognition of excellence in women's healthcare delivery, innovation adoption, and patient‑centered care. Group photo session."
    },
    {
      time: "2:00 PM",
      duration: "15 min",
      number: "1",
      title: "Welcome & Registration",
      category: "IVF Societies",
      description: "Extended networking with refreshments. Hands‑on demos, one‑on‑one conversations with innovators, and peer collaboration opportunities."
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
