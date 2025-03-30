import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithTags'
import PageLayout from '@/layouts/PageLayout'
import { genPageMetadata } from 'app/seo'
import tagData from 'app/tag-data.json'
import { allBlogs } from 'contentlayer/generated'
import { slug } from 'github-slugger'
import type { Metadata } from 'next'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

const POSTS_PER_PAGE = 5

export async function generateMetadata(props: {
  params: Promise<{ tag: string }>
}): Promise<Metadata> {
  const params = await props.params
  const tag = decodeURI(params.tag)
  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged content`,
  })
}

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  return tagKeys.map((tag) => ({
    tag: encodeURI(tag),
  }))
}

export default async function TagPage(props: {
  params: Promise<{ tag: string }>
}) {
  const params = await props.params
  const tag = decodeURI(params.tag)
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags?.map((t) => slug(t)).includes(tag)))
  )
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = filteredPosts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: totalPages,
  }

  return (
    <PageLayout>
      <ListLayout
        posts={filteredPosts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title={title}
      />
    </PageLayout>
  )
}
