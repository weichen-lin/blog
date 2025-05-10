'use client'

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/Dock'
import { cn } from '@/lib/utils'
import { Boxes, Home, Info, MonitorSmartphone, Moon, Notebook, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeToggle = () => {
    if (!mounted) return

    console.log({ theme, resolvedTheme })

    if (theme === 'system') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    }
  }

  if (!mounted)
    return <MonitorSmartphone className='h-5 w-5 cursor-pointer' onClick={handleThemeToggle} />

  switch (theme) {
    case 'dark':
      return <Moon className='h-5 w-5 cursor-pointer' onClick={handleThemeToggle} />
    case 'light':
      return <Sun className='h-5 w-5 cursor-pointer' onClick={handleThemeToggle} />
    case 'system':
      return <MonitorSmartphone className='h-5 w-5 cursor-pointer' onClick={handleThemeToggle} />
    default:
      return <MonitorSmartphone className='h-5 w-5 cursor-pointer' onClick={handleThemeToggle} />
  }
}

const Routes = [
  { name: 'Home', icon: <Home />, path: '/' },
  { name: 'About', icon: <Info />, path: '/about' },
  { name: 'Projects', icon: <Boxes />, path: '/projects' },
  { name: 'Blog', icon: <Notebook />, path: '/blog' },
]

export default function Footer() {
  return (
    <footer className='fixed bottom-4 left-1/2 max-w-full -translate-x-1/2'>
      <Dock
        className={cn(
          'backdrop-blur-md bg-slate-200 dark:bg-zinc-800 px-4 py-3 rounded-xl shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.17)]',
          'border border-white/20 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0.15))] items-end'
        )}
      >
        {Routes.map((route) => (
          <Link key={route.name} href={route.path}>
            <DockItem className='aspect-square bg-zinc-100 bg-radial-[at_25%_25%] rounded-xl border border-input dark:bg-zinc-800'>
              <DockLabel>{route.name}</DockLabel>
              <DockIcon>{route.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}

        <DockItem className='aspect-square bg-zinc-100 bg-radial-[at_25%_25%] rounded-xl border border-input dark:bg-zinc-800'>
          <ThemeSwitcher />
        </DockItem>
      </Dock>
    </footer>
  )
}
