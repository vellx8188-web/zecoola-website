
export const COLORS = {
  primary: '#FF6A00',
  secondary: '#FF9B33', 
  darkGray: '#333333',
  mediumGray: '#666666',
  lightGray: '#F5F5F5',
  white: '#FFFFFF',
};

export const IMAGES = {
  home: {
    hero: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920',
    cat_waterproof: 'https://images.unsplash.com/photo-1608667508764-33cf0726b13a?w=800',
    cat_winter: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?w=800',
    cat_lifestyle: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800',
    cat_oem: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800',
    step_1: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
    step_2: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400',
    step_3: 'https://images.unsplash.com/photo-1581092324632-2aa122061477?w=400',
    step_4: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400',
  },
  about: {
    factory_scene: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200',
    team_natural: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
  },
  capabilities: {
    production: 'https://images.unsplash.com/photo-1558444479-c8f027d4993a?w=1200',
    material_macro: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800',
    waterproof_tech: 'https://images.unsplash.com/photo-1515155075601-23009d0cb6d4?w=800',
    construction: 'https://images.unsplash.com/photo-1512418490979-91795d43a96b?w=800',
    qc_testing: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800',
    tech_bg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920',
  },
  services: {
    blueprint: 'https://images.unsplash.com/photo-1503387762-592dea58ef21?w=1200',
    sketch: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?w=1200',
  }
};

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const PRODUCT_CATEGORIES = [
  { title: 'Waterproof Boots', desc: 'Advanced membrane integration', imageUrl: IMAGES.home.cat_waterproof },
  { title: 'Winter Performance', desc: 'Anti-slip & Thermal tech', imageUrl: IMAGES.home.cat_winter },
  { title: 'Lifestyle & Casual', desc: 'Premium materials & design', imageUrl: IMAGES.home.cat_lifestyle },
  { title: 'Industrial OEM', desc: 'Customized production scale', imageUrl: IMAGES.home.cat_oem },
];

export const KEY_STRENGTHS = [
  { title: '50+ Years Experience', desc: 'Collective manufacturing wisdom' },
  { title: 'Technical Mastery', desc: 'From TPU to Hypalon expertise' },
  { title: 'Global Delivery', desc: 'Serving US and European markets' },
];

export const WORK_PROCESS = [
  { id: 1, title: 'Sample Development', desc: 'Precise pattern making', img: IMAGES.home.step_1 },
  { id: 2, title: 'Material Sourcing', desc: 'Premium component selection', img: IMAGES.home.step_2 },
  { id: 3, title: 'Quality Control', desc: 'Multi-stage QC protocols', img: IMAGES.home.step_3 },
  { id: 4, title: 'Final Delivery', desc: 'Secure packaging & logistics', img: IMAGES.home.step_4 },
];
