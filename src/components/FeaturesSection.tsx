import React from 'react';
import { FeatureCard } from './ui/FeatureCard';
import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpg';

const featureImages = [feature1, feature2, feature3];

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Elevate Maternity Outcomes',
      description:
        'Actionable protocols for ANC/PNC, risk triage, IVF–OB coordination, and patient communication that improve outcomes and experience.',
    },
    {
      title: 'Leverage Evidence & Collaboration',
      description:
        'Collaborate with leading OB-GYNs, IVF experts, and maternal health innovators to drive impactful clinical improvements.',
    },
    {
      title: 'Adopt Scalable Innovations',
      description:
        'Discover proven tools and technologies that streamline workflows, enhance patient satisfaction, and improve care delivery.',
    },
  ];

  return (
    <section className="flex w-full flex-col items-center justify-center overflow-hidden px-10 md:px-20 lg:px-40 py-[100px] bg-white">
      <div className="w-full max-w-6xl text-center">
        {/* Section Header */}
        <h2 className="text-[32px] font-semibold text-black relative max-md:max-w-full">
          Why This Forum Matters for Healthcare Professionals
        </h2>
        <p className="text-slate-600 text-xl font-normal leading-relaxed mt-2 max-md:text-lg">
          A working room focused on maternity and women’s health, designed for high-value exchanges that move care quality forward in India.
        </p>

        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 max-md:mt-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={featureImages[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
