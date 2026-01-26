import type { Metadata, Viewport } from 'next'
import './globals.css'
import LiquidBackground from '@/components/ui/LiquidBackground'
import CursorGlow from '@/components/ui/CursorGlow'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Peek - Stop wondering where your money went',
  description: 'Peek shows you the real story behind your spending. No budgets. No judgment. Just clarity. Join 10,000+ people who finally get their money.',
  keywords: ['personal finance', 'money habits', 'spending awareness', 'financial wellness', 'money app'],
  authors: [{ name: 'Peek Technologies' }],
  openGraph: {
    title: 'Peek - Stop wondering where your money went',
    description: 'Peek shows you the real story behind your spending. No budgets. No judgment. Just clarity.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Peek',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peek - Stop wondering where your money went',
    description: 'Peek shows you the real story behind your spending. No budgets. No judgment. Just clarity.',
  },
  themeColor: '#FE875C',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Peek',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Display&family=Manrope:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="font-body antialiased">
        <LiquidBackground />
        <CursorGlow />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
