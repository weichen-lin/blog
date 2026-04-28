import { genPageMetadata } from 'app/seo'
import Image from '@/components/Image'
import Link from '@/components/Link'
import { BoxReveal } from '@/components/magicui/box-reveal'
import { IconCloud } from '@/components/magicui/icon-cloud'
import projectsData from '@/data/projectsData'
import PageLayout from '@/layouts/PageLayout'

export const metadata = genPageMetadata({ title: 'Projects' })

// 模擬技術圖標
const techIcons = [
  'nextjs',
  'react',
  'typescript',
  'tailwindcss',
  'framer',
  'node.js',
  'postgresql',
  'docker',
  'git',
  'aws',
  'python',
  'go',
]

// 使用網站主色調紫色 #8B5CF6 讓圖標更一致且明顯
const iconImages = techIcons.map(
  (icon) => `https://cdn.simpleicons.org/${icon}/${icon === 'nextjs' ? '8B5CF6' : '8B5CF6'}`
)

export default function Projects() {
  return (
    <PageLayout>
      <main className='mx-auto max-w-6xl py-6 md:py-12'>
        {/* 標題區 */}
        <section className='mb-8 border-l-4 border-purple-500 pl-4 md:mb-12 md:pl-6'>
          <BoxReveal boxColor='#8B5CF6' duration={0.4} width='100%'>
            <h1 className='text-3xl font-black uppercase tracking-tighter text-neutral-900 md:text-6xl dark:text-white'>
              PROJECTS<span className='text-purple-500'>.</span>
            </h1>
          </BoxReveal>
          <BoxReveal boxColor='#8B5CF6' duration={0.6} width='100%'>
            <p className='mt-3 max-w-xl text-sm font-medium leading-relaxed text-neutral-500 md:mt-4 md:text-base dark:text-neutral-400'>
              ARCHITECTURE / DEVELOPMENT / RESEARCH. 紀錄技術邊界的探索與實踐。
            </p>
          </BoxReveal>
        </section>

        {/* 技術生態核心：移除邊框，加上呼吸光暈感 */}
        <section className='relative mb-12 flex flex-col items-center justify-center md:mb-20'>
          <div className='absolute inset-0 z-0 flex items-center justify-center'>
            {/* 核心光暈效果：讓 IconCloud 看起來更有份量 */}
            <div className='h-32 w-32 rounded-full bg-purple-500/10 blur-3xl sm:h-48 sm:w-48 md:h-64 md:w-64' />
          </div>

          <div className='relative z-10 flex flex-col items-center space-y-4'>
            <h2 className='text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-purple-500 opacity-60'>
              {/* Tech Stack Array */}
            </h2>
            <div className='flex aspect-square w-full max-w-[320px] items-center justify-center overflow-visible sm:max-w-[400px] md:max-w-none md:h-80'>
              <div className='scale-[1.1] sm:scale-[1.2] md:scale-110'>
                <IconCloud images={iconImages} />
              </div>
            </div>
          </div>
        </section>

        {/* 專案列表：技術藍圖卡片 */}
        <div className='grid gap-px bg-neutral-100 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-800'>
          {projectsData.map((project, idx) => (
            <div
              key={project.title}
              className='group relative flex flex-col bg-white p-5 transition-colors hover:bg-neutral-50 md:flex-row md:items-center md:p-8 dark:bg-neutral-950 dark:hover:bg-neutral-900/50'
            >
              {/* 編號 */}
              <div className='mb-3 shrink-0 font-mono text-[10px] font-bold text-neutral-400 md:mb-0 md:w-16 md:text-xs'>
                [{String(idx + 1).padStart(2, '0')}]
              </div>

              {/* 專案內容 */}
              <div className='flex-1 space-y-2 md:space-y-3'>
                <h3 className='text-lg font-black uppercase tracking-tight text-neutral-900 md:text-xl dark:text-white'>
                  {project.title}
                </h3>
                <p className='max-w-xl text-xs leading-relaxed text-neutral-500 md:text-sm dark:text-neutral-400'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2 pt-2'>
                  <Link
                    href={project.href || '#'}
                    className='inline-flex h-8 items-center justify-center border-2 border-neutral-900 bg-neutral-900 px-4 text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-transparent hover:text-neutral-900 md:h-10 md:px-6 md:text-xs dark:border-white dark:bg-white dark:text-black dark:hover:bg-transparent dark:hover:text-white'
                  >
                    DEPLOYED_LINK
                  </Link>
                </div>
              </div>

              {/* 圖片預覽 */}
              {project.imgSrc && (
                <div className='mt-6 shrink-0 md:mt-0 md:ml-12'>
                  <div className='relative h-40 w-full overflow-hidden border border-neutral-900 bg-neutral-100 grayscale transition-all duration-500 group-hover:grayscale-0 sm:h-48 md:w-64 lg:w-80 dark:border-neutral-700 dark:bg-neutral-800'>
                    <Image
                      src={project.imgSrc}
                      alt={project.title}
                      width={320}
                      height={192}
                      className='h-full w-full object-cover opacity-80 group-hover:opacity-100'
                    />
                    <div className='absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent pointer-events-none' />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer 裝飾 */}
        <div className='mt-20 flex flex-col gap-4 border-t border-neutral-200 pt-8 font-mono text-[8px] uppercase tracking-widest text-neutral-400 sm:flex-row sm:justify-between sm:text-[10px] dark:border-neutral-800'>
          <span>Architected by Sparrowhawk</span>
          <span>© 2026 / All Systems Nominal</span>
        </div>
      </main>
    </PageLayout>
  )
}
