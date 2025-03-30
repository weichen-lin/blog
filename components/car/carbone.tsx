import clsx from 'clsx'

interface CarProps {
  carType: string
  carUpper: React.ReactNode
}

export default function CarBone(props: CarProps) {
  const { carType, carUpper } = props
  return (
    <div
      className={clsx(
        'h-12 xs:h-[52px] xs:text-lg md:h-16 md:text-2xl',
        'w-1/2 max-w-[320px] flex flex-nowrap',
        'rotate-[-1deg] car_animate'
      )}
    >
      <div
        className={clsx(
          'car rounded-md flex w-1/2 h-full',
          'before:w-[4%] after:w-[3.5%] xs:before:w-[4%] xs:after:w-[4.5%] sm:before:w-[3%] sm:after:w-[3%]',
          'before:left-0 after:right-0',
          'overflow-hidden',
          `${carType === 'police' ? 'bg-slate-600' : 'bg-yellow-400'}`
        )}
      >
        <div
          className={clsx(
            'absolute rounded-md',
            'inset-x-[8px] inset-y-1 xs:inset-x-[13px] xs:inset-y-[5px]',
            'text-sm sm:text-base md:text-lg z-20',
            `${carType === 'police' ? 'bg-slate-500' : 'bg-yellow-300'}`
          )}
        >
          {carUpper}
        </div>
      </div>
      <div className='flex flex-col w-1/2 justify-around car_light_container'>
        <div
          className={clsx(
            'w-full car_light mt-[2.5%] xs:mt-[2%] sm:-mt-[2px] animate-pulse',
            'h-[15px]'
          )}
        ></div>
        <div className={clsx('w-full car_light mb-[3%] animate-pulse', 'h-[15px] sm:mb-0')}></div>
      </div>
    </div>
  )
}
