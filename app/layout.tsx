import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sara Romanela Riso - Modelo & Creadora de Contenido',
  description: 'Portfolio profesional de Sara Romanela Riso, modelo y creadora de contenido especializada en campañas publicitarias y contenido digital.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
