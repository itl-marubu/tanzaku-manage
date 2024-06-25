import { Noto_Sans_JP } from 'next/font/google'
import { Provider as JotaiProvider } from 'jotai'
import 'normalize.css/normalize.css'
import { CookieBanner, GoogleTagManager } from '@/components/gtm'
import '@/styles/colors.scss'
import '@/styles/variables.scss'
import type { Metadata } from 'next'
import { Navbar } from './_components/Navbar'

const nsjp = Noto_Sans_JP({
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <GoogleTagManager />
      </head>
      <JotaiProvider>
        <body className={nsjp.className}>
          <Navbar showContent={true} />
          {children}
          <CookieBanner />
        </body>
      </JotaiProvider>
    </html>
  )
}
