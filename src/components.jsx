import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Instagram, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { images } from './data'

const MotionLink = motion.create(Link)
const reveal = {
  initial: { opacity: 1, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

export function StudioImage({ src, alt, loading = 'lazy', sizes = '100vw', imageStyle, imageClassName = '' }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const srcSet = src.includes('images.unsplash.com')
    ? [640, 960, 1280, 1600, 2200].map((width) => `${src.replace(/w=\d+/, `w=${width}`)} ${width}w`).join(', ')
    : undefined
  return <span className={`studio-image ${loaded ? 'is-loaded' : ''} ${failed ? 'is-failed' : ''}`}>
    <img className={imageClassName} src={src} srcSet={srcSet} sizes={sizes} style={imageStyle} alt={alt} loading={loading} decoding="async" onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />
    {!loaded && !failed && <span className="studio-image-loader" aria-hidden="true" />}
    {failed && <span className="studio-image-fallback" role={alt ? 'img' : undefined} aria-label={alt || undefined} aria-hidden={alt ? undefined : true}><strong>DESIGN SPOT</strong><small>IMAGE TEMPORARILY UNAVAILABLE</small></span>}
  </span>
}

export function Brand({ light = false }) {
  return <Link to="/" className={`brand ${light ? 'brand-light' : ''}`} aria-label="Design Spot home">
    <span className="brand-mark">d<span>.</span></span>
    <span className="brand-copy"><strong>DESIGN SPOT</strong><small>INTERIOR STUDIO</small></span>
  </Link>
}

export function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Projects', '/projects'], ['Our Process', '/our-process'], ['Contact', '/contact'],
  ]
  return <header className="site-header">
    <div className="header-inner">
      <Brand />
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>)}
      </nav>
      <Link to="/contact" className="header-cta">LET’S TALK <ArrowUpRight size={14} /></Link>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
    </div>
    <AnimatePresence>
      {open && <motion.nav className="mobile-nav" aria-label="Mobile navigation" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
        {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16} /></NavLink>)}
        <Link to="/contact" className="mobile-consult" onClick={() => setOpen(false)}>Book a consultation <ArrowRight size={16} /></Link>
      </motion.nav>}
    </AnimatePresence>
  </header>
}

export function Footer() {
  return <footer className="footer">
    <div className="footer-top">
      <div><Brand light /><p className="footer-note">Spaces with a point of view.<br />Made with intention in Faisalabad.</p></div>
      <div className="footer-col"><span className="footer-label">EXPLORE</span><Link to="/about">Our studio</Link><Link to="/services">What we do</Link><Link to="/projects">Selected work</Link><Link to="/before-after">Before & after</Link><Link to="/testimonials">Client stories</Link><Link to="/our-process">Our process</Link></div>
      <div className="footer-col"><span className="footer-label">SAY HELLO</span><a href="tel:+923018040000">+92 301 8040000</a><a href="https://wa.me/923018040000" target="_blank" rel="noreferrer">WhatsApp us</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a></div>
      <div className="footer-address"><span className="footer-label">FIND THE STUDIO</span><p>Millat Road, opposite Askari Bank,<br />Ashrafabad, Faisalabad, Pakistan</p><a href="https://maps.google.com/?q=Millat+Road+Ashrafabad+Faisalabad" target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowUpRight size={13} /></a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Design Spot. Made for living.</span><span>FAISALABAD, PAKISTAN</span><a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={16} /></a></div>
  </footer>
}

export function WhatsAppButton() {
  return <a className="whatsapp-float" href="https://wa.me/923018040000?text=Hello%20Design%20Spot%2C%20I%27d%20love%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" aria-label="Chat with Design Spot on WhatsApp">
    <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.02 3C8.85 3 3.02 8.82 3.02 16c0 2.3.6 4.55 1.75 6.54L3 29l6.62-1.74A12.94 12.94 0 0 0 16.02 29C23.2 29 29.02 23.17 29.02 16S23.2 3 16.02 3Zm0 23.7a10.7 10.7 0 0 1-5.45-1.49l-.39-.23-3.93 1.03 1.05-3.83-.25-.4A10.7 10.7 0 1 1 16.02 26.7Zm5.88-8.02c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.26-.19.22-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.84-1.59-1.89-1.78-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55l-.62-.01c-.22 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.69 0 1.58 1.16 3.12 1.32 3.34.16.21 2.28 3.48 5.53 4.88.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.1 1.9-.78 2.17-1.54.27-.75.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38Z" /></svg>
  </a>
}

export function Eyebrow({ children, light = false }) {
  return <span className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><i />{children}</span>
}

export function PageIntro({ eyebrow, title, text, image, imageAlt, variant = 'standard' }) {
  return <motion.section className={`page-intro page-intro-${variant}`} {...reveal}>
    <div className="page-intro-copy"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1>{text && <p>{text}</p>}</div>
    {image && <div className="page-intro-image"><StudioImage src={image} alt={imageAlt || ''} sizes="(max-width: 760px) 100vw, 40vw" loading="eager" /></div>}
  </motion.section>
}

export function SectionHeading({ eyebrow, title, text, link, to = '/projects', light = false }) {
  return <div className={`section-heading ${light ? 'section-heading-light' : ''}`}>
    <motion.div {...reveal}><Eyebrow light={light}>{eyebrow}</Eyebrow><h2>{title}</h2></motion.div>
    <motion.div className="section-heading-side" {...reveal}>{text && <p>{text}</p>}{link && <Link className="text-link" to={to}>{link}<ArrowRight size={15} /></Link>}</motion.div>
  </div>
}

export function ImageCard({ project, index = 0, to = '/projects' }) {
  const content = <>
    <div className="project-image"><StudioImage src={project.image} alt={`${project.title} interior project`} sizes="(max-width: 540px) 100vw, (max-width: 760px) 65vw, 55vw" loading={index > 2 ? 'lazy' : 'eager'} />{to && <span className="project-open"><ArrowUpRight size={19} /></span>}</div>
    <div className="project-info"><div><span className="project-type">{project.type} · {project.location}</span><h3>{project.title}</h3></div>{to && <ArrowUpRight className="project-arrow" size={18} />}</div>
  </>
  return to
    ? <MotionLink to={to} className={`project-card ${project.size === 'large' ? 'project-card-large' : ''}`} {...reveal}>{content}</MotionLink>
    : <motion.article className={`project-card ${project.size === 'large' ? 'project-card-large' : ''}`} {...reveal}>{content}</motion.article>
}

export function ServiceRow({ service }) {
  return <MotionLink to={service.href} className="service-row" {...reveal}>
    <span className="service-number">{service.number}</span><div className="service-row-image"><StudioImage src={service.image} alt="" sizes="100px" /></div>
    <div className="service-row-copy"><h3>{service.title}</h3><p>{service.text}</p></div><ArrowUpRight className="service-row-arrow" size={22} />
  </MotionLink>
}

export function CtaBand({ title = 'Let’s make room for something wonderful.', text = 'Tell us what you’re imagining. We’ll take it from there.', image = images.detail }) {
  return <motion.section className="cta-band" style={{ backgroundImage: `linear-gradient(90deg, rgba(28,27,24,.76), rgba(28,27,24,.28)), url("${image}")` }} {...reveal}>
    <div><Eyebrow light>YOUR NEXT CHAPTER</Eyebrow><h2>{title}</h2><p>{text}</p><Link to="/contact" className="button button-light">Start a conversation <ArrowUpRight size={16} /></Link></div>
  </motion.section>
}
