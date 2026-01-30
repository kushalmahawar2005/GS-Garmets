import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
    return (
        <section className="pt-20 pb-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <h4 className="text-black font-bold uppercase tracking-wider mb-2">Who We Are</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                            Leading Manufacturer of Premium Quality Uniforms
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            GS Garments is a premier uniform manufacturing company based in India. We specialize in designing and manufacturing high-quality uniforms for schools, corporate offices, hospitals, hotels, and industrial sectors. With years of experience and a commitment to excellence, we have established ourselves as a trusted partner for businesses and institutions across the globe.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Our state-of-the-art manufacturing facility ensures that every garment meets the highest standards of durability, comfort, and style. We believe in building long-term relationships with our clients by providing personalized service and timely delivery.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {['Premium Fabric Quality', 'Custom Designs', 'Bulk Manufacturing', 'Timely Delivery'].map((item, i) => (
                                <div key={i} className="flex items-center space-x-2">
                                    <CheckCircle className="text-primary" size={20} />
                                    <span className="font-medium text-gray-800">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/about" className="block w-max mx-auto md:mx-0 bg-black border-2 border-primary text-white hover:bg-primary hover:text-black px-8 py-3 rounded-sm font-bold uppercase tracking-wider transition-colors duration-300">
                            Read More
                        </Link>
                    </div>

                    {/* Image Content */}
                    <div className="lg:w-1/2 relative h-[400px] w-full">
                        <div className="absolute inset-0 bg-primary/10 rounded-lg transform translate-x-4 translate-y-4"></div>
                        <div className="relative h-full w-full rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/assets/images/machine.png"
                                alt="GS Garments Factory"
                                fill
                                className="object-cover"
                                unoptimized
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
