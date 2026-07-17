import React from 'react';

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-white font-inter overflow-x-hidden">

            {/* NAVBAR */}
            <nav className="flex justify-between items-center px-6 lg:px-16 py-4 border-b border-gray-200">
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
            <div className="w-full bg-[#0F2D4A] px-6 lg:px-16 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* Left - Text Content */}
                <div className="flex flex-col gap-6 max-w-xl">
                    {/* Heading */}
                    <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
                        Let's Build Africa's <br />
                        <span className="text-[#4FC3F7]">Digital Future</span> Together
                    </h1>

                    {/* Subtext */}
                    <p className="text-[#94A3B8] text-base lg:text-lg leading-relaxed">
                        Whether you're integrating payments, verifying identities, registering a business, accessing APIs, or exploring cloud infrastructure, our team is ready to help you find the right solution.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                        <button className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition cursor-pointer">
                            Get Quick Help
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                        <button className="border border-[#94A3B8] text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#0F2D4A] transition cursor-pointer flex items-center gap-2">
                            View Products
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </button>
                    </div>
                </div>

                {/* Right - Image */}
                <div className="w-full lg:w-[480px] shrink-0 rounded-2xl overflow-hidden shadow-2xl">
                    <img src="/Section.png.png" alt="Hero Visual" className="w-full h-auto object-cover" />
                </div>

            </div>

            {/* CONTACT CARDS */}
            <div className="bg-[#EFF6FF] px-6 lg:px-16 py-16">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-start border border-gray-100">
                        <div className="bg-[#EFF6FF] w-11 h-11 rounded-xl flex items-center justify-center mb-4">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F2D4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <h3 className="text-[#0F172B] font-semibold text-lg">Call Sales</h3>
                        <p className="text-[#62748E] text-sm mt-1 mb-4">Interested in Paxofi's solutions?</p>
                        <p className="text-[#1E6FA8] text-sm font-medium">+234 901 471 8315</p>
                        <p className="text-[#1A4862] text-xs mt-1">Monday – Friday<br />8:00 AM – 6:00 PM (WAT)</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-start border border-gray-100">
                        <div className="bg-[#EFF6FF] w-11 h-11 rounded-xl flex items-center justify-center mb-4">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F2D4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
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
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F2D4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        </div>
                        <h3 className="text-[#0F172B] font-semibold text-lg">Visit Our Office</h3>
                        <p className="text-[#62748E] text-sm mt-1 mb-4">Paxofi Headquarters</p>
                        <p className="text-[#1E6FA8] text-sm font-medium">Lagos, Nigeria</p>
                        <p className="text-[#1A4862] text-xs mb-6">Supporting businesses across Africa.</p>
                        <a href="#" className="text-[#0F2D4A] font-semibold text-sm flex items-center gap-1 mt-auto">Get Directions <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col items-start border border-gray-100">
                        <div className="bg-[#EFF6FF] w-11 h-11 rounded-xl flex items-center justify-center mb-4">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F2D4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        </div>
                        <h3 className="text-[#0F172B] font-semibold text-lg">Talk to a Product Expert</h3>
                        <p className="text-[#62748E] text-sm mt-1 mb-4">Need help choosing the right solution?</p>
                        <a href="#" className="text-[#0F2D4A] font-semibold text-sm flex items-center gap-1 mt-auto">Book Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
                    </div>
                </div>
            </div>

            {/* FORM SECTION */}
            <div className="px-6 lg:px-16 py-20 bg-white border-b border-gray-200">
                <div className="max-w-screen-xl mx-auto flex flex-col gap-4 items-center text-center mb-12">
                    <h2 className="text-[#0F172B] text-3xl md:text-4xl font-semibold">Tell Us About Your Issues</h2>
                    <p className="text-[#62748E] text-base max-w-2xl">Complete the form below and our team will connect you with the appropriate department.</p>
                </div>
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

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
                                src="/Map.png"
                                alt="Our Location in Lagos"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="border border-gray-200 rounded-2xl p-8 flex flex-col gap-6">
                            <h3 className="text-xl font-semibold text-[#0F172B]">Our Location</h3>
                            <div className="flex gap-4 items-start">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F2D4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                <div>
                                    <p className="font-semibold text-[#0F2D4A] text-sm mb-1">Paxofi Headquarters</p>
                                    <p className="text-[#62748E] text-sm leading-relaxed">123 Freedom Way, Victoria Island<br />Lagos, Nigeria</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F2D4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                <div>
                                    <p className="font-semibold text-[#0F2D4A] text-sm mb-1">Business Hours</p>
                                    <p className="text-[#62748E] text-sm">Monday – Friday: 8:00 AM – 6:00 PM WAT</p>
                                </div>
                            </div>
                            <button className="w-full py-3 mt-2 border border-[#0F2D4A] rounded-xl text-[#0F2D4A] font-semibold text-sm hover:bg-gray-50 transition flex items-center justify-center gap-2">
                                Get Directions <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* FOOTER */}
            <footer className="bg-[#EFF6FF] px-6 lg:px-16 py-16">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 justify-between">
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
                <div className="max-w-screen-xl mx-auto border-t border-blue-200 mt-12 pt-6">
                    <p className="text-[#0F2D4A] text-xs">© 2026 Paxofi. All rights reserved..</p>
                </div>
            </footer>

        </div>
    );
}