"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
    {
        id: 1,
        image: "/assets/images/school-uniform.jpg",
        title: "Premium School Uniforms",
        link: "/products/school"
    },
    {
        id: 2,
        image: "/assets/images/hospital-uniform.jpg",
        title: "Professional Healthcare Attire",
        link: "/products/hospital"
    },
    {
        id: 3,
        image: "/assets/images/sports-uniform.jpg",
        title: "High Performance Sports Wear",
        link: "/products/industrial"
    }
];

export default function PremiumHero() {
    return (
        <section className="relative h-[450px] md:h-[550px] w-full bg-background group">
            <Swiper
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1000}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover select-none"
                            priority
                            quality={100}
                        />
                        {/* No overlay shadow/gradient here as requested */}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Pagination Styles */}
            <style jsx global>{`
                .swiper-pagination-bullet {
                    background: rgba(255, 255, 255, 0.5);
                    opacity: 1;
                    width: 10px;
                    height: 10px;
                    transition: all 0.3s ease;
                }
                .swiper-pagination-bullet-active {
                    background: white;
                    width: 24px;
                    border-radius: 5px;
                }
            `}</style>
        </section>
    );
}
