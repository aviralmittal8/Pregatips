import React from 'react';

interface SpeakerCardProps {
  name: string;
  title: string;
  image?: string;
  compact?: boolean;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  title,
  image,
  compact = false
}) => {
  if (compact) {
  return (
    <article className="border shadow-[0_0_8px_0_#ECF3EC] bg-white self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto p-5 rounded-[20px] border-solid border-[#B4C7B5]">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-md overflow-hidden bg-[#ECF3EC] flex items-center justify-center flex-shrink-0">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="bg-[#D9E8DA] w-full h-full" />
          )}
        </div>

        {/* Text section */}
        <div className="flex flex-col text-left">
          <h3 className="text-[#0B0B0B] text-base font-semibold">{name}</h3>
          <p className="text-slate-600 text-sm font-normal leading-snug mt-1">
            {title}
          </p>
        </div>
      </div>
    </article>
  );
}

  return (
    <article className="border shadow-[0_0_8px_0_#ECF3EC] bg-white min-w-60 overflow-hidden flex-1 shrink basis-[0%] rounded-[20px] border-solid border-[#B4C7B5]">
      <div className="w-full min-h-[180px] bg-[#EFEFEF] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-[240px] object-cover"
          />
        ) : (
          <div className="bg-[#EFEFEF] w-full h-full" />
        )}
      </div>
      <div className="w-full pt-7 pb-5 px-7 max-md:px-5">
        <h3 className="text-[#0B0B0B] text-xl font-medium leading-[1.2]">
          {name}
        </h3>
        <p className="text-slate-600 text-[15px] font-normal leading-[17px] mt-1">
          {title}
        </p>
      </div>

    </article>
  );
};
