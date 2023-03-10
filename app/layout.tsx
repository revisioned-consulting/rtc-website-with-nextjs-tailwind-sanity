import './globals.css'
import { visbyFont, wayfinderFont } from '@/styles'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${wayfinderFont.variable} ${visbyFont.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-neutral-1">{children}</body>
    </html>
  )
}
