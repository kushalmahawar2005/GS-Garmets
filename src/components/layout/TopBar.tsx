import { Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function TopBar() {
    return (
        <div className="bg-[#243037] text-white py-3 text-sm font-light font-quicksand tracking-wider leading-relaxed tracking-wide hidden md:block">
            <div className="container mx-auto px-4 flex justify-center items-center">
                <span>Trusted Manufacturer & Wholesale Supplier | PAN India Delivery</span>
            </div>
        </div>
    );
}
