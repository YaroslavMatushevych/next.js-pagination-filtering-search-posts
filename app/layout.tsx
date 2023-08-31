import './globals.css'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Blog Posts",
  description: "A list of blog posts and their basic information.",
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='py-8'>
          <nav className='container'>
            <ul className='flex space-x-6'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/posts'>Blog Posts</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  )
}
