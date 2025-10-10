import React, { useState } from 'react';
import { Clock } from 'lucide-react';

export const RegistrationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    specialization: '',
    institution: '',
    city: '',
    areasOfInterest: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration submitted:', formData);
    // Handle form submission here
  };

  const benefits = [
    "3 hours of expert-led sessions",
    "Exclusive networking opportunities",
    "Access to latest research & innovations",
    "CME accreditation certificate",
    "Expert Section feature on Pregatips",
    "Complimentary refreshments & delegate kit"
  ];

  const specializations = [
    "Obstetrics & Gynaecology",
    "Fetal Medicine",
    "IVF & Reproductive Medicine",
    "Maternal-Fetal Medicine",
    "High-Risk Pregnancy",
    "Other"
  ];

  return (
    <section className="items-stretch flex w-full flex-col overflow-hidden justify-center bg-[#B4C7B5] px-60 py-[100px] max-md:max-w-full max-md:px-5">
      <div className="bg-white flex w-full flex-col items-stretch p-12 rounded-[40px] max-md:max-w-full max-md:p-6">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2 bg-[#FFF5E6] px-4 py-2 rounded-full border border-[#FFB347]">
            <Clock className="w-4 h-4 text-[#FF8C00]" />
            <span className="text-[#FF8C00] text-sm font-medium">LIMITED TO 50 PARTICIPANTS</span>
          </div>
        </div>

        <div className="flex w-full flex-col text-center max-md:max-w-full">
          <h2 className="text-black text-[32px] font-semibold leading-[1.2] max-md:max-w-full">
            Secure Your Invitation
          </h2>
          <p className="text-slate-600 text-base font-normal leading-[24px] mt-3 max-md:max-w-full">
            Join the most influential voices in women's healthcare innovation. Registration closes when capacity is reached.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-3 mt-8 max-md:grid-cols-1">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#256429] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-600 text-sm font-normal leading-[20px]">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center text-slate-600 text-sm mt-8 mb-6">
          Quick 2-minute registration. No payment required.
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            <div>
              <label className="text-[#0B0B0B] text-sm font-medium flex items-center gap-1" htmlFor="fullName">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Dr. Your Name"
                className="border bg-white flex w-full gap-4 text-slate-600 text-sm font-normal mt-2 px-4 py-3 rounded-lg border-solid border-[#E5E7EB] focus:outline-none focus:border-[#256429] focus:ring-1 focus:ring-[#256429]"
                required
              />
            </div>

            <div>
              <label className="text-[#0B0B0B] text-sm font-medium flex items-center gap-1" htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@hospital.com"
                className="border bg-white flex w-full gap-4 text-slate-600 text-sm font-normal mt-2 px-4 py-3 rounded-lg border-solid border-[#E5E7EB] focus:outline-none focus:border-[#256429] focus:ring-1 focus:ring-[#256429]"
                required
              />
            </div>

            <div>
              <label className="text-[#0B0B0B] text-sm font-medium flex items-center gap-1" htmlFor="contactNumber">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                placeholder="+91 00000 00000"
                className="border bg-white flex w-full gap-4 text-slate-600 text-sm font-normal mt-2 px-4 py-3 rounded-lg border-solid border-[#E5E7EB] focus:outline-none focus:border-[#256429] focus:ring-1 focus:ring-[#256429]"
                required
              />
            </div>

            <div>
              <label className="text-[#0B0B0B] text-sm font-medium flex items-center gap-1" htmlFor="specialization">
                Specialization <span className="text-red-500">*</span>
              </label>
              <select
                id="specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleInputChange}
                className="border bg-white flex w-full gap-4 text-slate-600 text-sm font-normal mt-2 px-4 py-3 rounded-lg border-solid border-[#E5E7EB] focus:outline-none focus:border-[#256429] focus:ring-1 focus:ring-[#256429]"
                required
              >
                <option value="">Select your specialization</option>
                {specializations.map((spec, index) => (
                  <option key={index} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="text-[#0B0B0B] text-sm font-medium flex items-center gap-1 max-md:max-w-full" htmlFor="institution">
              Institution / Hospital <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="institution"
              name="institution"
              value={formData.institution}
              onChange={handleInputChange}
              placeholder="Your hospital or institution name"
              className="border bg-white flex w-full gap-4 text-slate-600 text-sm font-normal mt-2 px-4 py-3 rounded-lg border-solid border-[#E5E7EB] max-md:max-w-full focus:outline-none focus:border-[#256429] focus:ring-1 focus:ring-[#256429]"
              required
            />
          </div>

          <div className="mt-6">
            <label className="text-[#0B0B0B] text-sm font-medium flex items-center gap-1 max-md:max-w-full" htmlFor="city">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Your city"
              className="border bg-white flex w-full gap-4 text-slate-600 text-sm font-normal mt-2 px-4 py-3 rounded-lg border-solid border-[#E5E7EB] max-md:max-w-full focus:outline-none focus:border-[#256429] focus:ring-1 focus:ring-[#256429]"
              required
            />
          </div>

          <div className="mt-6">
            <label className="text-[#0B0B0B] text-sm font-medium flex items-center gap-1 max-md:max-w-full" htmlFor="areasOfInterest">
              Areas of Interest (Optional)
            </label>
            <textarea
              id="areasOfInterest"
              name="areasOfInterest"
              value={formData.areasOfInterest}
              onChange={handleInputChange}
              placeholder="E.g., Femtech innovations, IVF research, maternal health..."
              rows={3}
              className="border bg-white flex w-full gap-4 text-slate-600 text-sm font-normal mt-2 px-4 py-3 rounded-lg border-solid border-[#E5E7EB] max-md:max-w-full focus:outline-none focus:border-[#256429] focus:ring-1 focus:ring-[#256429] resize-none"
            />
          </div>

          <button
            type="submit"
            className="justify-center items-center flex w-full gap-2 text-base text-white font-semibold text-center bg-[#256429] mt-8 px-8 py-4 rounded-xl hover:bg-[#1e5023] transition-colors"
          >
            Complete Registration
          </button>

          <div className="flex items-center justify-center gap-6 mt-6 text-xs text-slate-500 flex-wrap">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Your information is secure and confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Instant confirmation via email</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
