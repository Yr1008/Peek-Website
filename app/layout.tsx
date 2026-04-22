import type { Metadata, Viewport } from 'next'
import './globals.css'
import { APP_STORE_URL, APP_STORE_ID, SITE_URL } from '@/lib/constants'
import StickyMobileCta from '@/components/StickyMobileCta'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Peek. Know the why behind every dollar.',
  description:
    'Your bank shows what you spent. Peek shows you why. The money app for people who want clarity without the spreadsheet. Free on iOS.',
  keywords: [
    'personal finance app',
    'anti budgeting',
    'money clarity',
    'spending awareness',
    'iOS finance app',
    'peek money',
  ],
  authors: [{ name: 'Peek' }],
  openGraph: {
    title: 'Peek. Know the why behind every dollar.',
    description:
      'Your bank shows what you spent. Peek shows you why. The money app for people who want clarity without the spreadsheet.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Peek',
    locale: 'en_US',
    images: [
      {
        url: '/images/peek-logo-square.svg',
        width: 512,
        height: 512,
        alt: 'Peek',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peek. Know the why behind every dollar.',
    description:
      'Your bank shows what you spent. Peek shows you why. Free on iOS.',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Peek',
  },
  icons: {
    icon: '/images/peek-icon.png',
    apple: '/images/peek-icon.png',
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#FFF9F6',
}

const mobileAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Peek',
  operatingSystem: 'iOS',
  applicationCategory: 'FinanceApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.4',
    ratingCount: '180',
  },
  url: APP_STORE_URL,
  description:
    'Peek is the money app that asks the soft questions, so you stop feeling lost about your spending.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* iOS Smart App Banner */}
        <meta
          name="apple-itunes-app"
          content={`app-id=${APP_STORE_ID}, app-argument=${SITE_URL}`}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Manrope:wght@400;500;600;700&display=swap"
        />
        {/* Preload LCP hero image */}
        <link
          rel="preload"
          as="image"
          href="/images/optimized/app-screenshot-insights.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <StickyMobileCta />
        <Analytics />
      </body>
    </html>
  )
}
