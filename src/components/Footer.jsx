import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-[#EFF6FF] px-6 lg:px-16 py-16">
            <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 lg:gap-12 justify-between">
                <div className="flex flex-col gap-4 col-span-2 md:col-span-4 lg:col-span-2 pr-0 lg:pr-8">
                    <Link to="/" className="flex items-center gap-2 w-fit hover:opacity-90 transition cursor-pointer">
                        <img src="/Image1.png" alt="Paxofi Logo" className="w-10 h-10" />
                        <span className="text-[#0F2D4A] text-xl font-bold">PAXOFI</span>
                    </Link>
                    <p className="text-[#0F2D4A] text-sm leading-relaxed">Africa's Digital Infrastructure Platform, empowering businesses through payments, identity verification, compliance, APIs, cloud, and document services.</p>
                    <div className="flex gap-3 mt-4">
                        <Link to="/" className="w-9 h-9 rounded-lg border border-blue-200 bg-white flex items-center justify-center text-blue-600 font-bold hover:shadow transition cursor-pointer">in</Link>
                        <Link to="/" className="w-9 h-9 rounded-lg border border-blue-200 bg-white flex items-center justify-center text-blue-600 font-bold hover:shadow transition cursor-pointer">X</Link>
                        <Link to="/" className="w-9 h-9 rounded-lg border border-blue-200 bg-white flex items-center justify-center text-blue-600 font-bold hover:shadow transition cursor-pointer">f</Link>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-[#0F2D4A] font-semibold mb-2">Products</h4>
                    <Link to="/" className="text-[#0F2D4A] text-sm hover:underline">Paxofi Pay</Link>
                    <Link to="/" className="text-[#0F2D4A] text-sm hover:underline">Paxofi Verify</Link>
                    <Link to="/" className="text-[#0F2D4A] text-sm hover:underline">Paxofi Business</Link>
                    <Link to="/" className="text-[#0F2D4A] text-sm hover:underline">Paxofi API</Link>
                    <Link to="/" className="text-[#0F2D4A] text-sm hover:underline">Paxofi Cloud</Link>
                    <Link to="/" className="text-[#0F2D4A] text-sm hover:underline">Paxofi Agent</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <h4 className="text-[#0F2D4A] font-semibold mb-2">Solutions</h4>
                    <Link to="/" className="text-[#0F2D4A] text-sm hover:underline">Startups</Link>
                    <Link to="/" className="text-[#0F2D4A] text-sm hover:underline">SMEs</Link>
                    <Link to="/" className="text-[#0F2D4A] text-sm hover:underline">Enterprises</Link>
                    <Link to="/" className="text-[#0F2D4A] text-sm hover:underline">Developers</Link>
                    <Link to="/" className="text-[#0F2D4A] text-sm hover:underline">Government</Link>
                </div>
                <div className="flex flex-col gap-3">
                    <h4 className="text-[#0F2D4A] font-semibold mb-2">Company</h4>
                    <Link to="/about" className="text-[#0F2D4A] text-sm hover:underline">About Us</Link>
                    <Link to="/" className="text-[#0F2D4A] text-sm hover:underline">Careers</Link>
                    <Link to="/" className="text-[#0F2D4A] text-sm hover:underline">Blog</Link>
                    <Link to="/" className="text-[#0F2D4A] text-sm hover:underline">Contact Us</Link>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto border-t border-blue-200 mt-12 pt-6">
                <p className="text-[#0F2D4A] text-xs">© 2026 Paxofi. All rights reserved.</p>
            </div>
        </footer>
    );
}
