import GravitySkills from 'app/about/gravity'
import { genPageMetadata } from 'app/seo'
import { type Authors, allAuthors } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import AuthorLayout from '@/layouts/AuthorLayout'
import PageLayout from '@/layouts/PageLayout'
import Calendar from './Calendar'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <PageLayout>
      <AuthorLayout content={mainContent}>
        <Calendar />
      </AuthorLayout>
      <div className='mt-12'>
        <GravitySkills />
      </div>
    </PageLayout>
  )
}
