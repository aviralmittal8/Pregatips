import React from 'react';

export const StatsSection: React.FC = () => {
  const facts = [
    { label: "Format", value: "3h sessions + 2h networking" },
    { label: "Seats", value: "~50 invitees" },
    { label: "Venue", value: "Noida" }
  ];

  return (
    <section className="flex w-full flex-col items-stretch justify-center px-40 py-20 max-md:max-w-full max-md:px-5">
      <div className="border shadow-[0_0_8px_0_#ECF3EC] bg-white flex w-full overflow-hidden flex-col rounded-[20px] border-solid border-[#B4C7B5] max-md:max-w-full">
        <div className="p-8 max-md:p-5">
          <h3 className="text-black text-2xl font-semibold leading-[1.2] mb-6">
            Quick Facts
          </h3>
          <div className="flex flex-col gap-4">
            {facts.map((fact, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-[#ECF3EC] last:border-b-0">
                <span className="text-slate-600 text-base font-normal">
                  {fact.label}
                </span>
                <span className="text-[#0B0B0B] text-base font-medium text-right">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
