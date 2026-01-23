"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const products = [
    { id: 1, name: "School Trouser", image: "https://www.globaluniforms.co.in/default/images/school-trouser.jpg" },
    { id: 2, name: "Doctor Coat", image: "https://www.globaluniforms.co.in/default/images/doctor-coat.jpg" },
    { id: 3, name: "Lab Coat", image: "https://www.globaluniforms.co.in/default/images/lab-coat.jpg" },
    { id: 4, name: "Nurse Uniform", image: "https://www.globaluniforms.co.in/default/images/nurse-uniform.jpg" },
    { id: 5, name: "Housekeeping", image: "https://www.globaluniforms.co.in/default/images/housekeeping-uniform.jpg" },
    { id: 6, name: "School Skirt", image: "https://www.globaluniforms.co.in/default/images/school.jpg" },
];

export default function NewArrivals() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold uppercase tracking-wider block mb-2">Trendsetters</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">New Arrivals</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
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
                    className="pb-4"
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="group relative border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative h-[300px] w-full bg-gray-50">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Overlay Button */}
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Link href="/contact" className="bg-primary text-white px-6 py-2 rounded-sm font-bold flex items-center hover:bg-white hover:text-primary transition-colors">
                                            <ShoppingBag size={18} className="mr-2" /> Enquire
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                                    <p className="text-sm text-gray-500">Premium Quality</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
