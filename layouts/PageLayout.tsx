'use client'

import Header from '@/components/Header'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 min-h-screen'>
      <Header />
      <main className='flex flex-col flex-1 pt-12'>{children}</main>
    </div>
  )
}
