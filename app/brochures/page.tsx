"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PDFViewer } from "@/components/pdf-viewer";

// Sample brochure data - in a real app, this would come from an API or database
const brochureData = [
    {
        id: 1,
        title: "Master Collection Catalog",
        description:
            "Comprehensive showcase of our complete range with detailed specifications and color variations for discerning professionals.",
        pdfUrl: "/pdf/Nirmala.pdf",
        thumbnailUrl: "/images/nirmala-brochure.png",
        category: "Catalog",
        fileSize: "12.5 MB",
        pages: 48,
    },
    {
        id: 2,
        title: "Premium Care Guide",
        description:
            "Expert maintenance protocols to preserve the exceptional quality and appearance of your Nirmala surfaces.",
        pdfUrl: "/pdf/Relwood-Brochure.pdf",
        thumbnailUrl: "/images/relwood-brochure.png",
        category: "Care Guide",
        fileSize: "3.2 MB",
        pages: 16,
    },
    {
        id: 3,
        title: "Technical Documentation",
        description:
            "Detailed technical specifications and professional installation guidelines for optimal results and longevity.",
        pdfUrl: "/pdf/Nirmala.pdf",
        thumbnailUrl: "/images/nirmala-brochure.png",
        category: "Technical",
        fileSize: "8.7 MB",
        pages: 32,
    },
    {
        id: 4,
        title: "Kitchen Collection Showcase",
        description:
            "Sophisticated kitchen solutions with meticulously curated color palettes for the modern connoisseur.",
        pdfUrl: "/pdf/Relwood-Brochure.pdf",
        thumbnailUrl: "/images/relwood-brochure.png",
        category: "Collection",
        fileSize: "15.3 MB",
        pages: 24,
    },
    {
        id: 5,
        title: "Commercial Applications Guide",
        description:
            "Professional workspace solutions featuring architectural elements with geometric precision and durability.",
        pdfUrl: "/pdf/Nirmala.pdf",
        thumbnailUrl: "/images/nirmala-brochure.png",
        category: "Commercial",
        fileSize: "11.8 MB",
        pages: 36,
    },
    {
        id: 6,
        title: "Sustainability Report",
        description:
            "Our commitment to environmental responsibility and sustainable luxury manufacturing practices.",
        pdfUrl: "/pdf/Relwood-Brochure.pdf",
        thumbnailUrl: "/images/relwood-brochure.png",
        category: "Sustainability",
        fileSize: "5.4 MB",
        pages: 20,
    },
];

export default function BrochuresPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = [
        "All",
        ...Array.from(new Set(brochureData.map((item) => item.category))),
    ];

    const filteredBrochures =
        selectedCategory === "All"
            ? brochureData
            : brochureData.filter((item) => item.category === selectedCategory);

    return (
        <div className='min-h-screen bg-cream text-warmBrown'>
            {/* Brochures Content */}
            <main className='pt-24 pb-20'>
                <div className='container-custom'>
                    {/* Brochures Header */}
                    <div className='text-center mb-20'>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-warmBrown'>
                            Exclusive Brochures
                        </h1>
                        <p className='text-xl text-warmBrown/80 max-w-3xl mx-auto font-normal leading-relaxed mb-12'>
                            Access our comprehensive collection of catalogs,
                            technical documentation, and care guides crafted for
                            design professionals and discerning clients.
                        </p>

                        {/* Category Filter */}
                        <div className='flex flex-wrap justify-center gap-3 mb-12'>
                            {categories.map((category) => (
                                <Button
                                    key={category}
                                    variant={
                                        selectedCategory === category
                                            ? "default"
                                            : "outline"
                                    }
                                    className={`font-normal px-6 py-2 rounded-full transition-all duration-300 ${
                                        selectedCategory === category
                                            ? "bg-gradient-to-r from-warmBrown to-softPink text-white hover:from-warmBrown/90 hover:to-softPink/90 shadow-lg"
                                            : "border-warmBrown text-warmBrown hover:bg-warmBrown hover:text-white hover:border-warmBrown/50"
                                    }`}
                                    onClick={() =>
                                        setSelectedCategory(category)
                                    }
                                >
                                    {category}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Brochures Grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {filteredBrochures.map((brochure) => (
                            <div key={brochure.id} className='group'>
                                <div className='relative'>
                                    <div className='absolute -inset-1 bg-gradient-to-r from-warmBrown/20 to-softPink/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                    <div className='relative'>
                                        <PDFViewer
                                            title={brochure.title}
                                            description={brochure.description}
                                            pdfUrl={brochure.pdfUrl}
                                            thumbnailUrl={brochure.thumbnailUrl}
                                        />
                                    </div>
                                </div>
                                <div className='mt-4 px-2'>
                                    <div className='flex items-center justify-between text-sm text-warmBrown/60 font-normal'>
                                        <span className='flex items-center'>
                                            <div className='w-2 h-2 bg-warmBrown rounded-full mr-2'></div>
                                            {brochure.pages} pages
                                        </span>
                                        <span className='text-warmBrown/70'>
                                            {brochure.fileSize}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
