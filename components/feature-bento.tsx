import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function Tile({
    image,
    eyebrow,
    title,
    description,
    cta,
    className = "",
}: {
    image: string;
    eyebrow: string;
    title: string[];
    description: string;
    cta?: { label: string; href: string; style: "primary" | "link" };
    className?: string;
}) {
    return (
        <div
            className={`relative rounded-lg overflow-hidden min-h-[320px] ${className}`}
        >
            <Image
                src={image}
                alt=''
                fill
                sizes='(max-width: 1024px) 100vw, 50vw'
                className='object-cover'
            />
            <div
                className='absolute inset-0'
                style={{
                    background:
                        "linear-gradient(to top, rgba(0,0,0,.8), transparent 55%)",
                }}
            />
            <div className='relative h-full flex flex-col justify-end p-7 lg:p-9'>
                <div className='eyebrow mb-3'>— {eyebrow}</div>
                <h3 className='font-serif-italic text-on-dark text-3xl lg:text-4xl mb-3'>
                    {title.map((line, i) => (
                        <span key={i}>
                            {line}
                            {i < title.length - 1 && <br />}
                        </span>
                    ))}
                </h3>
                <p className='text-sm text-on-dark-muted leading-relaxed mb-5 max-w-[42ch]'>
                    {description}
                </p>
                {cta && (cta.style === "primary" ? (
                    <Link href={cta.href} className='btn btn-primary w-fit'>
                        {cta.label}
                        <ArrowUpRight className='h-4 w-4' />
                    </Link>
                ) : (
                    <Link href={cta.href} className='link-arrow link-arrow-on-dark w-fit'>
                        {cta.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export function FeatureBento() {
    return (
        <section className='section-pad bg-surface-dark'>
            <div className='container-custom'>
                <div className='flex items-end justify-between gap-4 mb-10'>
                    <div>
                        <div className='eyebrow mb-3'>More From Tsuco</div>
                        <h2 className='section-title text-on-dark'>
                            Beyond the Surface
                        </h2>
                    </div>
                    <span className='hidden sm:block nav-text text-on-dark-muted whitespace-nowrap'>
                        — 20+ YEARS OF CRAFTSMANSHIP
                    </span>
                </div>

                <div className='grid lg:grid-cols-[60%_40%] gap-4'>
                    <Tile
                        image='/images/nirmala-brochure.png'
                        eyebrow='Download'
                        title={["Explore Our", "Full Catalog"]}
                        description='Comprehensive showcase of our complete range with detailed specifications and premium finishes for discerning clients.'
                        cta={{ label: "Browse Brochures", href: "/brochures", style: "primary" }}
                        className='lg:min-h-[480px]'
                    />
                    <div className='grid grid-rows-2 gap-4'>
                        <Tile
                            image='/images/art-of-nirmala.png'
                            eyebrow='Our Story'
                            title={["The Art of", "Tsuco"]}
                            description='Our dedication to innovation and craftsmanship for discerning architects, designers and connoisseurs.'
                        />
                        <Tile
                            image='/images/hero-image3.jpeg'
                            eyebrow='Consultation'
                            title={["Let's Build", "Together"]}
                            description='Let us help you bring your vision to life with premium surfaces and expert consultation.'
                            cta={{ label: "Enquire Now", href: "/#contact", style: "primary" }}
                        />
                    </div>
                </div>

                <div className='h-px bg-[color:var(--border-on-dark)] mt-10 mb-6' />
                <span className='nav-text text-on-dark-muted'>
                    Pioneers in Luxury Laminates & Décor
                </span>
            </div>
        </section>
    );
}
