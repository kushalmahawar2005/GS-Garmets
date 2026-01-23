import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-primary uppercase">GS Garments</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            We are a leading manufacturer and supplier of high-quality uniforms for schools, corporates, hospitals, and industries. Dedicated to quality and timely delivery.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Facebook size={18} /></Link>
                            <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Instagram size={18} /></Link>
                            <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Twitter size={18} /></Link>
                            <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Linkedin size={18} /></Link>
                        </div>
                    </div>

                    {/* Column 2: Our Products */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase">Our Products</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">School Uniforms</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Corporate Uniforms</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Sports Uniforms</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Housekeeping Uniforms</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Security Uniforms</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Useful Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase">Useful Links</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Our Clients</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">E-Catalogue</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                                <span>123, Industrial Area, Phase 1, New Delhi, India - 110020</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-primary flex-shrink-0" />
                                <span>+91-9876543210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-primary flex-shrink-0" />
                                <span>info@gsgarments.co.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} GS Garments. All Rights Reserved.</p>
                    <div className="mt-4 md:mt-0">
                        <span>Designed by <span className="text-white">CloneAgent</span></span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
