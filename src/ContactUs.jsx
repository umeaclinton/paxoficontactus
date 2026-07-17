import React from 'react';

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-white font-inter">

            {/* NAVBAR */}
            <nav className="flex justify-between items-center px-6 lg:px-20 py-4 border-b border-gray-200">
                <div className="flex items-center gap-2">
                    <img src="/Image1.png" alt="Paxofi Logo" className="w-10 h-10" />
                    <span className="text-[#0F2D4A] text-xl font-bold">PAXOFI</span>
                </div>
                <div className="hidden md:flex items-center gap-6 text-[#45556C] font-medium text-sm">
                    <a href="#" className="flex items-center gap-1">Products <span className="opacity-50">▾</span></a>
                    <a href="#" className="flex items-center gap-1">Solutions <span className="opacity-50">▾</span></a>
                    <a href="#">Pricing</a>
                    <a href="#">Company</a>
                </div>
                <button className="bg-[#0F2D4A] text-white px-5 py-2 rounded-xl text-sm font-semibold">
                    Contact us
                </button>
            </nav>

            {/* HERO */}
            <div className="px-6 lg:px-20 py-12">
                <img src="/Section.png" alt="Hero Section" className="w-full h-auto object-cover rounded-2xl" />
            </div>

            {/* CONTACT CARDS */}
            <div className="bg-[#EFF6FF] px-6 lg:px-20 py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-start border border-gray-100">
                        <div className="bg-[#EFF6FF] w-11 h-11 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-[#0F2D4A] text-lg">📞</span>
                        </div>
                        <h3 className="text-[#0F172B] font-semibold text-lg">Call Sales</h3>
                        <p className="text-[#62748E] text-sm mt-1 mb-4">Interested in Paxofi's solutions?</p>
                        <p className="text-[#1E6FA8] text-sm font-medium">+234 901 471 8315</p>
                        <p className="text-[#1A4862] text-xs mt-1">Monday – Friday<br />8:00 AM – 6:00 PM (WAT)</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-start border border-gray-100">
                        <div className="bg-[#EFF6FF] w-11 h-11 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-[#0F2D4A] text-lg">✉️</span>
                        </div>
                        <h3 className="text-[#0F172B] font-semibold text-lg">Email Support</h3>
                        <p className="text-[#62748E] text-sm mt-1 mb-4">Reach the right team directly.</p>
                        <p className="text-[#1E6FA8] text-sm font-medium">hello@paxofi.com</p>
                        <p className="text-[#1A4862] text-xs mb-2">General Enquiries</p>
                        <p className="text-[#1E6FA8] text-sm font-medium">support@paxofi.com</p>
                        <p className="text-[#1A4862] text-xs">Technical Support</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-start border border-gray-100">
                        <div className="bg-[#EFF6FF] w-11 h-11 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-[#0F2D4A] text-lg">📍</span>
                        </div>
                        <h3 className="text-[#0F172B] font-semibold text-lg">Visit Our Office</h3>
                        <p className="text-[#62748E] text-sm mt-1 mb-4">Paxofi Headquarters</p>
                        <p className="text-[#1E6FA8] text-sm font-medium">Lagos, Nigeria</p>
                        <p className="text-[#1A4862] text-xs mb-6">Supporting businesses across Africa.</p>
                        <a href="#" className="text-[#0F2D4A] font-semibold text-sm flex items-center gap-1 mt-auto">Get Directions →</a>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-start border border-gray-100">
                        <div className="bg-[#EFF6FF] w-11 h-11 rounded-xl flex items-center justify-center mb-4">
                            <span className="text-[#0F2D4A] text-lg">🗓️</span>
                        </div>
                        <h3 className="text-[#0F172B] font-semibold text-lg">Talk to a Product Expert</h3>
                        <p className="text-[#62748E] text-sm mt-1 mb-4">Need help choosing the right solution?</p>
                        <a href="#" className="text-[#0F2D4A] font-semibold text-sm flex items-center gap-1 mt-auto">Book Consultation →</a>
                    </div>
                </div>
            </div>

            {/* FORM SECTION */}
            <div className="px-6 lg:px-20 py-20 bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto flex flex-col gap-4 items-center text-center mb-12">
                    <h2 className="text-[#0F172B] text-3xl md:text-4xl font-semibold">Tell Us About Your Issues</h2>
                    <p className="text-[#62748E] text-base max-w-2xl">Complete the form below and our team will connect you with the appropriate department.</p>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Form */}
                    <form className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[#314158] text-sm font-medium">Full Name <span className="text-[#1E6FA8]">*</span></label>
                                <input type="text" placeholder="Your full name" className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1E6FA8] transition" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[#314158] text-sm font-medium">Business Email <span className="text-[#1E6FA8]">*</span></label>
                                <input type="email" placeholder="you@company.com" className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1E6FA8] transition" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[#314158] text-sm font-medium">Company Name <span className="text-[#90A1B9] text-xs font-normal">(Optional)</span></label>
                                <input type="text" placeholder="Your company name" className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1E6FA8] transition" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[#314158] text-sm font-medium">Phone Number</label>
                                <input type="text" placeholder="+234 000 000 0000" className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1E6FA8] transition" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#314158] text-sm font-medium">Inquiry Type <span className="text-[#1E6FA8]">*</span></label>
                            <select className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1E6FA8] appearance-none transition">
                                <option>Select an inquiry type</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[#314158] text-sm font-medium">Message <span className="text-[#1E6FA8]">*</span></label>
                            <textarea rows="4" placeholder="Tell us more about your project, goals, or questions..." className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1E6FA8] transition"></textarea>
                        </div>
                        <div className="flex items-center gap-3">
                            <input type="checkbox" className="w-5 h-5 rounded border-gray-300" />
                            <span className="text-[#0F2D4A] text-sm">I agree to receive communications from paxofi.</span>
                        </div>
                        <button type="button" className="bg-[#0F2D4A] text-white font-semibold rounded-xl px-8 py-3 w-fit flex items-center gap-2 hover:bg-[#1a4369] transition">
                            Contact Paxofi <span>→</span>
                        </button>
                        <p className="text-xs text-gray-400 mt-2">Your information is securely encrypted and handled in accordance with our Privacy & Policy</p>
                    </form>

                    {/* Map & Info Container */}
                    <div className="flex flex-col gap-6">
                        <div className="w-full h-[240px] rounded-2xl overflow-hidden shadow-sm">
                            <img
                                src="/MapMakerLagosNigeriaStandard.png"
                                alt="Our Location in Lagos"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="border border-gray-200 rounded-2xl p-8 flex flex-col gap-6">
                            <h3 className="text-xl font-semibold text-[#0F172B]">Our Location</h3>
                            <div className="flex gap-4 items-start">
                                <span className="text-gray-400 mt-1">📍</span>
                                <div>
                                    <p className="font-semibold text-[#0F2D4A] text-sm mb-1">Paxofi Headquarters</p>
                                    <p className="text-[#62748E] text-sm leading-relaxed">123 Freedom Way, Victoria Island<br />Lagos, Nigeria</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="text-gray-400 mt-1">🕒</span>
                                <div>
                                    <p className="font-semibold text-[#0F2D4A] text-sm mb-1">Business Hours</p>
                                    <p className="text-[#62748E] text-sm">Monday – Friday: 8:00 AM – 6:00 PM WAT</p>
                                </div>
                            </div>
                            <button className="w-full py-3 mt-2 border border-[#0F2D4A] rounded-xl text-[#0F2D4A] font-semibold text-sm hover:bg-gray-50 transition">
                                Get Directions ↗
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* FOOTER */}
            <footer className="bg-[#EFF6FF] px-6 lg:px-20 py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 justify-between">
                    <div className="flex flex-col gap-4 lg:col-span-2 pr-8">
                        <div className="flex items-center gap-2">
                            <img src="/Image1.png" alt="Paxofi Logo" className="w-10 h-10" />
                            <span className="text-[#0F2D4A] text-xl font-bold">PAXOFI</span>
                        </div>
                        <p className="text-[#0F2D4A] text-sm leading-relaxed">Africa's Digital Infrastructure Platform, empowering businesses through payments, identity verification, compliance, APIs, cloud, and document services.</p>
                        <div className="flex gap-3 mt-4">
                            <div className="w-9 h-9 rounded-lg border border-blue-200 bg-white flex items-center justify-center text-blue-600 font-bold hover:shadow transition cursor-pointer">in</div>
                            <div className="w-9 h-9 rounded-lg border border-blue-200 bg-white flex items-center justify-center text-blue-600 font-bold hover:shadow transition cursor-pointer">X</div>
                            <div className="w-9 h-9 rounded-lg border border-blue-200 bg-white flex items-center justify-center text-blue-600 font-bold hover:shadow transition cursor-pointer">f</div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <h4 className="text-[#0F2D4A] font-semibold mb-2">Products</h4>
                        <a href="#" className="text-[#0F2D4A] text-sm hover:underline">Paxofi Pay</a>
                        <a href="#" className="text-[#0F2D4A] text-sm hover:underline">Paxofi Verify</a>
                        <a href="#" className="text-[#0F2D4A] text-sm hover:underline">Paxofi Business</a>
                        <a href="#" className="text-[#0F2D4A] text-sm hover:underline">Paxofi API</a>
                        <a href="#" className="text-[#0F2D4A] text-sm hover:underline">Paxofi Cloud</a>
                        <a href="#" className="text-[#0F2D4A] text-sm hover:underline">Paxofi Agent</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-[#0F2D4A] font-semibold mb-2">Solutions</h4>
                        <a href="#" className="text-[#0F2D4A] text-sm hover:underline">Startups</a>
                        <a href="#" className="text-[#0F2D4A] text-sm hover:underline">SMEs</a>
                        <a href="#" className="text-[#0F2D4A] text-sm hover:underline">Enterprises</a>
                        <a href="#" className="text-[#0F2D4A] text-sm hover:underline">Developers</a>
                        <a href="#" className="text-[#0F2D4A] text-sm hover:underline">Government</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="text-[#0F2D4A] font-semibold mb-2">Company</h4>
                        <a href="#" className="text-[#0F2D4A] text-sm hover:underline">About Us</a>
                        <a href="#" className="text-[#0F2D4A] text-sm hover:underline">Careers</a>
                        <a href="#" className="text-[#0F2D4A] text-sm hover:underline">Blog</a>
                        <a href="#" className="text-[#0F2D4A] text-sm hover:underline">Contact Us</a>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto border-t border-blue-200 mt-12 pt-6">
                    <p className="text-[#0F2D4A] text-xs">© 2026 Paxofi. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
}