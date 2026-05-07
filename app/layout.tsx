import type { Metadata, Viewport } from 'next'
import './globals.css'
import { APP_STORE_URL, APP_STORE_ID, SITE_URL } from '@/lib/constants'
import StickyMobileCta from '@/components/StickyMobileCta'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Peek. Less dread. More: oh, that makes sense.',
  description:
    'Peek isn\'t going to make you "good with money." It\'s going to make you a person who knows herself, including the spending part. The rest gets easier. Free on iOS, secured by Plaid.',
  keywords: [
    'top budgeting apps',
    'money clarity app',
    'anti budgeting app',
    'spending awareness',
    'iPhone finance app',
    'peek money',
    'mint alternative',
    'monarch alternative',
    'ynab alternative',
    'copilot alternative',
  ],
  authors: [{ name: 'Peek' }],
  openGraph: {
    title: 'Peek. The calm side of money.',
    description:
      'Less dread. More: oh, that makes sense. The money app for people who want clarity without the spreadsheet. Free on iOS.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Peek',
    locale: 'en_US',
    images: [
      { url: '/images/peek-logo-square.svg', width: 512, height: 512, alt: 'Peek' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peek. The calm side of money.',
    description:
      'Less dread. More: oh, that makes sense. Free on iOS.',
  },
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Peek' },
  icons: { icon: '/images/peek-icon.png', apple: '/images/peek-icon.png' },
  alternates: { canonical: SITE_URL },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#FAF8F5',
}

const mobileAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Peek',
  alternateName: ['Peek Money', 'Peek AI Personal Finance'],
  applicationCategory: 'FinanceApplication',
  applicationSubCategory: 'Personal Finance',
  operatingSystem: 'iOS',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: SITE_URL,
  downloadUrl: APP_STORE_URL,
  description:
    'Peek helps you understand your money habits, so you can reshape them around what you care about. Free on iOS.',
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
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Manrope:wght@400;500;600;700&family=Caveat:wght@500;600;700&display=swap"
        />
        <link
          rel="preload"
          as="image"
          href="/images/optimized/p-portrait-blonde.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mobileAppSchema) }}
        />
      </head>
      <body>
        {children}
        <StickyMobileCta />
        <Analytics />
      </body>
    </html>
  )
}
