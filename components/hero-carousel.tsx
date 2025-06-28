"use client";

import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

const carouselData = [
    {
        id: 1,
        text: "DESIGN",
        bgImage: "/images/hero1.jpeg",
        textColor: "#FFFFFF",
    },
    {
        id: 2,
        text: "QUALITY",
        bgImage: "/images/hero2.jpeg",
        textColor: "#FFFFFF",
    },
    {
        id: 3,
        text: "STYLE",
        bgImage: "/images/hero3.jpeg",
        textColor: "#FFFFFF",
    },
    {
        id: 4,
        text: "LUXURY",
        bgImage: "/images/hero1.jpeg",
        textColor: "#FFFFFF",
    },
];

export function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide(
            (prev) => (prev - 1 + carouselData.length) % carouselData.length
        );
    };

    const goToSlide = (index: number) => {
        if (isAnimating || index === currentSlide) return;
        setIsAnimating(true);
        setCurrentSlide(index);
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
        <div className='relative w-full h-screen overflow-hidden'>
            {/* Carousel Images */}
            <div className='relative w-full h-full'>
                {carouselData.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            index === currentSlide
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-105"
                        }`}
                        style={{
                            backgroundImage: `url(${slide.bgImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        {/* Dark overlay for better text readability */}
                        <div className='absolute inset-0 bg-black/20'></div>

                        {/* Animated Text Overlay */}
                        <div className='absolute inset-0 flex items-center justify-center text-center'>
                            <h1
                                className={`text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold tracking-[0.1em] transition-all duration-800 ${
                                    index === currentSlide && !isAnimating
                                        ? "opacity-100 transform translate-y-0 scale-100"
                                        : "opacity-0 transform translate-y-8 scale-95"
                                } outlined-text text-center`}
                                style={{
                                    color: "transparent",
                                    WebkitTextStroke: `2px ${slide.textColor}`,
                                    filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))",
                                    textShadow: `0 0 30px ${slide.textColor}20, 0 0 60px ${slide.textColor}10`,
                                }}
                            >
                                {slide.text}
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

            {/* Slide Counter */}
            <div className='absolute top-8 right-8 text-white/80 font-normal text-sm tracking-wider z-10'>
                <span className='text-lg font-normal'>
                    {String(currentSlide + 1).padStart(2, "0")}
                </span>
                <span className='mx-2'>/</span>
                <span>{String(carouselData.length).padStart(2, "0")}</span>
            </div>
        </div>
    );
}
