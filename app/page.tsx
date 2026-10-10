import { Mail, Phone, MapPin } from "lucide-react";
import { HeroCarousel } from "@/components/hero-carousel";
import { MarqueeStrip } from "@/components/marquee-strip";
import { PDFViewer } from "@/components/pdf-viewer";
import { ClientBanner } from "@/components/client-banner";
import { StatementStats } from "@/components/statement-stats";
import { FeatureBento } from "@/components/feature-bento";
import ContactForm from "@/components/contact-form";

const brochures = [
    {
        id: 1,
        title: "Master Collection Catalog",
        description:
            "Comprehensive showcase of our complete range with detailed specifications and color variations for discerning professionals.",
        pdfUrl: "/pdf/Nirmala.pdf",
        thumbnailUrl: "/images/nirmala-brochure.png",
        category: "Laminates",
    },
    {
        id: 2,
        title: "Premium Care Guide",
        description:
            "Expert maintenance protocols to preserve the exceptional quality and appearance of your Tsuco surfaces.",
        pdfUrl: "/pdf/Relwood-Brochure.pdf",
        thumbnailUrl: "/images/relwood-brochure.png",
        category: "Sustainable Wood",
    },
];

export default function HomePage() {
    return (
        <div className='min-h-screen bg-surface'>
            <HeroCarousel />

            <MarqueeStrip />

            {/* Our Products */}
            <section className='section-pad bg-surface-sand'>
                <div className='container-custom'>
                    <div className='flex items-end justify-between gap-4 mb-10'>
                        <div>
                            <div className='eyebrow mb-3'>What We Offer</div>
                            <h2 className='section-title text-ink'>
                                Our Product Range
                            </h2>
                        </div>
                        <a
                            href='/brochures'
                            className='hidden sm:inline-flex link-arrow'
                        >
                            View All
                        </a>
                    </div>

                    <div className='grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto'>
                        {brochures.map((b) => (
                            <PDFViewer key={b.id} {...b} />
                        ))}
                    </div>
                </div>
            </section>

            <ClientBanner />

            <StatementStats />

            <FeatureBento />

            {/* Contact */}
            <section id='contact' className='section-pad bg-surface-raised'>
                <div className='container-custom'>
                    <div className='text-center max-w-[640px] mx-auto mb-14'>
                        <div className='eyebrow mb-3'>Get In Touch</div>
                        <h2 className='section-title text-ink mb-4'>
                            Let&rsquo;s Build Together
                        </h2>
                        <p className='text-ink-secondary'>
                            Let us help you bring your vision to life with our
                            premium surfaces and expert consultation.
                        </p>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto'>
                        <div className='card-surface p-8'>
                            <ContactForm />
                        </div>

                        <div className='space-y-10'>
                            <div>
                                <h3 className='text-lg font-semibold text-ink mb-6'>
                                    Connect With Us
                                </h3>
                                <div className='space-y-5'>
                                    <div className='flex items-start gap-4'>
                                        <div className='h-10 w-10 rounded-full bg-surface-elevated flex items-center justify-center flex-shrink-0'>
                                            <Mail className='h-4 w-4 text-teal' />
                                        </div>
                                        <div>
                                            <div className='text-sm text-ink'>
                                                Email
                                            </div>
                                            <div className='text-sm text-ink-secondary'>
                                                info@bynirmala.in
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='h-10 w-10 rounded-full bg-surface-elevated flex items-center justify-center flex-shrink-0'>
                                            <Phone className='h-4 w-4 text-teal' />
                                        </div>
                                        <div>
                                            <div className='text-sm text-ink'>
                                                Phone
                                            </div>
                                            <div className='text-sm text-ink-secondary'>
                                                9824042743
                                                <br />
                                                9427037410
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-4'>
                                        <div className='h-10 w-10 rounded-full bg-surface-elevated flex items-center justify-center flex-shrink-0'>
                                            <MapPin className='h-4 w-4 text-teal' />
                                        </div>
                                        <div>
                                            <div className='text-sm text-ink'>
                                                Showroom
                                            </div>
                                            <div className='text-sm text-ink-secondary'>
                                                Shree Shakti Saw Mill, NR Gita
                                                Mandir, 1/3 The Timber
                                                <br />
                                                Merchant Co Op Bldg Society,
                                                Sahkari Lathi Bazar,
                                                <br />
                                                Jagannath Ji Road, Gita
                                                Mandir, Ahmedabad,
                                                <br />
                                                Gujarat, 380022
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className='text-lg font-semibold text-ink mb-4'>
                                    Consultation Hours
                                </h3>
                                <div className='space-y-2 text-sm text-ink-secondary'>
                                    <div className='flex justify-between py-2 border-b border-[color:var(--border-header)]'>
                                        <span>Monday – Saturday</span>
                                        <span>10:00 AM – 8:00 PM</span>
                                    </div>
                                    <div className='flex justify-between py-2'>
                                        <span>Sunday</span>
                                        <span>By Appointment</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
