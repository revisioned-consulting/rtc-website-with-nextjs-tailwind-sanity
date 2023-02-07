import HeroSection from '@/components/HeroSection'
import SiteBanner from '@/components/SiteBanner'
import Header, { NavigationLinks } from '@/components/Header'

const links: NavigationLinks[] = [
  { text: 'Home', href: '/' },
  { text: 'Program Details', href: '/cna-program' },
  { text: 'About us', href: '/about' },
]
const HomePage = () => (
  <div className="bg-primary-100">
    <SiteBanner />
    <Header links={links} />
    <HeroSection />
  </div>
)
export default HomePage
