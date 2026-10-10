const items = [
    "DESIGN",
    "QUALITY",
    "STYLE",
    "LUXURY",
    "LAMINATES",
    "SUSTAINABLE WOOD",
    "SUPER MATT FINISH",
];

// Repeat the sequence enough times that a single "half" of the animated
// track (see the -50% keyframe) is always wider than the viewport —
// otherwise the strip runs out of content and shows a blank gap before
// looping on wide screens.
const sequence = Array.from({ length: 4 }, () => items).flat();

export function MarqueeStrip() {
    const loop = [...sequence, ...sequence];

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
