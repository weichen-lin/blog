import Image from '@/components/Image'
import SocialIcon from '@/components/social-icons'
import type { Authors } from 'contentlayer/generated'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <>
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8'>
          <div className='flex flex-col items-center space-x-2'>
            <h3 className='pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight'>{name}</h3>
            <div className='text-gray-500 dark:text-gray-400'>
              {occupation}&nbsp;-&nbsp;{company}
            </div>
            <div className='flex space-x-3 pt-6'>
              <SocialIcon kind='mail' href={`mailto:${email}`} />
              <SocialIcon kind='github' href={github} />
              <SocialIcon kind='linkedin' href={linkedin} />
            </div>
          </div>
          <div className='prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
