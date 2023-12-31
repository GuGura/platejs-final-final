import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import '@/styles/globals.css'
import React from 'react'
import {TooltipProvider} from "@/components/plate-ui/tooltip";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout(
  {
    children,
  }: RootLayoutProps) {
  return (
    <html lang="en">
    <body className={inter.className}>
    {/*<ThemeProvider*/}
    {/*  attribute="class"*/}
    {/*  defaultTheme="system"*/}
    {/*  enableSystem*/}
    {/*  disableTransitionOnChange*/}
    {/*>*/}
    <TooltipProvider
      disableHoverableContent
      delayDuration={500}
      skipDelayDuration={0}
    >
      <main>
        {children}
      </main>
    </TooltipProvider>
    {/*</ThemeProvider>*/}
    </body>
    </html>
  )
}
