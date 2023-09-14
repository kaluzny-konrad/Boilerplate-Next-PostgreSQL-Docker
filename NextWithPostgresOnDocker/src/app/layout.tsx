import "@/styles/globals.css";
import { ToastContainer } from 'react-toastify'

import NavbarContainer from '@/components/NavbarContainer'
import Providers from '@/components/Providers'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`antialiased text-foreground bg-background ${inter.className}`}
    >
      <body className="min-h-screen antialiased">
        <Providers>
          <NavbarContainer />

          <div className="container max-w-7xl mx-auto h-full pt-12">
            {children}
          </div>
          <ToastContainer />
        </Providers>
      </body>
    </html>
  )
}
