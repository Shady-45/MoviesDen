import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import Link from 'next/link'

const inter = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Movie's Den",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='absolute left-8 top-4'>
        <Link prefetch href='/'>
          <h1 className='text-3xl font-bold  '>
          Movies <span className='text-orange-600'>DEN</span>
          </h1>
        
        </Link>
        </nav>
        
        
        {children}</body>
    </html>
  )
}
