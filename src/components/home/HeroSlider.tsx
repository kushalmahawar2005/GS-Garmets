"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
    {
        id: 1,
        image: "https://www.globaluniforms.co.in/images/banners/school-uniform.jpg",
        title: "Premium School Uniforms",
        subtitle: "Comfortable, Durable & Stylish",
        link: "/products/school"
    },
    {
        id: 2,
        image: "https://www.globaluniforms.co.in/images/banners/hospital-uniform.jpg",
        title: "Professional Healthcare Attire",
        subtitle: "Hygiene, Comfort & Protection",
        link: "/products/hospital"
    },
    {
        id: 3,
        image: "https://www.globaluniforms.co.in/images/banners/sports-uniform.jpg",
        title: "High Performance Sports Wear",
        subtitle: "Designed for Champions",
        link: "/products/industrial"
    }
];

export default function HeroSlider() {
    return (
        <div className="w-full relative group">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="w-full h-[400px] md:h-[600px]"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full">
                        <div className="relative w-full h-full">
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                priority={slide.id === 1}
                                placeholder="empty"
                            />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <div className="text-center text-white px-4 max-w-4xl">
                                    <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg leading-tight animate-fade-in-up">
                                        {slide.title}
                                    </h2>
                                    <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
                                        {slide.subtitle}
                                    </p>
                                    <Link
                                        href={slide.link}
                                        className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg"
                                    >
                                        Explore Collection
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom styles for Swiper navigation arrows to match theme (optional override if needed) */}
            <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: var(--accent) !important;
          background: rgba(255,255,255,0.8);
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 24px;
          font-weight: bold;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: var(--accent);
          color: white !important;
        }
        .swiper-pagination-bullet-active {
          background: var(--accent) !important;
        }
      `}</style>
        </div>
    );
}
