import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from '@/components/Image'
import { BoxReveal } from '@/components/magicui/box-reveal'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'

export default function Home() {
  return (
    <BackgroundBeamsWithCollision className='flex-col justify-between'>
      <Header />
      <div className='size-full max-w-lg items-center justify-center overflow-hidden pt-8'>
        <BoxReveal boxColor={'#5046e6'} duration={0.5}>
          <p className='text-[1.5rem] font-semibold'>你好，我是林瑋晨</p>
        </BoxReveal>

        <BoxReveal boxColor={'#5046e6'} duration={0.5}>
          <h2 className='mt-[.5rem] text-[1rem]'>
            一位熱衷於打造高效能、使用者友善應用程式的全端工程師。
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={'#5046e6'} duration={0.5}>
          <h2 className='mt-[.5rem] text-[1rem]'>
            我喜歡探索新技術，並將它們應用於實際專案中，以解決複雜的問題。
          </h2>
        </BoxReveal>

        <BoxReveal boxColor={'#5046e6'} duration={0.5}>
          <div className='flex items-center gap-x-4'>
            <h2 className='mt-[.5rem] text-[1rem]'>目前任職於</h2>
            <Image src='/static/images/91app.png' width={100} height={50} alt='91APP' />
          </div>
        </BoxReveal>
      </div>
      <Footer />
    </BackgroundBeamsWithCollision>
  )
}
