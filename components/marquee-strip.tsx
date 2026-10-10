const items = [
    "DESIGN",
    "QUALITY",
    "STYLE",
    "LUXURY",
    "LAMINATES",
    "SUSTAINABLE WOOD",
    "SUPER MATT FINISH",
];

export function MarqueeStrip() {
    const loop = [...items, ...items];

    return (
        <div
            className='marquee-wrapper w-full bg-surface-dark overflow-hidden py-4'
            role='presentation'
        >
            <div className='marquee-track items-center' style={{ gap: "48px" }}>
                {loop.map((item, index) => (
                    <span
                        key={`${item}-${index}`}
                        className='nav-text text-on-dark-muted flex items-center gap-12 whitespace-nowrap'
                    >
                        {item}
                        <span className='text-teal' aria-hidden='true'>
                            ◆
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
}
