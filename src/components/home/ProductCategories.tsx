import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const categories = [
    {
        id: 1,
        title: "School Uniforms",
        image: "/assets/images/school.jpg",
        link: "/products/school",
        count: "50+ Products"
    },
    {
        id: 2,
        title: "Corporate Uniforms",
        image: "/assets/images/corporate-uniforms.jpg",
        link: "/products/corporate",
        count: "40+ Products"
    },
    {
        id: 3,
        title: "Hospital Uniforms",
        image: "/assets/images/hospital.jpg",
        link: "/products/hospital",
        count: "30+ Products"
    },
    {
        id: 4,
        title: "Housekeeping",
        image: "/assets/images/housekeeping-uniform.jpg",
        link: "/products/industrial",
        count: "25+ Products"
    }
];

export default function ProductCategories() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold uppercase tracking-wider block mb-2">Our Collection</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Explore Categories</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat) => (
                        <Link key={cat.id} href={cat.link} className="group block relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="relative h-[400px] w-full">
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    unoptimized
                                    quality={100}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-sm text-primary mb-1 font-medium">{cat.count}</p>
                                    <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                                    <span className="inline-flex items-center text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 text-primary">
                                        View Collection <ArrowRight size={16} className="ml-2" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
