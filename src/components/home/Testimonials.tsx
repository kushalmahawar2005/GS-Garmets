"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        id: 1,
        text: "GS Garments has been our trusted partner for over 5 years. Their quality and consistency are unmatched in the market.",
        author: "Rajesh Kumar",
        role: "Principal, DPS Delhi"
    },
    {
        id: 2,
        text: "Excellent fabric quality and fitting. Our employees love their new uniforms. Highly recommended for corporate attire.",
        author: "Anita Sharon",
        role: "HR Manager, TechCorp"
    },
    {
        id: 3,
        text: "They delivered 500 sets of uniforms within a week. The speed and quality of service are truly commendable.",
        author: "Vikram Singh",
        role: "Operations Head, Swift Logistics"
    },
    {
        id: 4,
        text: "The best uniform supplier in the NCR region. Professional, timely, and great value for money.",
        author: "Sanjay Gupta",
        role: "Director, EduWorld"
    },
    {
        id: 5,
        text: "We ordered lab coats for our entire hospital staff. The fabric is breathable and stains wash off easily.",
        author: "Dr. Meera Rao",
        role: "Chief Medical Officer, City Care"
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">What Our Clients Say</h2>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="pb-12"
                >
                    {testimonials.map((t) => (
                        <SwiperSlide key={t.id} className="h-auto">
                            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center">
                                <div className="text-primary mb-6">
                                    <Quote size={40} className="fill-current opacity-20" />
                                </div>
                                <p className="text-gray-600 mb-6 italic leading-relaxed">"{t.text}"</p>
                                <div className="mt-auto">
                                    <h4 className="font-bold text-gray-900">{t.author}</h4>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
