'use client'

import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { useState } from 'react'

import { CalendarSkeleton } from './Skeleton'
import useContributions from './useContributions'
type selectContributionType = {
  count: number | null
  date: string | null
}

const Calendar = () => {
  const { data, isLoading } = useContributions()

  const [selectContribution, setSelectContribution] = useState<selectContributionType>({
    count: null,
    date: null,
  })

  if (isLoading) {
    return <CalendarSkeleton />
  }

  const contributionCalendar = data?.contributionsCollection?.contributionCalendar
  const colors = contributionCalendar?.colors
  const weeks = contributionCalendar?.weeks
  const months = contributionCalendar?.months

  const handleSelectContribution = (data: selectContributionType) => {
    const { count, date } = data
    setSelectContribution({ count, date })
  }

  return (
    <>
      <div className='relative flex flex-col gap-[2px]'>
        <div className='flex justify-start gap-[3px] overflow-hidden'>
          {weeks?.map((week) => (
            <div key={week.firstDay}>
              {week.contributionDays.map((contribution) => {
                const backgroundColor =
                  contribution.contributionCount > 0 ? (contribution?.color as string) : ''

                const getRandomDelayAnimate = Math.random() * week.contributionDays.length * 0.15

                return (
                  <motion.span
                    key={contribution.date}
                    initial={{ opacity: 0, translateY: -20 }}
                    animate={{
                      opacity: 1,
                      translateY: 0,
                      transition: { delay: getRandomDelayAnimate },
                    }}
                    style={{ backgroundColor }}
                    className='my-[2px] block h-[10px] w-[10px] rounded-xs bg-zinc-300 dark:bg-zinc-800'
                    onMouseEnter={() =>
                      handleSelectContribution({
                        count: contribution.contributionCount,
                        date: contribution.date,
                      })
                    }
                    onMouseLeave={() =>
                      handleSelectContribution({
                        count: null,
                        date: null,
                      })
                    }
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center gap-2 text-sm'>
          <span className='dark:text-zinc-400'>Less</span>
          <ul className='flex gap-1 pl-0'>
            <motion.li className='h-[10px] w-[10px] rounded-xs bg-zinc-300 dark:bg-zinc-800 list-none' />
            {colors?.map((color, colorIndex) => (
              <motion.li
                key={color}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: colorIndex * 0.3 },
                  backgroundColor: color,
                }}
                className='h-[10px] w-[10px] rounded-xs list-none'
              />
            ))}
          </ul>
          <span>More</span>
        </div>

        <div
          className={cn(
            selectContribution.date ? 'opacity-100' : 'opacity-0',
            'rounded-sm bg-zinc-200 px-2 text-sm dark:bg-zinc-800'
          )}
        >
          {selectContribution.count} contributions on {selectContribution.date}
        </div>
      </div>
    </>
  )
}

export default Calendar
