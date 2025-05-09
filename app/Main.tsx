import '@/css/roadCar.css'

import Header from '@/components/Header'
import Image from '@/components/Image'
import { IssueCar, PoliceCar } from '@/components/car'
import { BoxReveal } from '@/components/magicui/box-reveal'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'

export default function Home() {
  return (
    <BackgroundBeamsWithCollision className='flex-col justify-between'>
      <Header />
      <div className='flex-1 flex flex-col gap-y-6 items-start w-full justify-between mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 bg-transparent'>
        <div className='relative w-full h-[200px] road'>
          <div className='absolute top-[10%] left-[10%] w-full h-full'>
            <PoliceCar />
          </div>
          <div className='absolute top-[60%] left-[15%] w-full h-full'>
            <PoliceCar />
          </div>
          <div className='absolute top-[15%] left-[60%] w-full h-full'>
            <IssueCar />
          </div>
        </div>
        <div className='flex flex-col gap-y-4'>
          <BoxReveal boxColor={'#5046e6'} duration={0.5}>
            <p className='text-[1.5rem] font-semibold'>Full Stack Engineer at Taiwan.</p>
          </BoxReveal>

          <BoxReveal boxColor={'#5046e6'} duration={0.5}>
            <h2 className='mt-[.5rem] text-[1rem]'>
              Passionate about building high-performance and user-friendly applications.
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={'#5046e6'} duration={0.5}>
            <h2 className='mt-[.5rem] text-[1rem]'>
              Love exploring new technologies and applying them to real-world projects to solve
              complex problems.
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={'#5046e6'} duration={0.5}>
            <div className='flex items-center gap-x-4'>
              <h2 className='text-[1rem]'>Currently working at</h2>
              <Image src='/static/images/91app.png' width={100} height={50} alt='91APP' />
            </div>
          </BoxReveal>
        </div>
      </div>
      <footer className='h-[150px]'></footer>
    </BackgroundBeamsWithCollision>
  )
}
