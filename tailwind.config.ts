import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand - vibrant and energetic
        'peek-orange': '#FF7A50',
        'peek-orange-light': '#FFB088',
        'peek-orange-dark': '#FF5722',
        
        // Vibrant pastels - energetic wellness palette
        'peek-purple': '#E8D4FF',
        'peek-purple-deep': '#B388FF',
        'peek-purple-soft': '#F3E8FF',
        'peek-sky': '#A8E6FF',
        'peek-sky-deep': '#40C4FF',
        'peek-sky-soft': '#E0F7FF',
        
        // Accent colors - neon pop
        'peek-green': '#69F0AE',
        'peek-green-deep': '#00E676',
        'peek-yellow': '#FFD54F',
        'peek-pink': '#FF80AB',
        
        // Warm neutrals
        'warm-white': '#FDFCFA',
        'warm-cream': '#FAF8F5',
        'warm-beige': '#F5F2ED',
        'peek-cream': '#FAF8F5',
        
        // Text - good contrast
        'text-primary': '#2D2D2D',
        'text-secondary': '#5A5A5A',
        'text-muted': '#8A8A8A',
        
        // Glass effects
        'glass-white': 'rgba(255, 255, 255, 0.7)',
        'glass-purple': 'rgba(179, 136, 255, 0.15)',
        'glass-sky': 'rgba(64, 196, 255, 0.15)',
        'glass-orange': 'rgba(255, 122, 80, 0.12)',
      },
      fontFamily: {
        'heading': ['Libre Caslon Display', 'Georgia', 'serif'],
        'body': ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Mobile-first typography
        'hero-mobile': ['2rem', { lineHeight: '1.1', fontWeight: '400' }],
        'hero-tablet': ['2.75rem', { lineHeight: '1.1', fontWeight: '400' }],
        'hero-desktop': ['3.5rem', { lineHeight: '1.1', fontWeight: '400' }],
        'section-mobile': ['1.75rem', { lineHeight: '1.2', fontWeight: '400' }],
        'section-tablet': ['2.25rem', { lineHeight: '1.2', fontWeight: '400' }],
        'section-desktop': ['3rem', { lineHeight: '1.2', fontWeight: '400' }],
      },
      spacing: {
        // Touch-friendly spacing
        'touch': '44px',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-top': 'env(safe-area-inset-top)',
      },
      borderRadius: {
        // Apple-inspired squircle radii
        'apple-xs': '8px',     // Tiny elements, badges
        'apple-sm': '10px',    // Small elements, pills
        'apple': '14px',       // Default cards, inputs
        'apple-md': '16px',    // Medium cards
        'apple-lg': '18px',    // Large cards
        'apple-xl': '22px',    // Hero cards, main containers
        'apple-2xl': '28px',   // Extra large elements
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '20px',
        'heavy': '40px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-gentle': 'float-gentle 4s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'ticker': 'ticker 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.3s ease-out forwards',
        'ripple': 'ripple 2s ease-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'ripple': {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.1)' },
        },
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '400ms',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'glass-hover': '0 16px 48px rgba(0, 0, 0, 0.12)',
        'glow-orange': '0 0 40px rgba(254, 135, 92, 0.4)',
        'glow-purple': '0 0 40px rgba(200, 180, 220, 0.5)',
        'glow-sky': '0 0 40px rgba(180, 210, 230, 0.5)',
        'card': '0 2px 12px rgba(0, 0, 0, 0.04), 0 4px 24px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 4px 20px rgba(0, 0, 0, 0.08), 0 8px 32px rgba(0, 0, 0, 0.06)',
        'soft': '0 1px 3px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.03)',
      },
      screens: {
        'xs': '375px',
        'sm': '428px',
        'md': '744px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}
export default config
