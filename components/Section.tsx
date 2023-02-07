import type { ReactNode } from 'react'
import clsx from 'clsx'

export type SectionProps = {
  children: ReactNode
  className?: string
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={clsx(className)}>
      <div className="px-2 lg:px-20 2xl:px-10">
        <div className="mx-auto max-w-mobile py-8 sm:max-w-tablet 2xl:max-w-desktop">{children}</div>
      </div>
    </section>
  )
}

export default Section
