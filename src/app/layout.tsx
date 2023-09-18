import './globals.css'
import type { Metadata } from 'next'
import clsx from 'clsx'
import { Nunito, Nunito_Sans } from 'next/font/google'
import { createClient } from '@/prismicio'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunitoSans',
  display: 'swap',
})

export async function generateMetadata(): Promise<Metadata> {
 const client = createClient();
 const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Flowrise",
    description: settings.data.meta_description || "Unlock your maximum potential by integrating your everyday tasks and routines with your individual vibe patterns.",
    openGraph: {
      images: [settings.data.og_image.url || "/assets/OGImage.png"],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body className='body-bgGradient'>
        <Header />
        <main >
          {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
