import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Ubuntu } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

// Warm Atelier font pairing  ────────────────────────────────────────────────

const cormorantGaramond = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    style: ["normal", "italic"],
    variable: "--font-cormorant",
    display: "swap",
});

const ubuntu = Ubuntu({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
    variable: "--font-ubuntu",
    display: "swap",
});
// Site-wide metadata  ───────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Tsuco — The Surface Company",
    description:
        "Your ultimate destination for premium building decorative materials. Where all your interior design needs find their perfect home under one roof.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang='en'
            className={cn(
                "scroll-smooth",
                cormorantGaramond.variable, // makes Cormorant Garamond available via var(--font-cormorant)
                ubuntu.variable // makes Ubuntu available via var(--font-ubuntu)
            )}
        >
            <body>
                <Header />
                {children}
                <Footer />
                <WhatsAppButton
                    phoneNumber='+919824042743'
                    message="Hello! I'm interested in your building materials and services."
                />
            </body>
        </html>
    );
}
