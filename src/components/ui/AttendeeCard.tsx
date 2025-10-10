import React from 'react';

interface AttendeeCardProps {
  title: string;
  description: string;
}

export const AttendeeCard: React.FC<AttendeeCardProps> = ({ title, description }) => {
  return (
    <article className="border shadow-[0_0_8px_0_#ECF3EC] bg-white min-w-60 flex-1 shrink basis-[0%] pt-10 pb-5 px-px rounded-[20px] border-solid border-[#B4C7B5]">
      <div className="flex w-full gap-4 text-base text-black font-medium leading-[19px] pr-5">
        <div className="flex w-1 shrink-0 h-[25px] bg-[#256429] rounded-[0_4px_4px_0]" />
        <h3 className="flex-1 shrink basis-[0%]">
          {title}
        </h3>
      </div>
      <div className="w-full text-sm text-slate-600 font-normal leading-[17px] mt-1 px-5">
        <p className="text-slate-600">
          {description}
        </p>
      </div>
    </article>
  );
};
