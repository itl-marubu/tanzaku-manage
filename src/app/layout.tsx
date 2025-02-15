import { Provider as JotaiProvider } from 'jotai'
import { Noto_Sans_JP } from 'next/font/google'
import 'normalize.css/normalize.css'
import { CookieBanner, GoogleTagManager } from '@/components/gtm'
import '@/styles/colors.scss'
import '@/styles/variables.scss'
import { Navbar } from './_components/Navbar'
import type { Metadata } from 'next'

const nsjp = Noto_Sans_JP({
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: '短冊管理サイト',
  description: 'Tanzaku Manager',
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
