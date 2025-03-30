import AuthorLayout from '@/layouts/AuthorLayout';
import { genPageMetadata } from 'app/seo';
import { type Authors, allAuthors } from 'contentlayer/generated';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import { coreContent } from 'pliny/utils/contentlayer';
import Calendar from './Calendar';
import PageLayout from '@/layouts/PageLayout';

export const metadata = genPageMetadata({ title: 'About' });

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors;
  const mainContent = coreContent(author);

  return (
    <PageLayout>
      <AuthorLayout content={mainContent}>
        <div className='w-full flex flex-col'>
          <Calendar />
        </div>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </PageLayout>
  );
}
