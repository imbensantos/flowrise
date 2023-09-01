import './globals.css'
import type { Metadata } from 'next'
import clsx from 'clsx'
import { Nunito, Nunito_Sans } from 'next/font/google'
import { createClient } from '@/prismicio'

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
 const page = await client.getSingle("settings");

  return {
    title: page.data.site_title || "Flowrise",
    description: page.data.meta_description || "Unlock your maximum potential by integrating your everyday tasks and routines with your individual vibe patterns.",
    openGraph: {
      images: [page.data.og_image.url || "/assets/OGImage.png"],
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
      <body>
        <header>
          HEADER
        </header>
        {children}
        <footer>
          FOOTER
        </footer>
        </body>
    </html>
  )
}
