import React, { useState, useEffect } from 'react';
import logo from '@/assets/logo.svg';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Schedule', id: 'schedule' },
    { label: 'Audience', id: 'audience' },
    { label: 'Why Attend', id: 'why-attend' },
    { label: 'Speakers', id: 'speakers' },
    { label: 'Register', id: 'register' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5F5] border-b border-[#E5E5E5]">
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Pregatips" className="h-6 object-contain" />
        </div>

        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-6 py-2 rounded-lg text-base font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-[#E8F0E9] text-[#256429]'
                  : 'text-slate-600 hover:text-[#256429] hover:bg-[#F0F0F0]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToSection('register')}
          className="bg-[#256429] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#1e5023] transition-colors"
        >
          Register Now
        </button>
      </div>
    </nav>
  );
};
