import React from 'react';

interface AgendaItemProps {
  time: string;
  duration: string;
  number: string;
  title: string;
  category: string;
  description: string;
}

export const AgendaItem: React.FC<AgendaItemProps> = ({
  time,
  duration,
  number,
  title,
  category,
  description
}) => {
  return (
    <div className="z-0 flex w-full gap-4 flex-wrap mt-7 first:mt-0 max-md:max-w-full">
      <div className="flex gap-2 pt-5">
        <div className="text-base leading-[1.2] w-[63px]">
          <div className="text-[#0B0B0B] font-bold">
            {time}
          </div>
          <div className="text-slate-600 text-right font-normal">
            {duration}
          </div>
        </div>
        <div className="justify-center items-center aspect-[1/1] bg-white flex min-h-[18px] gap-2.5 w-[18px] h-[18px] px-1 rounded-[20px] border-2 border-solid border-[#256429]">
          <div className="aspect-[1/1] bg-[#256429] self-stretch flex min-h-2.5 w-2.5 h-2.5 fill-[#256429] my-auto rounded-[50%]" />
        </div>
      </div>
      <article className="border shadow-[0_0_8px_0_#ECF3EC] bg-white flex min-w-60 gap-5 flex-wrap flex-1 shrink basis-[0%] p-5 rounded-[20px] border-solid border-[#B4C7B5] max-md:max-w-full">
        <div className="bg-[rgba(236,243,236,1)] flex min-h-10 flex-col overflow-hidden items-center text-xl text-[#256429] font-normal whitespace-nowrap leading-[1.2] justify-center w-10 h-10 px-2.5 rounded-[56px]">
          <div className="text-[#256429]">
            {number}
          </div>
        </div>
        <div className="min-w-60 flex-1 shrink basis-5 max-md:max-w-full">
          <div className="flex w-full items-center gap-6 leading-[1.2] flex-wrap max-md:max-w-full">
            <h3 className="text-black text-xl font-medium self-stretch my-auto">
              {title}
            </h3>
            <div className="items-stretch self-stretch flex flex-col text-sm text-slate-600 font-normal text-center justify-center w-[119px] bg-[#ECF3EC] my-auto px-4 py-1 rounded-lg">
              <div className="text-slate-600">
                {category}
              </div>
            </div>
          </div>
          <p className="text-slate-600 text-base font-normal leading-[19px] mt-2 max-md:max-w-full">
            {description}
          </p>
        </div>
      </article>
    </div>
  );
};
