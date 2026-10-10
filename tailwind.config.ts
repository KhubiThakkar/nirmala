import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
        "*.{js,ts,jsx,tsx,mdx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "1.5rem",
            screens: {
                "2xl": "1200px",
            },
        },
        extend: {
            fontFamily: {
                serif: ["var(--font-cormorant)", "Georgia", "serif"],
                sans: ["var(--font-ubuntu)", "Arial", "sans-serif"],
                // legacy aliases kept so any stray references don't break the build
                didact: ["var(--font-cormorant)", "Georgia", "serif"],
                poppins: ["var(--font-ubuntu)", "Arial", "sans-serif"],
                tajawal: ["var(--font-ubuntu)", "Arial", "sans-serif"],
            },
            colors: {
                border: "var(--border)",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent-hsl))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Warm Atelier raw tokens — used directly in bespoke sections
                surface: "var(--surface)",
                "surface-raised": "var(--surface-raised)",
                "surface-elevated": "var(--surface-elevated)",
                "surface-sand": "var(--surface-sand)",
                "surface-dark": "var(--surface-dark)",
                "surface-footer": "var(--surface-footer)",
                teal: {
                    DEFAULT: "var(--accent)",
                    hover: "var(--accent-hover)",
                },
                ink: {
                    DEFAULT: "var(--text-primary)",
                    secondary: "var(--text-secondary)",
                    muted: "var(--text-muted)",
                },
                "on-dark": {
                    DEFAULT: "var(--text-on-dark)",
                    muted: "var(--text-on-dark-muted)",
                },
                hairline: "var(--border)",
                "hairline-on-dark": "var(--border-on-dark)",
                cream: "var(--surface)",
                warmBrown: "var(--text-primary)",
                softPink: "var(--surface-sand)",
            },
            borderRadius: {
                sm: "var(--radius-sm)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)",
                xl: "var(--radius-xl)",
                pill: "var(--radius-pill)",
            },
            maxWidth: {
                shell: "1320px",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-in": {
                    from: { opacity: "0", transform: "translateY(24px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-50%)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.6s cubic-bezier(.22,.61,.36,1)",
                marquee: "marquee 40s linear infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
