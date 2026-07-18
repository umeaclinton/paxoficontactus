import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
    const location = useLocation();
    const isAbout = location.pathname === '/about';

    return (
        <nav 
            className={`flex justify-between items-center px-6 lg:px-16 py-4 border-b relative z-50 ${isAbout ? 'border-transparent' : 'border-gray-200 bg-white'}`}
            style={isAbout ? { 
                backgroundImage: 'url(/TopNavBar.png)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                userSelect: 'none'
            } : {}}
            onContextMenu={isAbout ? (e) => e.preventDefault() : undefined}
        >
            <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition cursor-pointer">
                <img src={isAbout ? "/aboutuslogo.png" : "/Image1.png"} alt="Paxofi Logo" className="w-10 h-10 pointer-events-none" draggable="false" />
                <span className={`text-xl font-bold ${isAbout ? 'text-white' : 'text-[#0F2D4A]'}`}>PAXOFI</span>
            </Link>

            {/* Desktop Nav Links */}
            <div className={`hidden md:flex items-center gap-6 font-medium text-sm ${isAbout ? 'text-white' : 'text-[#45556C]'}`}>
                
                {isAbout ? (
                    <>
                        <Link to="/" className="hover:opacity-80 transition">Solutions</Link>
                        <Link to="/" className="hover:opacity-80 transition">Industries</Link>
                        <Link to="/about" className="border-b-2 border-white pb-1 hover:opacity-80 transition">Company</Link>
                        <Link to="/" className="hover:opacity-80 transition">Careers</Link>
                    </>
                ) : (
                    <>
                        {/* Products Dropdown */}
                <div className="relative group">
                    <button className="flex items-center gap-1 hover:text-[#0F2D4A] transition cursor-pointer">
                        Products <span className="opacity-50">▾</span>
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                        <Link to="/" className="block px-4 py-2 text-sm text-[#0F2D4A] hover:bg-[#EFF6FF]">Paxofi Pay</Link>
                        <Link to="/" className="block px-4 py-2 text-sm text-[#0F2D4A] hover:bg-[#EFF6FF]">Paxofi Verify</Link>
                        <Link to="/" className="block px-4 py-2 text-sm text-[#0F2D4A] hover:bg-[#EFF6FF]">Paxofi Business</Link>
                        <Link to="/" className="block px-4 py-2 text-sm text-[#0F2D4A] hover:bg-[#EFF6FF]">Paxofi API</Link>
                        <Link to="/" className="block px-4 py-2 text-sm text-[#0F2D4A] hover:bg-[#EFF6FF]">Paxofi Cloud</Link>
                        <Link to="/" className="block px-4 py-2 text-sm text-[#0F2D4A] hover:bg-[#EFF6FF]">Paxofi Agent</Link>
                    </div>
                </div>

                {/* Solutions Dropdown */}
                <div className="relative group">
                    <button className="flex items-center gap-1 hover:text-[#0F2D4A] transition cursor-pointer">
                        Solutions <span className="opacity-50">▾</span>
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-40 bg-white border border-gray-100 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                        <Link to="/" className="block px-4 py-2 text-sm text-[#0F2D4A] hover:bg-[#EFF6FF]">Startups</Link>
                        <Link to="/" className="block px-4 py-2 text-sm text-[#0F2D4A] hover:bg-[#EFF6FF]">SMEs</Link>
                        <Link to="/" className="block px-4 py-2 text-sm text-[#0F2D4A] hover:bg-[#EFF6FF]">Enterprises</Link>
                        <Link to="/" className="block px-4 py-2 text-sm text-[#0F2D4A] hover:bg-[#EFF6FF]">Developers</Link>
                        <Link to="/" className="block px-4 py-2 text-sm text-[#0F2D4A] hover:bg-[#EFF6FF]">Government</Link>
                    </div>
                </div>

                <Link to="/" className="hover:text-[#0F2D4A] transition">Pricing</Link>
                        <Link to="/" className="hover:text-[#0F2D4A] transition">Company</Link>
                    </>
                )}
            </div>

            {isAbout ? (
                <Link to="/" className="hidden md:inline-block bg-white text-[#0F2D4A] px-5 py-2 rounded-xl text-sm font-semibold hover:bg-gray-100 transition">
                    Contact Us
                </Link>
            ) : (
                <Link to="/about" className="hidden md:inline-block bg-[#0F2D4A] text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-[#1a4369] transition">
                    About us
                </Link>
            )}

            {/* Mobile Burger Button */}
            <button
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <span className={`w-6 h-0.5 block ${isAbout ? 'bg-white' : 'bg-[#0F2D4A]'}`}></span>
                <span className={`w-6 h-0.5 block ${isAbout ? 'bg-white' : 'bg-[#0F2D4A]'}`}></span>
                <span className={`w-6 h-0.5 block ${isAbout ? 'bg-white' : 'bg-[#0F2D4A]'}`}></span>
            </button>

            {/* Mobile Menu */}
            <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 px-6 py-6 flex-col gap-4`}>
                {/* Mobile Products Dropdown */}
                <div>
                    <button 
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="flex items-center justify-between w-full text-left font-semibold text-[#0F2D4A] py-2"
                    >
                        Products <span className={`transition-transform text-[18px] ${mobileProductsOpen ? 'rotate-90' : ''}`}>▸</span>
                    </button>
                    <div className={`${mobileProductsOpen ? 'flex' : 'hidden'} flex-col gap-2 pl-4 mt-2`}>
                        <Link to="/" className="block text-sm text-[#45556C] hover:text-[#0F2D4A]">Paxofi Pay</Link>
                        <Link to="/" className="block text-sm text-[#45556C] hover:text-[#0F2D4A]">Paxofi Verify</Link>
                        <Link to="/" className="block text-sm text-[#45556C] hover:text-[#0F2D4A]">Paxofi Business</Link>
                        <Link to="/" className="block text-sm text-[#45556C] hover:text-[#0F2D4A]">Paxofi API</Link>
                        <Link to="/" className="block text-sm text-[#45556C] hover:text-[#0F2D4A]">Paxofi Cloud</Link>
                        <Link to="/" className="block text-sm text-[#45556C] hover:text-[#0F2D4A]">Paxofi Agent</Link>
                    </div>
                </div>
                <hr className="border-gray-100 my-1" />

                {/* Mobile Solutions Dropdown */}
                <div>
                    <button 
                        onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                        className="flex items-center justify-between w-full text-left font-semibold text-[#0F2D4A] py-2"
                    >
                        Solutions <span className={`transition-transform text-[18px] ${mobileSolutionsOpen ? 'rotate-90' : ''}`}>▸</span>
                    </button>
                    <div className={`${mobileSolutionsOpen ? 'flex' : 'hidden'} flex-col gap-2 pl-4 mt-2`}>
                        <Link to="/" className="block text-sm text-[#45556C] hover:text-[#0F2D4A]">Startups</Link>
                        <Link to="/" className="block text-sm text-[#45556C] hover:text-[#0F2D4A]">SMEs</Link>
                        <Link to="/" className="block text-sm text-[#45556C] hover:text-[#0F2D4A]">Enterprises</Link>
                        <Link to="/" className="block text-sm text-[#45556C] hover:text-[#0F2D4A]">Developers</Link>
                        <Link to="/" className="block text-sm text-[#45556C] hover:text-[#0F2D4A]">Government</Link>
                    </div>
                </div>
                <hr className="border-gray-100 my-1" />
                <Link to="/" className="block text-sm text-[#0F2D4A] py-1 hover:underline">Pricing</Link>
                <Link to="/" className="block text-sm text-[#0F2D4A] py-1 hover:underline">Company</Link>
                <Link to="/about" className="mt-2 bg-[#0F2D4A] text-white px-5 py-2 rounded-xl text-sm font-semibold block text-center">About us</Link>
            </div>
        </nav>
    );
}
