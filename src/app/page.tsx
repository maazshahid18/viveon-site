"use client";
// The path "../components/BannerCarousel" assumes HomePage.tsx is in a 'pages' directory
// and BannerCarousel.tsx is in a 'components' directory at the root level.
import BannerCarousel from "../components/BannerCarousel";

export default function HomePage() {
  // Define banner data here, which will be passed to BannerCarousel
  const banners = [
    {
      mediaType: "image" as const,
      imgSrcMobile: "/mobile-banner-1.jpg",
      imgSrcDesktop: "/banner-1-desktop.jpg",
      altText: "Cardiology background",
      title: "",
      description: "",
    linkHref:"",
    linkText:""
    },  
  ];

  return (
    <>
      {/* Hero Section using BannerCarousel component */}
      <BannerCarousel banners={banners} autoSlideInterval={6000} />

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
                <img src={t.img} alt={t.title} className="w-full h-40 object-cover"
                width={1000}
                height={500}/>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{t.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Served */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Serving Patients From</h2>
          <p className="text-gray-600 mb-4">Viveon has helped patients from over 20 countries get access to world-class care.</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 font-medium">
            {['UAE', 'Nigeria', 'Bangladesh', 'Kenya', 'Oman', 'Qatar', 'Tanzania', 'Nepal', 'Saudi Arabia'].map((c, i) => (
              <span key={i} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
