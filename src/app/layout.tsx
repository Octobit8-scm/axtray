import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Axtray - AI Agent Development',
  description: 'Empowering innovation through AI agent development and intelligent automation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
} 