"use client";

import { useState } from "react";
import Image from "next/image";

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

    return (
        <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5'>
            {images.map((image) => {
                const height = getImageHeight(image.size);

                return (
                    <button
                        key={image.id}
                        type='button'
                        className='card-surface group block w-full text-left break-inside-avoid mb-5'
                        onClick={() => onImageClick(image)}
                    >
                        <div
                            className='relative overflow-hidden'
                            style={{ height: `${height}px` }}
                        >
                            <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.title}
                                fill
                                className={`object-cover group-hover:scale-[1.04] transition-transform duration-500 ${
                                    loadedImages.has(image.id)
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                                onLoad={() => handleImageLoad(image.id)}
                                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw'
                            />

                            {!loadedImages.has(image.id) && (
                                <div className='absolute inset-0 bg-surface-elevated animate-pulse' />
                            )}

                            <div
                                className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(0,0,0,.75), transparent 55%)",
                                }}
                            />

                            <div className='absolute bottom-0 left-0 right-0 p-5 text-on-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                                <h3 className='font-serif-italic text-lg mb-1 line-clamp-2'>
                                    {image.title}
                                </h3>
                                <p className='text-xs text-on-dark-muted line-clamp-2'>
                                    {image.description}
                                </p>
                                <span className='chip border-[color:var(--border-on-dark)] text-on-dark-muted mt-3'>
                                    {image.category}
                                </span>
                            </div>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
