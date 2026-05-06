import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Barlow } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const barlow = Barlow({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Stay Fit Academia | Academia em Cidade Patriarca, São Paulo',
  description: 'A academia com 13 modalidades no coração do Patriarca. Musculação, CrossFit, Muay Thai, Jiu-Jitsu, Pilates, Fit Dance e muito mais. Venha fazer parte da nossa comunidade!',
  keywords: 'academia, São Paulo, Cidade Patriarca, musculação, crossfit, muay thai, jiu-jitsu, pilates, fit dance, spinning',
  openGraph: {
    title: 'Stay Fit Academia',
    description: 'A academia perfeita no coração do Patriarca.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#FF5E00',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${barlow.variable}`}>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
