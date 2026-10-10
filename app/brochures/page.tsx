"use client";

import { useState } from "react";
import { PDFViewer } from "@/components/pdf-viewer";
import { Brochure } from "@/components/assets/brochure";

const brochureData = [
    {
        id: 1,
        title: "Master Collection Catalog",
        description:
            "Comprehensive showcase of our complete range with detailed specifications and color variations for discerning professionals.",
        pdfUrl: "/pdf/Nirmala.pdf",
        thumbnailUrl: "/images/nirmala-brochure.png",
        category: "Laminates",
        fileSize: "12.5 MB",
        pages: 48,
    },
    {
        id: 2,
        title: "Premium Care Guide",
        description:
            "Expert maintenance protocols to preserve the exceptional quality and appearance of your Tsuco surfaces.",
        pdfUrl: "/pdf/Relwood-Brochure.pdf",
        thumbnailUrl: "/images/relwood-brochure.png",
        category: "Sustainable Wood",
        fileSize: "3.2 MB",
        pages: 16,
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
        <div className='min-h-screen bg-surface'>
            <main className='pt-28 lg:pt-40 pb-20'>
                <div className='container-custom'>
                    <div className='text-center mb-14'>
                        <div className='flex justify-center mb-6'>
                            <Brochure
                                className='w-auto h-12 md:h-16'
                                color='#1a1a1a'
                            />
                        </div>
                        <p className='text-ink-secondary max-w-2xl mx-auto mb-10'>
                            Access our comprehensive collection of catalogs,
                            technical documentation, and care guides crafted
                            for design professionals and discerning clients.
                        </p>

                        <div className='flex flex-wrap justify-center gap-3'>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={
                                        selectedCategory === category
                                            ? "chip bg-teal text-white border-teal"
                                            : "chip hover:border-teal transition-colors"
                                    }
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                        {filteredBrochures.map((brochure) => (
                            <div key={brochure.id}>
                                <PDFViewer
                                    title={brochure.title}
                                    description={brochure.description}
                                    pdfUrl={brochure.pdfUrl}
                                    thumbnailUrl={brochure.thumbnailUrl}
                                    category={brochure.category}
                                />
                                <div className='mt-3 px-1 flex items-center justify-between text-xs text-ink-muted'>
                                    <span className='flex items-center gap-2'>
                                        <span className='h-1.5 w-1.5 rounded-full bg-teal' />
                                        {brochure.pages} pages
                                    </span>
                                    <span>{brochure.fileSize}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
