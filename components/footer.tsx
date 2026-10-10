import Image from "next/image";
import Link from "next/link";

const navigateLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/brochures", label: "Brochures" },
    { href: "/#contact", label: "Contact" },
];

const socials = [
    {
        href: "https://instagram.com",
        label: "Instagram",
        path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
    },
    {
        href: "https://facebook.com",
        label: "Facebook",
        path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    },
    {
        href: "https://linkedin.com",
        label: "LinkedIn",
        path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
];

export function Footer() {
    return (
        <footer className='bg-surface-footer text-on-dark pt-16 lg:pt-20 pb-8'>
            <div className='container-custom'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12'>
                    <div className='sm:col-span-2 lg:col-span-1'>
                        <Image
                            src='/images/tsuco_logo_transparent.png'
                            alt='Tsuco — The Surface Company'
                            width={140}
                            height={58}
                            className='h-10 w-auto object-contain mb-5 brightness-0 invert'
                        />
                        <p className='text-sm text-on-dark-muted leading-relaxed mb-6 max-w-[32ch]'>
                            Defining luxury through exceptional surfaces and
                            uncompromising quality for the world&rsquo;s most
                            prestigious spaces.
                        </p>
                        <div className='text-[11px] text-on-dark-muted mb-4 uppercase tracking-wide'>
                            by Elements
                        </div>
                        <div className='flex gap-3'>
                            {socials.map((s) => (
                                <Link
                                    key={s.label}
                                    href={s.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label={s.label}
                                    className='h-9 w-9 rounded-full border border-[color:var(--border-on-dark)] flex items-center justify-center text-on-dark-muted hover:text-on-dark hover:border-teal transition-colors'
                                >
                                    <svg
                                        className='w-4 h-4'
                                        fill='currentColor'
                                        viewBox='0 0 24 24'
                                        aria-hidden='true'
                                    >
                                        <path d={s.path} />
                                    </svg>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className='text-[11px] uppercase tracking-[0.2em] text-on-dark-muted mb-5'>
                            Navigate
                        </h4>
                        <ul className='space-y-3'>
                            {navigateLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className='text-[13px] text-on-dark-muted hover:text-on-dark transition-colors'
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className='text-[11px] uppercase tracking-[0.2em] text-on-dark-muted mb-5'>
                            Get in Touch
                        </h4>
                        <ul className='space-y-3 text-[13px] text-on-dark-muted'>
                            <li>info@thesurfacecompany.in</li>
                            <li>9824042743 / 9427037410</li>
                            <li>Mon–Sat, 10am–8pm</li>
                        </ul>
                        <Link
                            href='/#contact'
                            className='link-arrow link-arrow-on-dark mt-4 inline-flex'
                        >
                            Contact Us
                        </Link>
                    </div>

                    <div>
                        <h4 className='text-[11px] uppercase tracking-[0.2em] text-on-dark-muted mb-5'>
                            Our Location
                        </h4>
                        <p className='text-[13px] text-on-dark-muted leading-relaxed mb-4'>
                            Shree Shakti Saw Mill, NR Gita Mandir, 1/3 The
                            Timber Merchant Co Op Bldg Society, Sahkari Lathi
                            Bazar, Jagannath Ji Road, Ahmedabad, Gujarat,
                            380022
                        </p>
                        <div className='rounded-md overflow-hidden w-full max-w-[270px] aspect-[270/125]'>
                            <iframe
                                title='Tsuco showroom location'
                                src='https://www.google.com/maps?q=Gita+Mandir,+Ahmedabad,+Gujarat,+380022&output=embed'
                                className='w-full h-full border-0'
                                loading='lazy'
                                referrerPolicy='no-referrer-when-downgrade'
                            />
                        </div>
                    </div>
                </div>

                <div className='h-px bg-[color:var(--border-on-dark)] mb-6' />
                <div className='flex flex-wrap items-center justify-center sm:justify-between gap-3 text-[11px] uppercase tracking-wide text-on-dark-muted'>
                    <div className='flex flex-wrap gap-2 justify-center'>
                        <span>&copy; {new Date().getFullYear()} Tsuco by Elements</span>
                        <span aria-hidden='true'>·</span>
                        <span>All rights reserved</span>
                    </div>
                    <span>Crafted with excellence</span>
                </div>
            </div>
        </footer>
    );
}
