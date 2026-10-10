"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const slides = [
    {
        id: "design",
        pillar: "DESIGN",
        bgImage: "/images/hero-image.jpeg",
        headline: ["Design That", "Defines Spaces"],
        body: "We are pioneers in the luxury laminate and décor industry, creating exceptional finishes that define the most prestigious interior spaces around the world.",
        specs: [
            { label: "Showroom", value: "Ahmedabad, Gujarat" },
            { label: "Established", value: "20+ Years" },
        ],
    },
    {
        id: "quality",
        pillar: "QUALITY",
        bgImage: "/images/hero-image1.jpeg",
        headline: ["Exceptional", "Durability"],
        body: "Engineered to withstand daily wear while preserving the sophisticated aesthetic of luxury spaces.",
        specs: [
            { label: "Finish", value: "Super Matt" },
            { label: "Resistance", value: "Scratch & Fingerprint" },
        ],
    },
    {
        id: "style",
        pillar: "STYLE",
        bgImage: "/images/hero-image2.jpeg",
        headline: ["Effortless", "Elegance"],
        body: "Seamless integration with any design aesthetic, from contemporary minimalism to classic sophistication.",
        specs: [
            { label: "Palette", value: "Warm & Neutral" },
            { label: "Application", value: "Residential & Commercial" },
        ],
    },
    {
        id: "luxury",
        pillar: "LUXURY",
        bgImage: "/images/hero-image3.jpeg",
        headline: ["Super Matt", "Finish"],
        body: "Ultra-smooth, fingerprint-resistant surfaces that maintain their pristine appearance for years.",
        specs: [
            { label: "Showroom", value: "Ahmedabad, Gujarat" },
            { label: "Established", value: "20+ Years" },
        ],
    },
];

// swatchTones was used by the Sample Finishes block, commented out below.
// const swatchTones = [
//     "var(--text-primary)",
//     "var(--surface-sand)",
//     "var(--accent)",
//     "var(--border-header)",
// ];

const AUTOPLAY_MS = 6000;

export function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStart = useRef<number | null>(null);
    const total = slides.length;
    const slide = slides[current];

    const goTo = useCallback(
        (index: number) => setCurrent((index + total) % total),
        [total]
    );
    const next = useCallback(() => goTo(current + 1), [current, goTo]);
    const prev = useCallback(() => goTo(current - 1), [current, goTo]);

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(next, AUTOPLAY_MS);
        return () => clearInterval(id);
    }, [next, isPaused]);

    const onTouchStart = (e: React.TouchEvent) => {
        touchStart.current = e.targetTouches[0].clientX;
    };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (touchStart.current === null) return;
        const distance = touchStart.current - e.changedTouches[0].clientX;
        if (distance > 50) next();
        else if (distance < -50) prev();
        touchStart.current = null;
    };

    return (
        <section
            id='home'
            className='pt-24 lg:pt-28 pb-10 lg:pb-16'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className='container-shell'>
                <div className='rounded-xl border border-[color:var(--border-header)] bg-surface p-3 lg:p-4'>
                    <div className='grid lg:grid-cols-[52%_48%] gap-3 lg:gap-4'>
                        {/* Image column */}
                        <div
                            className='relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-[640px] rounded-lg overflow-hidden'
                            onTouchStart={onTouchStart}
                            onTouchEnd={onTouchEnd}
                        >
                            {slides.map((s, index) => (
                                <div
                                    key={s.id}
                                    className={`absolute inset-0 transition-opacity duration-700 [transition-timing-function:cubic-bezier(0.22,0.61,0.36,1)] ${
                                        index === current
                                            ? "opacity-100"
                                            : "opacity-0"
                                    }`}
                                    aria-hidden={index !== current}
                                >
                                    <Image
                                        src={s.bgImage}
                                        alt={`${s.pillar} — Tsuco surfaces`}
                                        fill
                                        priority={index === 0}
                                        sizes='(max-width: 1024px) 100vw, 52vw'
                                        className='object-cover'
                                    />
                                    <div
                                        className='absolute inset-0'
                                        style={{
                                            background:
                                                "linear-gradient(to top, rgba(0,0,0,.75), transparent 60%)",
                                        }}
                                    />
                                </div>
                            ))}

                            {/* Counter pill */}
                            <div className='absolute top-4 right-4 rounded-pill bg-black/50 backdrop-blur-sm px-3 py-1 text-[11px] tracking-wider text-on-dark'>
                                {String(current + 1).padStart(2, "0")} /{" "}
                                {String(total).padStart(2, "0")}
                            </div>

                            {/* Collection label */}
                            <div className='absolute bottom-16 left-6 right-6'>
                                <div className='nav-text text-on-dark-muted mb-2'>
                                    PILLAR
                                </div>
                                <div
                                    className='font-serif-italic text-on-dark'
                                    style={{ fontSize: "clamp(28px, 4vw, 40px)" }}
                                >
                                    {slide.pillar}
                                </div>
                            </div>

                            {/* Prev/Next */}
                            <div className='absolute bottom-6 right-6 flex gap-2'>
                                <button
                                    type='button'
                                    aria-label='Previous slide'
                                    onClick={prev}
                                    className='h-10 w-10 rounded-md bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center text-on-dark transition-colors'
                                >
                                    <ChevronLeft className='h-5 w-5' />
                                </button>
                                <button
                                    type='button'
                                    aria-label='Next slide'
                                    onClick={next}
                                    className='h-10 w-10 rounded-md bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center text-on-dark transition-colors'
                                >
                                    <ChevronRight className='h-5 w-5' />
                                </button>
                            </div>

                            {/* Progress segments */}
                            <div className='absolute bottom-6 left-6 right-28 flex gap-2'>
                                {slides.map((s, index) => (
                                    <button
                                        key={s.id}
                                        aria-label={`Go to ${s.pillar} slide`}
                                        onClick={() => goTo(index)}
                                        className='h-1 flex-1 rounded-full bg-white/25 overflow-hidden'
                                    >
                                        <span
                                            className='block h-full bg-white transition-all duration-500'
                                            style={{
                                                width:
                                                    index === current
                                                        ? "100%"
                                                        : index < current
                                                        ? "100%"
                                                        : "0%",
                                            }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Info panel */}
                        <div className='flex flex-col justify-center px-2 py-6 lg:px-8 lg:py-8'>
                            <div className='flex items-center gap-3 mb-4'>
                                <span className='h-px w-6 bg-teal' aria-hidden='true' />
                                <span className='eyebrow'>Tsuco — The Surface Company</span>
                            </div>

                            <h1 className='hero-headline text-ink mb-5'>
                                {slide.headline[0]}
                                <br />
                                {slide.headline[1]}
                            </h1>

                            <p className='text-ink-secondary text-base leading-relaxed mb-6 line-clamp-3 max-w-[48ch]'>
                                {slide.body}
                            </p>

                            {/*
                             * Showroom / Established / Sample Finishes block — commented out
                             * for now, it doesn't line up with the current slide imagery.
                             * Revisit once we have content that matches. Uncomment to restore:
                             *
                             * <div className='h-px bg-[color:var(--border-header)] mb-6' />
                             *
                             * <div className='space-y-3 mb-6'>
                             *     {slide.specs.map((row) => (
                             *         <div
                             *             key={row.label}
                             *             className='flex items-center justify-between text-sm'
                             *         >
                             *             <span className='nav-text text-ink-muted'>
                             *                 {row.label}
                             *             </span>
                             *             <span className='font-semibold text-ink'>
                             *                 {row.value}
                             *             </span>
                             *         </div>
                             *     ))}
                             * </div>
                             *
                             * <div className='flex items-center justify-between mb-3'>
                             *     <span className='nav-text text-ink-muted'>
                             *         Sample Finishes
                             *     </span>
                             *     <Link href='/brochures' className='link-arrow'>
                             *         View All
                             *     </Link>
                             * </div>
                             * <div className='flex gap-2.5 mb-8'>
                             *     {swatchTones.map((tone, i) => (
                             *         <span
                             *             key={i}
                             *             className='h-10 w-10 rounded-md border border-[color:var(--border-header)]'
                             *             style={{ background: tone }}
                             *         />
                             *     ))}
                             * </div>
                             */}

                            <div className='flex flex-col gap-3'>
                                <Link
                                    href='/#contact'
                                    className='btn btn-primary w-full'
                                >
                                    Enquire Now
                                    <ArrowUpRight className='h-4 w-4' />
                                </Link>
                                <Link
                                    href='/brochures'
                                    className='btn btn-secondary w-full'
                                >
                                    View Brochures
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile/tablet thumbnail strip */}
                <div className='lg:hidden flex gap-3 overflow-x-auto scrollbar-hide mt-4 pb-1'
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {slides.map((s, index) => (
                        <button
                            key={s.id}
                            onClick={() => goTo(index)}
                            style={{ scrollSnapAlign: "start" }}
                            className={`relative flex-shrink-0 w-[62px] h-[90px] rounded-md overflow-hidden border-2 transition-colors ${
                                index === current
                                    ? "border-teal"
                                    : "border-transparent"
                            }`}
                        >
                            <Image
                                src={s.bgImage}
                                alt=''
                                fill
                                sizes='62px'
                                className='object-cover'
                            />
                            <div
                                className='absolute inset-0'
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(0,0,0,.6), transparent 55%)",
                                }}
                            />
                            <span className='absolute bottom-1 left-1 right-1 text-[8px] tracking-wider text-on-dark uppercase'>
                                {s.pillar}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
