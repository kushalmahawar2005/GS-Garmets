import PageHeader from "@/components/layout/PageHeader";
import StatsSection from "@/components/home/StatsSection";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="About Us"
                subtitle="Weaving Excellence Since 1980"
                breadcrumb={[{ label: "About Us", href: "/about" }]}
            />

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://www.globaluniforms.co.in/default/images/about-us.jpg"
                                alt="About GS Garments"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="text-accent font-bold uppercase tracking-wider mb-2">Our Story</h4>
                            <h2 className="text-4xl font-bold text-primary mb-6">Leading Manufacturer of Premium Uniforms</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Mr. Gagandeep Singh Kohli is a fantastic uniform designer, and his zest to take this passion to new heights, has helped him become an entrepreneur. Since the foundation, he has been weaving his beautiful imagination and turning it into creative and comfortable uniforms and also helped the uniform sector bloom.
                            </p>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                At GS Garments, we believe that a uniform is not just a piece of clothing but a symbol of identity, unity, and professionalism. With over four decades of unparalleled experience, we have established ourselves as the premier manufacturer and supplier of high-quality uniforms across various sectors including education, healthcare, corporate, and industry.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-accent">
                                    <h5 className="font-bold text-primary text-xl mb-1">Mission</h5>
                                    <p className="text-sm text-gray-500">To provide comfortable, durable, and stylish uniforms that enhance professional identity.</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                                    <h5 className="font-bold text-primary text-xl mb-1">Vision</h5>
                                    <p className="text-sm text-gray-500">To be the global leader in uniform manufacturing, known for quality and innovation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <StatsSection />
            <Testimonials />
        </>
    );
}
