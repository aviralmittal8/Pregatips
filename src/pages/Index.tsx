import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { AgendaSection } from '@/components/AgendaSection';
import { WhoShouldAttendSection } from '@/components/WhoShouldAttendSection';
import { WhyJoinSection } from '@/components/WhyJoinSection';
import { SpeakersSection } from '@/components/SpeakersSection';
import { RegistrationSection } from '@/components/RegistrationSection';
import { FooterSection } from '@/components/FooterSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="home" className="pt-20">
        <HeroSection />
      </div>
      <StatsSection />
      <FeaturesSection />
      <div id="schedule">
        <AgendaSection />
      </div>
      <div id="audience">
        <WhoShouldAttendSection />
      </div>
      <div id="why-attend">
        <WhyJoinSection />
      </div>
      <div id="speakers">
        <SpeakersSection />
      </div>
      <div id="register">
        <RegistrationSection />
      </div>
      <FooterSection />
    </main>
  );
};

export default Index;
