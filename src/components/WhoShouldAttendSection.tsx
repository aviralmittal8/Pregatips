import React from 'react';
import { AttendeeCard } from './ui/AttendeeCard';
import whoShouldAttendBg from '@/assets/who-should-attend-bg.jpg';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const WhoShouldAttendSection: React.FC = () => {
  const attendeeTypes = [
    {
      title: "Practicing Gynaecologists & Obstetricians",
      description: "Connect with peers, discover innovations, and establish yourself as a thought leader via the Pregatips platform."
    },
    {
      title: "Practicing Gynaecologists & Obstetricians",
      description: "Connect with peers, discover innovations, and establish yourself as a thought leader via the Pregatips platform."
    },
    {
      title: "Practicing Gynaecologists & Obstetricians",
      description: "Connect with peers, discover innovations, and establish yourself as a thought leader via the Pregatips platform."
    },
    {
      title: "Practicing Gynaecologists & Obstetricians",
      description: "Connect with peers, discover innovations, and establish yourself as a thought leader via the Pregatips platform."
    },
    {
      title: "Practicing Gynaecologists & Obstetricians",
      description: "Connect with peers, discover innovations, and establish yourself as a thought leader via the Pregatips platform."
    },
    {
      title: "Practicing Gynaecologists & Obstetricians",
      description: "Connect with peers, discover innovations, and establish yourself as a thought leader via the Pregatips platform."
    }
  ];

  return (
    <section className="flex w-full flex-col overflow-hidden items-stretch justify-center px-40 py-[100px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <div className="flex flex-col relative min-h-[197px] w-full text-center leading-[1.2] py-16 rounded-[20px] max-md:max-w-full overflow-hidden">
          <img
            src={whoShouldAttendBg}
            className="absolute h-full w-full object-cover inset-0"
            alt="Healthcare professionals collaborating"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-4 left-4 flex items-baseline gap-2 px-4 py-2 rounded-lg max-md:bottom-3 max-md:left-3">
            <span className="text-white text-5xl font-bold leading-none">50</span>
            <span className="text-white text-base font-medium">Exclusive Invitations</span>
          </div>
          <h2 className="text-[32px] font-semibold text-white relative max-md:max-w-full">
            Who should attend
          </h2>
          <p className="relative text-white text-base font-normal mt-2 max-md:max-w-full">
            This forum is exclusively designed for leaders and innovators
            shaping the future of women's healthcare.
          </p>
        </div>
        <div className="w-full mt-[60px] max-md:max-w-full max-md:mt-10">
          <div className="flex w-full gap-5 flex-wrap max-md:max-w-full">
            {attendeeTypes.slice(0, 3).map((attendee, index) => (
              <AttendeeCard
                key={index}
                title={attendee.title}
                description={attendee.description}
              />
            ))}
          </div>
          <div className="flex w-full gap-5 flex-wrap mt-8 max-md:max-w-full">
            {attendeeTypes.slice(3, 6).map((attendee, index) => (
              <AttendeeCard
                key={index + 3}
                title={attendee.title}
                description={attendee.description}
              />
            ))}
          </div>
        </div>
        <button onClick={() => scrollToSection('register')} className="justify-center items-center self-center flex gap-2 text-base text-[#FBFBFB] font-medium text-center bg-[#1b5e20] mt-[35px] px-6 py-3 rounded-xl max-md:mt-10 max-md:px-5 border-2 border-solid border-[#1b5e20] hover:bg-transparent hover:text-[#1b5e20] transition-all duration-200 hover:scale-[1.03]">
          <div className="self-stretch my-auto">
            Register Now - Limited Seats
          </div>
        </button>
      </div>
    </section>
  );
};
