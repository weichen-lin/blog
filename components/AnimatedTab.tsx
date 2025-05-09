'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

interface AnimatedTabProps {
  tabs: string[]
  onChange: (index: number) => void
  className?: string
}

export default function AnimatedTab(props: AnimatedTabProps) {
  const { tabs, onChange } = props

  const [activeTab, setActiveTab] = useState(0)

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const navRef = useRef<HTMLElement | null>(null)

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  const hoveredTabRect =
    hoveredIdx !== null && tabRefs.current[hoveredIdx]
      ? tabRefs.current[hoveredIdx]?.getBoundingClientRect()
      : null

  const navRect = navRef.current?.getBoundingClientRect()

  const relativePosition =
    hoveredTabRect && navRect
      ? {
          top: hoveredTabRect.top - navRect.top,
          left: hoveredTabRect.left - navRect.left,
          width: hoveredTabRect.width,
          height: hoveredTabRect.height,
        }
      : null

  useEffect(() => {
    tabRefs.current = tabRefs.current.slice(0, tabs.length)
  }, [tabs.length])

  return (
    <nav
      ref={navRef}
      onMouseLeave={() => {
        setHoveredIdx(null)
      }}
      className={cn(
        'bg-background flex items-center border-b p-2 relative gap-x-2',
        props.className
      )}
    >
      {tabs.map((tab, index) => (
        <button
          ref={(el) => {
            tabRefs.current[index] = el
          }}
          key={tab}
          className={cn(
            'px-3 py-1.5 z-10 font-medium cursor-pointer',
            activeTab === index && 'bg-gray-200 rounded-md'
          )}
          onPointerEnter={() => setHoveredIdx(index)}
          onClick={() => {
            setActiveTab(index)
            onChange(index)
          }}
        >
          {tab}
        </button>
      ))}
      <AnimatePresence>
        {relativePosition ? (
          <motion.div
            className='absolute top-0 left-0 bg-gray-200 rounded-md pointer-events-none'
            initial={{
              top: relativePosition.top,
              left: relativePosition.left,
              width: relativePosition.width,
              height: relativePosition.height,
              opacity: 0,
            }}
            animate={{
              top: relativePosition.top,
              left: relativePosition.left,
              width: relativePosition.width,
              height: relativePosition.height,
              opacity: 1,
            }}
            exit={{
              top: relativePosition.top,
              left: relativePosition.left,
              width: relativePosition.width,
              height: relativePosition.height,
              opacity: 0,
            }}
            transition={{
              duration: 0.14,
            }}
          />
        ) : null}
      </AnimatePresence>
    </nav>
  )
}
