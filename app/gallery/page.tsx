"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageModal } from "@/components/image-modal";
import { MasonryGallery } from "@/components/masonry-gallery";

// Sample gallery data - in a real app, this would come from an API or database
const galleryImages: {
    id: number;
    src: string;
    title: string;
    description: string;
    category: string;
    size: "tall" | "wide" | "square" | "medium";
}[] = [
    {
        id: 1,
        src: "/placeholder.svg?height=600&width=400",
        title: "Modern Kitchen Design",
        description:
            "Sleek contemporary kitchen featuring Nirmala's premium matt finish surfaces in warm earth tones.",
        category: "Kitchen",
        size: "tall",
    },
    {
        id: 2,
        src: "/placeholder.svg?height=400&width=600",
        title: "Luxury Living Room",
        description:
            "Sophisticated living space showcasing our elegant storage solutions with refined finishes.",
        category: "Living",
        size: "wide",
    },
    {
        id: 3,
        src: "/placeholder.svg?height=500&width=500",
        title: "Executive Office",
        description:
            "Professional workspace featuring architectural elements with geometric precision.",
        category: "Office",
        size: "square",
    },
    {
        id: 4,
        src: "/placeholder.svg?height=700&width=400",
        title: "Master Bedroom Suite",
        description:
            "Serene bedroom design with custom storage solutions in soft, muted tones.",
        category: "Bedroom",
        size: "tall",
    },
    {
        id: 5,
        src: "/placeholder.svg?height=400&width=500",
        title: "Dining Area",
        description:
            "Elegant dining space with premium surfaces that speak to exceptional taste.",
        category: "Dining",
        size: "medium",
    },
    {
        id: 6,
        src: "/placeholder.svg?height=600&width=600",
        title: "Bathroom Sanctuary",
        description:
            "Spa-like bathroom featuring durable matt finishes with superior resistance to wear.",
        category: "Bathroom",
        size: "square",
    },
    {
        id: 7,
        src: "/placeholder.svg?height=500&width=400",
        title: "Walk-in Closet",
        description:
            "Organized storage space with contemporary finishes and refined details.",
        category: "Storage",
        size: "medium",
    },
    {
        id: 8,
        src: "/placeholder.svg?height=400&width=700",
        title: "Reception Area",
        description:
            "Welcoming commercial space with sophisticated surfaces and timeless design.",
        category: "Commercial",
        size: "wide",
    },
    {
        id: 9,
        src: "/placeholder.svg?height=550&width=450",
        title: "Home Library",
        description:
            "Quiet reading space with custom built-ins featuring our signature matt technology.",
        category: "Study",
        size: "medium",
    },
    {
        id: 10,
        src: "/placeholder.svg?height=650&width=400",
        title: "Hotel Lobby",
        description:
            "Luxurious hospitality space showcasing premium laminates in prestigious environments.",
        category: "Hospitality",
        size: "tall",
    },
    {
        id: 11,
        src: "/placeholder.svg?height=400&width=600",
        title: "Conference Room",
        description:
            "Professional meeting space with architectural precision and exceptional quality.",
        category: "Commercial",
        size: "wide",
    },
    {
        id: 12,
        src: "/placeholder.svg?height=500&width=500",
        title: "Retail Showroom",
        description:
            "Contemporary retail environment featuring innovative surface solutions.",
        category: "Retail",
        size: "square",
    },
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<
        (typeof galleryImages)[0] | null
    >(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    const categories = [
        "All",
        ...Array.from(new Set(galleryImages.map((img) => img.category))),
    ];

    const filteredImages =
        selectedCategory === "All"
            ? galleryImages
            : galleryImages.filter((img) => img.category === selectedCategory);

    const handleImageClick = (image: (typeof galleryImages)[0]) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const handleNextImage = () => {
        if (!selectedImage) return;
        const currentIndex = filteredImages.findIndex(
            (img) => img.id === selectedImage.id
        );
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[nextIndex]);
    };

    const handlePrevImage = () => {
        if (!selectedImage) return;
        const currentIndex = filteredImages.findIndex(
            (img) => img.id === selectedImage.id
        );
        const prevIndex =
            (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[prevIndex]);
    };

    return (
        <div className='min-h-screen bg-cream text-warmBrown'>
            {/* Gallery Content */}
            <main className='pt-24 pb-20'>
                <div className='container-custom'>
                    {/* Gallery Header */}
                    <div className='text-center mb-20'>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-warmBrown'>
                            Project Gallery
                        </h1>
                        <p className='text-xl text-warmBrown/80 max-w-3xl mx-auto font-normal leading-relaxed mb-12'>
                            Explore our curated collection of premium
                            installations showcasing Nirmala surfaces in the
                            world's most prestigious spaces.
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

                    {/* Masonry Gallery */}
                    <MasonryGallery
                        images={filteredImages}
                        onImageClick={handleImageClick}
                    />
                </div>
            </main>

            {/* Image Modal */}
            {selectedImage && (
                <ImageModal
                    image={selectedImage}
                    onClose={handleCloseModal}
                    onNext={handleNextImage}
                    onPrev={handlePrevImage}
                    currentIndex={
                        filteredImages.findIndex(
                            (img) => img.id === selectedImage.id
                        ) + 1
                    }
                    totalImages={filteredImages.length}
                />
            )}
        </div>
    );
}
