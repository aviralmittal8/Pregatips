import React from 'react';
import { SpeakerCard } from './ui/SpeakerCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faUserMd,
  faFlask,
  faHandshake,
  faAward,
  faHeartPulse
} from '@fortawesome/free-solid-svg-icons';
import speaker1 from '../assets/speaker1.png';
import speaker2 from '../assets/speaker2.png';
import speaker3 from '../assets/speaker3.jpg';
import speaker4 from '../assets/speaker4.jpg';

const speakerImages = [speaker1, speaker2, speaker3, speaker4];

export const SpeakersSection: React.FC = () => {
  const speakers = [
    { name: "Dr. (Prof) Shweta Mittal Gupta", title: "Co-Director & Unit Head, Centre of IVF & Human Reproduction, Sir Ganga Ram Hospital" },
    { name: "Dr. Rohan Gupta", title: "IVF Specialist, Cloudnine Hospital" },
    { name: "Dr. Meena Iyer", title: "OB-GYN, Fortis Healthcare" },
    { name: "Dr. Alok Verma", title: "Maternal Health Expert, AIIMS Delhi" },
  ];

  const backers = [
    { name: "CME Accredited", title: "Continuing Medical Education credits recognized by leading medical boards", icon: faGraduationCap },
    { name: "Expert Faculty", title: "Leading gynaecologists, IVF specialists, and research scholars", icon: faUserMd },
    { name: "Research-Backed", title: "Evidence-based presentations with peer-reviewed clinical data", icon: faFlask },
    { name: "Industry Partnerships", title: "Collaborations with ISF, AIIMS, and leading IVF societies", icon: faHandshake },
    { name: "Recognition Program", title: "Progressive Hospital Awards celebrating excellence and innovation", icon: faAward },
    { name: "Pregatips Platform", title: "Trusted ecosystem connecting patients, practitioners, and innovations", icon: faHeartPulse },
  ];

  const associations = ["ISF", "AIIMS", "IVF Societies", "Leading Hospitals"];

  return (
    <section className="w-full overflow-hidden px-10 md:px-20 lg:px-40 py-[100px] max-md:py-[80px] bg-white">
      {/* Speaker Section */}
      <div className="text-center">
        <h2 className="text-[32px] font-semibold text-black relative max-md:max-w-full">
          Expert Speaker Panel
        </h2>
        <p className="text-xl font-normal text-slate-600 mt-2">
          Learn from leading voices in women's healthcare and reproductive medicine
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-10 max-md:mt-10">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              name={speaker.name}
              title={speaker.title}
              image={speakerImages[index]}
            />
          ))}
        </div>
      </div>

      {/* Backed by Excellence */}
      <div className="w-full leading-[1.2] mt-20 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full flex-col text-black text-center px-20 max-md:max-w-full max-md:px-5">
          <h2 className="text-[32px] font-semibold text-black relative max-md:max-w-full">
            Backed by Excellence
          </h2>
          <p className="text-xl font-normal text-slate-600 mt-2">
            Learn from leading voices in women's healthcare and reproductive medicine
          </p>
        </div>

        <div className="w-full mt-[60px] max-md:max-w-full max-md:mt-10">
          <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1 justify-items-center">
            {backers.map((backer, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-[#F9FAF9] border border-[#E4EBE4] p-6 rounded-2xl w-[300px] hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-[#256429] text-4xl mb-4">
                  <FontAwesomeIcon icon={backer.icon} />
                </div>
                <h3 className="text-lg font-semibold text-black">{backer.name}</h3>
                <p className="text-slate-600 mt-2 text-sm">{backer.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Association Section */}
      <div className="items-center border shadow-[0_0_8px_0_#ECF3EC] bg-white flex flex-col text-center mt-20 p-5 rounded-[20px] border-solid border-[#B4C7B5]">
        <div className="flex items-center gap-5 text-[#256429] font-bold justify-center flex-wrap px-4 py-3 rounded-[43px]">
          <div className="border bg-[#256429] w-[200px] h-px border-[#256429]" />
          <div>In association with</div>
          <div className="border bg-[#256429] w-[200px] h-px border-[#256429]" />
        </div>
        <div className="flex gap-5 text-slate-600 font-normal flex-wrap mt-4 justify-center">
          {associations.map((a, index) => (
            <div
              key={index}
              className="bg-[#ECF3EC] px-4 py-3 rounded-xl text-slate-600"
            >
              {a}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
