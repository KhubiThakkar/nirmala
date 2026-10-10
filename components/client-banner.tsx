const clientLogos = [
    { id: 1, name: "Adani", logo: "/images/adani.jpeg" },
    { id: 2, name: "Babylon", logo: "/images/babylon.jpeg" },
    { id: 3, name: "Kavisha", logo: "/images/kavisha.jpeg" },
    { id: 4, name: "Praveg", logo: "/images/praveg.jpeg" },
    { id: 5, name: "Shridhar", logo: "/images/shridhar.jpeg" },
    { id: 6, name: "Suryam", logo: "/images/suryam.jpeg" },
    { id: 7, name: "Taj", logo: "/images/taj.jpeg" },
];

// Repeat the sequence enough times that a single "half" of the animated
// track (see the -50% keyframe) is always wider than the viewport —
// otherwise the strip runs out of logos and shows a blank gap before
// looping on wide screens.
const sequence = Array.from({ length: 4 }, () => clientLogos).flat();

export function ClientBanner() {
    const duplicated = [...sequence, ...sequence];

    return (
        <section className='section-pad bg-surface-raised'>
            <div className='container-custom text-center mb-10'>
                <div className='eyebrow mb-3'>Trusted By</div>
                <h2 className='section-title text-ink'>Our Clients</h2>
                <p className='text-ink-secondary max-w-[520px] mx-auto mt-4'>
                    Prestigious brands and visionary architects choose Tsuco
                    for their most important projects.
                </p>
            </div>

            <div className='marquee-wrapper relative overflow-hidden'>
                <div
                    className='marquee-track items-center'
                    style={{ gap: "32px", animationDuration: "180s" }}
                >
                    {duplicated.map((client, index) => (
                        <div
                            key={`${client.id}-${index}`}
                            className='flex-shrink-0 w-[300px] flex items-center justify-center'
                        >
                            <div className='card-surface px-3 py-3 flex items-center justify-center w-full'>
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className='h-32 w-auto max-w-full object-contain'
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-surface-raised to-transparent pointer-events-none' />
                <div className='absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-surface-raised to-transparent pointer-events-none' />
            </div>
        </section>
    );
}
