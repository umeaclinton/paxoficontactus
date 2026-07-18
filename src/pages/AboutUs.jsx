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
                    <div className="w-full aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Paxofi Building" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* MISSION, VISION, VALUES */}
            <div className="px-6 lg:px-20 py-16">
                <div className="bg-[#F8FAFC] rounded-3xl p-8 lg:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col">
                            <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#0F172B] mb-3">Our Mission</h3>
                            <p className="text-[#62748E] leading-relaxed">
                                To empower businesses across Africa with secure, scalable, and innovative financial technology solutions that drive sustainable growth.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col">
                            <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#0F172B] mb-3">Our Vision</h3>
                            <p className="text-[#62748E] leading-relaxed">
                                To be the most trusted financial technology partner for businesses across emerging markets globally.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col">
                            <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            </div>
                            <h3 className="text-xl font-bold text-[#0F172B] mb-3">Our Values</h3>
                            <p className="text-[#62748E] leading-relaxed">
                                Integrity, Innovation, Customer Success, Excellence, and Collaboration drive everything we do at Paxofi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* OUR STORY */}
            <div className="px-6 lg:px-20 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2 w-full">
                    <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Paxofi Presentation" className="w-full h-full object-cover" />
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
            <div className="bg-[#F8FAFC] px-6 lg:px-20 py-20 lg:py-28 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0F172B] mb-4">What We Do</h2>
                <p className="text-[#62748E] text-lg max-w-2xl mx-auto mb-16">
                    A comprehensive suite of financial technology solutions designed to help businesses manage payments, access credit, and operate more efficiently.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                        <div className="mb-4 text-[#0F2D4A]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                        </div>
                        <h3 className="text-[#0F172B] font-bold text-lg mb-2">Digital Banking</h3>
                        <p className="text-[#62748E] text-sm leading-relaxed">Seamless corporate accounts with advanced treasury management.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                        <div className="mb-4 text-[#0F2D4A]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                        </div>
                        <h3 className="text-[#0F172B] font-bold text-lg mb-2">Payment Processing</h3>
                        <p className="text-[#62748E] text-sm leading-relaxed">Omnichannel payment gateways for localized and cross-border transactions.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                        <div className="mb-4 text-[#0F2D4A]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        </div>
                        <h3 className="text-[#0F172B] font-bold text-lg mb-2">Lending & Credit</h3>
                        <p className="text-[#62748E] text-sm leading-relaxed">Flexible capital solutions designed for business expansion and cash flow.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                        <div className="mb-4 text-[#0F2D4A]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                        </div>
                        <h3 className="text-[#0F172B] font-bold text-lg mb-2">Business Management</h3>
                        <p className="text-[#62748E] text-sm leading-relaxed">Integrated tools for invoicing, payroll, and expense tracking.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                        <div className="mb-4 text-[#0F2D4A]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                        </div>
                        <h3 className="text-[#0F172B] font-bold text-lg mb-2">APIs & Integrations</h3>
                        <p className="text-[#62748E] text-sm leading-relaxed">Developer-friendly endpoints to embed financial services into your product.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                        <div className="mb-4 text-[#0F2D4A]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                        </div>
                        <h3 className="text-[#0F172B] font-bold text-lg mb-2">Financial Infrastructure</h3>
                        <p className="text-[#62748E] text-sm leading-relaxed">Scalable core banking engines for enterprise implementations.</p>
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
