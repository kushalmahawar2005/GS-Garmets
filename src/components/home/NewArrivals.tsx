"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const products = [
    { id: 1, name: "School Trouser", image: "/assets/images/school-trouser.jpg" },
    { id: 2, name: "Doctor Coat", image: "/assets/images/doctor-coat.jpg" },
    { id: 3, name: "Lab Coat", image: "/assets/images/lab-coat.jpg" },
    { id: 4, name: "Nurse Uniform", image: "/assets/images/nurse-uniform.jpg" },
    { id: 5, name: "Housekeeping", image: "/assets/images/housekeeping-uniform.jpg" },
    { id: 6, name: "School Skirt", image: "/assets/images/school.jpg" },
];

export default function NewArrivals() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-accent font-bold uppercase tracking-wider block mb-2">Trendsetters</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-black font-serif">New Arrivals</h2>
                    <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 }
                    }}
                    className="pb-4 mt-8"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="group relative border border-white/10 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 bg-[#18181b]">
                                <div className="relative h-[300px] w-full bg-[#18181b] p-4 flex items-center justify-center">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                                        unoptimized
                                        quality={100}
                                    />
                                    {/* Overlay Button */}
                                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                                        <Link href="/contact" className="bg-gradient-to-r from-[#ca8a04] to-[#eab308] text-white px-6 py-2 rounded-lg font-quicksand flex items-center hover:shadow-lg transition-all transform hover:-translate-y-1">
                                            <ShoppingBag size={18} className="mr-2" /> Enquire
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-4 text-center border-t border-white/5 bg-[#18181b]">
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors !font-quicksand tracking-wide">{product.name}</h3>
                                    <p className="text-sm text-gray-400 font-quicksand">Premium Quality</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
