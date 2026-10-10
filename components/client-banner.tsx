const clientLogos = [
    { id: 1, name: "Adani", logo: "/images/adani.jpeg" },
    { id: 2, name: "Babylon", logo: "/images/babylon.jpeg" },
    { id: 3, name: "Kavisha", logo: "/images/kavisha.jpeg" },
    { id: 4, name: "Praveg", logo: "/images/praveg.jpeg" },
    { id: 5, name: "Shridhar", logo: "/images/shridhar.jpeg" },
    { id: 6, name: "Suryam", logo: "/images/suryam.jpeg" },
    { id: 7, name: "Taj", logo: "/images/taj.jpeg" },
];

export function ClientBanner() {
    const duplicated = [...clientLogos, ...clientLogos];

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
                <div className='marquee-track items-center' style={{ gap: "32px" }}>
                    {duplicated.map((client, index) => (
                        <div
                            key={`${client.id}-${index}`}
                            className='flex-shrink-0 w-[160px] flex items-center justify-center'
                        >
                            <div className='card-surface px-6 py-5 flex items-center justify-center w-full'>
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className='h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300'
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
