"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ContactSidebar from "@/components/ui/ContactSidebar";
import AnalyticsProvider from "@/components/AnalyticsProvider";

export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith("/admin");

    if (isAdmin) {
        return <main className="flex-grow">{children}</main>;
    }

    return (
        <>
            <Header />
            <main className="flex-grow">{children}</main>
            <WhatsAppButton />
            <ContactSidebar />
            <AnalyticsProvider />
            <Footer />
        </>
    );
}
