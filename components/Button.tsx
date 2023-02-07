import React, { ReactNode } from 'react'
import Link from 'next/link'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'

export type ButtonProps = {
  text: string
  icon?: ReactNode
  variant?: 'primary' | 'secondary' | 'cta'
  intent?: 'button' | 'link'
  size?: 'sm' | 'md' | 'lg'
  to?: string
}

const btn = cva(
  'inline-flex items-center rounded-full focus:outline-none border border-transparent leading-4 transition duration-150 ease',
  {
    variants: {
      variant: {
        primary: ['bg-primary-500 text-white hover:bg-primary-600'],
        secondary: [
          'border-primary-800 text-primary-700 hover:bg-primary-50 hover:text-primary-500 hover:border-primary-500',
        ],
        cta: ['border-primary-800 text-primary-700 hover:bg-primary-500 hover:text-white hover:border-transparent'],
      },
      size: {
        sm: ['py-2 px-4 text-sm'],
        md: ['py-2 px-5 text-base'],
        lg: ['py-3 px-6 text-base'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

const Wrapper = ({
  intent,
  variant,
  size,
  to,
  children,
}: Pick<ButtonProps, 'variant' | 'size' | 'intent' | 'to'> & { children: ReactNode }) => (
  <>
    {intent === 'link' ? (
      <Link href={to as string} className={btn({ variant, size })}>
        {children}
      </Link>
    ) : (
      <button type="button" className={btn({ variant, size })}>
        {children}
      </button>
    )}
  </>
)
const Content = ({ icon, text, size }: Pick<ButtonProps, 'icon' | 'text' | 'size'>) => (
  <>
    {icon && <span className={clsx('-ml-1h-5 w-5', size === 'sm' ? 'mr-2' : 'mr-2.5')}>{icon}</span>}
    {text}
  </>
)
const Button = ({ to, text, icon, intent = 'button', size = 'md', variant = 'primary' }: ButtonProps) => {
  return (
    <Wrapper intent={intent} variant={variant} size={size} to={to}>
      <Content text={text} size={size} icon={icon} />
    </Wrapper>
  )
}

export default Button
