import PageHeader from "@/components/layout/PageHeader";
import ContactOverview from "@/components/home/ContactOverview";

export default function ContactPage() {
    return (
        <>
            <PageHeader
                title="Contact Us"
                subtitle="Get in Touch With Our Team"
                breadcrumb={[{ label: "Contact Us", href: "/contact" }]}
            />

            <ContactOverview />

            <section className="h-[450px] w-full relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.467008711466!2d77.28828557618223!3d28.67567708212175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc5e1db17d91%3A0x6a203f5b084515a8!2sG.S.INTERNATIONAL!5e0!3m2!1sen!2sin!4v1707912345678!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(0.8) contrast(1.2) opacity(0.9)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>

                {/* Overlay Card for Address */}
                <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-2xl max-w-sm hidden md:block border-t-4 border-accent">
                    <h4 className="font-bold text-primary text-lg mb-2">Factory Address</h4>
                    <p className="text-gray-600 text-sm">
                        Plot No. A-195, Sector A-4,<br />
                        Tronica City Industrial Area,<br />
                        Loni, Ghaziabad, U.P.-201102
                    </p>
                </div>
            </section>
        </>
    );
}
