import localFont from '@next/font/local'

export const wayfinderFont = localFont({
  src: [
    { path: './WayfinderCF-Thin.eot', weight: '100' },
    { path: './WayfinderCF-Thin.woff', weight: '100' },
    { path: './WayfinderCF-Thin.woff2', weight: '100' },
    {
      path: './WayfinderCF-Regular.eot',
      weight: '400',
    },
    {
      path: './WayfinderCF-Regular.woff',
      weight: '400',
    },
    {
      path: './WayfinderCF-Regular.woff2',
      weight: '400',
    },
    {
      path: './WayfinderCF-DemiBold.eot',
      weight: '600',
    },
    {
      path: './WayfinderCF-DemiBold.woff',
      weight: '600',
    },
    {
      path: './WayfinderCF-DemiBold.woff2',
      weight: '600',
    },
    { path: './WayfinderCF-Bold.eot', weight: '700' },
    { path: './WayfinderCF-Bold.woff', weight: '700' },
    { path: './WayfinderCF-Bold.woff2', weight: '700' },
    {
      path: './WayfinderCF-ExtraBold.eot',
      weight: '800',
    },
    {
      path: './WayfinderCF-ExtraBold.woff',
      weight: '800',
    },
    {
      path: './WayfinderCF-ExtraBold.woff2',
      weight: '800',
    },
    { path: './WayfinderCF-Heavy.eot', weight: '900' },
    { path: './WayfinderCF-Heavy.woff', weight: '900' },
    {
      path: './WayfinderCF-Heavy.woff2',
      weight: '900',
    },
    { path: './WayfinderCF-Light.eot', weight: '300' },
    { path: './WayfinderCF-Light.woff', weight: '300' },
    {
      path: './WayfinderCF-Light.woff2',
      weight: '300',
    },
  ],
  variable: '--wayfinder-font',
})
