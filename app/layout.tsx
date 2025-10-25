import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
})

export const metadata: Metadata = {
  title: 'Zolan AI - Your Onchain Companion',
  description: 'Co-create and build onchain reputation with your personalized AI, Zolan, directly within Farcaster.',
  openGraph: {
    title: 'Zolan AI - Your Onchain Companion',
    description: 'Co-create and build onchain reputation with your personalized AI',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
