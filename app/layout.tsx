import type { Metadata, Viewport } from 'next'
import './globals.css'
import { APP_STORE_URL, APP_STORE_ID, SITE_URL } from '@/lib/constants'
import StickyMobileCta from '@/components/StickyMobileCta'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'peek — your bank shows what. peek shows why.',
  description:
    'peek closes the gap between what you spent and why you spent it. a top personal finance app in the us & canada. free on ios, secured by plaid.',
  keywords: [
    'personal finance app',
    'spending awareness',
    'money clarity',
    'anti budgeting',
    'iOS finance app',
    'peek money',
  ],
  authors: [{ name: 'peek' }],
  openGraph: {
    title: 'peek — your bank shows what. peek shows why.',
    description: 'stop tracking. start understanding yourself.',
    type: 'website',
    url: SITE_URL,
    siteName: 'peek',
    locale: 'en_US',
    images: [{ url: '/images/peek-logo-square.svg', width: 512, height: 512, alt: 'peek' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'peek — your bank shows what. peek shows why.',
    description: 'stop tracking. start understanding yourself.',
  },
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'peek' },
  icons: { icon: '/images/peek-icon.png', apple: '/images/peek-icon.png' },
  alternates: { canonical: SITE_URL },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#F2EBD9',
}

const mobileAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Peek',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'iOS',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', ratingCount: '1240' },
  url: SITE_URL,
  downloadUrl: APP_STORE_URL,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
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
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500;1,9..144,600;1,9..144,700&family=Inter:wght@400;500;600;700&family=Caveat:wght@500;600;700&display=swap"
        />
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
      <body>
        <div className="grain" aria-hidden="true" />
        <div className="prog" id="prog" aria-hidden="true" />
        {children}
        <StickyMobileCta />
        <Analytics />
      </body>
    </html>
  )
}
