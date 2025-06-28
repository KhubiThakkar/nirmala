"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Download,
    Eye,
    Award,
    Shield,
    Sparkles,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroCarousel } from "@/components/hero-carousel";
import { PDFViewer } from "@/components/pdf-viewer";
import ContactForm from "@/components/contact-form";

export default function HomePage() {
    return (
        <div className='min-h-screen bg-cream text-warmBrown'>
            {/* Hero Carousel Section */}
            <section
                id='home'
                className='pt-20 min-h-screen relative overflow-hidden'
            >
                <HeroCarousel />
            </section>

            {/* Featured Collections */}
            <section
                id='collections'
                className='section-padding gradient-luxury'
            >
                <div className='container-custom'>
                    <div className='text-center mb-20'>
                        <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-warmBrown'>
                            Curated Collections
                        </h2>
                        <p className='text-xl text-warmBrown/80 max-w-3xl mx-auto font-normal leading-relaxed'>
                            Each collection tells a story of refined taste and
                            exceptional craftsmanship, designed to elevate the
                            most prestigious spaces.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                        {/* Collection 1 */}
                        <Card className='elegant-card group cursor-pointer overflow-hidden h-full'>
                            <CardContent className='p-0 flex flex-col h-full'>
                                <div className='aspect-[4/3] bg-gradient-to-br from-softPink/20 to-warmBrown/10 mb-8 overflow-hidden relative'>
                                    <Image
                                        src='/placeholder.svg?height=400&width=600'
                                        alt='Elegance That Endures Collection'
                                        width={600}
                                        height={400}
                                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-warmBrown/20 to-transparent'></div>
                                </div>
                                <div className='p-8 flex flex-col flex-grow'>
                                    <h3 className='text-2xl font-bold mb-4 text-warmBrown'>
                                        ELEGANCE THAT ENDURES
                                    </h3>
                                    <p className='text-warmBrown/70 mb-6 flex-grow text-lg font-normal leading-relaxed'>
                                        Sophisticated kitchen solutions with
                                        meticulously curated color palettes for
                                        the modern connoisseur
                                    </p>
                                    <div className='flex space-x-3 mb-6'>
                                        <div className='w-10 h-10 rounded-full bg-slate-400 shadow-md border-2 border-white'></div>
                                        <div className='w-10 h-10 rounded-full bg-gray-400 shadow-md border-2 border-white'></div>
                                        <div className='w-10 h-10 rounded-full bg-green-400 shadow-md border-2 border-white'></div>
                                        <div className='w-10 h-10 rounded-full bg-amber-200 shadow-md border-2 border-white'></div>
                                    </div>
                                    <Button
                                        variant='outline'
                                        className='luxury-button-outline w-full mt-auto bg-transparent'
                                    >
                                        Explore Collection
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Collection 2 */}
                        <Card className='elegant-card group cursor-pointer overflow-hidden h-full'>
                            <CardContent className='p-0 flex flex-col h-full'>
                                <div className='aspect-[4/3] bg-gradient-to-br from-warmBrown/10 to-softPink/20 mb-8 overflow-hidden relative'>
                                    <Image
                                        src='/placeholder.svg?height=400&width=600'
                                        alt='Luxury At Your Touch Collection'
                                        width={600}
                                        height={400}
                                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-warmBrown/20 to-transparent'></div>
                                </div>
                                <div className='p-8 flex flex-col flex-grow'>
                                    <h3 className='text-2xl font-bold mb-4 text-warmBrown'>
                                        LUXURY AT YOUR TOUCH
                                    </h3>
                                    <p className='text-warmBrown/70 mb-6 flex-grow text-lg font-normal leading-relaxed'>
                                        Contemporary storage solutions with
                                        refined finishes that speak to
                                        exceptional taste
                                    </p>
                                    <div className='flex space-x-3 mb-6'>
                                        <div className='w-10 h-10 rounded-full bg-black shadow-md border-2 border-white'></div>
                                        <div className='w-10 h-10 rounded-full bg-gray-500 shadow-md border-2 border-white'></div>
                                        <div className='w-10 h-10 rounded-full bg-green-300 shadow-md border-2 border-white'></div>
                                    </div>
                                    <Button
                                        variant='outline'
                                        className='luxury-button-outline w-full mt-auto bg-transparent'
                                    >
                                        Explore Collection
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Collection 3 */}
                        <Card className='elegant-card group cursor-pointer overflow-hidden h-full'>
                            <CardContent className='p-0 flex flex-col h-full'>
                                <div className='aspect-[4/3] bg-gradient-to-br from-softPink/30 to-warmBrown/20 mb-8 overflow-hidden relative'>
                                    <Image
                                        src='/placeholder.svg?height=400&width=600'
                                        alt='Grace In Every Detail Collection'
                                        width={600}
                                        height={400}
                                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                                    />
                                    <div className='absolute inset-0 bg-gradient-to-t from-warmBrown/20 to-transparent'></div>
                                </div>
                                <div className='p-8 flex flex-col flex-grow'>
                                    <h3 className='text-2xl font-bold mb-4 text-warmBrown'>
                                        GRACE IN EVERY DETAIL
                                    </h3>
                                    <p className='text-warmBrown/70 mb-6 flex-grow text-lg font-normal leading-relaxed'>
                                        Architectural elements with geometric
                                        precision, crafted for spaces that
                                        demand perfection
                                    </p>
                                    <div className='flex space-x-3 mb-6'>
                                        <div className='w-10 h-10 rounded-full bg-white shadow-md border-2 border-gray-300'></div>
                                        <div className='w-10 h-10 rounded-full bg-amber-100 shadow-md border-2 border-white'></div>
                                        <div className='w-10 h-10 rounded-full bg-slate-600 shadow-md border-2 border-white'></div>
                                    </div>
                                    <Button
                                        variant='outline'
                                        className='luxury-button-outline w-full mt-auto bg-transparent'
                                    >
                                        Explore Collection
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Why Choose Nirmala Section */}
            <section className='section-padding bg-white'>
                <div className='container-custom'>
                    <div className='text-center mb-20'>
                        <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-warmBrown'>
                            Why Choose Nirmala
                        </h2>
                        <p className='text-xl text-warmBrown/80 max-w-3xl mx-auto font-normal leading-relaxed'>
                            Experience the perfect blend of luxury and
                            functionality with our premium matt-finished
                            surfaces.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
                        <div className='text-center'>
                            <div className='w-20 h-20 bg-gradient-to-br from-softPink to-warmBrown rounded-full flex items-center justify-center mx-auto mb-6'>
                                <Shield className='w-10 h-10 text-white' />
                            </div>
                            <h3 className='text-2xl font-bold mb-6 text-warmBrown'>
                                SUPER MATT FINISH
                            </h3>
                            <p className='text-warmBrown/70 text-lg font-normal leading-relaxed'>
                                Ultra-smooth, fingerprint-resistant surfaces
                                that maintain their pristine appearance for
                                years.
                            </p>
                        </div>

                        <div className='text-center'>
                            <div className='w-20 h-20 bg-gradient-to-br from-warmBrown to-softPink rounded-full flex items-center justify-center mx-auto mb-6'>
                                <Award className='w-10 h-10 text-white' />
                            </div>
                            <h3 className='text-2xl font-bold mb-6 text-warmBrown'>
                                EXCEPTIONAL DURABILITY
                            </h3>
                            <p className='text-warmBrown/70 text-lg font-normal leading-relaxed'>
                                Engineered to withstand daily wear while
                                preserving the sophisticated aesthetic of luxury
                                spaces.
                            </p>
                        </div>

                        <div className='text-center'>
                            <div className='w-20 h-20 bg-gradient-to-br from-softPink to-warmBrown rounded-full flex items-center justify-center mx-auto mb-6'>
                                <Sparkles className='w-10 h-10 text-white' />
                            </div>
                            <h3 className='text-2xl font-bold mb-6 text-warmBrown'>
                                EFFORTLESS ELEGANCE
                            </h3>
                            <p className='text-warmBrown/70 text-lg font-normal leading-relaxed'>
                                Seamless integration with any design aesthetic,
                                from contemporary minimalism to classic
                                sophistication.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section id='resources' className='section-padding gradient-luxury'>
                <div className='container-custom'>
                    <div className='text-center mb-20'>
                        <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-warmBrown'>
                            Premium Resources
                        </h2>
                        <p className='text-xl text-warmBrown/80 max-w-3xl mx-auto font-normal leading-relaxed'>
                            Access comprehensive documentation and support
                            materials to ensure the perfect implementation of
                            your vision.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
                        <PDFViewer
                            title='Nirmala Brochure'
                            pdfUrl='/pdf/Nirmala.pdf'
                            thumbnailUrl='/images/nirmala-brochure.png'
                            description='Complete product catalog featuring our premium matt-finished surfaces and luxury kitchen solutions with detailed specifications and color variations.'
                        />

                        <PDFViewer
                            title='Relwood Brochure'
                            pdfUrl='/pdf/Relwood-Brochure.pdf'
                            thumbnailUrl='/images/relwood-brochure.png'
                            description='Comprehensive showcase of our complete range with detailed specifications and premium wood finishes for discerning clients.'
                        />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id='about' className='section-padding bg-white'>
                <div className='container-custom'>
                    <div className='grid lg:grid-cols-2 gap-16 items-center'>
                        <div>
                            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-10 text-warmBrown'>
                                The Art of Nirmala
                            </h2>
                            <div className='space-y-8 text-lg text-warmBrown/80 font-normal leading-relaxed'>
                                <p>
                                    We are pioneers in the luxury laminate and
                                    décor industry, creating exceptional
                                    finishes that define the most prestigious
                                    interior spaces around the world.
                                </p>
                                <p>
                                    Our dedication to innovation and
                                    craftsmanship has established Nirmala as the
                                    preferred choice for discerning architects,
                                    designers, and connoisseurs who demand
                                    nothing less than perfection.
                                </p>
                                <p>
                                    Every Nirmala surface embodies our
                                    commitment to excellence, combining
                                    cutting-edge technology with timeless
                                    aesthetic principles to create truly
                                    extraordinary environments.
                                </p>
                            </div>
                            <div className='mt-12'>
                                <h3 className='text-2xl font-bold mb-8 text-warmBrown'>
                                    Our Foundation
                                </h3>
                                <div className='grid grid-cols-2 gap-6'>
                                    {[
                                        "Uncompromising Quality",
                                        "Innovative Excellence",
                                        "Client-Centric Approach",
                                        "Sustainable Luxury",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className='flex items-center space-x-4'
                                        >
                                            <div className='w-3 h-3 bg-gradient-warm rounded-full shadow-sm'></div>
                                            <span className='text-base font-normal text-warmBrown'>
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='aspect-square bg-gradient-to-br from-softPink/20 to-warmBrown/10 rounded-2xl overflow-hidden shadow-2xl'>
                            <Image
                                src='/placeholder.svg?height=600&width=600'
                                alt='About Nirmala'
                                width={600}
                                height={600}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id='contact' className='section-padding gradient-luxury'>
                <div className='container-custom'>
                    <div className='text-center mb-20'>
                        <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-warmBrown'>
                            Start Your Project
                        </h2>
                        <p className='text-xl text-warmBrown/80 max-w-3xl mx-auto font-normal leading-relaxed'>
                            Let us help you bring your vision to life with our
                            premium surfaces and expert consultation.
                        </p>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-16'>
                        <Card className='elegant-card p-10'>
                            <ContactForm />
                        </Card>

                        <div className='space-y-10'>
                            <div>
                                <h3 className='text-2xl font-bold mb-8 text-warmBrown'>
                                    Connect With Us
                                </h3>
                                <div className='space-y-6'>
                                    <div className='flex items-start space-x-4'>
                                        <div className='w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center shadow-lg bg-white/50 '>
                                            <Mail className='h-5 w-5 text-warmBrown' />
                                        </div>
                                        <div>
                                            <div className='font-normal text-lg text-warmBrown'>
                                                Email
                                            </div>
                                            <div className='text-warmBrown/70 font-normal'>
                                                consultations@nirmala.com
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-start space-x-4'>
                                        <div className='w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center shadow-lg bg-white/50 '>
                                            <Phone className='h-5 w-5 text-warmBrown' />
                                        </div>
                                        <div>
                                            <div className='font-normal text-lg text-warmBrown'>
                                                Phone
                                            </div>
                                            <div className='text-warmBrown/70 font-normal'>
                                                +1 (555) NIRMALA
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-start space-x-4'>
                                        <div className='w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center shadow-lg bg-white/50 '>
                                            <MapPin className='h-5 w-5 text-warmBrown' />
                                        </div>
                                        <div>
                                            <div className='font-normal text-lg text-warmBrown'>
                                                Showroom
                                            </div>
                                            <div className='text-warmBrown/70 font-normal'>
                                                123 Design District
                                                <br />
                                                Luxury Avenue
                                                <br />
                                                Metropolitan City, MC 12345
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className='text-2xl font-bold mb-8 text-warmBrown'>
                                    Consultation Hours
                                </h3>
                                <div className='space-y-4 text-warmBrown/70 font-normal'>
                                    <div className='flex justify-between items-center py-2 border-b border-warmBrown/10'>
                                        <span>Monday - Friday</span>
                                        <span className='font-normal'>
                                            9:00 AM - 7:00 PM
                                        </span>
                                    </div>
                                    <div className='flex justify-between items-center py-2 border-b border-warmBrown/10'>
                                        <span>Saturday</span>
                                        <span className='font-normal'>
                                            10:00 AM - 5:00 PM
                                        </span>
                                    </div>
                                    <div className='flex justify-between items-center py-2'>
                                        <span>Sunday</span>
                                        <span className='font-normal'>
                                            By Appointment
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className='bg-warmBrown text-white section-padding'>
                <div className='container-custom'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
                        <div className='sm:col-span-2 md:col-span-1'>
                            <div className='text-3xl font-normal mb-6 brand-text'>
                                NIRMALA
                            </div>
                            <p className='text-white/80 mb-6 font-normal leading-relaxed'>
                                Defining luxury through exceptional surfaces and
                                uncompromising quality for the world's most
                                prestigious spaces.
                            </p>
                            <div className='flex flex-col gap-4'>
                                <div className='text-sm text-white/60 font-normal'>
                                    by Elements
                                </div>
                                <div className='flex gap-4'>
                                    <Link
                                        href='https://instagram.com'
                                        className='text-white/80 hover:text-white transition-colors'
                                    >
                                        <svg
                                            className='w-5 h-5'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            aria-hidden='true'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </Link>
                                    <Link
                                        href='https://facebook.com'
                                        className='text-white/80 hover:text-white transition-colors'
                                    >
                                        <svg
                                            className='w-5 h-5'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            aria-hidden='true'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </Link>
                                    <Link
                                        href='https://linkedin.com'
                                        className='text-white/80 hover:text-white transition-colors'
                                    >
                                        <svg
                                            className='w-5 h-5'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                            aria-hidden='true'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className='font-bold mb-6 text-lg'>
                                Collections
                            </h4>
                            <ul className='space-y-3 text-white/80 font-normal'>
                                <li>
                                    <Link
                                        href='#'
                                        className='hover:text-white transition-colors'
                                    >
                                        Kitchen Surfaces
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='#'
                                        className='hover:text-white transition-colors'
                                    >
                                        Storage Solutions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='#'
                                        className='hover:text-white transition-colors'
                                    >
                                        Architectural Elements
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='#'
                                        className='hover:text-white transition-colors'
                                    >
                                        Bespoke Finishes
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className='font-bold mb-6 text-lg'>
                                Resources
                            </h4>
                            <ul className='space-y-3 text-white/80 font-normal'>
                                <li>
                                    <Link
                                        href='#'
                                        className='hover:text-white transition-colors'
                                    >
                                        Master Catalog
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='#'
                                        className='hover:text-white transition-colors'
                                    >
                                        Care Guide
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='#'
                                        className='hover:text-white transition-colors'
                                    >
                                        Technical Specs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='#'
                                        className='hover:text-white transition-colors'
                                    >
                                        Installation Guide
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className='font-bold mb-6 text-lg'>Company</h4>
                            <ul className='space-y-3 text-white/80 font-normal'>
                                <li>
                                    <Link
                                        href='#'
                                        className='hover:text-white transition-colors'
                                    >
                                        Our Story
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='#'
                                        className='hover:text-white transition-colors'
                                    >
                                        Consultations
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='#'
                                        className='hover:text-white transition-colors'
                                    >
                                        Sustainability
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='#'
                                        className='hover:text-white transition-colors'
                                    >
                                        Careers
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='border-t border-white/20 mt-16 pt-10 text-center text-white/60 font-normal'>
                        <p>
                            &copy; 2024 Nirmala by Elements. All rights
                            reserved. Crafted with excellence.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
