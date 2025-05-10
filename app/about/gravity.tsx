'use client'

import AnimatedTab from '@/components/AnimatedTab'
import Scaledtab from '@/components/ScaledTab'
import Gravity, { MatterBody } from '@/components/gravity'
import Image from 'next/image'
import { useState } from 'react'
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiDjango } from 'react-icons/di'
import { DiRedis } from 'react-icons/di'
import { FaGitAlt, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { FaDocker } from 'react-icons/fa'
import { FaAws } from 'react-icons/fa'
import { FaDatabase, FaRocket, FaServer, FaTools } from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'
import { GrMysql } from 'react-icons/gr'
import { HiLanguage } from 'react-icons/hi2'
import { IoLogoGithub } from 'react-icons/io'
import { MdOutlineMonitor } from 'react-icons/md'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiGin } from 'react-icons/si'
import { SiExpress, SiFastapi, SiFlask, SiNestjs, SiPostman } from 'react-icons/si'
import { SiMongodb, SiNeo4J } from 'react-icons/si'
import { SiGooglecloud } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { TbBrandReactNative } from 'react-icons/tb'

const SKILL: {
  title: string
  titleIcon: React.ReactNode
  icons: {
    name: string
    component: React.ReactNode
  }[]
}[] = [
  {
    title: 'Languages',
    titleIcon: <HiLanguage size={20} color='#007ACC' />,
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
    titleIcon: <MdOutlineMonitor size={20} color='#007ACC' />,
    icons: [
      {
        name: 'React',
        component: <FaReact size={45} className='text-[#007ACC]' />,
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
        component: <TbBrandReactNative size={45} className='text-[#007ACC]' />,
      },
    ],
  },
  {
    title: 'Backend',
    titleIcon: <FaServer size={20} color='#007ACC' />,
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
    titleIcon: <FaTools size={20} color='#007ACC' />,
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
    titleIcon: <FaRocket size={20} color='#007ACC' />,
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
    titleIcon: <FaDatabase size={20} color='#007ACC' />,
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

export default function GravitySkills() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className='flex items-center justify-center relative w-full lg:flex-row flex-col flex-1'>
      <div className='flex gap-x-2 items-center w-full justify-center lg:hidden'>
        {SKILL.map((e, index) => (
          <Scaledtab
            key={index}
            icon={e.titleIcon}
            name={e.title}
            active={activeTab === index}
            onClick={() => {
              setActiveTab(index)
            }}
          />
        ))}
      </div>
      <div className='relative'>
        <Image
          src='/static/images/macbook.png'
          width={600}
          height={600}
          alt='macbook'
          useMap='#macscreen'
          className='w-full h-full'
        />
        <div className='absolute top-[29%] left-[18.5%] w-[63%] h-[39.7%] dark:bg-white'>
          <div className='w-full h-full overflow-hidden'>
            <Gravity gravity={{ x: 0, y: 1 }}>
              {SKILL[activeTab].icons.map((icon, index) => {
                const randomY = Math.random() * 10 + 5
                const randomX = Math.random() * 10 + 5
                return (
                  <MatterBody
                    key={index}
                    matterBodyOptions={{
                      friction: 0.5,
                      restitution: 0.1,
                      density: 0.1,
                      isStatic: false,
                    }}
                    x={`${randomX * 5}%`}
                    y={`${randomY}%`}
                  >
                    {icon.component}
                  </MatterBody>
                )
              })}
            </Gravity>
          </div>
        </div>
      </div>
      <AnimatedTab
        tabs={SKILL.map((e) => e.title)}
        onChange={(e) => {
          setActiveTab(e)
        }}
        className='hidden lg:flex gap-x-2'
      />
    </div>
  )
}
