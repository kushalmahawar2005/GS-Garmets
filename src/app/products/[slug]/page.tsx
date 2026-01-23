"use client";

import { useParams } from 'next/navigation';
import PageHeader from "@/components/layout/PageHeader";
import ProductGrid from "@/components/products/ProductGrid";
import { notFound } from "next/navigation";

// Helper to get title from slug
const getCategoryDetails = (slug: string) => {
    switch (slug) {
        case 'school': return { title: "School Uniforms", subtitle: "Durable, Comfortable & Smart Uniforms for Students" };
        case 'corporate': return { title: "Corporate Uniforms", subtitle: "Professional Attire for the Modern Workplace" };
        case 'hospital': return { title: "Hospital Uniforms", subtitle: "Hygienic Scrub Suits, Lab Coats & Patient Wear" };
        case 'industrial': return { title: "Industrial Uniforms", subtitle: "Safety Wear & Heavy Duty Work Clothes" };
        default: return null;
    }
};

export default function ProductPage() {
    const params = useParams();
    // In Next.js App Router, params are sometimes wrapped or need async handling depending on version, 
    // but in client components useParams hook returns the object directly.
    // However, if the slug isn't matched, we should handle it.

    // safe fallback
    const slug = typeof params?.slug === 'string' ? params.slug : '';
    const details = getCategoryDetails(slug);

    if (!details) {
        // In a real app we might return notFound(), or just a generic page
        return (
            <>
                <PageHeader title="All Products" breadcrumb={[{ label: "Products", href: "/products/school" }]} />
                <div className="container mx-auto py-20 text-center">
                    <h2 className="text-2xl text-gray-500">Select a category to view products.</h2>
                </div>
            </>
        )
    }

    return (
        <>
            <PageHeader
                title={details.title}
                subtitle={details.subtitle}
                breadcrumb={[
                    { label: "Products", href: "/products/school" },
                    { label: details.title, href: `/products/${slug}` }
                ]}
            />

            <ProductGrid category={slug} />
        </>
    );
}
