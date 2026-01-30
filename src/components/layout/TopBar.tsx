import { Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function TopBar() {
    return (
        <div className="bg-[#252525] text-white py-2 text-sm hidden md:block">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <div className="flex items-center space-x-2">
                        <Phone size={14} className="text-primary" />
                        <span>+91-9876543210</span>
                    </div>
                    <span className="text-white/30 font-thin">|</span>
                    <div className="flex items-center space-x-2">
                        <Mail size={14} className="text-primary" />
                        <span>info@gsgarments.co.in</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <span>Follow Us:</span>
                    <div className="flex items-center gap-3">
                        <Link href="#" className="hover:text-primary transition-colors"><Facebook size={16} /></Link>
                        <span className="text-white/30 font-thin">|</span>
                        <Link href="#" className="hover:text-primary transition-colors"><Instagram size={16} /></Link>
                        <span className="text-white/30 font-thin">|</span>
                        <Link href="#" className="hover:text-primary transition-colors"><Twitter size={16} /></Link>
                        <span className="text-white/30 font-thin">|</span>
                        <Link href="#" className="hover:text-primary transition-colors"><Linkedin size={16} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
