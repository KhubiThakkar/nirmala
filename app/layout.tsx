import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Didact_Gothic } from "next/font/google"
import { cn } from "@/lib/utils"

// Elegant Google-font setup  ────────────────────────────────────────────────
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
})

const didactGothic = Didact_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-didact",
  display: "swap",
})

// Site-wide metadata  ───────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Nirmala – Luxury Matt-Finished Surfaces",
  description:
    "Premium matt-finished laminates crafted for the most discerning residential, hospitality and commercial spaces.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth",
        playfair.variable, // makes Playfair available via var(--font-playfair)
        inter.variable, // makes Inter available via var(--font-inter)
        didactGothic.variable, // makes Didact Gothic available via var(--font-didact)
      )}
    >
      <body>{children}</body>
    </html>
  )
}
