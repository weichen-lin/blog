import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Tabs } from '@/components/ui/tabs'
import ListLayout from '@/layouts/ListLayoutWithTags'
import PageLayout from '@/layouts/PageLayout'
import CubeContainer from 'app/blog/cube-container'
import { genPageMetadata } from 'app/seo'
import { allBlogs } from 'contentlayer/generated'
import { motion } from 'motion/react'
import Image from 'next/image'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { FaAngular, FaJava, FaNodeJs, FaPython, FaReact, FaVuejs } from 'react-icons/fa'
import Preview from './gravity-preview'
import RadiatingIcons from './icons'

const POSTS_PER_PAGE = 5

const icons = [
  { id: 1, component: <FaReact size={30} color='#61DAFB' /> },
  { id: 2, component: <FaVuejs size={30} color='#4FC08D' /> },
  { id: 3, component: <FaAngular size={30} color='#DD0031' /> },
  { id: 4, component: <FaNodeJs size={30} color='#339933' /> },
  { id: 5, component: <FaPython size={30} color='#3776AB' /> },
  { id: 6, component: <FaJava size={30} color='#f89820' /> },
  // ... 可以加入更多圖標
]

const RADIUS = 100 // 圖標放射的半徑 (px)
const STAGGER_DELAY = 0.05 // 每個圖標動畫之間的延遲 (秒)
const ANIMATION_DURATION = 0.5 // 單個圖標的動畫持續時間 (秒)

export const metadata = genPageMetadata({ title: 'Blog' })

export default async function BlogPage(props: {
  searchParams: Promise<{ page: string }>
}) {
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  }

  return (
    <div className='flex flex-col justify-between h-screen'>
      <Header />
      <Preview />
      {/* <Footer /> */}
    </div>
  )
}
