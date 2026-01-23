"use client";


import Link from 'next/link';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import TopBar from './TopBar';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full shadow-sm sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <TopBar />

            {/* Main Header */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        {/* Placeholder for Logo - would use Image in real app */}
                        <span className="text-2xl font-black uppercase tracking-tighter text-primary">
                            Global<span className="text-accent">Uniforms</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-10 font-medium text-primary">
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
                            <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-sm py-2 opacity-0 group-hover:opacity-100 visible group-hover:visible transition-all duration-300 transform origin-top-left border-t-2 border-accent mt-2">
                                <Link href="/products/school" className="block px-6 py-3 hover:bg-gray-50 hover:text-accent text-sm transition-colors border-b border-gray-50 last:border-0">School Uniforms</Link>
                                <Link href="/products/corporate" className="block px-6 py-3 hover:bg-gray-50 hover:text-accent text-sm transition-colors border-b border-gray-50 last:border-0">Corporate Uniforms</Link>
                                <Link href="/products/hospital" className="block px-6 py-3 hover:bg-gray-50 hover:text-accent text-sm transition-colors border-b border-gray-50 last:border-0">Hospital Uniforms</Link>
                                <Link href="/products/industrial" className="block px-6 py-3 hover:bg-gray-50 hover:text-accent text-sm transition-colors border-b border-gray-50 last:border-0">Industrial Uniforms</Link>
                            </div>
                        </div>

                        <Link href="/catalogue" className="hover:text-accent transition-colors relative group">
                            E-Catalogue
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link href="/contact" className="hover:text-accent transition-colors relative group">
                            Contact Us
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center space-x-4">

                        <Link href="/quote" className="hidden md:block bg-accent hover:bg-accent-hover text-white px-8 py-2.5 rounded-sm font-bold transition-all duration-300 uppercase text-sm tracking-wider shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
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
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-lg h-screen overflow-y-auto pb-20">
                    <div className="flex flex-col p-4 space-y-4 font-medium">
                        <Link href="/" className="border-b pb-2">Home</Link>
                        <Link href="/about" className="border-b pb-2">About Us</Link>
                        <div className="border-b pb-2">
                            <span className="block mb-2 text-gray-500 text-sm">Products</span>
                            <Link href="/products/school" className="block pl-4 py-1">School Uniforms</Link>
                            <Link href="/products/corporate" className="block pl-4 py-1">Corporate Uniforms</Link>
                        </div>
                        <Link href="/contact" className="border-b pb-2">Contact Us</Link>
                        <Link href="/quote" className="bg-primary text-white text-center py-2 rounded-sm mt-4">Request Quote</Link>
                    </div>
                </div>
            )}
        </header>
    );
}
