import React from 'react'
import Section from '@/components/Section'
import Brand from '@/components/Brand'
import Link from 'next/link'
import Button from '@/components/Button'

export interface NavigationLinks {
  text: string
  href: string
}
export type HeaderProps = {
  links: NavigationLinks[]
}

const Header = ({ links }: HeaderProps) => {
  return (
    <Section>
      <div className="flex items-center justify-between border-b border-primary-800 pb-4">
        <Brand />
        <nav className="flex items-center space-x-6">
          {links.map(link => (
            <Link key={link.href} className="text-base text-primary-800" href={link.href}>
              {link.text}
            </Link>
          ))}
        </nav>
        <Button size="lg" text="Register for April Cohort " intent="link" variant="cta" to="/register?cohort=april" />
      </div>
    </Section>
  )
}

export default Header
