"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigationItems = [
        { href: "#home", label: "HOME" },
        { href: "#collections", label: "COLLECTIONS" },
        { href: "#resources", label: "RESOURCES" },
        { href: "#about", label: "ABOUT" },
        { href: "#contact", label: "CONTACT" },
    ];

    return (
        <header className='fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-white/20 z-50 shadow-sm'>
            <div className='container-custom py-4 flex items-center justify-between'>
                {/* Logo */}
                <div className='flex items-end space-x-3'>
                    <div className='text-3xl font-didact font-normal tracking-[0.15em] text-warmBrown brand-text'>
                        NIRMALA
                    </div>
                    <div className='text-sm text-warmBrown/70 font-normal'>
                        by Elements
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className='hidden lg:flex items-center space-x-8'>
                    {navigationItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className='text-sm font-normal hover:text-primary transition-colors nav-text'
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <Button
                    variant='ghost'
                    className='lg:hidden p-2 hover:bg-softPink/20'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className='h-6 w-6' />
                    ) : (
                        <Menu className='h-6 w-6' />
                    )}
                </Button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='md:hidden bg-white/95 backdrop-blur-md border-t border-white/20'>
                    <nav className='container-custom py-6 flex flex-col space-y-4'>
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className='text-sm font-normal hover:text-primary transition-colors py-2 nav-text'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
