"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface GalleryImage {
    id: number;
    src: string;
    title: string;
    description: string;
    category: string;
    size: "tall" | "wide" | "square" | "medium";
}

interface MasonryGalleryProps {
    images: GalleryImage[];
    onImageClick: (image: GalleryImage) => void;
}

export function MasonryGallery({ images, onImageClick }: MasonryGalleryProps) {
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

    const handleImageLoad = (imageId: number) => {
        setLoadedImages((prev) => new Set([...prev, imageId]));
    };

    const getImageHeight = (size: string) => {
        switch (size) {
            case "tall":
                return 400;
            case "wide":
                return 250;
            case "square":
                return 300;
            case "medium":
                return 320;
            default:
                return 280;
        }
    };

    const getImageWidth = (size: string) => {
        switch (size) {
            case "tall":
                return 300;
            case "wide":
                return 400;
            case "square":
                return 300;
            case "medium":
                return 350;
            default:
                return 320;
        }
    };

    return (
        <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6'>
            {images.map((image) => {
                const height = getImageHeight(image.size);
                const width = getImageWidth(image.size);

                return (
                    <Card
                        key={image.id}
                        className='group cursor-pointer overflow-hidden bg-white/90 backdrop-blur-sm border border-softPink/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 break-inside-avoid mb-6 hover:border-softPink/40'
                        onClick={() => onImageClick(image)}
                    >
                        <div
                            className='relative overflow-hidden'
                            style={{ height: `${height}px` }}
                        >
                            <Image
                                src={image.src || "/images/hero-image.jpg"}
                                alt={image.title}
                                width={width}
                                height={height}
                                className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                                    loadedImages.has(image.id)
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                                onLoad={() => handleImageLoad(image.id)}
                                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw'
                            />

                            {/* Loading placeholder */}
                            {!loadedImages.has(image.id) && (
                                <div className='absolute inset-0 bg-gradient-to-br from-softPink/20 to-warmBrown/10 animate-pulse' />
                            )}

                            {/* Overlay */}
                            <div className='absolute inset-0 bg-gradient-to-t from-warmBrown/80 via-softPink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                            {/* Content overlay */}
                            <div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                                <h3 className='text-lg font-didact font-normal mb-2 line-clamp-2'>
                                    {image.title}
                                </h3>
                                <p className='text-sm text-white/90 font-didact font-normal line-clamp-2'>
                                    {image.description}
                                </p>
                                <div className='mt-3'>
                                    <span className='inline-block px-3 py-1 bg-softPink/30 backdrop-blur-sm rounded-full text-xs font-didact font-normal border border-softPink/20'>
                                        {image.category}
                                    </span>
                                </div>
                            </div>

                            {/* Pink accent corner */}
                            <div className='absolute top-4 right-4 w-3 h-3 bg-softPink rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg'></div>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
}
