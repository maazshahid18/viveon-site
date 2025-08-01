'use client';

import React from 'react';

export default function ForPartnersPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-8 px-4 overflow-hidden bg-gradient-to-r from-[#0F2824] to-[#014c50]">
        <div className="absolute inset-0 bg-opacity-30 z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Partnership Opportunity</h1>
          <p className="text-lg">
            Collaborate with Viveon GlobalHealth to unlock new avenues in global healthcare and patient services.
          </p>
        </div>
      </section>

      {/* Placeholder for future content */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
            <div className="flex-shrink-0 w-full max-w-sm">
              <img
                src="/partner.jpg"
                alt="Partnership illustration"
                className="w-full rounded-lg shadow-md object-cover h-[550px]"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-gray-800 text-lg w-full">
              {[
                "Medical Tourism & Advanced Treatment",
                "Healthcare Operations & Management",
                "Complete Marketing & Branding",
                "Media, PR & Community Engagement",
                "Joint Promotion & Community Awareness",
                "Expansion and Outreach Program",
                "Training & Orientation Program",
                "End to End solution under one umbrella"
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-200"
                >
                  <span className="text-[#014c50]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-xl">{item}</span>
                </div>
              ))}
              
            </div>
            
          </div>
        </div>
      </section>
      <section className='p-4'>
        <div className="mb-4 relative text-white py-6 px-8 w-full md:w-3/4 mx-auto overflow-hidden text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Bringing Expertise to Your Doorstep</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto mb-12">
          {[
            {
              title: "Onsite Expert Opinions",
              content: "We provide expert consultations where you are, when possible.",
            },
            {
              title: "Procedures and Surgeries",
              content: "Certain procedures are available onsite, removing travel barriers.",
            },
            {
              title: "Affordable Access",
              content: "Specialized care is now more affordable without needing to travel to India.",
            }
          ].map((box, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
               
              </div>
              <h3 className="text-2xl font-semibold text-[#014c50] mb-2">{box.title}</h3>
              <p className="text-gray-700 text-lg">{box.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}