'use client'

import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { BiLogoJavascript, BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi'
import { DiDjango, DiRedis } from 'react-icons/di'
import {
  FaAws,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRocket,
  FaServer,
  FaTools,
} from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'
import { GrMysql } from 'react-icons/gr'
import { HiLanguage } from 'react-icons/hi2'
import { IoLogoGithub } from 'react-icons/io'
import { MdOutlineMonitor } from 'react-icons/md'
import { RiTailwindCssFill } from 'react-icons/ri'
import {
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGin,
  SiGooglecloud,
  SiMongodb,
  SiNeo4J,
  SiNestjs,
  SiPostman,
} from 'react-icons/si'
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb'
import AnimatedTab from '@/components/AnimatedTab'
import Gravity, { MatterBody } from '@/components/gravity'
import Scaledtab from '@/components/ScaledTab'

function SkillTooltipIcon({ name, icon }: { name: string; icon: React.ReactNode }) {
  const anchorRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!isActive) return

    let frameId = 0

    const syncPosition = () => {
      const anchor = anchorRef.current
      if (anchor) {
        const rect = anchor.getBoundingClientRect()
        setTooltipPos({
          x: rect.left + rect.width / 2,
          y: rect.bottom + 10,
        })
      }
      frameId = requestAnimationFrame(syncPosition)
    }

    syncPosition()

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId)
      }
    }
  }, [isActive])

  return (
    <motion.div
      ref={anchorRef}
      className='relative inline-flex items-center justify-center'
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
      onFocusCapture={() => setIsActive(true)}
      onBlurCapture={() => setIsActive(false)}
    >
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                style={{
                  left: tooltipPos.x,
                  top: tooltipPos.y,
                }}
                className='pointer-events-none fixed z-[200] -translate-x-1/2 whitespace-nowrap rounded-md border border-slate-200/80 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100'
              >
                {name}
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
      <motion.div
        animate={isActive ? { scale: 1.08 } : { scale: 1 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 360, damping: 20 }}
        className='relative z-10'
      >
        {icon}
      </motion.div>
    </motion.div>
  )
}

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
    <div className='flex xl:flex-row flex-col items-center justify-center relative w-full'>
      <div className='flex gap-3 items-center justify-center xl:hidden -mb-12 z-10 flex-wrap w-4/5'>
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
      <div className='relative w-full mx-auto'>
        <Image
          src='/static/images/macbook.png'
          width={600}
          height={600}
          alt='macbook'
          useMap='#macscreen'
          className='aspect-square w-full'
          loading='eager'
        />
        <div className='absolute top-[32%] left-[18.5%] w-[63%] h-[34.7%] dark:bg-white'>
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
                    isDraggable={false}
                    x={`${randomX * 5}%`}
                    y={`${randomY}%`}
                  >
                    <SkillTooltipIcon name={icon.name} icon={icon.component} />
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
        className='hidden xl:flex gap-x-2'
      />
    </div>
  )
}
