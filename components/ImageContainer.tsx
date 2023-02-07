import React from 'react'
import Image from 'next/image'

export type ImageContainerProps = {
  src: string
  alt: string
}

const ImageContainer = ({ src, alt }: ImageContainerProps) => {
  return (
    <div className="relative h-full rounded-2xl">
      <div className="absolute inset-0 p-2.5">
        <div className="relative z-10 h-full  rounded-2xl border border-primary-100" />
      </div>
      <Image className="rounded-2xl" src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
    </div>
  )
}

export default ImageContainer
