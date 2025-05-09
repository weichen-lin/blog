'use client'

import { motion } from 'motion/react'
import type React from 'react'
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiDjango } from 'react-icons/di'
import { DiRedis } from 'react-icons/di'
// 假設你有一個圖標元件陣列，例如來自 react-icons
import { FaGitAlt, FaJava, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { FaDocker } from 'react-icons/fa'
import { FaAws } from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'
import { GrMysql } from 'react-icons/gr'
import { IoLogoGithub } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiGin } from 'react-icons/si'
import { SiExpress, SiFastapi, SiFlask, SiNestjs, SiPostman } from 'react-icons/si'
import { SiMongodb, SiNeo4J } from 'react-icons/si'
import { SiGooglecloud } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbBrandReactNative } from 'react-icons/tb'

const SKILL: {
  title: string
  icons: {
    name: string
    component: React.ReactNode
  }[]
}[] = [
  {
    title: 'Languages',
    icons: [
      {
        name: 'JavaScript',
        component: <BiLogoJavascript size={45} className='text-[#F7DF1E]' />,
      },
      {
        name: 'TypeScript',
        component: <BiLogoTypescript size={45} className='text-[#007ACC]' />,
      },
      {
        name: 'Go',
        component: <FaGolang size={45} className='text-[#00ADD8]' />,
      },
      {
        name: 'Python',
        component: <FaPython size={45} className='text-[#3776AB]' />,
      },
    ],
  },
  {
    title: 'Frontend',
    icons: [
      {
        name: 'React',
        component: <FaReact size={45} className='text-[#61DAFB]' />,
      },
      {
        name: 'Next.js',
        component: <TbBrandNextjs size={45} className='text-[#000000]' />,
      },
      {
        name: 'Tailwind CSS',
        component: <RiTailwindCssFill size={45} className='text-[#06B6D4]' />,
      },
      {
        name: 'React Native',
        component: <TbBrandReactNative size={45} className='text-[#61DAFB]' />,
      },
    ],
  },
  {
    title: 'Backend',
    icons: [
      {
        name: 'Node.js',
        component: <FaNodeJs size={45} className='text-[#8CC84B]' />,
      },
      {
        name: 'NestJS',
        component: <SiNestjs size={45} className='text-[#E0234E]' />,
      },
      {
        name: 'Express',
        component: <SiExpress size={45} className='text-[#000000]' />,
      },
      {
        name: 'Gin',
        component: <SiGin size={45} className='text-[#00ADD8]' />,
      },
      {
        name: 'Django',
        component: <DiDjango size={45} className='text-[#0C4B33]' />,
      },
      {
        name: 'Flask',
        component: <SiFlask size={45} className='text-[#000000]' />,
      },
      {
        name: 'FastAPI',
        component: <SiFastapi size={45} className='text-[#009688]' />,
      },
    ],
  },
  {
    title: 'Tools',
    icons: [
      {
        name: 'Git',
        component: <FaGitAlt size={45} className='text-[#F05032]' />,
      },
      {
        name: 'GitHub',
        component: <IoLogoGithub size={45} className='text-[#181717]' />,
      },
      {
        name: 'Postman',
        component: <SiPostman size={45} className='text-[#FF6C37]' />,
      },
    ],
  },
  {
    title: 'DevOps',
    icons: [
      {
        name: 'Docker',
        component: <FaDocker size={45} className='text-[#2496ED]' />,
      },
      {
        name: 'AWS',
        component: <FaAws size={45} className='text-[#FF9900]' />,
      },
      {
        name: 'Google Cloud',
        component: <SiGooglecloud size={45} className='text-[#4285F4]' />,
      },
    ],
  },
  {
    title: 'Databases',
    icons: [
      {
        name: 'PostgreSQL',
        component: <BiLogoPostgresql size={45} className='text-[#336791]' />,
      },
      {
        name: 'MySQL',
        component: <GrMysql size={45} className='text-[#4479A1]' />,
      },
      {
        name: 'Redis',
        component: <DiRedis size={45} className='text-[#D82C20]' />,
      },
      {
        name: 'Neo4j',
        component: <SiNeo4J size={45} className='text-[#F77F20]' />,
      },
      {
        name: 'MongoDB',
        component: <SiMongodb size={45} className='text-[#47A248]' />,
      },
    ],
  },
]

// 動畫參數
const RADIUS = 100 // 圖標放射的半徑 (px)
const STAGGER_DELAY = 0.05 // 每個圖標動畫之間的延遲 (秒)
const ANIMATION_DURATION = 0.5 // 單個圖標的動畫持續時間 (秒)
const ICON_WRAPPER_PADDING = 30 // 圖標容器的額外 padding (px)，影響總寬高

interface RadiatingIconsProps {
  title: string
  icons: React.ReactNode[]
}

const RadiatingIcons = () => {
  const numIcons = SKILL[2].icons.length // 取得圖標數量

  // 容器的 Variants (與之前相同)
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: STAGGER_DELAY,
      },
    },
  }

  const iconVariants = (index) => {
    const angle = (index / numIcons) * 2 * Math.PI
    const Radius = RADIUS + Math.random() * 80

    const x = Radius * Math.cos(angle)
    const y = Radius * Math.sin(angle)
    const randomScale = 0.5 + Math.random() * 0.8 // 隨機縮放比例

    return {
      hidden: { x: 0, y: 0, scale: 0, opacity: 0 },
      visible: {
        x: x,
        y: y,
        scale: randomScale,
        opacity: 1,
        transition: {
          duration: ANIMATION_DURATION,
          ease: 'easeOut',
        },
      },
    }
  }

  // 動態計算容器寬高，使用 Tailwind 的任意值語法
  const containerSizeClass = `w-[${RADIUS * 2 + ICON_WRAPPER_PADDING * 2}px] h-[${RADIUS * 2 + ICON_WRAPPER_PADDING * 2}px]`
  //                                    ^-------------------------------^   ^-------------------------------^
  //                                     寬度 = 直徑 + 兩邊 padding       高度 = 直徑 + 兩邊 padding

  return (
    <motion.div
      // 套用 Tailwind classes
      className={`
        relative flex justify-center items-center
        mx-auto my-[50px]
        border border-dashed border-gray-300
        ${containerSizeClass}
      `}
      //   ^-------------------------------- 使用動態計算的寬高 class
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <p className='text-2xl font-bold w-[400px] text-center'>Backend</p>
      {SKILL[2].icons.map((icon, index) => (
        <motion.div
          key={icon.name}
          className='absolute flex justify-center items-center'
          variants={iconVariants(index)}
        >
          {icon.component}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default RadiatingIcons
