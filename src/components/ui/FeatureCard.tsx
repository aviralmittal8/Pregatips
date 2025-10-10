import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  image?: string; // optional image URL
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <article className="border shadow-[0_0_8px_0_#ECF3EC] bg-white min-w-60 overflow-hidden flex-1 shrink basis-[0%] rounded-[20px] border-solid border-[#B4C7B5] transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-[180px] object-cover"
        />
      ) : (
        <div className="bg-[rgba(239,239,239,1)] flex min-h-[180px] w-full" />
      )}
      <div className="w-full pt-10 pb-[60px] px-8 max-md:px-5">
        <h3 className="text-[#0B0B0B] text-xl font-medium leading-[20px]">
          {title}
        </h3>
        <p className="text-slate-600 text-base font-normal leading-[19px] mt-4">
          {description}
        </p>
      </div>
    </article>
  );
};
