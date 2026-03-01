import './globals.css'

export const metadata = {
  title: 'Peps on a Budget',
  description: 'Biotech storefront',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  )
}
