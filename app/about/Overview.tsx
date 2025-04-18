'use client'

import NumberTicker from '@/components/ui/number-ticker'
import useContributions from './useContributions'

import { OverviewSkeleton } from './Skeleton'

const Overview = () => {
  const { isLoading, data } = useContributions()

  if (isLoading) {
    return <OverviewSkeleton />
  }

  if (!data) {
    return null
  }

  const contributionCalendar = data?.contributionsCollection?.contributionCalendar
  const weeks = contributionCalendar?.weeks
  const totalContributions = contributionCalendar?.totalContributions

  const totalThisWeekContribution =
    weeks?.[weeks?.length - 1]?.contributionDays
      ?.map((item) => item.contributionCount)
      ?.reduce((previousValue, currentValue) => previousValue + currentValue, 0) ?? 0

  const totalContributionList = weeks?.flatMap((week) =>
    week.contributionDays.map((contributionDay) => contributionDay.contributionCount)
  )

  const bestContribution = Math.max(...totalContributionList)
  const averageContribution = (totalContributions || 0) / totalContributionList.length

  const overviews = [
    {
      title: 'Total',
      value: totalContributions ?? 0,
    },
    {
      title: 'This Week',
      value: totalThisWeekContribution ?? 0,
    },
    {
      title: 'Best Day',
      value: bestContribution ?? 0,
    },
    {
      title: 'Daily Average',
      value: averageContribution ?? 0,
    },
  ]

  return (
    <div className='grid grid-cols-2 gap-2 py-2 md:grid-cols-4'>
      {overviews.map((item) => (
        <div
          key={item.title}
          className='flex flex-col rounded-xl bg-zinc-100 px-4 py-2 shadow-md dark:bg-zinc-900'
        >
          <span className='text-sm dark:text-zinc-400'>{item.title}</span>
          <NumberTicker
            className='text-2xl font-bold text-green-600 dark:text-green-600'
            value={item.value}
          />
        </div>
      ))}
    </div>
  )
}

export default Overview
