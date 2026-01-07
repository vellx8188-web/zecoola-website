import { ContentData, BrandItem } from './types.ts';
import { Award, CheckCircle, PenTool, Factory, ShieldCheck, Zap, Globe, Microscope, Layers, Truck, ClipboardList, Settings } from 'lucide-react';

export const ASSET_URL: string = ''; 

// 增加版本号后缀，防止图片被浏览器缓存旧版本
const VERSION_QUERY = '?v=10';

const getPath = (filename: string): string => {
  if (!filename) return '';
  if (filename.startsWith('http')) return filename;
  const cleanFilename = filename.startsWith('/') ? filename : `/${filename}`;
  const path = ASSET_URL ? `${ASSET_URL.replace(/\/$/, '')}${cleanFilename}` : cleanFilename;
  return `${path}${VERSION_QUERY}`;
};

export const BRANDS: BrandItem[] = [
  { image: getPath('brand-1.png'), url: 'https://www.baseprotection.com/' },
  { image: getPath('brand-2.png'), url: 'https://cypherpickleball.com/collections/mens' },
  { image: getPath('brand-3.png'), url: 'https://alaskagearcompany.com/' },
  { image: getPath('brand-4.png'), url: 'https://www.uni.shoes/' },
  { image: getPath('brand-5.png'), url: 'https://www.canoefootwear.com/' },
  { image: getPath('brand-6.png'), url: 'https://glyph.earth/' },
  { image: getPath('brand-7.png'), url: 'https://gatorwaders.com/' },
  { image: getPath('brand-8.png'), url: 'https://sidi.com/en-us' },
  { image: getPath('brand-9.png'), url: 'https://www.spidi.com/us_en/' },
  { image: getPath('brand-10.png'), url: '' },
  { image: getPath('brand-11.png'), url: 'https://uniwork.it/' },
];

export const PARTNER_SHOES = [
  { image: getPath('partner-shoe-1.webp'), tag: '@Instagram_Partner' },
  { image: getPath('partner-shoe-2.webp'), tag: 'Performance Tech' },
  { image: getPath('partner-shoe-3.webp'), tag: 'Limited Edition' },
  { image: getPath('partner-shoe-4.webp'), tag: 'Industrial Safety' },
  { image: getPath('partner-shoe-5.webp'), tag: 'R&D Prototype' },
  { image: getPath('partner-shoe-6.webp'), tag: 'Outdoor Extreme' },
];

export const SLIDER_DATA = [
  {
    image: getPath('hero-1.webp'),
    tag: 'STRATEGIC MANUFACTURING PARTNER',
    titleLine1: { en: 'WORLD-', zh: '世界级' },
    titleLine2: { en: 'CLASS', zh: '智造' },
    titleLine3: { en: 'PARTNER', zh: '合作伙伴' },
    sub: { en: 'Empowering global brands with precision engineering and industrial intelligence for over 50 years.', zh: '五十余载深耕，以精密工程与工业智慧赋能全球鞋类品牌。' }
  },
  {
    image: getPath('hero-2.webp'),
    tag: 'ENGINEERING EXCELLENCE',
    titleLine1: { en: 'R&D', zh: '领先' },
    titleLine2: { en: 'DRIVEN', zh: '研发' },
    titleLine3: { en: 'FUTURES', zh: '驱动' },
    sub: { en: 'Translating complex material science into high-performance technical footwear solutions.', zh: '将复杂的材料科学转化为高性能的技术鞋类解决方案。' }
  },
  {
    image: getPath('hero-3.webp'),
    tag: 'SCALABLE PRODUCTION',
    titleLine1: { en: 'SMART', zh: '智能' },
    titleLine2: { en: 'FACTORY', zh: '制造' },
    titleLine3: { en: 'SOLUTIONS', zh: '方案' },
    sub: { en: 'Optimized supply chain integration with zero-defect quality assurance for global markets.', zh: '优化的供应链整合，为全球市场提供零缺陷质量保证。' }
  }
];

export const CONTENT: ContentData = {
  logo: getPath('logo.png'),
  emailJS: {
    serviceId: 'service_icrvr8v',
    templateId: 'template_ftpxyzs',
    publicKey: '9ccDbXeEhV31b6GZ-'
  },
  nav: [
    { label: { en: 'Operations', zh: '全球门户' }, id: 'home' },
    { label: { en: 'Heritage', zh: '品牌传承' }, id: 'about' },
    { label: { en: 'Engineering', zh: '技术工程' }, id: 'capabilities' },
    { label: { en: 'Competencies', zh: '服务项目' }, id: 'services' },
    { label: { en: 'Showcase', zh: '产品展厅' }, id: 'showcase' },
    { label: { en: 'Manufacturing', zh: '智造工厂' }, id: 'factory' },
    { label: { en: 'Contact', zh: '联系我们' }, id: 'contact' },
  ],
  hero: {
    title: 'ZECOOLA',
    slogan: { en: 'Global Footwear R&D & Scalable Manufacturing Partner', zh: '全球鞋类研发与规模化制造合作伙伴' },
    cta: { en: 'Inquire Now', zh: '获取报价' }
  },
  about: {
    title: { en: 'Our Heritage', zh: '关于我们' },
    image: getPath('about.webp'),
    mainText: {
      p1: { en: 'ZECOOLA stands as a definitive authority in technical footwear development.', zh: 'ZECOOLA 是技术性鞋类开发领域的权威机构。' },
      p2: { en: 'We specialize in industrial-grade performance and high-performance R&D.', zh: '我们专注于工业级性能和高性能研发。' },
      imageCaption: { en: 'Innovation Hub', zh: '研发中心' }
    },
    features: [
      { number: '01', title: { en: 'Legacy', zh: '专业沉淀' }, desc: { en: '5 Decades of Craftsmanship', zh: '50多年行业经验' }, icon: Award }
    ]
  },
  milestone: {
    title: { en: 'Milestones', zh: '发展历程' },
    subtitle: { en: 'Evolution of Excellence', zh: '卓越的历史' },
    items: [
      { year: '2024', title: { en: 'Global Expansion', zh: '规模扩大' }, description: { en: ['Next-gen facility deployment'], zh: ['新一代工厂部署'] } }
    ]
  },
  services: {
    title: { en: 'Capabilities', zh: '代工服务' },
    subtitle: { en: 'End-to-end Solutions', zh: '制造解决方案' },
    oem: { title: 'OEM', desc: { en: 'Precision Manufacturing', zh: '原始设备制造' }, image: getPath('factory-1.webp') },
    odm: { title: 'ODM', desc: { en: 'R&D & Design Innovation', zh: '原始设计制造' }, image: getPath('factory-2.webp') }
  },
  products: {
    title: { en: 'Showcase', zh: '产品展示' },
    subtitle: { en: 'Technical Portfolio', zh: '品质展示' },
    image: getPath('products.webp')
  },
  gallery: {
    title: { en: 'Facility Insights', zh: '工厂实景' },
    images: [getPath('factory-1.webp'), getPath('factory-2.webp'), getPath('factory-3.webp')],
    brandsTitle: { en: 'Strategic Alliances', zh: '战略合作伙伴' }
  },
  home: {
    hero: {
      h1: { en: 'Strategic R&D & Manufacturing Partner', zh: '专业鞋类 OEM 研发与制造合作伙伴' },
      h2: { 
        en: 'Built on over 50 years of collective industry expertise, delivering precision for the world\'s most demanding footwear brands.',
        zh: '凭借50多年的行业专业知识，为全球最严苛的鞋类品牌提供精密制造。'
      },
      strengths: [
        { icon: Award, text: { en: 'Industrial Legacy', zh: '50+年行业经验' } },
        { icon: Microscope, text: { en: 'Precision R&D', zh: '强大的研发能力' } },
        { icon: Zap, text: { en: 'Agile MOQs', zh: '灵活起订量' } },
        { icon: Globe, text: { en: 'Global Logistics', zh: '服务于欧美' } },
      ],
      cta: { en: 'Start Inquiry', zh: '联系我们' }
    },
    whatWeDo: {
      title: { en: 'Technical Footwear Portfolio', zh: '功能性鞋类方案' },
      desc: { en: 'ZECOOLA delivers specialized OEM/ODM excellence.', zh: '我们专注于 OEM/ODM 制造。' },
      categories: [
        { title: { en: 'Waterproof Tech', zh: '专业防水' }, image: getPath('factory-1.webp') },
        { title: { en: 'Utility & Winter', zh: '防滑与冬季' }, image: getPath('factory-2.webp') },
        { title: { en: 'Lifestyle & Performance', zh: '休闲与时尚' }, image: getPath('factory-3.webp') },
        { title: { en: 'Custom Engineering', zh: '定制化研发' }, image: getPath('factory-4.webp') },
      ],
      note: { en: 'Definitive market positioning.', zh: '清晰的市场定位。' }
    },
    whyUs: {
      title: { en: 'The Strategic Advantage', zh: '专注于创造价值' },
      items: [
        { title: { en: 'Manufacturing Prowess', zh: '卓越制造' }, desc: { en: 'Unified engineering workflows.', zh: '整合研发与生产。' } },
        { title: { en: 'Material Science', zh: '材料与技术' }, desc: { en: 'Advanced Polymer Application.', zh: 'TPU、橡胶等。' } },
        { title: { en: 'Agile Supply Chain', zh: '供应链优势' }, desc: { en: 'Total cost optimization.', zh: '优化的成本。' } },
        { title: { en: 'Confidentiality', zh: '合作理念' }, desc: { en: 'IP Protection Guarantee.', zh: '尊重机密性。' } }
      ]
    },
    howWeWork: {
      title: { en: 'Operational Workflow', zh: 'OEM 开发流程' },
      steps: [
        { id: 1, title: { en: 'Consultation', zh: '需求对接' } },
        { id: 2, title: { en: 'Valuation', zh: '成本评估' } },
        { id: 3, title: { en: 'Prototyping', zh: '样品开发' } },
        { id: 4, title: { en: 'Validation', zh: '订单确认' } },
        { id: 5, title: { en: 'Mass Production', zh: '大规模生产' } },
        { id: 6, title: { en: 'Logistics', zh: '物流配送' } },
      ]
    }
  },
  aboutPage: {
    whoWeAre: {
      title: { en: 'The Authority', zh: '我们是谁' },
      content: { en: 'We are the backbone of technical footwear innovation.', zh: '我们是鞋类研发伙伴。' }
    },
    mission: {
      title: { en: 'Mission', zh: '使命' },
      mText: { en: 'Defining the standard for footwear engineering.', zh: '创造价值。' },
      vText: { en: 'The global benchmark for quality.', zh: '全球信赖。' }
    }
  },
  capabilities: {
    manufacturing: [{ en: 'Automated Production', zh: 'OEM 生产' }],
    materials: [{ en: 'Advanced Synthetics', zh: 'TPU 材料' }],
    qc: [{ en: 'Zero-Defect Protocol', zh: '成品终检' }]
  },
  contact: {
    title: { en: "Initiate Your Next Project", zh: "开启您的下一个项目" },
    desc: { en: "Speak with our sales engineering team today.", zh: "告诉我们您的需求。" },
    email: 'info@zecoola.com',
    phone: '(0769) 8121-1559',
    addressLabel: { en: 'Corporate HQ', zh: '办公地址' },
    address: { en: 'Houjie, Dongguan, China', zh: '中国东莞厚街' },
    callLabel: { en: 'Direct Inquiry', zh: '致电' },
    emailLabel: { en: 'Email Office', zh: '邮件' },
    emailAddress: 'info@zecoola.com',
    phoneNumber: '(0769) 8121-1559',
    mapLabel: { en: 'Locate Us', zh: '寻找' },
    mapSub: { en: 'Global Logistics Hub', zh: '地图' },
    form: {
      name: { en: 'Full Name', zh: '全名' },
      email: { en: 'Email Address', zh: '邮箱' },
      phone: { en: 'Direct Phone', zh: '电话' },
      message: { en: 'Project Brief', zh: '需求' },
      submit: { en: 'Submit Request', zh: '提交' },
      submitting: { en: 'Processing...', zh: '处理中...' },
      successMessage: { en: 'Inquiry Received.', zh: '谢谢！' },
      errorMessage: { en: 'System Error.', zh: '错误。' },
      validationContact: { en: 'Required field missing.', zh: '错误。' }
    }
  },
  footer: {
    rights: { en: '© Zecoola Shoes Dongguan Co., Ltd. All Rights Reserved.', zh: '友安纳鞋业 版权所有' },
    thankYou: { en: 'Precision in Every Stitch.', zh: '谢谢' }
  }
};