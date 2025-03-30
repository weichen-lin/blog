import clsx from 'clsx'

interface CarUpperProps {
  carName: string
}

export default function IssueCarUpper(props: CarUpperProps) {
  const { carName } = props
  return (
    <>
      <div className='absolute w-full h-full flex items-center justify-center'>
        <div className='h-1 w-full relative'>
          <div className='absolute w-full h-full bg-yellow-100 origin-center rotate-90'></div>
          <div className='absolute w-[150%] h-full bg-yellow-100 origin-center rotate-[40deg] -translate-x-[18%]'></div>
          <div className='absolute w-[150%] h-full bg-yellow-100 origin-center rotate-[140deg] -translate-x-[18%]'></div>
        </div>
      </div>
      <div
        className={clsx(
          'bg-slate-700 flex items-center justify-center w-[80%] h-full mx-auto rounded-md z-20s'
        )}
      >
        <div
          className={clsx(
            'bg-white h-full rounded-md flex flex-col items-center justify-center rotate-[90deg]',
            'w-[55%] xs:w-[45%] sm:w-[50%]'
          )}
        >
          <div className='dark:text-black'>{carName}</div>
        </div>
      </div>
    </>
  )
}
