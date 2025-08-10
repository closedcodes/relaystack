import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RelayStack - Tech News & Community',
  description: 'AI-curated tech news, community discussions, and tech events in one place.',
  keywords: ['tech news', 'AI', 'engineering', 'community', 'events', 'hackathons'],
  authors: [{ name: 'RelayStack Team' }],
  openGraph: {
    title: 'RelayStack - Tech News & Community',
    description: 'AI-curated tech news, community discussions, and tech events in one place.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
