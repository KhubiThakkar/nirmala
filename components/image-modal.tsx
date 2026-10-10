"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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
                    <button
                        type='button'
                        aria-label='Close'
                        onClick={onClose}
                        className='absolute top-4 right-4 z-50 h-11 w-11 rounded-full bg-white/10 backdrop-blur-md border border-[color:var(--border-on-dark)] hover:bg-white/20 transition-colors flex items-center justify-center'
                    >
                        <X className='w-5 h-5 text-white' />
                    </button>

                    {totalImages > 1 && (
                        <>
                            <button
                                type='button'
                                aria-label='Previous image'
                                onClick={onPrev}
                                className='absolute left-4 top-1/2 -translate-y-1/2 z-50 h-11 w-11 rounded-full bg-white/10 backdrop-blur-md border border-[color:var(--border-on-dark)] hover:bg-white/20 transition-colors flex items-center justify-center'
                            >
                                <ChevronLeft className='w-5 h-5 text-white' />
                            </button>
                            <button
                                type='button'
                                aria-label='Next image'
                                onClick={onNext}
                                className='absolute right-4 top-1/2 -translate-y-1/2 z-50 h-11 w-11 rounded-full bg-white/10 backdrop-blur-md border border-[color:var(--border-on-dark)] hover:bg-white/20 transition-colors flex items-center justify-center'
                            >
                                <ChevronRight className='w-5 h-5 text-white' />
                            </button>
                        </>
                    )}

                    <div className='absolute top-4 left-4 z-50 px-4 py-2 bg-white/10 backdrop-blur-md rounded-pill border border-[color:var(--border-on-dark)]'>
                        <span className='text-white text-sm'>
                            {currentIndex} / {totalImages}
                        </span>
                    </div>

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

                    <div
                        className='absolute bottom-0 left-0 right-0 p-8'
                        style={{
                            background:
                                "linear-gradient(to top, rgba(0,0,0,.9), transparent 70%)",
                        }}
                    >
                        <div className='max-w-4xl mx-auto text-white'>
                            <span className='chip border-[color:var(--border-on-dark)] text-on-dark-muted mb-4 inline-flex'>
                                {image.category}
                            </span>
                            <h2 className='font-serif-italic text-2xl md:text-3xl mb-3'>
                                {image.title}
                            </h2>
                            <p className='text-white/80 leading-relaxed max-w-3xl'>
                                {image.description}
                            </p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
