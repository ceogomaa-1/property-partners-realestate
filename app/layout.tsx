import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Property Partners Real Estate | Find Your Next Home',
  description:
    'Property Partners Real Estate helps you buy, sell, and invest with confidence. Expert local agents, curated listings, and a seamless experience across Canada.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}