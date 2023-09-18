
"use client";

import './globals.css'
import 'aos/dist/aos.css';

import { useEffect } from "react";
import type { Metadata } from 'next'

import clsx from 'clsx'
import AOS from 'aos'
import { Nunito, Nunito_Sans } from 'next/font/google'
import { createClient, repositoryName } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'

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
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, [])
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body className='bg-gradient-default'>
        <Header />
        <main >
          {children}
        </main>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
        </body>
    </html>
  )
}
