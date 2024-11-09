import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'
import BackToTop from './components/back-to-top'
import ContactForm from './components/contact-form'
import Footer from './components/footer'
import { Inter, IBM_Plex_Mono } from 'next/font/google'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata = {
  title: {
    default: 'Home',
    template: '%s | RSF DEV',
  },
  icons: [
    {
      url: '/favicon.svg',
    },
  ],
}

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <BackToTop />
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
