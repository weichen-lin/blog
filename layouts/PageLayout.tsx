'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
