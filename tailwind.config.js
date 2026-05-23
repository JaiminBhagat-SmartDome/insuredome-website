/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      heading: ["Hanken Grotesk", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        // Surface Colors
        surface: "#f7f9fb",
        "surface-dim": "#d8dadc",
        "surface-bright": "#f7f9fb",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f4f6",
        "surface-container": "#eceef0",
        "surface-container-high": "#e6e8ea",
        "surface-container-highest": "#e0e3e5",
        "on-surface": "#191c1e",
        "on-surface-variant": "#45474c",
        "inverse-surface": "#2d3133",
        "inverse-on-surface": "#eff1f3",
        "surface-tint": "#545f73",
        "surface-variant": "#e0e3e5",
        "surface-white": "#FFFFFF",
        
        // Primary Colors
        primary: "#091426",
        "on-primary": "#ffffff",
        "primary-container": "#1e293b",
        "on-primary-container": "#8590a6",
        "inverse-primary": "#bcc7de",
        "primary-fixed": "#d8e3fb",
        "primary-fixed-dim": "#bcc7de",
        "on-primary-fixed": "#111c2d",
        "on-primary-fixed-variant": "#3c475a",
        
        // Secondary Colors
        secondary: "#4648d4",
        "on-secondary": "#ffffff",
        "secondary-container": "#6063ee",
        "on-secondary-container": "#fffbff",
        "secondary-fixed": "#e1e0ff",
        "secondary-fixed-dim": "#c0c1ff",
        "on-secondary-fixed": "#07006c",
        "on-secondary-fixed-variant": "#2f2ebe",
        
        // Tertiary Colors
        tertiary: "#1c1300",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#362600",
        "on-tertiary-container": "#b68900",
        "tertiary-fixed": "#ffdf9e",
        "tertiary-fixed-dim": "#f9bd15",
        "on-tertiary-fixed": "#261a00",
        "on-tertiary-fixed-variant": "#5b4300",
        
        // Error Colors
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        
        // Background & Outline
        background: "#f7f9fb",
        "on-background": "#191c1e",
        outline: "#75777d",
        "outline-variant": "#c5c6cd",
        
        // Custom Colors
        "ink-dark": "#0F172A",
        "ink-muted": "#64748B",
        "accent-purple": "#8B5CF6",
        "success-green": "#10B981",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        card: "24px",
        full: "9999px",
      },
      spacing: {
        "container-max": "1280px",
        "gutter": "24px",
        "margin-mobile": "16px",
        "stack-sm": "8px",
        "stack-md": "16px",
        "stack-lg": "32px",
      },
      fontFamily: {
        "body-lg": ["Inter", "sans-serif"],
        "label-sm": ["Inter", "sans-serif"],
        "display-lg-mobile": ["Hanken Grotesk", "sans-serif"],
        "headline-md": ["Hanken Grotesk", "sans-serif"],
        "display-lg": ["Hanken Grotesk", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "label-sm": ["14px", { lineHeight: "20px", fontWeight: "600" }],
        "display-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "800" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
      },
      boxShadow: {
        // Ambient shadow system (Level 1 - Default)
        "custom-shadow-l1": "0 4px 20px rgba(0, 0, 0, 0.2)",
        // Level 2 - Hover/Active
        "custom-shadow-hover": "0 10px 30px rgba(0, 0, 0, 0.4)",
        // Level 3 - Modals & Elevated
        "custom-shadow-l3": "0 20px 40px rgba(0, 0, 0, 0.3)",
      },
      maxWidth: {
        "container-max": "1280px",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "12px",
      },
    },
  },
  plugins: [
    // Custom utility for glassmorphism
    function({ addComponents }) {
      addComponents({
        ".glass-card": {
          "@apply bg-white/10 backdrop-blur-md border border-white/20": {},
        },
        ".glass-card-dark": {
          "@apply bg-slate-900/40 backdrop-blur-md border border-white/10": {},
        },
      });
    },
  ],
}
