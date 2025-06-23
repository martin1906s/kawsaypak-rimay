import type { Metadata } from 'next'
import { Comic_Neue } from 'next/font/google'
import './globals.css'

// Configuración óptima de fuentes con next/font
const comicNeue = Comic_Neue({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comic-neue'
})

export const metadata: Metadata = {
  title: 'Kawsaypak Rimay',
  description: 'Aprende Quechua de manera interactiva',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="qu" className={comicNeue.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
