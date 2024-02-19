import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Matheus Fraga',
    default:
      'Matheus Fraga - Software designer, founder, and amateur astronaut',
  },
  description: `I’m Matheus, a software engineer based in Belo Horizonte. I've been immersed in frontend development for over 5 years, primarily focused on building web applications. But I've also developed mobile apps with React Native and contributed to backend services using Node.js, .NET, and Java. Lately, I've been improving my skills in user experience and exploring Go.`,
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
            <Analytics />
          </div>
        </Providers>
      </body>
    </html>
  )
}
