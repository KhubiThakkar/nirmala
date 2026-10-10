"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
    { value: 20, suffix: "+", label: "Years in Business" },
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 50, suffix: "+", label: "Prestige Clients" },
    { value: 15, suffix: "+", label: "Premium Finishes" },
];

function useInView<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return { ref, inView };
}

function StatCell({
    value,
    suffix,
    label,
    delay,
}: {
    value: number;
    suffix: string;
    label: string;
    delay: number;
}) {
    const { ref, inView } = useInView<HTMLDivElement>();
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const duration = 1200;
        const start = performance.now();
        let frame: number;

        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(value * eased));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, value]);

    return (
        <div
            ref={ref}
            className={`reveal flex flex-col items-center justify-center gap-2 py-8 ${
                inView ? "is-visible" : ""
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className='stat-numeral'>
                {display}
                {suffix}
            </div>
            <div className='stat-label'>{label}</div>
        </div>
    );
}

export function StatementStats() {
    return (
        <section className='section-pad-statement bg-surface-elevated'>
            <div className='container-custom'>
                <div className='text-center max-w-[820px] mx-auto mb-16'>
                    <div className='flex items-center justify-center gap-4 mb-6'>
                        <span className='hidden sm:block h-px w-20 bg-[color:var(--border-header)]' />
                        <span className='eyebrow'>Our Philosophy</span>
                        <span className='hidden sm:block h-px w-20 bg-[color:var(--border-header)]' />
                    </div>
                    <p className='statement-text mb-6'>
                        We are pioneers in the luxury laminate and décor
                        industry, creating exceptional finishes that define
                        the most prestigious interior spaces around the
                        world.
                    </p>
                    <p className='text-sm text-ink-secondary max-w-[680px] mx-auto leading-relaxed'>
                        Our dedication to innovation and craftsmanship has
                        established Tsuco as the preferred choice for
                        discerning architects, designers, and connoisseurs
                        who demand nothing less than perfection.
                    </p>
                </div>

                <div className='card-surface grid grid-cols-2 lg:grid-cols-4'>
                    {stats.map((stat, i) => (
                        <div
                            key={stat.label}
                            className={[
                                "border-[color:var(--border)]",
                                i % 2 === 1 ? "border-l" : "",
                                i >= 2 ? "border-t" : "",
                                "lg:border-t-0",
                                i === 0 ? "lg:border-l-0" : "lg:border-l",
                            ].join(" ")}
                        >
                            <StatCell {...stat} delay={i * 60} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
