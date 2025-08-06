import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sara Romanela Riso - Estudiante de Teatro Musical & Actriz Publicitaria',
  description: 'Portfolio profesional de Sara Romanela Riso, estudiante de teatro musical en IAM y actriz publicitaria especializada en campañas publicitarias y contenido digital.',
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
