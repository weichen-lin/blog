import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import type React from 'react'

interface ScaledTabProps {
  icon: React.ReactNode // 接受 ReactNode 作為 icon，這樣可以使用 react-icons 或任何其他元件
  name: string
  active: boolean // 表示這個 Tab 是否被選中
  onClick: () => void // 點擊事件處理函式
}

const Scaledtab: React.FC<ScaledTabProps> = ({ icon, name, active, onClick }) => {
  return (
    <motion.button
      layout
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'flex items-center justify-center p-2 rounded-full cursor-pointer focus:outline-none transition-colors duration-200',
        active
          ? 'bg-primary text-secondary shadow-lg'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      )}
    >
      <div className='flex items-center justify-center'>{icon}</div>
      <motion.span
        layout
        initial={{ width: 0, opacity: 0, marginLeft: 0 }}
        animate={{
          width: active ? 'auto' : 0,
          opacity: active ? 1 : 0,
          marginLeft: active ? 8 : 0,
          transition: { duration: 0.3 },
        }}
        className='whitespace-nowrap overflow-hidden'
        style={{ display: 'inline-block' }}
      >
        {name}
      </motion.span>
    </motion.button>
  )
}

export default Scaledtab
