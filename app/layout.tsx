import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Didact_Gothic, Poppins, Tajawal } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";

// Elegant Google-font setup  ────────────────────────────────────────────────

const didactGothic = Didact_Gothic({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-didact",
    display: "swap",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
    display: "swap",
});

const tajawal = Tajawal({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "700"],
    style: "normal",
    variable: "--font-tajawal",
    display: "swap",
});
// Site-wide metadata  ───────────────────────────────────────────────────────
export const metadata: Metadata = {
    title: "Nirmala – Building Beautifully!",
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
                didactGothic.variable, // makes Didact Gothic available via var(--font-didact)
                poppins.variable, // makes Poppins available via var(--font-poppins)
                tajawal.variable // makes Tajawal available via var(--font-tajawal)
            )}
        >
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
