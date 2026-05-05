import type { Metadata, Viewport } from 'next'
import './globals.css'
import { APP_STORE_URL, APP_STORE_ID, SITE_URL } from '@/lib/constants'
import StickyMobileCta from '@/components/StickyMobileCta'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Peek — see why you spend',
  description:
    'Peek tags every purchase with what actually drove it — Self Reward, Social, Ritual, Convenience. The patterns finally make sense. Free on iOS. Bank-secure with Plaid.',
  keywords: [
    'personal finance app',
    'spending awareness',
    'money clarity',
    'tag the why',
    'peek money',
    'iOS finance app',
  ],
  authors: [{ name: 'Peek' }],
  openGraph: {
    title: 'Peek — see why you spend',
    description:
      'Peek tags every purchase with what actually drove it. The patterns finally make sense.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Peek',
    locale: 'en_US',
    images: [{ url: '/images/peek-logo-square.svg', width: 512, height: 512, alt: 'Peek' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peek — see why you spend',
    description: 'Tag every purchase with what actually drove it. Free on iOS.',
  },
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Peek' },
  icons: { icon: '/images/peek-icon.png', apple: '/images/peek-icon.png' },
  alternates: { canonical: SITE_URL },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#F4ECDB',
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
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,500;1,9..144,600;1,9..144,700&family=Inter:wght@400;500;600;700&family=Caveat:wght@500;700&display=swap"
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
