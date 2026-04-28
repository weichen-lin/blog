import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import Header from './Header'
import SectionContainer from './SectionContainer'

interface Props {
  children: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
})

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className={`${inter.className} flex h-screen flex-col justify-between font-sans`}>
        <Header />
        <main className='mb-auto pt-14'>{children}</main>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
