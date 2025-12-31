
import { ContentData, BrandItem } from './types';
import { Award, CheckCircle, PenTool, Factory, ShieldCheck, Zap, Globe, Microscope, Layers, Truck, ClipboardList, Settings } from 'lucide-react';

export const ASSET_URL: string = ''; 

const getPath = (filename: string): string => {
  if (!filename) return '';
  if (filename.startsWith('http')) return filename;
  const cleanFilename = filename.startsWith('/') ? filename : `/${filename}`;
  if (!ASSET_URL) return cleanFilename;
  const baseUrl = ASSET_URL.endsWith('/') ? ASSET_URL.slice(0, -1) : ASSET_URL;
  return `${baseUrl}${cleanFilename}`;
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

export const CONTENT: ContentData = {
  logo: getPath('logo.png'), // 这里假设 logo.png 是图标，文字 logo 叫 logo-text.png
  emailJS: {
    serviceId: 'service_icrvr8v',
    templateId: 'template_ftpxyzs',
    publicKey: '9ccDbXeEhV31b6GZ-'
  },
  nav: [
    { label: { en: 'Global Portal', zh: '全球门户' }, id: 'home' },
    { label: { en: 'Our Heritage', zh: '品牌传承' }, id: 'about' },
    { label: { en: 'Engineering', zh: '技术工程' }, id: 'capabilities' },
    { label: { en: 'Services', zh: '服务项目' }, id: 'services' },
    { label: { en: 'Showcase', zh: '产品展厅' }, id: 'showcase' },
    { label: { en: 'The Factory', zh: '智造工厂' }, id: 'factory' },
    { label: { en: 'Contact', zh: '联系我们' }, id: 'contact' },
  ],
  // V1 Legacy Support (保留原样)
  hero: {
    title: 'ZECOOLA',
    slogan: { en: 'OEM Footwear R&D & Manufacturing Partner', zh: '专业鞋类 OEM 研发与制造合作伙伴' },
    cta: { en: 'Request a Quote', zh: '获取报价' }
  },
  about: {
    title: { en: 'About Us', zh: '关于我们' },
    image: getPath('about.webp'),
    mainText: {
      p1: { en: 'ZECOOLA is a trusted footwear R&D and manufacturing partner.', zh: 'ZECOOLA 是您值得信赖的鞋类研发与制造合作伙伴。' },
      p2: { en: 'We focus on quality and innovation.', zh: '我们专注于品质与创新。' },
      imageCaption: { en: 'Reception Area', zh: '接待区' }
    },
    features: [
      { number: '01', title: { en: 'Expertise', zh: '专业沉淀' }, desc: { en: '50+ years experience', zh: '50多年行业经验' }, icon: Award }
    ]
  },
  milestone: {
    title: { en: 'Our Milestones', zh: '发展历程' },
    subtitle: { en: 'A history of excellence', zh: '卓越的历史' },
    items: [
      { year: '2024', title: { en: 'Expansion', zh: '规模扩大' }, description: { en: ['New facility opened'], zh: ['新工厂投入运营'] } }
    ]
  },
  services: {
    title: { en: 'Our Services', zh: '代工服务' },
    subtitle: { en: 'Manufacturing solutions', zh: '制造解决方案' },
    oem: { title: 'OEM', desc: { en: 'Original Equipment Manufacturing', zh: '原始设备制造' }, image: getPath('factory-1.webp') },
    odm: { title: 'ODM', desc: { en: 'Original Design Manufacturing', zh: '原始设计制造' }, image: getPath('factory-2.webp') }
  },
  products: {
    title: { en: 'Products', zh: '产品展示' },
    subtitle: { en: 'Quality showcase', zh: '品质展示' },
    image: getPath('products.webp')
  },
  gallery: {
    title: { en: 'Factory Gallery', zh: '工厂实景' },
    images: [getPath('factory-1.webp'), getPath('factory-2.webp'), getPath('factory-3.webp')],
    brandsTitle: { en: 'Strategic Partners', zh: '战略合作伙伴' }
  },
  home: {
    hero: {
      h1: { en: 'OEM Footwear R&D & Manufacturing Partner', zh: '专业鞋类 OEM 研发与制造合作伙伴' },
      h2: { 
        en: 'ZECOOLA is a trusted footwear R&D and manufacturing partner, built on more than 50 years of collective expertise in the global footwear industry.',
        zh: 'ZECOOLA 是您值得信赖的鞋类研发与制造合作伙伴。'
      },
      strengths: [
        { icon: Award, text: { en: '50+ years experience', zh: '50+年行业经验' } },
        { icon: Microscope, text: { en: 'Strong R&D capability', zh: '强大的研发能力' } },
        { icon: Zap, text: { en: 'Flexible MOQ', zh: '灵活起订量' } },
        { icon: Globe, text: { en: 'Serving US and Europe', zh: '服务于欧美' } },
      ],
      cta: { en: 'Request a Quote', zh: '联系我们' }
    },
    whatWeDo: {
      title: { en: 'Functional Footwear Solutions', zh: '功能性鞋类方案' },
      desc: { en: 'ZECOOLA specializes in OEM and ODM.', zh: '我们专注于 OEM/ODM 制造。' },
      categories: [
        { title: { en: 'Waterproof', zh: '专业防水' }, image: getPath('factory-1.webp') },
        { title: { en: 'Winter Boots', zh: '防滑与冬季' }, image: getPath('factory-2.webp') },
        { title: { en: 'Casual', zh: '休闲与时尚' }, image: getPath('factory-3.webp') },
        { title: { en: 'Custom', zh: '定制化研发' }, image: getPath('factory-4.webp') },
      ],
      note: { en: 'Clear market positioning.', zh: '清晰的市场定位。' }
    },
    whyUs: {
      title: { en: 'Value Creation Partner', zh: '专注于创造价值' },
      items: [
        { title: { en: 'Excellence', zh: '卓越制造' }, desc: { en: 'Integrated R&D.', zh: '整合研发与生产。' } },
        { title: { en: 'Materials', zh: '材料与技术' }, desc: { en: 'TPU, Rubber, Textiles.', zh: 'TPU、橡胶等。' } },
        { title: { en: 'Supply Chain', zh: '供应链优势' }, desc: { en: 'Optimized cost.', zh: '优化的成本。' } },
        { title: { en: 'Partnership', zh: '合作理念' }, desc: { en: 'Respect confidentiality.', zh: '尊重机密性。' } }
      ]
    },
    howWeWork: {
      title: { en: 'OEM Process', zh: 'OEM 开发流程' },
      steps: [
        { id: 1, title: { en: 'Design', zh: '需求对接' } },
        { id: 2, title: { en: 'Cost', zh: '成本评估' } },
        { id: 3, title: { en: 'Sampling', zh: '样品开发' } },
        { id: 4, title: { en: 'Order', zh: '订单确认' } },
        { id: 5, title: { en: 'Production', zh: '大规模生产' } },
        { id: 6, title: { en: 'Shipping', zh: '物流配送' } },
      ]
    }
  },
  aboutPage: {
    whoWeAre: {
      title: { en: 'Who We Are', zh: '我们是谁' },
      content: { en: 'We are a footwear R&D partner.', zh: '我们是鞋类研发伙伴。' }
    },
    mission: {
      title: { en: 'Mission', zh: '使命' },
      mText: { en: 'To create value.', zh: '创造价值。' },
      vText: { en: 'Global trust.', zh: '全球信赖。' }
    }
  },
  capabilities: {
    manufacturing: [{ en: 'OEM production', zh: 'OEM 生产' }],
    materials: [{ en: 'TPU compounds', zh: 'TPU 材料' }],
    qc: [{ en: 'Final inspection', zh: '成品终检' }]
  },
  contact: {
    title: { en: "Let's Build Your Next Project", zh: "开启您的下一个项目" },
    desc: { en: "Tell us about your requirements.", zh: "告诉我们您的需求。" },
    email: 'info@zecoola.com',
    phone: '(0769) 8121-1559',
    addressLabel: { en: 'Office Address', zh: '办公地址' },
    address: { en: 'Houjie Town, China', zh: '中国东莞厚街' },
    callLabel: { en: 'Call Us', zh: '致电' },
    emailLabel: { en: 'Email', zh: '邮件' },
    emailAddress: 'info@zecoola.com',
    phoneNumber: '(0769) 8121-1559',
    mapLabel: { en: 'Find Us', zh: '寻找' },
    mapSub: { en: 'Open in Maps', zh: '地图' },
    form: {
      name: { en: 'Full Name', zh: '全名' },
      email: { en: 'Email', zh: '邮箱' },
      phone: { en: 'Phone', zh: '电话' },
      message: { en: 'Details', zh: '需求' },
      submit: { en: 'Send Message', zh: '提交' },
      submitting: { en: 'Processing...', zh: '处理中...' },
      successMessage: { en: 'Thank you!', zh: '谢谢！' },
      errorMessage: { en: 'Error.', zh: '错误。' },
      validationContact: { en: 'Error.', zh: '错误。' }
    }
  },
  footer: {
    rights: { en: '© Zecoola Shoes Dongguan Co., Ltd.', zh: '友安纳鞋业 版权所有' },
    thankYou: { en: 'Thank You', zh: '谢谢' }
  }
};
