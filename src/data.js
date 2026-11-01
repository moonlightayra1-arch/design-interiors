export const images = {
  hero: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=85',
  living: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=82',
  dining: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=82',
  kitchen: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82',
  bedroom: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=82',
  office: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=82',
  detail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=82',
  commercial: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=82',
  lounge: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=82',
  workroom: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=82',
}

export const projects = [
  { title: 'The Courtyard House', type: 'Residential', location: 'Canal Road, Faisalabad', image: images.living, size: 'large' },
  { title: 'Stillwater Residence', type: 'Residential', location: 'Wapda City, Faisalabad', image: images.dining },
  { title: 'The Sunday Table', type: 'Commercial', location: 'Kohinoor City, Faisalabad', image: images.commercial },
  { title: 'A Quiet Kind of Luxe', type: 'Residential', location: 'D Ground, Faisalabad', image: images.bedroom },
  { title: 'Form & Function', type: 'Commercial', location: 'People’s Colony, Faisalabad', image: images.office },
  { title: 'The Everyday Ritual', type: 'Residential', location: 'Wapda City, Faisalabad', image: images.kitchen },
]

export const services = [
  { number: '01', title: 'Residential interiors', text: 'Considered homes shaped around the way you live, gather and unwind.', image: images.living, href: '/residential-interiors' },
  { number: '02', title: 'Commercial interiors', text: 'Distinctive spaces that bring your brand, team and customers together.', image: images.office, href: '/commercial-interiors' },
  { number: '03', title: 'Design consultation', text: 'A thoughtful first step, from a single room to a whole new direction.', image: images.detail, href: '/contact' },
  { number: '04', title: 'Turnkey execution', text: 'One considered vision, carried carefully through every finishing detail.', image: images.kitchen, href: '/our-process' },
]
