import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BrightPath Education ? Learn Faster, Go Further',
  description:
    'An education platform that blends adaptive learning with human coaching to help students master concepts faster and with confidence.',
  openGraph: {
    title: 'BrightPath Education ? Learn Faster, Go Further',
    description:
      'An education platform that blends adaptive learning with human coaching to help students master concepts faster and with confidence.',
    url: 'https://agentic-ad3de14e.vercel.app',
    siteName: 'BrightPath Education',
    images: [
      { url: '/hero-illustration.svg', width: 1200, height: 630, alt: 'BrightPath' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrightPath Education ? Learn Faster, Go Further',
    description:
      'An education platform that blends adaptive learning with human coaching to help students master concepts faster and with confidence.',
    images: ['/hero-illustration.svg'],
  },
  metadataBase: new URL('https://agentic-ad3de14e.vercel.app'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-brand-200 selection:text-brand-900">
        {children}
      </body>
    </html>
  )
}
