import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: {
    default: 'Fantine Mpacko Priso — Research & Engineering',
    template: '%s — Fantine Mpacko Priso',
  },
  description: 'Machine learning, computational health, cognitive science, and human-centered AI research by Fantine Mpacko Priso.',
  generator: '',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f4ef',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
