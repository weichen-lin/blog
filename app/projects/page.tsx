import Card from '@/components/Card'
import projectsData from '@/data/projectsData'
import PageLayout from '@/layouts/PageLayout'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <PageLayout>
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
          <h1 className='text-xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-xl sm:leading-10 md:text-3xl md:leading-14 dark:text-gray-100'>
            Projects
          </h1>
        </div>
        <div className='container py-12'>
          <div className='-m-4 flex flex-wrap'>
            {/* {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))} */}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
