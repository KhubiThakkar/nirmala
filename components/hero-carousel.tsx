"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

const carouselData = [
    {
        id: 1,
        text: "DESIGN",
        bgImage: "/images/hero-image.jpeg",
        textColor: "#FFFFFF",
    },
    {
        id: 2,
        text: "QUALITY",
        bgImage: "/images/hero-image1.jpeg",
        textColor: "#FFFFFF",
    },
    {
        id: 3,
        text: "STYLE",
        bgImage: "/images/hero-image2.jpeg",
        textColor: "#FFFFFF",
    },
    {
        id: 4,
        text: "LUXURY",
        bgImage: "/images/hero-image3.jpeg",
        textColor: "#FFFFFF",
    },
];

export function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [animationKey, setAnimationKey] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
        setAnimationKey((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide(
            (prev) => (prev - 1 + carouselData.length) % carouselData.length
        );
        setAnimationKey((prev) => prev + 1);
    };

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setAnimationKey((prev) => prev + 1);
    };

    // Touch event handlers for swipe functionality
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 800);
        return () => clearTimeout(timer);
    }, [currentSlide]);

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            ref={carouselRef}
            className='relative w-full h-screen overflow-hidden touch-pan-y'
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {/* Carousel Images */}
            <div className='relative w-full h-full'>
                {carouselData.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            index === currentSlide
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-100 sm:scale-105"
                        }`}
                        style={{
                            backgroundImage: `url(${slide.bgImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        {/* Dark overlay for better text readability */}
                        <div className='absolute inset-0 bg-black/30'></div>

                        {/* Animated Text Overlay */}
                        <div className='absolute inset-0 flex items-center justify-center text-center'>
                            <h1
                                key={`${slide.id}-${currentSlide}-${animationKey}`}
                                className={`text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-[0.1em] transition-all duration-800 ${
                                    index === currentSlide && !isAnimating
                                        ? "opacity-100 transform translate-y-0 scale-100"
                                        : "opacity-0 transform translate-y-8 scale-95"
                                } outlined-text text-center hero-text-animated`}
                                style={{
                                    color: "transparent",
                                    WebkitTextStroke: `2px ${slide.textColor}`,
                                    filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))",
                                    textShadow: `0 0 30px ${slide.textColor}20, 0 0 60px ${slide.textColor}10`,
                                }}
                            >
                                {slide.text
                                    .split("")
                                    .map((letter, letterIndex) => (
                                        <span
                                            key={`${letterIndex}-${animationKey}`}
                                        >
                                            {letter === " " ? "\u00A0" : letter}
                                        </span>
                                    ))}
                            </h1>
                        </div>

                        {/* Subtle Pattern Overlay */}
                        <div className='absolute inset-0 opacity-10'>
                            <div
                                className='w-full h-full'
                                style={{
                                    backgroundImage: `radial-gradient(circle at 25% 25%, ${slide.textColor}20 0%, transparent 50%), 
                                   radial-gradient(circle at 75% 75%, ${slide.textColor}15 0%, transparent 50%)`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            {/* <Button
                variant='ghost'
                size='lg'
                className='absolute left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group z-10'
                onClick={prevSlide}
                disabled={isAnimating}
            >
                <ChevronLeft className='w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300' />
            </Button>

            <Button
                variant='ghost'
                size='lg'
                className='absolute right-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 group z-10'
                onClick={nextSlide}
                disabled={isAnimating}
            >
                <ChevronRight className='w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300' />
            </Button> */}

            {/* Elegant Dots Indicator */}
            <div className='absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4 z-10'>
                {carouselData.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? "bg-white scale-125 shadow-lg"
                                : "bg-white/40 hover:bg-white/60"
                        }`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>

            {/* Social Media Icons - Top Right */}
            <div className='absolute top-8 right-8 flex space-x-3 sm:space-x-4 z-10'>
                <Link
                    href='https://instagram.com'
                    className='text-white/80 hover:text-white transition-all duration-300 hover:scale-110 group'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:border-white/40'>
                        <svg
                            className='w-4 h-4 sm:w-5 sm:h-5'
                            fill='currentColor'
                            viewBox='0 0 24 24'
                            aria-hidden='true'
                        >
                            <path
                                fillRule='evenodd'
                                d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </div>
                </Link>
                <Link
                    href='https://linkedin.com'
                    className='text-white/80 hover:text-white transition-all duration-300 hover:scale-110 group'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:border-white/40'>
                        <svg
                            className='w-4 h-4 sm:w-5 sm:h-5'
                            fill='currentColor'
                            viewBox='0 0 24 24'
                            aria-hidden='true'
                        >
                            <path
                                fillRule='evenodd'
                                d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </div>
                </Link>
                <Link
                    href='https://facebook.com'
                    className='text-white/80 hover:text-white transition-all duration-300 hover:scale-110 group'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <div className='w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:border-white/40'>
                        <svg
                            className='w-4 h-4 sm:w-5 sm:h-5'
                            fill='currentColor'
                            viewBox='0 0 24 24'
                            aria-hidden='true'
                        >
                            <path
                                fillRule='evenodd'
                                d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </div>
                </Link>
            </div>

            {/* Slide Counter */}
            <div className='absolute top-20 sm:top-24 right-8 text-white/80 font-normal text-sm tracking-wider z-10'>
                <span className='text-lg font-normal'>
                    {String(currentSlide + 1).padStart(2, "0")}
                </span>
                <span className='mx-2'>/</span>
                <span>{String(carouselData.length).padStart(2, "0")}</span>
            </div>
        </div>
    );
}
