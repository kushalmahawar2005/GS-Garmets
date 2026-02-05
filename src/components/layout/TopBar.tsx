import { Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function TopBar() {
    return (
        <div className="bg-[#243037] text-white py-3 text-sm font-light font-quicksand tracking-wider leading-relaxed tracking-wide hidden md:block">
            <div className="container font-bold mx-auto px-4 flex justify-between items-center relative">
                <span className="absolute left-1/2 transform -translate-x-1/2 w-full text-center pointer-events-none">Trusted Manufacturer & Wholesale Supplier | PAN India Delivery</span>
                <div className="ml-auto pointer-events-auto">
                    <Link href="/quote" className="bg-white hover:bg-gray-100 text-[#243037] px-4 py-1.5 rounded-sm font-bold font-quicksand text-xs tracking-widest transition-all duration-300 uppercase shadow-md hover:shadow-lg">
                        Request A Quote
                    </Link>
                </div>
            </div>
        </div>
    );
}
