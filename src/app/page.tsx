"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import BannerCarousel from "../components/BannerCarousel";
import ContactForm from "@/components/contactForm";

// Function to generate a random pastel color
const getRandomPastelColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 30) + 70; // Keep saturation high for pastel
  const lightness = Math.floor(Math.random() * 30) + 70; // Keep lightness high for pastel
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

export default function HomePage() {
  const banners = [
    {
      mediaType: "image" as const,
      imgSrcMobile: "/mobile-banner-1.jpg",
      imgSrcDesktop: "/Slide12.jpeg",
      altText: "Cardiology background",
      title: "",
      description: "",
      linkHref: "",
      linkText: ""
    },
    {
      mediaType: "image" as const,
      imgSrcMobile: "/Aashirwad_banner.jpg",
      imgSrcDesktop: "/Aashirwad_banner.jpg",
      altText: "Cosmetic Surgery background",
      title: "",
      description: "",
      linkHref: "",
      linkText: ""
    },
    {
      mediaType: "image" as const,
      imgSrcMobile: "/mobile-banner-3.jpeg",
      imgSrcDesktop: "/Slide10.jpeg",
      altText: "Cancer Care background",
      title: "",
      description: "",
      linkHref: "",
      linkText: ""
    },
  ];

  const [activePopup, setActivePopup] = useState<string | null>(null);
  const popupRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // State for the new callback popup
  const [isCallbackPopupOpen, setIsCallbackPopupOpen] = useState(false);
  // New state for the dynamic popup title
  const [callbackPopupTitle, setCallbackPopupTitle] = useState("Ask for Quotation");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const isClickInsideAny = Object.values(popupRefs.current).some(ref =>
        ref?.contains(event.target as Node)
      );
      if (!isClickInsideAny) {
        setActivePopup(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Data for the Popular Cities section with random pastel colors and hospital data
  const popularCities = [
    { name: 'Ahmedabad', color: getRandomPastelColor(), hospitals: ['Apollo Hospitals', 'Marengo CIMS Hospital', 'Zydus Hospital'] },
    { name: 'Bangalore', color: getRandomPastelColor(), hospitals: ['Apollo Hospital', 'Aster CMI Hospital', 'Fortis Hospital'] },
    { name: 'Chennai', color: getRandomPastelColor(), hospitals: ['Apollo Hospital', 'Fortis Malar', 'MGM Healthcare'] },
    { name: 'Hyderabad', color: getRandomPastelColor(), hospitals: ['Apollo Hospitals', 'Yashoda Hospital', 'Virinchi Hospital'] },
    { name: 'Mumbai', color: getRandomPastelColor(), hospitals: ['Wockhardt Hospital', 'Lilavati Hospital', 'Jaslok Hospital'] },
    { name: 'Delhi-NCR', color: getRandomPastelColor(), hospitals: ['Apollo Hospitals', 'Medanta', 'Fortis Hospital', 'Max Healthcare'] },
  ];

  return (
    <>
      {/* Hero Section using BannerCarousel component */}
      <div className="mt-2">
        <BannerCarousel banners={banners} autoSlideInterval={6000} />
      </div>
      {/* Why Choose Viveon */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Viveon?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Top Hospitals', icon: '🏥', desc: 'Partnered with NABH & JCI accredited hospitals across India.' },
              { title: 'Global Patient Support', icon: '🌍', desc: 'End-to-end support for international patients — visa, travel & care.' },
              { title: 'Affordable Packages', icon: '💸', desc: 'Transparent, low-cost medical solutions for every budget.' }
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-md transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Popular Treatments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: 'Cardiology', img: '/cardiology.jpg' },
              { title: 'Orthopedics', img: '/orthopedics.jpg' },
              { title: 'Cancer Care', img: '/cancer-care.jpg' },
              { title: 'Cosmetic Surgery', img: '/cosmetic.jpg' },
              { title: 'Transplants', img: '/transplants.jpg' },
              { title: 'Dental Care', img: '/dental-care.jpg' },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
                <Image src={t.img} alt={t.title} className="w-full h-40 object-cover"
                  width={1000}
                  height={500} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{t.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services Section */}
     <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Center of Excellence</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <div className="relative">
            <div
              className="w-40 h-40 mx-auto flex items-center justify-center rounded-full shadow-md transition transform hover:scale-105 text-xl font-semibold text-center bg-red-500 text-red-50 p-2 cursor-pointer"
              onClick={() => setActivePopup(activePopup === "Cardiac Care" ? null : "Cardiac Care")}
            >
              <h3>Cardiac<br />Care</h3>
            </div>
            {activePopup === "Cardiac Care" && (
              <div
                ref={el => { popupRefs.current["Cardiac Care"] = el; }}
                className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-96 bg-white text-gray-900 border border-white rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 z-10 p-4 text-sm text-left"
              >
                <strong className="block text-red-600 mb-2 text-xl">Cardiac Care</strong>
                <ul className="list-disc list-inside space-y-1 text-lg">
                  <li>Angiography &amp; Stenting, PTCA (Angioplasty)</li>
                  <li>CABG, MICS, Valve Repair (Keyhole techniques)</li>
                  <li>TAVR, CVTS, Heart Transplant</li>
                  <li>Congenital Heart Disease, Paediatric Cardiology</li>
                  <li>EECP - non-surgical bypass treatment</li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="w-40 h-40 mx-auto flex items-center justify-center rounded-full shadow-md transition transform hover:scale-105 text-xl font-semibold text-center bg-purple-700 text-purple-50 p-2 cursor-pointer"
              onClick={() => setActivePopup(activePopup === "Neuro Care" ? null : "Neuro Care")}
            >
              <h3>Neuro Care</h3>
            </div>
            {activePopup === "Neuro Care" && (
              <div
                ref={el => { popupRefs.current["Neuro Care"] = el; }}
                className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-96 bg-white text-gray-900 border border-white rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 z-10 p-4 text-sm text-left"
              >
                <strong className="block text-purple-700 mb-2 text-xl">Neuro Care</strong>
                <ul className="list-disc list-inside space-y-1 text-lg">
                  <li>Brain Tumor Surgery, Skull Base Surgery</li>
                  <li>Epilepsy, Parkinson’s Disease, Stroke Management</li>
                  <li>Spinal Cord Injuries, Neuro Rehabilitation</li>
                  <li>Minimally Invasive &amp; Endoscopic Neurosurgery</li>
                  <li>Pediatric Neurology, Neuro Critical Care</li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="w-40 h-40 mx-auto flex items-center justify-center rounded-full shadow-md transition transform hover:scale-105 text-xl font-semibold text-center bg-yellow-500 text-yellow-50 p-2 cursor-pointer"
              onClick={() => setActivePopup(activePopup === "Orthopaedics & Spine" ? null : "Orthopaedics & Spine")}
            >
              <h3>Orthopaedics &amp; Spine</h3>
            </div>
            {activePopup === "Orthopaedics & Spine" && (
              <div
                ref={el => { popupRefs.current["Orthopaedics & Spine"] = el; }}
                className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-96 bg-white text-gray-900 border border-white rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 z-10 p-4 text-sm text-left"
              >
                <strong className="block text-yellow-600 mb-2 text-xl">Orthopaedics &amp; Spine</strong>
                <ul className="list-disc list-inside space-y-1 text-lg">
                  <li>Knee, Hip &amp; Shoulder Replacement</li>
                  <li>Arthroscopy &amp; Sports Injury Management</li>
                  <li>Spine Surgery (Minimally Invasive &amp; Endoscopic)</li>
                  <li>Fracture Management, Deformity Correction</li>
                  <li>Pediatric Orthopaedics, Bone Tumor Surgery</li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="w-40 h-40 mx-auto flex items-center justify-center rounded-full shadow-md transition transform hover:scale-105 text-xl font-semibold text-center bg-green-600 text-green-50 p-2 cursor-pointer"
              onClick={() => setActivePopup(activePopup === "Cancer Care" ? null : "Cancer Care")}
            >
              <h3>Cancer Care</h3>
            </div>
            {activePopup === "Cancer Care" && (
              <div
                ref={el => { popupRefs.current["Cancer Care"] = el; }}
                className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-96 bg-white text-gray-900 border border-white rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 z-10 p-4 text-sm text-left"
              >
                <strong className="block text-green-700 mb-2 text-xl">Cancer Care</strong>
                <ul className="list-disc list-inside space-y-1 text-lg">
                  <li>Medical, Surgical &amp; Radiation Oncology</li>
                  <li>Organ-specific Cancer Management</li>
                  <li>Bone Marrow &amp; Stem Cell Transplant</li>
                  <li>Immunotherapy, Targeted Therapy</li>
                  <li>Comprehensive Rehabilitation &amp; Palliative Care</li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="w-40 h-40 mx-auto flex items-center justify-center rounded-full shadow-md transition transform hover:scale-105 text-xl font-semibold text-center bg-blue-600 text-blue-50 p-2 cursor-pointer"
              onClick={() => setActivePopup(activePopup === "Gastro Sciences" ? null : "Gastro Sciences")}
            >
              <h3>Gastro Sciences</h3>
            </div>
            {activePopup === "Gastro Sciences" && (
              <div
                ref={el => { popupRefs.current["Gastro Sciences"] = el; }}
                className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-96 bg-white text-gray-900 border border-white rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 z-10 p-4 text-sm text-left"
              >
                <strong className="block text-blue-700 mb-2 text-xl">Gastro Sciences</strong>
                <ul className="list-disc list-inside space-y-1 text-lg">
                  <li>Liver Transplant, Hepatitis &amp; Cirrhosis Management</li>
                  <li>Pancreatic, Biliary &amp; Gastrointestinal Surgery</li>
                  <li>Advanced Endoscopy, ERCP, Colonoscopy</li>
                  <li>Bariatric &amp; Metabolic Surgery</li>
                  <li>IBD, GI Cancers, Pediatric Gastroenterology</li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="w-40 h-40 mx-auto flex items-center justify-center rounded-full shadow-md transition transform hover:scale-105 text-xl font-semibold text-center bg-orange-500 text-orange-50 p-2 cursor-pointer"
              onClick={() => setActivePopup(activePopup === "Renal & Urology" ? null : "Renal & Urology")}
            >
              <h3>Renal &amp; Urology</h3>
            </div>
            {activePopup === "Renal & Urology" && (
              <div
                ref={el => { popupRefs.current["Renal & Urology"] = el; }}
                className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-96 bg-white text-gray-900 border border-white rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 z-10 p-4 text-sm text-left"
              >
                <strong className="block text-orange-600 mb-2 text-xl">Renal &amp; Urology</strong>
                <ul className="list-disc list-inside space-y-1 text-lg">
                  <li>Kidney Transplant, Dialysis (Hemodialysis &amp; CAPD)</li>
                  <li>Prostate, Bladder &amp; Kidney Cancer Surgery</li>
                  <li>Stone Removal (Laser, PCNL, RIRS), Urethroplasty</li>
                  <li>Male &amp; Female Infertility, Pediatric Urology</li>
                  <li>Minimally Invasive &amp; Robotic Urology</li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="w-40 h-40 mx-auto flex items-center justify-center rounded-full shadow-md transition transform hover:scale-105 text-xl font-semibold text-center bg-teal-600 text-teal-50 p-2 cursor-pointer"
              onClick={() => setActivePopup(activePopup === "ENT & Cochlear Implant" ? null : "ENT & Cochlear Implant")}
            >
              <h3>ENT &amp; Cochlear Implant</h3>
            </div>
            {activePopup === "ENT & Cochlear Implant" && (
              <div
                ref={el => { popupRefs.current["ENT & Cochlear Implant"] = el; }}
                className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-96 bg-white text-gray-900 border border-white rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 z-10 p-4 text-sm text-left"
              >
                <strong className="block text-teal-700 mb-2 text-xl">ENT &amp; Cochlear Implant</strong>
                <ul className="list-disc list-inside space-y-1 text-lg">
                  <li>Cochlear Implant, Hearing Restoration</li>
                  <li>Endoscopic Sinus &amp; Skull Base Surgery</li>
                  <li>Microsurgery for Ear, Nose &amp; Throat</li>
                  <li>Voice Disorders, Sleep Apnea Surgery</li>
                  <li>Head &amp; Neck Cancer, Pediatric ENT</li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="w-40 h-40 mx-auto flex items-center justify-center rounded-full shadow-md transition transform hover:scale-105 text-xl font-semibold text-center bg-lime-600 text-lime-50 p-2 cursor-pointer"
              onClick={() => setActivePopup(activePopup === "IVF & Fertility" ? null : "IVF & Fertility")}
            >
              <h3>IVF &amp; Fertility</h3>
            </div>
            {activePopup === "IVF & Fertility" && (
              <div
                ref={el => { popupRefs.current["IVF & Fertility"] = el; }}
                className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-96 bg-white text-gray-900 border border-white rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 z-10 p-4 text-sm text-left"
              >
                <strong className="block text-lime-700 mb-2 text-xl">IVF &amp; Fertility</strong>
                <ul className="list-disc list-inside space-y-1 text-lg">
                  <li>IVF, ICSI, IUI, Donor Egg/Sperm Programs</li>
                  <li>Male &amp; Female Infertility Treatments</li>
                  <li>Recurrent IVF Failure, Genetic Testing</li>
                  <li>High-risk Pregnancy &amp; Fetal Medicine</li>
                  <li>Egg Freezing, Surrogacy, Laparoscopic Surgery</li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="w-40 h-40 mx-auto flex items-center justify-center rounded-full shadow-md transition transform hover:scale-105 text-xl font-semibold text-center bg-pink-600 text-pink-50 p-2 cursor-pointer"
              onClick={() => setActivePopup(activePopup === "Dental & Cosmetic Care" ? null : "Dental & Cosmetic Care")}
            >
              <h3>Dental &amp; Cosmetic Care</h3>
            </div>
            {activePopup === "Dental & Cosmetic Care" && (
              <div
                ref={el => { popupRefs.current["Dental & Cosmetic Care"] = el; }}
                className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-96 bg-white text-gray-900 border border-white rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 z-10 p-4 text-sm text-left"
              >
                <strong className="block text-pink-700 mb-2 text-xl">Dental &amp; Cosmetic Care</strong>
                <ul className="list-disc list-inside space-y-1 text-lg">
                  <li>Smile Design, Dental Implants, Braces</li>
                  <li>Root Canal, Crowns, Bridges, Teeth Whitening</li>
                  <li>Cosmetic &amp; Plastic Surgery (Face, Body, Breast, Hair)</li>
                  <li>Botox, Fillers, Skin Rejuvenation</li>
                  <li>Hair Transplant, Scar &amp; Burn Correction</li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              className="w-40 h-40 mx-auto flex items-center justify-center rounded-full shadow-md transition transform hover:scale-105 text-xl font-semibold text-center bg-gray-700 text-gray-50 p-2 cursor-pointer"
              onClick={() => setActivePopup(activePopup === "Non-Surgical Fibroid Treatment" ? null : "Non-Surgical Fibroid Treatment")}
            >
              <h3>Non-Surgical Fibroid Treatment</h3>
            </div>
            {activePopup === "Non-Surgical Fibroid Treatment" && (
              <div
                ref={el => { popupRefs.current["Non-Surgical Fibroid Treatment"] = el; }}
                className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-96 bg-white text-gray-900 border border-white rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 z-10 p-4 text-sm text-left"
              >
                <strong className="block text-gray-700 mb-2 text-xl">Non-Surgical Fibroid Treatment</strong>
                <ul className="list-disc list-inside space-y-1 text-lg">
                  <li>Uterine Fibroid Embolization (UFE)</li>
                  <li>Non-surgical, uterus-preserving procedure</li>
                  <li>Quick recovery, minimal pain, no scars</li>
                  <li>Outpatient or short hospital stay</li>
                  <li>Suitable for women seeking alternatives to hysterectomy</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="mt-10 text-center">
          <button
            className="px-8 py-4 bg-[#2C5F56] text-white text-lg font-bold rounded-full shadow-xl hover:bg-[#1A403A] cursor-pointer transition duration-300 animate-pulse ring-4 ring-yellow-400 hover:scale-105 glow-green"
            onClick={() => {
              setCallbackPopupTitle("Ask for Free Consultation and treatment plan");
              setIsCallbackPopupOpen(true);
            }}
          >
            Ask for Free Consultation and treatment plan
          </button>
        </div>
      </div>
    </section>

      {/* Popular Cities Section - new section with colored boxes and popups */}
     <section className="py-12 bg-white relative">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Over 65 major Hospitals are on our network across India</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
      {popularCities.map((city, index) => (
        <div key={index} className="flex items-center justify-center relative">
          <div
            className="h-24 w-40 rounded-xl shadow-md flex items-center text-xl justify-center font-semibold text-gray-800 transition duration-300 cursor-pointer"
            style={{ backgroundColor: city.color }}
            onClick={() =>
              setActivePopup(activePopup === city.name ? null : city.name)
            }
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')} // Light gray on hover
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = city.color)}
          >
            {city.name}
          </div>
          {activePopup === city.name && (
            <div
              ref={el => { popupRefs.current[city.name] = el; }}
              className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-96 bg-white text-gray-900 border border-white rounded-lg shadow-2xl ring-1 ring-black ring-opacity-5 z-10 p-4 text-sm text-left"
            >
              <strong className="block text-xl mb-2 text-gray-800">Top Hospitals in {city.name}</strong>
              <ul className="list-disc list-inside space-y-1 text-lg mb-4">
                {city.hospitals.map((hospital, hospitalIndex) => (
                  <li key={hospitalIndex}>{hospital}</li>
                ))}
              </ul>
              <div className="text-center">
                <button
                  onClick={() => {
                    setActivePopup(null); // Close the city popup
                    setCallbackPopupTitle(`Quotation for Hospitals in ${city.name}`); // Set dynamic title
                    setIsCallbackPopupOpen(true); // Open the contact form popup
                  }}
                  className="w-20 py-2 bg-[#2C5F56] text-white text-xs rounded-md font-semibold hover:bg-[#1A403A] cursor-pointer transition-colors duration-200"
                >
                  Ask for Quotation
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Countries Served */}
      {/* <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 !text-gray-800">Serving Patients From</h2>
          <p className="text-gray-600 mb-4">Viveon has helped patients from over 20 countries get access to world-class care.</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 font-medium">
            {['UAE', 'Nigeria', 'Bangladesh', 'Kenya', 'Oman', 'Qatar', 'Tanzania', 'Nepal', 'Saudi Arabia'].map((c, i) => (
              <span key={i} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section> */}

      {/* The Request a Callback popup */}
      {isCallbackPopupOpen && (
       <div className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-40 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-lg max-w-md w-full relative shadow-2xl">
            <ContactForm
              onClose={() => setIsCallbackPopupOpen(false)}
              isPopup={true}
              title={callbackPopupTitle} // Use the state variable here
            />
          </div>
        </div>
      )}
    </>
  );
}