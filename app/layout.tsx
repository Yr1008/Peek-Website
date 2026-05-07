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
    title: 'Peek. Know the why behind every dollar.',
    description:
      'Your bank shows what you spent. Peek shows you why. The money app for people who want clarity without the spreadsheet. Free on iOS.',
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
    title: 'Peek. Know the why behind every dollar.',
    description:
      'Your bank shows what you spent. Peek shows you why. Free on iOS.',
  },
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Peek' },
  icons: { icon: '/images/peek-icon.png', apple: '/images/peek-icon.png' },
  alternates: { canonical: SITE_URL },
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
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Manrope:wght@400;500;600;700&display=swap"
        />
        <link
          rel="preload"
          as="image"
          href="/images/optimized/screen-tags.webp"
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
