"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryImage {
    id: number;
    src: string;
    title: string;
    description: string;
    category: string;
    size: string;
}

interface ImageModalProps {
    image: GalleryImage;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    currentIndex: number;
    totalImages: number;
}

export function ImageModal({
    image,
    onClose,
    onNext,
    onPrev,
    currentIndex,
    totalImages,
}: ImageModalProps) {
    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case "Escape":
                    onClose();
                    break;
                case "ArrowLeft":
                    onPrev();
                    break;
                case "ArrowRight":
                    onNext();
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [onClose, onNext, onPrev]);

    return (
        <Dialog open={true} onOpenChange={onClose}>
            <DialogContent className='max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none'>
                <div className='relative w-full h-full flex items-center justify-center'>
                    {/* Close button */}
                    <Button
                        variant='ghost'
                        size='lg'
                        className='absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-softPink/20 backdrop-blur-md border border-softPink/30 hover:bg-softPink/30 transition-all duration-300'
                        onClick={onClose}
                    >
                        <X className='w-6 h-6 text-white' />
                    </Button>

                    {/* Navigation buttons */}
                    {totalImages > 1 && (
                        <>
                            <Button
                                variant='ghost'
                                size='lg'
                                className='absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-softPink/20 backdrop-blur-md border border-softPink/30 hover:bg-softPink/30 transition-all duration-300'
                                onClick={onPrev}
                            >
                                <ChevronLeft className='w-6 h-6 text-white' />
                            </Button>

                            <Button
                                variant='ghost'
                                size='lg'
                                className='absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-softPink/20 backdrop-blur-md border border-softPink/30 hover:bg-softPink/30 transition-all duration-300'
                                onClick={onNext}
                            >
                                <ChevronRight className='w-6 h-6 text-white' />
                            </Button>
                        </>
                    )}

                    {/* Image counter */}
                    <div className='absolute top-4 left-4 z-50 px-4 py-2 bg-softPink/20 backdrop-blur-md rounded-full border border-softPink/30'>
                        <span className='text-white font-didact font-normal text-sm'>
                            {currentIndex} / {totalImages}
                        </span>
                    </div>

                    {/* Main image */}
                    <div className='relative w-full h-full max-w-5xl max-h-[70vh] mx-auto'>
                        <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.title}
                            fill
                            className='object-contain'
                            sizes='(max-width: 1280px) 100vw, 80vw'
                            priority
                        />
                    </div>

                    {/* Image information */}
                    <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-softPink/10 to-transparent p-8'>
                        <div className='max-w-4xl mx-auto text-white'>
                            <div className='flex items-center gap-3 mb-4'>
                                <span className='inline-block px-3 py-1 bg-softPink/30 backdrop-blur-sm rounded-full text-xs font-didact font-normal border border-softPink/20'>
                                    {image.category}
                                </span>
                                <div className='w-2 h-2 bg-softPink rounded-full'></div>
                            </div>
                            <h2 className='text-2xl md:text-3xl font-didact font-normal mb-4'>
                                {image.title}
                            </h2>
                            <p className='text-lg text-white/90 font-didact font-normal leading-relaxed max-w-3xl'>
                                {image.description}
                            </p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
