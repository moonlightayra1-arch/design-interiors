import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Instagram, MoveHorizontal, Quote, Send, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { CtaBand, Eyebrow, Footer, Header, ImageCard, PageIntro, SectionHeading, ServiceRow, StudioImage, WhatsAppButton } from './components'
import { images, projects, services } from './data'

const pageMeta = {
  '/': ['Design Spot — Spaces with a point of view', 'Thoughtful interior design for homes and businesses in Faisalabad. Discover the Design Spot approach to spaces made for living.'],
  '/about': ['About the Studio — Design Spot', 'Meet Design Spot, an independent interior design studio in Faisalabad creating thoughtful, enduring places.'],
  '/services': ['Interior Design Services — Design Spot', 'From the first sketch to the finishing touches, explore interior design and turnkey services from Design Spot.'],
  '/residential-interiors': ['Residential Interiors — Design Spot', 'Personal, considered interior design for homes in Faisalabad. Spaces designed around how you really live.'],
  '/commercial-interiors': ['Commercial Interiors — Design Spot', 'Distinctive commercial interiors that bring your brand and people together. Based in Faisalabad, Pakistan.'],
  '/projects': ['Selected Projects — Design Spot', 'Explore residential and commercial interior projects by Design Spot in Faisalabad.'],
  '/before-after': ['Before & After — Design Spot', 'See how considered interior design can transform the spaces you already have.'],
  '/our-process': ['Our Process — Design Spot', 'A clear, collaborative interior design process, from the first conversation to the final styling.'],
  '/testimonials': ['Client Stories — Design Spot', 'Kind words from the clients who have made Design Spot part of their spaces.'],
  '/contact': ['Contact Design Spot — Faisalabad', 'Start a conversation about your interior design project with Design Spot in Faisalabad, Pakistan.'],
}

function usePageMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const [title, description] = pageMeta[pathname] || ['Design Spot — Interior Studio', 'Thoughtful interiors, made in Faisalabad.']
    document.title = title
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = description
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
}

function Home() {
  return <>
    <section className="hero">
      <img className="hero-image" src={images.hero} srcSet={[960, 1440, 1920, 2200].map((width) => `${images.hero.replace(/w=\d+/, `w=${width}`)} ${width}w`).join(', ')} sizes="100vw" alt="Warm, layered contemporary living room designed for gathering" fetchpriority="high" decoding="async" />
      <div className="hero-shade" />
      <motion.div className="hero-content" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .12, ease: [0.22, 1, 0.36, 1] }}><Eyebrow light>INTERIORS, THOUGHTFULLY MADE</Eyebrow><h1>Transforming spaces<br />into <em>timeless</em> experiences.</h1><p>Spaces should feel like you. We bring considered design and thoughtful details together to create places that feel like they’ve always been yours.</p><div className="hero-actions"><Link to="/projects" className="button button-light">Explore our projects <ArrowUpRight size={16} /></Link><Link to="/contact" className="hero-secondary">Get a consultation <ArrowRight size={15} /></Link></div></motion.div>
      <div className="hero-bottom"><span>INTERIOR DESIGN · FAISALABAD, PAKISTAN</span><a href="#intro">SCROLL TO EXPLORE <ArrowRight size={14} /></a><span>EST. WITH INTENTION</span></div>
    </section>
    <section className="home-intro section-pad" id="intro"><div className="intro-index">01 / THE STUDIO</div><div className="intro-main"><Eyebrow>A MORE PERSONAL APPROACH</Eyebrow><h2>Good design isn’t just seen.<br /><em>It’s felt.</em></h2></div><div className="intro-copy"><p>We’re an independent interior studio in Faisalabad, creating thoughtful places for the everyday and the once-in-a-lifetime. Every project starts with listening—and ends with a space that feels unmistakably yours.</p><Link to="/about" className="text-link">A little about us <ArrowRight size={15} /></Link></div></section>
    <section className="featured-section section-pad"><SectionHeading eyebrow="A FEW RECENT FAVOURITES" title={<>Spaces that stay<br /><em>with you.</em></>} text="Every space has a story. Here are a few we’ve been lucky enough to help tell." link="View all projects" /><div className="project-grid home-projects">{projects.slice(0, 3).map((project, index) => <ImageCard key={project.title} project={{ ...project, size: index === 0 ? 'large' : '' }} index={index} />)}</div></section>
    <section className="services-section section-pad"><SectionHeading eyebrow="WHAT WE DO" title={<>A thoughtful space<br />for <em>every story.</em></>} text="From a single room refresh to an entire new build, we bring the same care to every detail." link="Explore our services" to="/services" /><div className="service-list">{services.slice(0, 3).map((service) => <ServiceRow key={service.number} service={service} />)}</div></section>
    <section className="statement-section"><div className="statement-image"><StudioImage src={images.detail} alt="Sculptural detail and considered materials in a contemporary interior" sizes="(max-width: 760px) 100vw, 50vw" /></div><div className="statement-copy"><Eyebrow>WHY DESIGN SPOT</Eyebrow><h2>Thoughtful by nature.<br /><em>Personal by design.</em></h2><p>We believe the best interiors don’t chase a moment. They make room for the things that matter: the morning light, a long dinner, the everyday rituals that make a house a home.</p><ul><li><Check size={15} /> Design rooted in how you live</li><li><Check size={15} /> Enduring materials, considered choices</li><li><Check size={15} /> One thoughtful team, start to finish</li></ul><Link to="/about" className="text-link">Discover our point of view <ArrowRight size={15} /></Link></div></section>
    <section className="home-process section-pad"><div className="process-head"><Eyebrow>GOOD THINGS TAKE SHAPE</Eyebrow><h2>A clear path to<br /><em>somewhere beautiful.</em></h2><Link to="/our-process" className="text-link">How we work <ArrowRight size={15} /></Link></div><div className="process-steps">{[['01','Listen','We start with your people, your place and what matters most.'],['02','Imagine','Ideas become a considered concept, built around you.'],['03','Make','Every detail is brought to life, with care at each step.']].map(([n,t,d]) => <div className="process-step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></section>
    <section className="quote-band"><Quote size={24} /><blockquote>“The best rooms have something to say about the people who live in them.”</blockquote><span>A NOTE WE KEEP COMING BACK TO</span></section>
    <CtaBand title="A good space changes everything." text="Let’s talk about what your space could become." />
  </>
}

function About() {
  return <>
    <PageIntro eyebrow="A STUDIO WITH A POINT OF VIEW" title={<>A little less noise.<br /><em>A lot more meaning.</em></>} text="Design Spot is an independent interior design studio in Faisalabad. We create places that look considered, feel personal and make everyday life a little more beautiful." image={images.dining} imageAlt="Sunlit dining room with natural materials" />
    <section className="about-belief section-pad"><div className="intro-index">OUR POINT OF VIEW</div><div><Eyebrow>DESIGN THAT FEELS LIKE YOU</Eyebrow><h2>We don’t believe in rooms that could belong to <em>anyone.</em></h2></div><div className="about-belief-copy"><p>Our work begins long before a material is chosen or a line is drawn. It begins with a conversation: how you gather, what you reach for, what you want to feel when you walk through the door.</p><p>From there, we make space for the details that matter—honest materials, thoughtful light and a quiet sense of balance. Never more for the sake of more.</p></div></section>
    <section className="about-image-strip"><StudioImage src={images.lounge} alt="Warm residential lounge with sculptural contemporary furniture" sizes="100vw" /><div><span>MADE FOR THE MOMENTS IN BETWEEN</span><p>Quietly distinctive.<br /><em>Entirely yours.</em></p></div></section>
    <section className="values-section section-pad"><SectionHeading eyebrow="WHAT WE BELIEVE" title={<>The things we<br /><em>come back to.</em></>} /><div className="values-grid">{[['01','Listen first','A good brief is built on real conversation, trust and a little curiosity.'],['02','Choose with care','Materials, makers and details should earn their place.'],['03','Make it last','A considered room doesn’t need to be remade every season.'],['04','Stay personal','Your space should tell your story, not follow somebody else’s.']].map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
    <CtaBand title="Let’s make something that feels like you." image={images.kitchen} />
  </>
}

function Services() {
  return <>
    <PageIntro eyebrow="THOUGHTFUL FROM THE FIRST SKETCH" title={<>Design that does<br /><em>more than look good.</em></>} text="A considered process, the right people and a clear point of view—brought to your project, wherever you’re starting from." image={images.detail} imageAlt="Tactile natural stone and warm oak materials" />
    <section className="services-page-list section-pad"><SectionHeading eyebrow="OUR SERVICES" title={<>One studio.<br /><em>Every detail.</em></>} text="Bring us a blank canvas, a room that needs a rethink, or simply the beginning of an idea." /><div className="service-list">{services.map((service) => <ServiceRow key={service.number} service={service} />)}</div></section>
    <section className="services-note"><div><Eyebrow>NOT SURE WHERE TO START?</Eyebrow><h2>That’s a perfectly<br /><em>good place to start.</em></h2></div><p>Tell us what you’re working on. We’ll help you work out what kind of support makes sense, with no pressure and no design jargon.</p><Link to="/contact" className="button button-dark">Let’s talk it through <ArrowUpRight size={16} /></Link></section>
    <CtaBand title="A good project starts with a conversation." />
  </>
}

function Specialty({ commercial = false }) {
  const title = commercial ? 'Commercial interiors' : 'Residential interiors'
  const kicker = commercial ? 'SPACES THAT WORK HARDER' : 'ROOM TO LIVE A LITTLE'
  const intro = commercial
    ? 'From the first impression to the last detail, we design thoughtful places for people to work, gather, stay and return.'
    : 'A home should feel like a deep breath. We create thoughtful, personal spaces for the everyday moments and the ones worth celebrating.'
  const items = commercial
    ? [['Workplaces','Places that make focus, collaboration and a little inspiration feel natural.',images.office],['Hospitality','Welcoming spaces that make people want to stay for one more.',images.commercial],['Retail & studios','A distinct point of view, carried through every customer touchpoint.',images.workroom]]
    : [['Whole-home design','One clear story, carried thoughtfully from room to room.',images.living],['Room transformations','A fresh perspective for the rooms you live in most.',images.bedroom],['New-build interiors','The chance to get every considered detail right from the start.',images.kitchen]]
  return <>
    <PageIntro eyebrow={kicker} title={commercial ? <>Spaces with purpose.<br /><em>And a point of view.</em></> : <>A little more you,<br /><em>in every room.</em></>} text={intro} image={commercial ? images.office : images.living} imageAlt={commercial ? 'Contemporary workplace with warm natural finishes' : 'Relaxed living room with layered natural materials'} />
    <section className="specialty-intro section-pad"><Eyebrow>{commercial ? 'THE WORK, AT ITS BEST' : 'HOME, IN YOUR OWN WORDS'}</Eyebrow><h2>{commercial ? <>When a space works beautifully,<br /><em>people feel the difference.</em></> : <>The best rooms feel like<br /><em>they could only be yours.</em></>}</h2><p>{commercial ? 'We take the time to understand your business, your people and what you want customers to experience. Then we bring it all together in a space that works as beautifully as it looks.' : 'Good residential design isn’t about having more. It’s about making thoughtful choices around the way you live—and creating a sense of ease you can feel the moment you come home.'}</p></section>
    <section className="specialty-offerings section-pad">{items.map(([name, desc, image], index) => <article key={name} className={`offering ${index % 2 ? 'offering-reverse' : ''}`}><StudioImage src={image} alt={`${name} interior design`} sizes="(max-width: 540px) 100vw, 55vw" /><div><span>0{index + 1} / {commercial ? 'COMMERCIAL' : 'RESIDENTIAL'}</span><h3>{name}</h3><p>{desc}</p><Link to="/contact" className="text-link">Talk about your project <ArrowRight size={15} /></Link></div></article>)}</section>
    <CtaBand title={commercial ? 'A better space starts with a better conversation.' : 'Let’s make home feel even more like home.'} image={commercial ? images.commercial : images.bedroom} />
  </>
}

function Projects() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter((project) => project.type === filter)
  return <>
    <PageIntro eyebrow="A SELECTION OF OUR WORK" title={<>Spaces with stories<br /><em>worth coming home to.</em></>} text="A growing collection of places made with thought, intention and the people who bring them to life." />
    <section className="gallery-section section-pad"><div className="gallery-toolbar"><span>{String(filtered.length).padStart(2, '0')} PROJECTS</span><div className="filter-tabs" role="group" aria-label="Filter projects">{['All', 'Residential', 'Commercial'].map((option) => <button key={option} className={filter === option ? 'active' : ''} onClick={() => setFilter(option)} aria-pressed={filter === option}>{option}</button>)}</div><Link to="/before-after" className="text-link gallery-before-after">See before & after <ArrowRight size={14} /></Link></div><div className="project-grid gallery-grid">{filtered.map((project, index) => <ImageCard key={project.title} project={project} index={index} to={null} />)}</div></section>
    <CtaBand title="Have a space in mind?" text="We’d love to hear what you’re imagining." />
  </>
}

function BeforeAfter() {
  const [position, setPosition] = useState(52)
  return <>
    <PageIntro eyebrow="A DIFFERENT WAY OF SEEING A SPACE" title={<>Same four walls.<br /><em>A whole new feeling.</em></>} text="Good design doesn’t always mean starting over. Sometimes it’s about seeing what’s already there with fresh eyes." />
    <section className="before-after-section section-pad"><div className="ba-copy"><Eyebrow>THE TRANSFORMATION</Eyebrow><h2>From overlooked<br />to <em>lived-in lovely.</em></h2><p>A home can hold good bones and still feel a little out of step. With a clearer palette, considered pieces and a better relationship with light, familiar spaces can begin to feel completely new.</p><span className="ba-caption">A DESIGN STUDY · RESIDENTIAL INTERIORS</span></div><div className="comparison-wrap">
      <div className="comparison" style={{ '--split': `${position}%` }}>
        <StudioImage src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1300&q=85" sizes="(max-width: 760px) 100vw, 65vw" alt="Finished warm contemporary living room after interior redesign" loading="eager" />
        <div className="comparison-before"><StudioImage imageStyle={{ width: `${10000 / position}%` }} src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1300&q=85" sizes="(max-width: 760px) 100vw, 65vw" alt="Living room before the interior redesign" loading="eager" /></div>
        <span className="comparison-label label-before">BEFORE</span><span className="comparison-label label-after">AFTER</span>
        <div className="comparison-divider" style={{ left: `${position}%` }}><span><MoveHorizontal size={17} /></span></div>
        <input aria-label="Drag to compare before and after" type="range" min="5" max="95" value={position} onChange={(event) => setPosition(Number(event.target.value))} />
      </div><span className="comparison-hint"><MoveHorizontal size={14} /> DRAG TO REVEAL</span></div></section>
    <section className="ba-note"><Sparkles size={20} /><p>A transformation is about more than the reveal.<br /><em>It’s how the room feels on an ordinary Tuesday.</em></p></section>
    <CtaBand title="Ready to see your space differently?" />
  </>
}

function Process() {
  const steps = [
    ['01','A good conversation','We start by getting to know you, your space and what you hope it can become. We’ll talk about the practical things, the feeling you’re after and how you want the process to work.'],
    ['02','A considered direction','We translate what we’ve heard into a clear design direction: the mood, the materials, the layout and the details that make the whole thing feel like you.'],
    ['03','Plans into a plan','Once the direction feels right, we bring the details together—drawings, finishes and the practical decisions that let everyone move forward with confidence.'],
    ['04','Made with care','We stay close as the design takes shape, helping bring each considered choice together and making space for the details that matter.'],
    ['05','The final feeling','The last layer is the one you live with: considered finishing touches, a final walkthrough and a space that feels ready to be yours.'],
  ]
  return <>
    <PageIntro eyebrow="CLEAR, COLLABORATIVE, CONSIDERED" title={<>Good design is a journey.<br /><em>Here’s how we make it.</em></>} text="A thoughtful process makes room for better ideas. We keep it personal, transparent and clear from first hello to final detail." image={images.workroom} imageAlt="Interior design studio workspace with samples and natural light" />
    <section className="process-page section-pad"><div className="process-page-aside"><Eyebrow>FROM HELLO TO HOME</Eyebrow><p>Every project is different. The care we bring to it stays the same.</p><Link to="/contact" className="text-link">Start with a conversation <ArrowRight size={15} /></Link></div><div className="process-timeline">{steps.map(([n,t,d]) => <article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>
    <section className="process-callout"><StudioImage src={images.detail} alt="Close detail of layered natural materials" sizes="(max-width: 760px) 100vw, 50vw" /><div><Eyebrow>ALWAYS A REAL PERSON, ALWAYS A CLEAR NEXT STEP</Eyebrow><h2>Questions along the way?<br /><em>That’s what we’re here for.</em></h2><Link to="/contact" className="button button-dark">Get in touch <ArrowUpRight size={16} /></Link></div></section>
    <CtaBand title="Your project has a starting point. Let’s find it." />
  </>
}

function Testimonials() {
  return <>
    <PageIntro eyebrow="A NOTE FROM THE PEOPLE WHO LIVE IT" title={<>A space is one thing.<br /><em>How it makes you feel is another.</em></>} text="We’re grateful to be invited into the process—and even more grateful when clients share what it meant to them." />
    <section className="testimonial-honesty"><span>01 / A NOTE ON REVIEWS</span><p>We’re a growing independent studio, and we don’t publish client quotes without their permission. This page will grow as our clients choose to share their stories.</p></section>
    <section className="testimonial-feature"><StudioImage src={images.living} alt="Inviting living space with natural light" sizes="(max-width: 540px) 100vw, 50vw" /><div><Quote size={25} /><blockquote>Every project is a conversation, a collaboration and a chance to make something personal. That’s the part of this work we value most.</blockquote><span>THE DESIGN SPOT STUDIO</span></div></section>
    <section className="testimonial-bottom section-pad"><Eyebrow>HAVE A STORY TO SHARE?</Eyebrow><h2>We’d love to<br /><em>hear from you.</em></h2><p>If you’ve worked with Design Spot and would like to share a few words, we’d be honoured.</p><a href="https://wa.me/923018040000?text=Hello%20Design%20Spot%2C%20I%27d%20like%20to%20share%20some%20feedback." className="text-link">Share your experience <ArrowRight size={15} /></a></section>
    <CtaBand title="Your space could be our next story." />
  </>
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [whatsappUrl, setWhatsappUrl] = useState('')
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const phone = form.elements.namedItem('phone')
    phone.setCustomValidity(/^[+0-9() .-]{7,20}$/.test(phone.value) ? '' : 'Enter a valid phone number.')
    if (!form.reportValidity()) return
    const data = new FormData(form)
    const message = [
      `Hello Design Spot, my name is ${data.get('name')}.`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      `Project: ${data.get('project')}`,
      `A little more: ${data.get('message')}`,
    ].join('\n')
    const url = `https://wa.me/923018040000?text=${encodeURIComponent(message)}`
    setWhatsappUrl(url)
    setSubmitted(true)
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return <>
    <PageIntro eyebrow="THE FIRST STEP IS A HELLO" title={<>Tell us what you’re<br /><em>thinking about.</em></>} text="A room you can’t quite figure out. A new place with possibility. Whatever’s on your mind, we’d love to hear about it." />
    <section className="contact-layout section-pad"><div className="contact-details"><Eyebrow>COME AS YOU ARE</Eyebrow><h2>Good things start<br />with <em>a conversation.</em></h2><p>Share a little about your project and we’ll be in touch to arrange a time to talk it through.</p><div className="contact-item"><span>GIVE US A CALL</span><a href="tel:+923018040000">+92 301 8040000 <ArrowUpRight size={14} /></a></div><div className="contact-item"><span>FIND THE STUDIO</span><p>Millat Road, opposite Askari Bank,<br />Ashrafabad, Faisalabad, Pakistan</p><a className="contact-directions" href="https://maps.google.com/?q=Millat+Road+Ashrafabad+Faisalabad" target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowUpRight size={13} /></a></div><div className="contact-item"><span>OR SEND A QUICK NOTE</span><a href="https://wa.me/923018040000" target="_blank" rel="noreferrer">Chat on WhatsApp <ArrowUpRight size={14} /></a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Follow along on Instagram <Instagram size={14} /></a></div></div>
      <form className="contact-form" onSubmit={handleSubmit} onChange={() => { if (submitted) setSubmitted(false) }}>
        <span className="form-eyebrow">A FEW DETAILS TO GET US STARTED</span>
        <label>Your name<input name="name" autoComplete="name" required minLength="2" placeholder="What should we call you?" /></label>
        <div className="form-row"><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label><label>Phone number<input name="phone" type="tel" autoComplete="tel" required minLength="7" maxLength="20" onInput={(event) => event.currentTarget.setCustomValidity('')} title="Enter a valid phone number" placeholder="+92 ..." /></label></div>
        <label>What are you thinking about?<select name="project" defaultValue="" required><option value="" disabled>Choose what feels closest</option><option>Residential interiors</option><option>Commercial interiors</option><option>A single room</option><option>Something else</option></select><ChevronDown className="select-chevron" size={15} /></label>
        <label>A little more about it<textarea name="message" rows="4" required minLength="10" placeholder="Tell us what you have in mind..." /></label>
        {submitted && <p className="form-success" role="status"><Check size={16} /> Your enquiry is ready. If WhatsApp didn’t open, <a href={whatsappUrl} target="_blank" rel="noreferrer">send it here</a>.</p>}
        <button className="button button-dark form-submit" type="submit">Send your enquiry <Send size={15} /></button>
        <p className="form-note">Your details are only used to get back to you about this enquiry.</p>
      </form></section>
    <section className="contact-map"><div><span>FIND US IN FAISALABAD</span><p>Millat Road, Ashrafabad</p></div><a href="https://maps.google.com/?q=Millat+Road+Ashrafabad+Faisalabad" target="_blank" rel="noreferrer" className="button button-light">Open in Maps <ArrowUpRight size={15} /></a></section>
  </>
}

function NotFound() {
  return <section className="not-found"><Eyebrow>THAT PAGE HAS MOVED ON</Eyebrow><h1>Nothing here,<br /><em>for now.</em></h1><p>Let’s get you back to somewhere lovely.</p><Link to="/" className="button button-dark">Back to home <ArrowRight size={15} /></Link></section>
}

export default function App() {
  usePageMeta()
  return <><Header /><main><Routes>
    <Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Services />} />
    <Route path="/residential-interiors" element={<Specialty />} /><Route path="/commercial-interiors" element={<Specialty commercial />} />
    <Route path="/projects" element={<Projects />} /><Route path="/before-after" element={<BeforeAfter />} /><Route path="/our-process" element={<Process />} />
    <Route path="/testimonials" element={<Testimonials />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} />
  </Routes></main><Footer /><WhatsAppButton /></>
}
