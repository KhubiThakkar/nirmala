import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import {
    Playfair_Display,
    Inter,
    Didact_Gothic,
    Rubik,
    DM_Serif_Text,
    Comfortaa,
} from "next/font/google";
import { cn } from "@/lib/utils";

// Elegant Google-font setup  ────────────────────────────────────────────────
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-playfair",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-inter",
    display: "swap",
});

const didactGothic = Didact_Gothic({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-didact",
    display: "swap",
});

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-rubik",
    display: "swap",
});

const dmSerifText = DM_Serif_Text({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-dm-serif-text",
    display: "swap",
});

const comfortaa = Comfortaa({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-comfortaa",
    display: "swap",
});
// Site-wide metadata  ───────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Nirmala – Luxury Matt-Finished Surfaces",
    description:
        "Premium matt-finished laminates crafted for the most discerning residential, hospitality and commercial spaces.",
    generator: "v0.dev",
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
                playfair.variable, // makes Playfair available via var(--font-playfair)
                inter.variable, // makes Inter available via var(--font-inter)
                didactGothic.variable, // makes Didact Gothic available via var(--font-didact)
                rubik.variable, // makes Rubik available via var(--font-rubik)
                dmSerifText.variable, // makes DM Serif Text available via var(--font-dm-serif-text)
                comfortaa.variable // makes Comfortaa available via var(--font-comfortaa)
            )}
        >
            <body>{children}</body>
        </html>
    );
}
