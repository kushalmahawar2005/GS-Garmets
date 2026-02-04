"use client";


import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import TopBar from './TopBar';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) { // if scroll down hide the navbar
                    setShow(false);
                } else { // if scroll up show the navbar
                    setShow(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <header className={`w-full shadow-2xl sticky top-0 z-50 bg-white border-b border-gray-100 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
            <TopBar />

            {/* Main Header */}
            <div className="container mx-auto px-6 py-6 transition-all duration-300">
                <div className={`flex justify-between items-center relative transition-all duration-700 delay-200 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    {/* Desktop Navigation (Left) */}
                    <nav className="hidden lg:flex items-center space-x-8 font-quicksand font-medium text-black/90 uppercase tracking-widest text-sm">
                        <Link href="/" className="hover:text-accent transition-colors relative group">
                            Home
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/about" className="hover:text-accent transition-colors relative group">
                            About Us
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        <div className="group relative cursor-pointer py-2">
                            <span className="flex items-center hover:text-accent transition-colors">
                                Products <ChevronDown size={16} className="ml-1" />
                            </span>
                            {/* Simple Megamenu Placeholder */}
                            <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-sm py-2 opacity-0 group-hover:opacity-100 visible group-hover:visible transition-all duration-300 transform origin-top-left border border-gray-100 mt-2">
                                <Link href="/products/school" className="block px-6 py-3 hover:bg-gray-50 text-black font-quicksand font-medium text-sm transition-colors border-b border-black/10 last:border-0">SCHOOL UNIFORMS</Link>
                                <Link href="/products/corporate" className="block px-6 py-3 hover:bg-gray-50 text-black font-quicksand font-medium text-sm transition-colors border-b border-black/10 last:border-0">CORPORATE UNIFORMS</Link>
                                <Link href="/products/hospital" className="block px-6 py-3 hover:bg-gray-50 text-black font-quicksand font-medium text-sm transition-colors border-b border-black/10 last:border-0">HOSPITAL UNIFORMS</Link>
                                <Link href="/products/industrial" className="block px-6 py-3 hover:bg-gray-50 text-black font-quicksand font-medium text-sm transition-colors border-b border-black/10 last:border-0">INDUSTRIAL UNIFORMS</Link>
                            </div>
                        </div>

                        <Link href="/contact" className="hover:text-accent transition-colors relative group">
                            Contact Us
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </nav>

                    {/* Logo (Center) */}
                    <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center group">
                        <Image
                            src="/assets/images/final-logo.png"
                            alt="GS Garments Logo"
                            width={300}
                            height={120}
                            className="h-20 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Actions (Right) */}
                    <div className="flex items-center space-x-4 ml-auto">

                        <Link href="/quote" className="hidden transition-all duration-300  tracking-wider md:block bg-white hover:bg-black/80 border border-black hover:text-white text-black px-4 py-2 rounded-sm font-medium font-quicksand transition-all duration-300  text-sm tracking-widest shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105">
                            Request A Quote
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden bg-[#09090b] border-t border-white/10 absolute w-full left-0 top-full shadow-2xl h-screen overflow-y-auto pb-20 backdrop-blur-xl">
                    <div className="flex flex-col p-6 space-y-6 font-medium">
                        <Link href="/" className="border-b border-white/10 pb-4 text-white hover:text-accent transition-colors">Home</Link>
                        <Link href="/about" className="border-b border-white/10 pb-4 text-white hover:text-accent transition-colors">About Us</Link>
                        <div className="border-b border-white/10 pb-4">
                            <span className="block mb-4 text-gray-400 text-sm uppercase tracking-widest">Products</span>
                            <Link href="/products/school" className="block pl-4 py-2 text-white/90 hover:text-accent transition-colors">School Uniforms</Link>
                            <Link href="/products/corporate" className="block pl-4 py-2 text-white/90 hover:text-accent transition-colors">Corporate Uniforms</Link>
                            <Link href="/products/hospital" className="block pl-4 py-2 text-white/90 hover:text-accent transition-colors">Hospital Uniforms</Link>
                            <Link href="/products/industrial" className="block pl-4 py-2 text-white/90 hover:text-accent transition-colors">Industrial Uniforms</Link>
                        </div>
                        <Link href="/contact" className="border-b border-white/10 pb-4 text-white hover:text-accent transition-colors">Contact Us</Link>
                        <Link href="/quote" className="bg-gradient-to-r from-[#ca8a04] to-[#eab308] text-white text-center py-3 rounded-lg mt-4 font-bold uppercase tracking-widest shadow-lg">Request Quote</Link>
                    </div>
                </div>
            )}
        </header>
    );
}
