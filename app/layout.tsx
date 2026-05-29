import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'USDC Payroll',
  description: 'Send USDC to employees with ease',
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
