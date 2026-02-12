import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Factory, Globe2, Award, Users, TrendingUp } from "lucide-react";

export default function CompanyProfilePage() {
    return (
        <>
            <PageHeader
                title="Company Profile"
                subtitle="Excellence in Uniform Manufacturing Since 1980"
                breadcrumb={[{ label: "Company Profile", href: "/company-profile" }]}
            />

            {/* Introduction Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h4 className="text-accent font-bold uppercase tracking-wider mb-2">Who We Are</h4>
                            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">GS Garments</h2>
                            <h3 className="text-2xl font-serif italic text-gray-500 mb-6">"Weaving Identity & Professionalism"</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                GS Garments is a premier manufacturer and supplier of high-quality uniforms, dedicated to providing excellence in every stitch. Established with a vision to revolutionize the uniform industry, we combine traditional craftsmanship with modern technology to deliver products that stand for durability, comfort, and style.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Under the visionary leadership of Mr. Gagandeep Singh Kohli, we have grown from a modest beginning to a renowned name in the garment sector. Our commitment to quality and customer satisfaction has earned us the trust of over 500+ schools, corporate houses, hospitals, and industrial clients across India.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-lg">
                                    Contact Us
                                </Link>
                                <Link href="/products/school" className="px-8 py-3 border border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
                                    View Products
                                </Link>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                                alt="GS Garments Company Profile"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-bold text-xl">State-of-the-Art Manufacturing</p>
                                <p className="text-sm opacity-80">Noida, Uttar Pradesh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-accent">
                            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <TrendingUp className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To design and manufacture uniforms that not only meet the highest standards of quality and durability but also instill a sense of pride and belonging in every individual who wears them.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-primary">
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Globe2 className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To be the globally preferred partner for uniform solutions, recognized for our innovation, ethical practices, and unwavering commitment to customer satisfaction.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border-t-4 border-accent">
                            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Award className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Core Values</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent" /> Quality Assurance</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent" /> Customer Centricity</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent" /> Innovation & Design</li>
                                <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-accent" /> Ethical Manufacturing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Details Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h4 className="text-accent font-bold uppercase tracking-wider mb-2">At a Glance</h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Company Key Facts</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Establishment</p>
                            <p className="text-xl font-bold text-primary">Since 1980</p>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Key Executive</p>
                            <p className="text-xl font-bold text-primary">Mr. Gagandeep Singh Kohli</p>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Nature of Business</p>
                            <p className="text-xl font-bold text-primary">Manufacturer & Supplier</p>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
                            <p className="text-xl font-bold text-primary">Noida, Uttar Pradesh</p>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Employees</p>
                            <p className="text-xl font-bold text-primary">50-100 Skilled Staff</p>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Production Capacity</p>
                            <p className="text-xl font-bold text-primary">High Volume Capability</p>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Clientele</p>
                            <p className="text-xl font-bold text-primary">500+ Satisfied Clients</p>
                        </div>
                        <div className="bg-white border border-gray-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Market Reach</p>
                            <p className="text-xl font-bold text-primary">Pan India</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure */}
            <section className="py-20 bg-[#09090b] text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h4 className="text-accent font-bold uppercase tracking-wider mb-2">Our Backbone</h4>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">State-of-the-Art Infrastructure</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                We boast a robust infrastructure equipped with the latest machinery and technology for garment manufacturing. Our facility is designed to handle bulk orders with precision and efficiency.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-4">
                                    <Factory className="text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-lg">Advanced Machinery</h5>
                                        <p className="text-sm text-gray-400">Computerized cutting, sewing, and embroidery machines.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Users className="text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-lg">Skilled Workforce</h5>
                                        <p className="text-sm text-gray-400">A team of experienced designers, tailors, and quality checkers.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" />
                                    <div>
                                        <h5 className="font-bold text-lg">Quality Control Unit</h5>
                                        <p className="text-sm text-gray-400">Dedicated unit to ensure every piece meets our high standards.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative h-64 rounded-xl overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Factory 1" fill className="object-cover" />
                            </div>
                            <div className="relative h-64 rounded-xl overflow-hidden mt-8">
                                <Image src="https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Factory 2" fill className="object-cover" />
                            </div>
                            <div className="relative h-64 rounded-xl overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1549488497-65005b8cb46b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Factory 3" fill className="object-cover" />
                            </div>
                            <div className="relative h-64 rounded-xl overflow-hidden mt-8">
                                <Image src="https://images.unsplash.com/photo-1554774853-719586f8c277?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Factory 4" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
