import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <div className="w-full px-6 lg:px-20 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <p className="text-xs font-bold text-gray-500 tracking-widest uppercase">About Paxofi</p>
                    <h1 className="text-[#0F172B] text-4xl lg:text-5xl font-bold leading-tight">
                        Empowering Businesses Across Africa Through Financial Innovation
                    </h1>
                    <p className="text-[#62748E] text-lg leading-relaxed">
                        Paxofi is a technology-driven financial solutions company on a mission to simplify finance for businesses and enable them to grow, scale, and thrive by building robust financial infrastructure.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                        <Link to="/" className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
                            Explore Solutions <span>→</span>
                        </Link>
                        <Link to="/" className="bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] text-[#0F172B] font-semibold px-6 py-3 rounded-lg transition">
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full">
                    {/* Placeholder for the building image */}
                    <div 
                        className="w-full aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-lg"
                        onContextMenu={(e) => e.preventDefault()}
                    >
                        <img src="/Background+Border.png" alt="Paxofi Building" className="w-full h-full object-cover pointer-events-none" draggable="false" />
                    </div>
                </div>
            </div>

            {/* MISSION, VISION, VALUES */}
            <div className="bg-[#F4F5F7] px-6 lg:px-20 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    <div className="bg-white p-8 rounded-lg border border-gray-200 flex flex-col">
                        <div className="w-10 h-10 bg-[#F1F5F9] rounded-lg flex items-center justify-center mb-6">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F2D4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                        </div>
                        <h3 className="text-lg font-bold text-[#0F2D4A] mb-3">Our Mission</h3>
                        <p className="text-[#45556C] font-semibold text-[15px] leading-relaxed">
                            To empower businesses across Africa with secure, scalable, and innovative financial technology solutions that drive sustainable growth.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg border border-gray-200 flex flex-col">
                        <div className="w-10 h-10 bg-[#F1F5F9] rounded-lg flex items-center justify-center mb-6">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F2D4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </div>
                        <h3 className="text-lg font-bold text-[#0F2D4A] mb-3">Our Vision</h3>
                        <p className="text-[#45556C] font-semibold text-[15px] leading-relaxed">
                            To be the most trusted financial technology partner for businesses across emerging markets globally.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg border border-gray-200 flex flex-col">
                        <div className="w-10 h-10 bg-[#F1F5F9] rounded-lg flex items-center justify-center mb-6">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F2D4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </div>
                        <h3 className="text-lg font-bold text-[#0F2D4A] mb-3">Our Values</h3>
                        <p className="text-[#45556C] font-semibold text-[15px] leading-relaxed">
                            Integrity, Innovation, Customer Success, Excellence, and Collaboration drive everything we do at Paxofi.
                        </p>
                    </div>
                </div>
            </div>

            {/* OUR STORY */}
            <div className="px-6 lg:px-20 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 w-full">
                    <div 
                        className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                        onContextMenu={(e) => e.preventDefault()}
                    >
                        <img src="/storyBackground+Border.png" alt="Paxofi Presentation" className="w-full h-full object-cover pointer-events-none" draggable="false" />
                    </div>
                </div>
                <div className="lg:w-1/2 flex flex-col gap-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172B]">Our Story</h2>
                    <p className="text-[#62748E] leading-relaxed">
                        Founded in 2026, Paxofi emerged from a clear observation: African businesses were struggling with fragmented, inefficient financial tools that hindered their growth potential.
                    </p>
                    <p className="text-[#62748E] leading-relaxed">
                        We set out to build a unified platform that would abstract away the complexities of financial operations, allowing entrepreneurs and enterprises to focus on what they do best—serving their customers.
                    </p>
                    <p className="text-[#62748E] leading-relaxed">
                        Today, Paxofi powers thousands of businesses across the continent, providing a robust infrastructure that handles millions in transaction volume daily, underpinned by a relentless commitment to security and reliability.
                    </p>
                </div>
            </div>

            {/* WHAT WE DO */}
            <div className="bg-[#F2F6F9] px-6 lg:px-20 py-20 lg:py-28 text-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#0F2D4A] mb-4">What We Do</h2>
                <p className="text-[#45556C] text-sm md:text-base max-w-2xl mx-auto mb-16">
                    A comprehensive suite of financial technology solutions designed to help businesses manage payments, access credit, and operate more efficiently.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
                    <div className="bg-white p-6 lg:p-8 rounded-lg border border-gray-200">
                        <div className="mb-4 text-[#0F2D4A]">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>
                        </div>
                        <h3 className="text-[#0F2D4A] font-bold text-lg mb-2">Digital Banking</h3>
                        <p className="text-[#45556C] text-[15px] leading-relaxed">Seamless corporate accounts with advanced treasury management.</p>
                    </div>
                    <div className="bg-white p-6 lg:p-8 rounded-lg border border-gray-200">
                        <div className="mb-4 text-[#0F2D4A]">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
                        </div>
                        <h3 className="text-[#0F2D4A] font-bold text-lg mb-2">Payment Processing</h3>
                        <p className="text-[#45556C] text-[15px] leading-relaxed">Omnichannel payment gateways for localized and cross-border transactions.</p>
                    </div>
                    <div className="bg-white p-6 lg:p-8 rounded-lg border border-gray-200">
                        <div className="mb-4 text-[#0F2D4A]">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line><path d="M16 16l2 2 4-4"></path></svg>
                        </div>
                        <h3 className="text-[#0F2D4A] font-bold text-lg mb-2">Lending & Credit</h3>
                        <p className="text-[#45556C] text-[15px] leading-relaxed">Flexible capital solutions designed for business expansion and cash flow.</p>
                    </div>
                    <div className="bg-white p-6 lg:p-8 rounded-lg border border-gray-200">
                        <div className="mb-4 text-[#0F2D4A]">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><circle cx="7" cy="14" r="2"/><circle cx="12" cy="9" r="2"/><circle cx="17" cy="15" r="2"/><circle cx="21" cy="5" r="2"/><path d="M8.5 12.5l2-2 3.5 4.5 3.5-8.5"/></svg>
                        </div>
                        <h3 className="text-[#0F2D4A] font-bold text-lg mb-2">Business Management</h3>
                        <p className="text-[#45556C] text-[15px] leading-relaxed">Integrated tools for invoicing, payroll, and expense tracking.</p>
                    </div>
                    <div className="bg-white p-6 lg:p-8 rounded-lg border border-gray-200">
                        <div className="mb-4 text-[#0F2D4A]">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 5 12 8 9 5 12 2"/><polygon points="22 12 19 15 16 12 19 9 22 12"/><polygon points="12 22 9 19 12 16 15 19 12 22"/><polygon points="2 12 5 9 8 12 5 15 2 12"/></svg>
                        </div>
                        <h3 className="text-[#0F2D4A] font-bold text-lg mb-2">APIs & Integrations</h3>
                        <p className="text-[#45556C] text-[15px] leading-relaxed">Developer-friendly endpoints to embed financial services into your product.</p>
                    </div>
                    <div className="bg-white p-6 lg:p-8 rounded-lg border border-gray-200">
                        <div className="mb-4 text-[#0F2D4A]">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                        </div>
                        <h3 className="text-[#0F2D4A] font-bold text-lg mb-2">Financial Infrastructure</h3>
                        <p className="text-[#45556C] text-[15px] leading-relaxed">Scalable core banking engines for enterprise implementations.</p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="px-6 lg:px-20 py-20 pb-32">
                <div className="bg-[#F8FAFC] border border-gray-200 rounded-3xl p-12 text-center max-w-5xl mx-auto">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0F2D4A] mb-4">Let's Build the Future of Finance Together</h2>
                    <p className="text-[#62748E] max-w-2xl mx-auto mb-8">
                        Partner with Paxofi to unlock new opportunities for your business, streamline operations, and accelerate your growth trajectory.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/" className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition">
                            Contact Us
                        </Link>
                        <Link to="/" className="bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] text-[#0F172B] font-semibold px-8 py-3 rounded-lg transition">
                            View Documentation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
