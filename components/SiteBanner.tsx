import React from 'react'

export type SiteBannerProps = {}

const SiteBanner = ({}: SiteBannerProps) => {
  return (
    <div className="flex items-center justify-center bg-primary-600 py-3 text-center text-sm text-neutral-1">
      Classes start year round. Now enrolling online cohorts.
    </div>
  )
}

export default SiteBanner
