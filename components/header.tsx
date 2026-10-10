"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigationItems = [
    { href: "/", label: "HOME" },
    { href: "/brochures", label: "BROCHURES" },
    { href: "/#contact", label: "CONTACT" },
];

/*
 * Original utility bar (logo + Quick Inquiry + About + phone number) that
 * used to sit above the nav row — commented out since it duplicated the
 * Quick Inquiry CTA and the nav's own Contact/About links. The nav row
 * below (Home/About/Brochures/Contact + hamburger menu) is still live.
 * Swap this back in (and restore the isScrolled bits below) once there's
 * enough utility-bar content to justify it.
 *
 * "use client";
 *
 * import { useEffect, useState } from "react";
 * import { Menu, X } from "lucide-react";
 *
 * const navigationItems = [
 *     { href: "/", label: "HOME" },
 *     { href: "/#about", label: "ABOUT" },
 *     { href: "/brochures", label: "BROCHURES" },
 *     { href: "/#contact", label: "CONTACT" },
 * ];
 *
 * const utilityLinks = [{ href: "/#about", label: "About" }];
 *
 * export function Header() {
 *     const [isMenuOpen, setIsMenuOpen] = useState(false);
 *     const [isScrolled, setIsScrolled] = useState(false);
 *
 *     useEffect(() => {
 *         const onScroll = () => setIsScrolled(window.scrollY > 24);
 *         onScroll();
 *         window.addEventListener("scroll", onScroll, { passive: true });
 *         return () => window.removeEventListener("scroll", onScroll);
 *     }, []);
 *
 *     useEffect(() => {
 *         document.body.style.overflow = isMenuOpen ? "hidden" : "";
 *         return () => {
 *             document.body.style.overflow = "";
 *         };
 *     }, [isMenuOpen]);
 *
 *     return (
 *         <header className='fixed top-0 inset-x-0 z-50 bg-surface-raised border-b border-[color:var(--border-header)]'>
 *             {/* Tier 1 — utility bar, hidden once scrolled or on mobile *\/}
 *             <div
 *                 className={`hidden lg:block overflow-hidden transition-[max-height,opacity] duration-300 ${
 *                     isScrolled ? "max-h-0 opacity-0" : "max-h-14 opacity-100"
 *                 }`}
 *             >
 *                 <div className='container-custom h-14 grid grid-cols-3 items-center'>
 *                     <Link href='/' className='flex items-center h-full w-fit'>
 *                         <Image
 *                             src='/images/tsuco_logo_transparent.png'
 *                             alt='Tsuco — The Surface Company'
 *                             width={140}
 *                             height={58}
 *                             className='h-10 w-auto object-contain'
 *                             priority
 *                         />
 *                     </Link>
 *                     <div className='flex justify-center'>
 *                         <Link href='/#contact' className='pill-cta'>
 *                             QUICK INQUIRY
 *                         </Link>
 *                     </div>
 *                     <div className='flex items-center justify-end gap-4 text-[12px] text-ink-secondary'>
 *                         {utilityLinks.map((item) => (
 *                             <Link
 *                                 key={item.href}
 *                                 href={item.href}
 *                                 className='hover:text-ink transition-colors'
 *                             >
 *                                 {item.label}
 *                             </Link>
 *                         ))}
 *                         <span
 *                             aria-hidden='true'
 *                             className='h-4 w-px bg-[color:var(--border-header)]'
 *                         />
 *                         <a
 *                             href='tel:+919824042743'
 *                             className='hover:text-ink transition-colors'
 *                         >
 *                             9824042743
 *                         </a>
 *                     </div>
 *                 </div>
 *             </div>
 *
 *             {/* Tier 2 — primary nav row *\/}
 *             <div className='container-custom h-16 flex items-center justify-between gap-4'>
 *                 <Link href='/' className='lg:hidden flex items-center'>
 *                     <Image
 *                         src='/images/tsuco_logo_transparent.png'
 *                         alt='Tsuco — The Surface Company'
 *                         width={120}
 *                         height={50}
 *                         className='h-8 w-auto object-contain'
 *                         priority
 *                     />
 *                 </Link>
 *
 *                 <nav className='hidden lg:flex items-center gap-8 overflow-x-auto scrollbar-hide'>
 *                     {navigationItems.map((item) => (
 *                         <Link
 *                             key={item.href}
 *                             href={item.href}
 *                             className='nav-text text-ink hover:text-teal transition-colors'
 *                         >
 *                             {item.label}
 *                         </Link>
 *                     ))}
 *                 </nav>
 *
 *                 <Link
 *                     href='/#contact'
 *                     className='pill-cta hidden sm:inline-flex lg:hidden'
 *                 >
 *                     QUICK INQUIRY
 *                 </Link>
 *
 *                 <button
 *                     type='button'
 *                     aria-label={isMenuOpen ? "Close menu" : "Open menu"}
 *                     aria-expanded={isMenuOpen}
 *                     onClick={() => setIsMenuOpen((v) => !v)}
 *                     className='flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-header)] text-ink hover:bg-surface-elevated transition-colors ml-auto lg:ml-0'
 *                 >
 *                     {isMenuOpen ? (
 *                         <X className='h-5 w-5' />
 *                     ) : (
 *                         <Menu className='h-5 w-5' />
 *                     )}
 *                 </button>
 *             </div>
 *
 *             {/* Full-height overlay menu *\/}
 *             <div
 *                 className={`fixed inset-0 top-0 bg-surface-raised transition-opacity duration-300 ${
 *                     isMenuOpen
 *                         ? "opacity-100 pointer-events-auto"
 *                         : "opacity-0 pointer-events-none"
 *                 }`}
 *             >
 *                 <div className='container-custom h-16 flex items-center justify-end'>
 *                     <button
 *                         type='button'
 *                         aria-label='Close menu'
 *                         onClick={() => setIsMenuOpen(false)}
 *                         className='flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-header)] text-ink hover:bg-surface-elevated transition-colors'
 *                     >
 *                         <X className='h-5 w-5' />
 *                     </button>
 *                 </div>
 *                 <nav className='container-custom flex flex-col gap-6 pt-8 pb-16'>
 *                     {navigationItems.map((item, index) => (
 *                         <Link
 *                             key={item.href}
 *                             href={item.href}
 *                             onClick={() => setIsMenuOpen(false)}
 *                             className='font-serif-italic text-ink hover:text-teal transition-colors'
 *                             style={{ fontSize: "clamp(28px, 6vw, 44px)" }}
 *                         >
 *                             <span className='text-ink-muted text-sm not-italic font-sans mr-4 align-middle'>
 *                                 0{index + 1}
 *                             </span>
 *                             {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
 *                         </Link>
 *                     ))}
 *                     <Link
 *                         href='/#contact'
 *                         onClick={() => setIsMenuOpen(false)}
 *                         className='pill-cta w-fit mt-4'
 *                     >
 *                         QUICK INQUIRY
 *                     </Link>
 *                 </nav>
 *             </div>
 *         </header>
 *     );
 * }
 */

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <header className='fixed top-0 inset-x-0 z-50 bg-surface-raised border-b border-[color:var(--border-header)]'>
            {/* Logo bar — on mobile/tablet this is the only row (logo + hamburger inline) */}
            <div className='container-custom h-16 flex items-center justify-between lg:justify-center gap-4 lg:border-b lg:border-[color:var(--border-header)]'>
                <Link href='/' className='flex items-center'>
                    <Image
                        src='/images/tsuco_logo_transparent.png'
                        alt='Tsuco — The Surface Company'
                        width={140}
                        height={58}
                        className='h-9 w-auto object-contain'
                        priority
                    />
                </Link>

                <button
                    type='button'
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((v) => !v)}
                    className='lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-header)] text-ink hover:bg-surface-elevated transition-colors'
                >
                    {isMenuOpen ? (
                        <X className='h-5 w-5' />
                    ) : (
                        <Menu className='h-5 w-5' />
                    )}
                </button>
            </div>

            {/* Nav row — desktop only */}
            <div className='hidden lg:flex container-custom h-16 items-center justify-between gap-4'>
                <nav className='flex items-center gap-8 overflow-x-auto scrollbar-hide'>
                    {navigationItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className='nav-text text-ink hover:text-teal transition-colors'
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <button
                    type='button'
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((v) => !v)}
                    className='flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-header)] text-ink hover:bg-surface-elevated transition-colors'
                >
                    {isMenuOpen ? (
                        <X className='h-5 w-5' />
                    ) : (
                        <Menu className='h-5 w-5' />
                    )}
                </button>
            </div>

            {/* Full-height overlay menu */}
            <div
                className={`fixed inset-0 top-0 bg-surface-raised transition-opacity duration-300 ${
                    isMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <div className='container-custom h-16 flex items-center justify-end'>
                    <button
                        type='button'
                        aria-label='Close menu'
                        onClick={() => setIsMenuOpen(false)}
                        className='flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-header)] text-ink hover:bg-surface-elevated transition-colors'
                    >
                        <X className='h-5 w-5' />
                    </button>
                </div>
                <nav className='container-custom flex flex-col gap-6 pt-8 pb-16'>
                    {navigationItems.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className='font-serif-italic text-ink hover:text-teal transition-colors'
                            style={{ fontSize: "clamp(28px, 6vw, 44px)" }}
                        >
                            <span className='text-ink-muted text-sm not-italic font-sans mr-4 align-middle'>
                                0{index + 1}
                            </span>
                            {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
