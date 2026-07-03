import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react'
import { useEffect } from 'react'
import type { SVGProps } from 'react'
import './App.css'

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`

const videos = {
  hero: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4',
  intro: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4',
  logo: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
  poster: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
  brochure: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
  cta: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4',
}

const logoAssets = {
  full: assetPath('assets/closing-gap/cg-logo-transparent.png'),
  mark: assetPath('assets/closing-gap/cg-astronaut-mark-transparent.png'),
}

const homeNavItems = [
  ['Home', '/#home'],
  ['Studio', '/#studio'],
  ['Services', '/#services'],
  ['Contact', '/#contact'],
]

const galleryNavItems = [
  ['Home', '/#home'],
  ['Studio', '/#studio'],
  ['Services', '/#services'],
  ['Gallery', '/gallery'],
  ['Contact', '/#contact'],
]

const galleryItems = [
  {
    title: 'Hireability Check Campaign',
    category: 'Career Poster',
    image: assetPath('assets/closing-gap/gallery/poster-01-hireability-check.webp'),
  },
  {
    title: 'Victors Driving School',
    category: 'Service Poster',
    image: assetPath('assets/closing-gap/gallery/poster-02-victors-confidence.webp'),
  },
  {
    title: 'Victors Motor Driving School',
    category: 'Training Poster',
    image: assetPath('assets/closing-gap/gallery/poster-03-victors-guidance.webp'),
  },
  {
    title: 'Amicus Clinic Rhinoplasty',
    category: 'Healthcare Poster',
    image: assetPath('assets/closing-gap/gallery/poster-04-amicus-clinic.webp'),
  },
  {
    title: 'SkillsMint Learning Campaign',
    category: 'Education Poster',
    image: assetPath('assets/closing-gap/gallery/poster-05-skillsmint.webp'),
  },
  {
    title: 'Franolaxy Consulting',
    category: 'Business Poster',
    image: assetPath('assets/closing-gap/gallery/poster-06-franolaxy.webp'),
  },
  {
    title: 'International Academy Study Abroad',
    category: 'Admissions Poster',
    image: assetPath('assets/closing-gap/gallery/poster-07-international-academy.webp'),
  },
  {
    title: 'DSquare Space',
    category: 'Workspace Poster',
    image: assetPath('assets/closing-gap/gallery/poster-08-dsquare-space.webp'),
  },
  {
    title: 'Little Hearts Clinic',
    category: 'Pediatric Poster',
    image: assetPath('assets/closing-gap/gallery/poster-09-little-hearts.webp'),
  },
  {
    title: 'Skynex Repair Services',
    category: 'Technology Poster',
    image: assetPath('assets/closing-gap/gallery/poster-10-skynex-repair.webp'),
  },
  {
    title: 'Elohim Game On',
    category: 'Sports Poster',
    image: assetPath('assets/closing-gap/gallery/poster-11-elohim-game-on.webp'),
  },
  {
    title: 'Baseline Tennis Academy',
    category: 'Sports Poster',
    image: assetPath('assets/closing-gap/gallery/poster-12-baseline-tennis.webp'),
  },
  {
    title: 'Lean On Elder Care',
    category: 'Care Poster',
    image: assetPath('assets/closing-gap/gallery/poster-13-lean-on-elder-care.webp'),
  },
  {
    title: 'Elohim Badminton Courts',
    category: 'Facility Poster',
    image: assetPath('assets/closing-gap/gallery/poster-14-elohim-courts.webp'),
  },
  {
    title: 'Elohim Smash Mode',
    category: 'Sports Poster',
    image: assetPath('assets/closing-gap/gallery/poster-15-elohim-smash.webp'),
  },
  {
    title: 'Happilyy Fit',
    category: 'Fitness Poster',
    image: assetPath('assets/closing-gap/gallery/poster-16-happilyy-fit.webp'),
  },
  {
    title: 'AR Handlooms',
    category: 'Fashion Poster',
    image: assetPath('assets/closing-gap/gallery/poster-17-ar-handlooms.webp'),
  },
  {
    title: 'Ramsons Jewellers',
    category: 'Jewellery Poster',
    image: assetPath('assets/closing-gap/gallery/poster-18-ramsons-jewellers.webp'),
  },
  {
    title: 'Hamara Choice Jewellers',
    category: 'Jewellery Poster',
    image: assetPath('assets/closing-gap/gallery/poster-19-hamara-choice.webp'),
  },
  {
    title: "Trisha's Pro Tennis Academy",
    category: 'Sports Poster',
    image: assetPath('assets/closing-gap/gallery/poster-20-trishas-pro-tennis.webp'),
  },
  {
    title: 'DR Tech Homes',
    category: 'Real Estate Poster',
    image: assetPath('assets/closing-gap/gallery/poster-21-dr-tech-homes.webp'),
  },
  {
    title: 'Woks Grill Biryani Offer',
    category: 'Food Poster',
    image: assetPath('assets/closing-gap/gallery/poster-22-woks-grill-biryani.webp'),
  },
  {
    title: "Mother's Kitchen Kerala Meals",
    category: 'Food Poster',
    image: assetPath('assets/closing-gap/gallery/poster-23-mothers-kitchen-kerala-meals.webp'),
  },
  {
    title: 'Magic Touch Beauty Salon',
    category: 'Beauty Poster',
    image: assetPath('assets/closing-gap/gallery/poster-24-magic-touch-salon.webp'),
  },
  {
    title: 'Romanziya Academy Admissions',
    category: 'Beauty Academy Poster',
    image: assetPath('assets/closing-gap/gallery/poster-25-romanziya-academy.webp'),
  },
  {
    title: 'Romanziya Salon Services',
    category: 'Salon Poster',
    image: assetPath('assets/closing-gap/gallery/poster-26-romanziya-services.webp'),
  },
]

const services = [
  {
    label: 'Logo & Brand Identity',
    copy: 'A mark, palette and visual system that makes your business easier to recognise.',
    video: videos.logo,
  },
  {
    label: 'Websites & Landing Pages',
    copy: 'Mobile-first pages with sharper copy, stronger trust signals and layouts built for enquiries.',
    video: videos.poster,
  },
  {
    label: 'Campaign Visual Systems',
    copy: 'Posters, flyers, banners and social creatives built around one clear message.',
    video: videos.brochure,
  },
]

const createGroups = [
  {
    title: 'Brand Identity',
    copy: 'For businesses that need to look established before the first conversation starts.',
    items: ['Logo design', 'Brand marks', 'Color systems', 'Typography direction', 'Visual guidelines'],
  },
  {
    title: 'Campaign Graphics',
    copy: 'For offers, events and launches that need a clear hook and a premium look.',
    items: ['Posters', 'Flyers', 'Brochures', 'Banners', 'Social media creatives'],
  },
  {
    title: 'Web Design',
    copy: 'For brands that need a site people can understand, trust and act on.',
    items: ['Landing pages', 'Business websites', 'Portfolio sites', 'Campaign pages', 'Mobile-first layout'],
  },
]

const processSteps = [
  {
    label: 'Brief',
    copy: 'We learn the brand, audience, offer, deadline and platform before choosing a direction.',
  },
  {
    label: 'Direction',
    copy: 'We shape the visual route: mood, typography, color, hierarchy and message.',
  },
  {
    label: 'Design',
    copy: 'We create polished visuals or pages with enough structure to feel premium and clear.',
  },
  {
    label: 'Refine',
    copy: 'We tune copy, spacing, contrast and brand rhythm until the work feels ready.',
  },
  {
    label: 'Deliver',
    copy: 'You receive final artwork, web-ready assets or a launched page built for use.',
  },
]

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number
}

function InstagramIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M7.3 2.8h9.4c2.5 0 4.5 2 4.5 4.5v9.4c0 2.5-2 4.5-4.5 4.5H7.3c-2.5 0-4.5-2-4.5-4.5V7.3c0-2.5 2-4.5 4.5-4.5Zm9.4 16.8c1.6 0 2.9-1.3 2.9-2.9V7.3c0-1.6-1.3-2.9-2.9-2.9H7.3c-1.6 0-2.9 1.3-2.9 2.9v9.4c0 1.6 1.3 2.9 2.9 2.9h9.4Z"
        fill="currentColor"
      />
      <path
        d="M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 7.3a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6ZM17 6.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function BehanceIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3.2 6h6.4c2.1 0 3.5 1.2 3.5 3 0 1-.5 1.9-1.4 2.3 1.2.4 1.9 1.4 1.9 2.8 0 2.3-1.7 3.7-4.3 3.7H3.2V6Zm5.9 4.4c1 0 1.5-.4 1.5-1.2s-.5-1.2-1.5-1.2H5.7v2.4h3.4Zm.2 5.3c1.2 0 1.8-.5 1.8-1.5s-.6-1.5-1.9-1.5H5.7v3h3.6ZM15.4 8.8h5.4v1.5h-5.4V8.8Zm2.9 2.2c2 0 3.4 1.5 3.4 3.6v.7h-5.3c.2.9.8 1.4 1.8 1.4.8 0 1.3-.3 1.7-.8l1.5 1c-.7.9-1.8 1.4-3.3 1.4-2.4 0-4-1.5-4-3.7 0-2.1 1.7-3.6 4.2-3.6Zm1.1 2.9c-.1-.8-.6-1.3-1.4-1.3s-1.4.5-1.6 1.3h3Z"
        fill="currentColor"
      />
    </svg>
  )
}

const socials = [
  { label: 'Email', icon: Mail, href: 'mailto:info@theclosinggap.net' },
  { label: 'Instagram', icon: InstagramIcon, href: 'https://www.instagram.com/' },
  { label: 'Behance', icon: BehanceIcon, href: 'https://www.behance.net/' },
]

const contactChannels = [
  { label: 'India', value: '+91 90742 94791', href: 'tel:+919074294791' },
  { label: 'UK', value: '+44 20 4615 3030', href: 'tel:+442046153030' },
]

const officeLocations = [
  {
    label: 'United Kingdom',
    address: '128 City Road, London, EC1V 2NX, United Kingdom',
  },
  {
    label: 'India',
    address: 'Pattom, Trivandrum - 695003',
  },
]

function BackgroundVideo({ src, fit = 'cover' }: { src: string; fit?: 'cover' | 'contain' }) {
  return (
    <video className={`background-video video-${fit}`} autoPlay loop muted playsInline aria-hidden="true">
      <source src={src} type="video/mp4" />
    </video>
  )
}

function SocialIcons({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={`social-icons ${mobile ? 'mobile-socials' : 'desktop-socials'}`}>
      {socials.map(({ href, icon: Icon, label }) => (
        <a className="liquid-glass social-icon" href={href} key={label} aria-label={label}>
          <Icon size={20} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}

function Header({ currentPage = 'home' }: { currentPage?: 'home' | 'gallery' }) {
  const navItems = currentPage === 'gallery' ? galleryNavItems : homeNavItems

  return (
    <header className="site-header">
      <a className="brand-lockup" href="/#home" aria-label="Closing Gap Studio home">
        <img src={logoAssets.mark} alt="" />
        <span>Closing Gap Studio</span>
      </a>
      <nav className="liquid-glass desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a className={currentPage === 'gallery' && label === 'Gallery' ? 'is-active' : undefined} href={href} key={label}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <BackgroundVideo src={videos.hero} />
      <Header />
      <div className="site-container hero-content">
        <div className="hero-copy">
          <h1>
            Graphic design
            <br />
            and websites
            <br />
            that close the
            <br />
            attention gap
          </h1>
          <span className="script-accent hero-accent">Built to be seen</span>
          <p className="hero-support">
            Premium logos, posters, websites and campaign visuals for brands that need to look sharper, faster.
          </p>
          <SocialIcons mobile />
        </div>
      </div>
      <SocialIcons />
    </section>
  )
}

function IntroSection() {
  const introCopy = [
    'Premium graphic and web design for brands that need sharper visuals, stronger campaigns and websites people remember.',
    'We turn business ideas into visual systems people can read in seconds: logos, posters, campaign creatives and websites that make a brand look ready for attention.',
    'Every piece is built to feel intentional, from the first social poster to the landing page that turns interest into enquiries.',
  ]

  const textureCopy =
    'Logos, flyers, brochures, banners and websites - designed with one job: make your brand look sharper, faster.'

  return (
    <section className="intro-section" id="studio">
      <BackgroundVideo src={videos.intro} />
      <div className="site-container intro-content">
        <div className="intro-top">
          <div className="intro-title-wrap">
            <h2>
              Hello.
              <br />
              We build the look
              <br />
              that gets remembered.
            </h2>
            <span className="script-accent intro-accent">Closing Gap</span>
          </div>
          <div className="intro-copy-block">
            {introCopy.map((copy) => (
              <p key={copy}>{copy}</p>
            ))}
          </div>
        </div>

        <div className="decorative-copy" aria-hidden="true">
          <p>{textureCopy}</p>
          <p>{textureCopy}</p>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="site-container">
        <div className="services-heading-row">
          <h2>
            Creative work
            <span>
              that <em>moves</em> the market
            </span>
          </h2>
          <a className="see-all" href="/#contact">
            <strong>Start</strong>
            <span>
              A
              <br />
              Brief
            </span>
          </a>
        </div>

        <div className="service-grid">
          {services.map(({ copy, label, video }) => (
            <article className="liquid-glass service-card" key={label}>
              <div className="service-video">
                <BackgroundVideo src={video} />
              </div>
              <div className="liquid-glass service-overlay">
                <div>
                  <span>Built for:</span>
                  <strong>{label}</strong>
                  <small>{copy}</small>
                </div>
                <a href="/#contact" aria-label={`Start a brief for ${label}`}>
                  <ChevronRight size={24} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContentDepthSection() {
  return (
    <section className="content-depth-section" aria-labelledby="content-depth-title">
      <div className="site-container content-depth-grid">
        <div className="content-depth-intro">
          <span className="section-kicker">What we create</span>
          <h2 id="content-depth-title">Design assets for every moment your audience meets you.</h2>
          <p>
            Closing Gap Studio builds the pieces a growing brand needs day to day: the mark people notice, the
            poster that stops the scroll, the website that makes the business feel real, and the campaign visuals
            that keep the message consistent.
          </p>
        </div>

        <div className="create-group-list">
          {createGroups.map(({ copy, items, title }) => (
            <article className="create-group" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="site-container process-block">
        <div className="process-heading">
          <span className="section-kicker">How we work</span>
          <h2>Brief in. Direction out. Design sharpened until it feels ready.</h2>
          <p>
            The process stays simple: understand the goal, define the look, build the first direction, refine the
            details, and deliver files or pages ready to use.
          </p>
        </div>

        <div className="process-steps">
          {processSteps.map(({ copy, label }, index) => (
            <article className="process-step" key={label}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{label}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="cta-section">
      <BackgroundVideo src={videos.cta} fit="contain" />
      <div className="cta-text">
        <span className="script-accent cta-accent">Start sharp</span>
        <h2>
          <span>Bring the idea.</span>
          <span>We'll shape the look.</span>
          <span>Launch the website.</span>
          <span>Move the market.</span>
        </h2>
      </div>
    </section>
  )
}

function ContactDetailsSection() {
  return (
    <section className="contact-details-section" id="contact">
      <div className="liquid-glass cta-contact-panel" aria-label="Closing Gap Studio contact details">
        <div className="contact-panel-header">
          <span>Offices in India & UK</span>
          <strong>Contact</strong>
          <p>
            Send us your brand name, poster idea, launch offer or website goal. We'll help shape the next step and
            the right creative direction.
          </p>
        </div>

        <div className="contact-channel-grid">
          {contactChannels.map(({ href, label, value }) => (
            <a className="contact-channel" href={href} key={label}>
              <Phone size={18} aria-hidden="true" />
              <span>{label}</span>
              <strong>{value}</strong>
            </a>
          ))}
          <a className="contact-channel contact-channel-wide" href="mailto:info@theclosinggap.net">
            <Mail size={18} aria-hidden="true" />
            <span>Email</span>
            <strong>info@theclosinggap.net</strong>
          </a>
        </div>

        <div className="office-list" aria-label="Office locations">
          {officeLocations.map(({ address, label }) => (
            <div className="office-item" key={label}>
              <MapPin size={18} aria-hidden="true" />
              <span>{label}</span>
              <p>{address}</p>
            </div>
          ))}
        </div>

        <div className="contact-social-row" aria-label="Social links">
          {socials.slice(1).map(({ href, icon: Icon, label }) => (
            <a href={href} key={label} aria-label={label}>
              <Icon size={18} aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryPage() {
  return (
    <div className="site-shell gallery-shell">
      <div className="texture-overlay" aria-hidden="true" />
      <Header currentPage="gallery" />
      <main>
        <section className="gallery-hero">
          <div className="site-container gallery-hero-inner">
            <div>
              <img className="gallery-logo" src={logoAssets.full} alt="Closing Gap Studio" />
              <h1>
                Poster work
                <span>that proves the studio</span>
              </h1>
            </div>
            <p>
              A selected gallery of posters, flyers and campaign creatives across healthcare, education, sports,
              jewellery, food, beauty, real estate, lifestyle and service brands.
            </p>
          </div>
        </section>

        <section className="gallery-work-section" aria-label="Poster gallery">
          <div className="site-container gallery-grid">
            {galleryItems.map((item, index) => (
              <a className="gallery-item" href={item.image} target="_blank" rel="noreferrer" key={item.title}>
                <img
                  src={item.image}
                  alt={`${item.title} poster design`}
                  loading={index < 6 ? 'eager' : 'lazy'}
                />
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.category}</small>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="gallery-cta">
          <div className="site-container gallery-cta-inner">
            <h2>
              Need posters,
              <br />
              banners or a website?
            </h2>
            <a className="proof-link" href="/#contact">
              Start a design brief
              <ChevronRight size={18} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

function App() {
  const pathname = window.location.pathname.toLowerCase()
  const isGalleryPage = pathname.endsWith('/gallery') || pathname.endsWith('/gallery.html')

  useEffect(() => {
    if (!window.location.hash) {
      return
    }

    const target = document.getElementById(window.location.hash.slice(1))
    if (!target) {
      return
    }

    requestAnimationFrame(() => target.scrollIntoView({ block: 'start', behavior: 'auto' }))
  }, [isGalleryPage])

  if (isGalleryPage) {
    return <GalleryPage />
  }

  return (
    <div className="site-shell">
      <div className="texture-overlay" aria-hidden="true" />
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <ContentDepthSection />
        <CtaSection />
        <ContactDetailsSection />
      </main>
    </div>
  )
}

export default App
