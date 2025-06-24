import Header from "@/components/Header";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Header />
      <section
        className="relative bg-cover bg-center text-white py-24 px-4"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            World-Class Healthcare, Made Accessible
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Trusted by international patients seeking quality, affordability, and expert care in India’s top hospitals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
          >
            Request Your Free Consultation
          </a>
        </div>
      </section>

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
              { title: 'Cancer Care', img: '/oncology.jpg' },
              { title: 'Cosmetic Surgery', img: '/cosmetic.jpg' },
              { title: 'Transplants', img: '/transplant.jpg' },
              { title: 'Dental Care', img: '/dental.jpg' },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
                <img src={t.img} alt={t.title} className="w-full h-40 object-cover" />
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

      {/* CTA */}
      <section className="bg-blue-600 py-10 text-white text-center">
        <h2 className="text-2xl font-bold mb-2">Need Medical Advice?</h2>
        <p className="mb-4">Chat with our expert team and get a free treatment estimate.</p>
        <a href="/contact" className="inline-block bg-white text-blue-600 px-6 py-3 rounded font-medium hover:bg-gray-100">
          Request a Free Quote
        </a>
      </section>
    </>
  );
}