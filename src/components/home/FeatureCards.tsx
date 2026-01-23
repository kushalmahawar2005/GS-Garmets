import { Scissors, ShieldCheck, Tag, Truck } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const features = [
    {
        icon: Scissors,
        title: "Personalized Designs",
        description: "Custom tailored uniforms to match your brand identity perfectly."
    },
    {
        icon: ShieldCheck,
        title: "Durable Fabric",
        description: "High-quality heavy-duty materials ensuring long-lasting wear."
    },
    {
        icon: Tag,
        title: "Competitive Pricing",
        description: "Best market rates without compromising on quality standards."
    },
    {
        icon: Truck,
        title: "Prompt Delivery",
        description: "Committed to on-time delivery with our efficient logistics."
    }
];

export default function FeatureCards() {
    return (
        <section className="relative py-20 bg-gray-50 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} className="h-full">
                            <div className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-accent/30 h-full flex flex-col">
                                {/* Hover Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover:w-full"></div>

                                <div className="relative z-10">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/5 text-primary mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 group-hover:scale-110 shadow-lg shadow-gray-200 group-hover:shadow-accent/40">
                                        <feature.icon size={30} strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
