"use client";

import { useEffect, useState } from "react";

// Sample client logos - in a real app, these would be actual logo URLs
const clientLogos = [
    {
        id: 1,
        name: "Luxury Hotels International",
        logo: "/placeholder.svg?height=60&width=120&text=LHI",
    },
    {
        id: 2,
        name: "Metropolitan Architects",
        logo: "/placeholder.svg?height=60&width=120&text=MA",
    },
    {
        id: 3,
        name: "Elite Residences",
        logo: "/placeholder.svg?height=60&width=120&text=ER",
    },
    {
        id: 4,
        name: "Corporate Spaces Ltd",
        logo: "/placeholder.svg?height=60&width=120&text=CSL",
    },
    {
        id: 5,
        name: "Design Studio Pro",
        logo: "/placeholder.svg?height=60&width=120&text=DSP",
    },
    {
        id: 6,
        name: "Premium Interiors",
        logo: "/placeholder.svg?height=60&width=120&text=PI",
    },
    {
        id: 7,
        name: "Boutique Hotels Group",
        logo: "/placeholder.svg?height=60&width=120&text=BHG",
    },
    {
        id: 8,
        name: "Modern Living Co",
        logo: "/placeholder.svg?height=60&width=120&text=MLC",
    },
    {
        id: 9,
        name: "Architectural Excellence",
        logo: "/placeholder.svg?height=60&width=120&text=AE",
    },
    {
        id: 10,
        name: "Luxury Developments",
        logo: "/placeholder.svg?height=60&width=120&text=LD",
    },
];

export function ClientBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Duplicate the logos array to create seamless infinite scroll
    const duplicatedLogos = [...clientLogos, ...clientLogos];

    return (
        <div className='w-full bg-gradient-to-r from-warmBrown/5 via-softPink/10 to-warmBrown/5 py-12 overflow-hidden'>
            <div className='container-custom mb-8'>
                <div className='text-center'>
                    <h3 className='text-2xl md:text-3xl font-didact font-normal text-warmBrown mb-4'>
                        Our Clients
                    </h3>
                    <p className='text-warmBrown/70 font-didact font-normal max-w-2xl mx-auto'>
                        Prestigious brands and visionary architects choose
                        Nirmala for their most important projects
                    </p>
                </div>
            </div>

            {/* Rotating Banner */}
            <div className='relative'>
                <div className='flex animate-scroll'>
                    {duplicatedLogos.map((client, index) => (
                        <div
                            key={`${client.id}-${index}`}
                            className='flex-shrink-0 mx-8 flex items-center justify-center'
                            style={{ minWidth: "160px" }}
                        >
                            <div className='bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 group hover:scale-105'>
                                <img
                                    src={client.logo || "/placeholder.svg"}
                                    alt={client.name}
                                    className='h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0'
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gradient overlays for smooth edges */}
                <div className='absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-cream to-transparent pointer-events-none z-10'></div>
                <div className='absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-cream to-transparent pointer-events-none z-10'></div>
            </div>
        </div>
    );
}
