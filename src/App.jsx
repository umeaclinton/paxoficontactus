import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      <Hero />

      {/* I will build these sections next! */}
      {/* <Hero /> */}
      {/* <ContactCards /> */}
      {/* <ContactForm /> */}
      {/* <Footer /> */}
    </div>
  );
}

// --- COMPONENTS ---

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-700 text-white font-bold flex items-center justify-center rounded">
          P
        </div>
        <span className="text-xl font-bold tracking-tight text-[#0F2D4A]">PAXOFI</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
        <a href="#" className="hover:text-blue-600 transition">Products ⌄</a>
        <a href="#" className="hover:text-blue-600 transition">Solutions ⌄</a>
        <a href="#" className="hover:text-blue-600 transition">Pricing</a>
        <a href="#" className="hover:text-blue-600 transition">Company</a>
      </div>

      {/* Contact Button */}
      <button className="bg-[#0F2D4A] hover:bg-blue-800 text-white text-sm font-semibold py-2 px-6 rounded-md transition">
        Contact us
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="bg-[#0F2D4A] text-white px-10 py-24 flex flex-col md:flex-row items-center justify-between">

      {/* Left Side: Text and Buttons */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
          Let&apos;s Build Africa&apos;s <br />
          <span className="text-blue-200">Digital Future</span> Together
        </h1>
        <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
          Whether you&apos;re integrating payments, verifying identities, registering a business, accessing APIs, or exploring cloud infrastructure, our team is ready to help you find the right solution.
        </p>

        <div className="flex space-x-4 pt-4">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md font-medium transition shadow-lg">
            Get Quick Help →
          </button>
          <button className="border border-gray-400 hover:border-white text-white px-6 py-3 rounded-md font-medium transition">
            View Products ⍈
          </button>
        </div>
      </div>

      {/* Right Side: Image Placeholder */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-end">
        {/* We use a styled box as a placeholder until you add the real image */}
        <div className="w-full max-w-lg h-96 bg-blue-900 rounded-xl border border-blue-800 flex items-center justify-center relative shadow-2xl overflow-hidden">
          <span className="text-blue-300 font-medium">Hero Image Goes Here</span>
        </div>
      </div>

    </section>
  );
}

export default App;