"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Eye, Menu, X, Award, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroCarousel } from "@/components/hero-carousel";

export default function HomePage() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className='min-h-screen bg-cream text-warmBrown'>
            {/* Header */}
            <header className='fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-white/20 z-50 shadow-sm'>
                <div className='container-custom py-4 flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                        <div className='text-3xl font-didact font-normal tracking-[0.15em] text-warmBrown brand-text'>
                            NIRMALA
                        </div>
                        <div className='text-sm text-warmBrown/70 font-normal'>
                            by thirty DEGREE
                        </div>
                    </div>
                    <nav className='hidden md:flex items-center space-x-8'>
                        <Link
                            href='#home'
                            className='text-sm font-normal hover:text-primary transition-colors nav-text'
                        >
                            HOME
                        </Link>
                        <Link
                            href='#collections'
                            className='text-sm font-normal hover:text-primary transition-colors nav-text'
                        >
                            COLLECTIONS
                        </Link>
                        <Link
                            href='#about'
                            className='text-sm font-normal hover:text-primary transition-colors nav-text'
                        >
                            ABOUT
                        </Link>
                        <Link
                            href='#resources'
                            className='text-sm font-normal hover:text-primary transition-colors nav-text'
                        >
                            RESOURCES
                        </Link>
                        <Link
                            href='#contact'
                            className='text-sm font-normal hover:text-primary transition-colors nav-text'
                        >
                            CONTACT
                        </Link>
                    </nav>
                    <Button
                        variant='ghost'
                        className='md:hidden p-2 hover:bg-softPink/20'
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
                            {[
                                "HOME",
                                "COLLECTIONS",
                                "ABOUT",
                                "RESOURCES",
                                "CONTACT",
                            ].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className='text-sm font-normal hover:text-primary transition-colors py-2 nav-text'
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </header>

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

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {/* PDF Resource 1 */}
                        <Card className='elegant-card hover:shadow-2xl transition-all duration-500 h-full'>
                            <CardContent className='p-8 flex flex-col h-full'>
                                <div className='aspect-[3/4] bg-gradient-to-br from-softPink/30 to-warmBrown/20 mb-8 rounded-xl flex items-center justify-center shadow-inner'>
                                    <div className='text-center'>
                                        <div className='text-3xl font-normal mb-3 text-warmBrown'>
                                            NIRMALA
                                        </div>
                                        <div className='text-sm font-normal text-warmBrown/70'>
                                            Complete Catalog
                                        </div>
                                    </div>
                                </div>
                                <h3 className='text-xl font-bold mb-4 text-warmBrown'>
                                    Master Collection Catalog
                                </h3>
                                <p className='text-warmBrown/70 mb-6 text-base font-normal leading-relaxed flex-grow'>
                                    Comprehensive showcase of our complete range
                                    with detailed specifications and color
                                    variations
                                </p>
                                <div className='flex gap-3 mt-auto'>
                                    <Button
                                        size='sm'
                                        className='luxury-button flex-1 text-sm'
                                    >
                                        <Eye className='mr-2 h-4 w-4' />
                                        Preview
                                    </Button>
                                    <Button
                                        size='sm'
                                        variant='outline'
                                        className='luxury-button-outline flex-1 text-sm bg-transparent'
                                    >
                                        <Download className='mr-2 h-4 w-4' />
                                        Download
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* PDF Resource 2 */}
                        <Card className='elegant-card hover:shadow-2xl transition-all duration-500 h-full'>
                            <CardContent className='p-8 flex flex-col h-full'>
                                <div className='aspect-[3/4] bg-gradient-to-br from-warmBrown/20 to-softPink/30 mb-8 rounded-xl flex items-center justify-center shadow-inner'>
                                    <div className='text-center'>
                                        <div className='text-3xl font-normal mb-3 text-warmBrown'>
                                            CARE
                                        </div>
                                        <div className='text-sm font-normal text-warmBrown/70'>
                                            & Maintenance
                                        </div>
                                    </div>
                                </div>
                                <h3 className='text-xl font-bold mb-4 text-warmBrown'>
                                    Premium Care Guide
                                </h3>
                                <p className='text-warmBrown/70 mb-6 text-base font-normal leading-relaxed flex-grow'>
                                    Expert maintenance protocols to preserve the
                                    exceptional quality and appearance of your
                                    surfaces
                                </p>
                                <div className='flex gap-3 mt-auto'>
                                    <Button
                                        size='sm'
                                        className='luxury-button flex-1 text-sm'
                                    >
                                        <Eye className='mr-2 h-4 w-4' />
                                        Preview
                                    </Button>
                                    <Button
                                        size='sm'
                                        variant='outline'
                                        className='luxury-button-outline flex-1 text-sm bg-transparent'
                                    >
                                        <Download className='mr-2 h-4 w-4' />
                                        Download
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* PDF Resource 3 */}
                        <Card className='elegant-card hover:shadow-2xl transition-all duration-500 h-full'>
                            <CardContent className='p-8 flex flex-col h-full'>
                                <div className='aspect-[3/4] bg-gradient-to-br from-warmBrown/30 to-softPink/20 mb-8 rounded-xl flex items-center justify-center shadow-inner'>
                                    <div className='text-center'>
                                        <div className='text-3xl font-normal mb-3 text-warmBrown'>
                                            TECH
                                        </div>
                                        <div className='text-sm font-normal text-warmBrown/70'>
                                            Specifications
                                        </div>
                                    </div>
                                </div>
                                <h3 className='text-xl font-bold mb-4 text-warmBrown'>
                                    Technical Documentation
                                </h3>
                                <p className='text-warmBrown/70 mb-6 text-base font-normal leading-relaxed flex-grow'>
                                    Detailed technical specifications and
                                    professional installation guidelines for
                                    optimal results
                                </p>
                                <div className='flex gap-3 mt-auto'>
                                    <Button
                                        size='sm'
                                        className='luxury-button flex-1 text-sm'
                                    >
                                        <Eye className='mr-2 h-4 w-4' />
                                        Preview
                                    </Button>
                                    <Button
                                        size='sm'
                                        variant='outline'
                                        className='luxury-button-outline flex-1 text-sm bg-transparent'
                                    >
                                        <Download className='mr-2 h-4 w-4' />
                                        Download
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
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
                            <form className='space-y-8'>
                                <div>
                                    <label className='block text-base font-normal mb-3 text-warmBrown'>
                                        Full Name
                                    </label>
                                    <input
                                        type='text'
                                        className='w-full px-6 py-4 border border-warmBrown/20 rounded-xl focus:ring-2 focus:ring-warmBrown/30 focus:border-warmBrown transition-all duration-300 bg-white/50 backdrop-blur-sm'
                                        placeholder='Your full name'
                                    />
                                </div>
                                <div>
                                    <label className='block text-base font-normal mb-3 text-warmBrown'>
                                        Email Address
                                    </label>
                                    <input
                                        type='email'
                                        className='w-full px-6 py-4 border border-warmBrown/20 rounded-xl focus:ring-2 focus:ring-warmBrown/30 focus:border-warmBrown transition-all duration-300 bg-white/50 backdrop-blur-sm'
                                        placeholder='your@email.com'
                                    />
                                </div>
                                <div>
                                    <label className='block text-base font-normal mb-3 text-warmBrown'>
                                        Project Type
                                    </label>
                                    <input
                                        type='text'
                                        className='w-full px-6 py-4 border border-warmBrown/20 rounded-xl focus:ring-2 focus:ring-warmBrown/30 focus:border-warmBrown transition-all duration-300 bg-white/50 backdrop-blur-sm'
                                        placeholder='Residential, Commercial, Hospitality...'
                                    />
                                </div>
                                <div>
                                    <label className='block text-base font-normal mb-3 text-warmBrown'>
                                        Project Details
                                    </label>
                                    <textarea
                                        rows={6}
                                        className='w-full px-6 py-4 border border-warmBrown/20 rounded-xl focus:ring-2 focus:ring-warmBrown/30 focus:border-warmBrown transition-all duration-300 bg-white/50 backdrop-blur-sm'
                                        placeholder='Tell us about your vision and requirements...'
                                    ></textarea>
                                </div>
                                <Button
                                    size='lg'
                                    className='luxury-button w-full text-lg py-4'
                                >
                                    Schedule Consultation
                                </Button>
                            </form>
                        </Card>

                        <div className='space-y-10'>
                            <div>
                                <h3 className='text-2xl font-bold mb-8 text-warmBrown'>
                                    Connect With Us
                                </h3>
                                <div className='space-y-6'>
                                    <div className='flex items-start space-x-4'>
                                        <div className='w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center shadow-lg'>
                                            <div className='w-6 h-6 bg-white rounded-sm'></div>
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
                                        <div className='w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center shadow-lg'>
                                            <div className='w-6 h-6 bg-white rounded-full'></div>
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
                                        <div className='w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center shadow-lg'>
                                            <div className='w-4 h-6 bg-white rounded-sm'></div>
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
                            <div className='text-sm text-white/60 font-normal'>
                                by thirty DEGREE
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
                            &copy; 2024 Nirmala by thirty DEGREE. All rights
                            reserved. Crafted with excellence.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
