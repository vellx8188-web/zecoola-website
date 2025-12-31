
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
  logo: getPath('logo.png'),
  emailJS: {
    serviceId: 'service_icrvr8v',
    templateId: 'template_ftpxyzs',
    publicKey: '9ccDbXeEhV31b6GZ-'
  },
  nav: [
    { label: { en: 'Home', zh: '首页' }, id: 'home' },
    { label: { en: 'About Us', zh: '关于我们' }, id: 'about' },
    { label: { en: 'Capabilities', zh: '技术能力' }, id: 'capabilities' },
    { label: { en: 'Services', zh: '服务项目' }, id: 'services' },
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
  // V2 Properties (严格按照 PDF 更新)
  home: {
    hero: {
      h1: { en: 'OEM Footwear R&D & Manufacturing Partner', zh: '专业鞋类 OEM 研发与制造合作伙伴' },
      h2: { 
        en: 'ZECOOLA is a trusted footwear R&D and manufacturing partner, built on more than 50 years of collective expertise in the global footwear industry. From concept to mass production, we create long-term value for your brand.',
        zh: 'ZECOOLA 是您值得信赖的鞋类研发与制造合作伙伴。凭借 50 多年的全球鞋业专业沉淀，我们提供从概念到量产的全流程服务，为您的品牌创造长效价值。'
      },
      strengths: [
        { icon: Award, text: { en: '50+ years of combined footwear industry experience', zh: '50+年深厚行业经验积淀' } },
        { icon: Microscope, text: { en: 'Strong R&D and material development capability', zh: '强大的研发与材料开发能力' } },
        { icon: Zap, text: { en: 'Flexible MOQ with scalable production', zh: '灵活起订量与规模化生产' } },
        { icon: Globe, text: { en: 'Serving brands across the US and Europe', zh: '服务于欧美及全球知名品牌' } },
      ],
      cta: { en: 'Request a Quote', zh: '联系我们' }
    },
    whatWeDo: {
      title: { en: 'Functional Footwear Solutions for Global Brands', zh: '为全球品牌提供功能性鞋类方案' },
      desc: { en: 'ZECOOLA specializes in OEM and ODM footwear manufacturing with a strong focus on functionality, durability, and commercial viability.', zh: '我们专注于 OEM/ODM 制造，致力于提升产品的功能性、耐用性和市场商业价值。' },
      categories: [
        { title: { en: 'Waterproof & Water-Repellent', zh: '专业防水鞋类' }, image: getPath('factory-1.webp') },
        { title: { en: 'Slip-Resistant & Winter Boots', zh: '防滑与冬季靴款' }, image: getPath('factory-2.webp') },
        { title: { en: 'Casual & Lifestyle', zh: '休闲与时尚系列' }, image: getPath('factory-3.webp') },
        { title: { en: 'Custom OEM/ODM Developments', zh: '定制化研发项目' }, image: getPath('factory-4.webp') },
      ],
      note: { en: 'Each project is developed with a clear understanding of market positioning, performance requirements, and brand identity.', zh: '每个项目都基于对市场定位、性能要求和品牌标识的深度理解。' }
    },
    whyUs: {
      title: { en: 'A Manufacturing Partner Focused on Value Creation', zh: '专注于创造价值的制造伙伴' },
      items: [
        { 
          title: { en: 'Manufacturing Excellence', zh: '卓越制造' }, 
          desc: { en: 'Integrated R&D and production with strict quality control at every stage.', zh: '整合研发与生产，在每个阶段实施严格的质量控制。' } 
        },
        { 
          title: { en: 'Materials & Technology', zh: '材料与技术' }, 
          desc: { en: 'Extensive experience with functional materials including TPU, rubber, Hypalon, and performance textiles.', zh: '在 TPU、橡胶、Hypalon 和高性能纺织品等功能材料方面拥有丰富经验。' } 
        },
        { 
          title: { en: 'Supply Chain Strength', zh: '供应链优势' }, 
          desc: { en: 'Optimized cost structure, stable capacity, and reliable lead times for global supply chains.', zh: '优化的成本结构、稳定的产能和可靠的全球供应链交期。' } 
        },
        { 
          title: { en: 'OEM Partnership Mindset', zh: 'OEM 合作理念' }, 
          desc: { en: 'We respect confidentiality, protect your designs, and focus on long-term cooperation.', zh: '我们尊重机密性，保护您的设计，并专注于长期合作。' } 
        }
      ]
    },
    howWeWork: {
      title: { en: 'Our OEM Development Process', zh: 'OEM 开发流程' },
      steps: [
        { id: 1, title: { en: 'Requirement & Design Alignment', zh: '需求与设计对接' } },
        { id: 2, title: { en: 'Material Selection & Cost Evaluation', zh: '材料筛选与成本评估' } },
        { id: 3, title: { en: 'Sample Development & Testing', zh: '样品开发与测试' } },
        { id: 4, title: { en: 'Order Confirmation', zh: '订单确认' } },
        { id: 5, title: { en: 'Mass Production & Quality Control', zh: '大规模生产与质控' } },
        { id: 6, title: { en: 'Shipping & After-Sales Support', zh: '物流配送与售后支持' } },
      ]
    }
  },
  aboutPage: {
    whoWeAre: {
      title: { en: 'Who We Are', zh: '我们是谁' },
      content: {
        en: 'ZECOOLA is not just a factory. We are a footwear R&D and manufacturing partner committed to supporting our clients\' long-term growth. We work closely with brand owners, designers, and product teams to turn concepts into market-ready footwear.',
        zh: 'ZECOOLA 不仅仅是一家工厂。我们是致力于支持客户长期增长的鞋类研发和制造伙伴。我们与品牌所有者、设计师和产品团队紧密合作，将概念转化为市场化产品。'
      }
    },
    mission: {
      title: { en: 'Mission & Vision', zh: '使命与愿景' },
      mText: { en: 'To create value for our clients through reliable manufacturing, technical expertise, and professional OEM solutions.', zh: '通过可靠的制造、技术专长和专业的 OEM 解决方案为客户创造价值。' },
      vText: { en: 'To become a globally trusted footwear manufacturing partner, enabling brands to compete with confidence.', zh: '成为全球信赖的鞋类制造合作伙伴，助力品牌自信竞争。' }
    }
  },
  capabilities: {
    manufacturing: [
      { en: 'OEM & ODM footwear production', zh: 'OEM 与 ODM 全面生产' },
      { en: 'Small batch to large-scale manufacturing', zh: '从小批量到大规模制造' },
      { en: 'Stable capacity with flexible planning', zh: '稳定产能与灵活规划' }
    ],
    materials: [
      { en: 'Waterproof and water-repellent textiles', zh: '防水透气与防泼水面料' },
      { en: 'TPU, rubber, Hypalon, functional compounds', zh: 'TPU、橡胶、Hypalon 及功能性复合材料' },
      { en: 'Slip-resistant outsole formulations', zh: '防滑大底特殊配方' }
    ],
    qc: [
      { en: 'Incoming material inspection', zh: '原材料进场检测' },
      { en: 'In-process quality monitoring', zh: '生产过程实时品质监控' },
      { en: 'Final inspection before shipment', zh: '发货前成品终检' }
    ]
  },
  contact: {
    title: { en: "Let's Build Your Next Project", zh: "开启您的下一个项目" },
    desc: { en: "Tell us about your requirements. Our team will respond within 24 hours.", zh: "告诉我们您的需求，我们的团队将在24小时内回复。" },
    email: 'info@zecoola.com',
    phone: '(0769) 8121-1559',
    whatsapp: '+86 138-XXXX-XXXX',
    addressLabel: { en: 'Office Address', zh: '办公地址' },
    address: { en: 'Houjie Town, Dongguan City, China', zh: '中国广东省东莞市厚街镇' },
    callLabel: { en: 'Call Us', zh: '致电我们' },
    emailLabel: { en: 'Email Us', zh: '邮件联系' },
    emailAddress: 'info@zecoola.com',
    phoneNumber: '(0769) 8121-1559',
    mapLabel: { en: 'Find Us', zh: '寻找我们' },
    mapSub: { en: 'Open in Maps', zh: '在地图中打开' },
    form: {
      name: { en: 'Full Name', zh: '全名' },
      email: { en: 'Email Address', zh: '邮箱地址' },
      phone: { en: 'Phone Number', zh: '电话号码' },
      message: { en: 'Message Details', zh: '需求详情' },
      submit: { en: 'Send Message', zh: '发送消息' },
      submitting: { en: 'Processing...', zh: '正在处理...' },
      successMessage: { en: 'Thank you! We will contact you shortly.', zh: '谢谢！我们将尽快与您联系。' },
      errorMessage: { en: 'Something went wrong. Please try again.', zh: '出错了，请稍后再试。' },
      validationContact: { en: 'Please provide either email or phone.', zh: '请提供邮箱或电话。' }
    }
  },
  footer: {
    rights: { en: '© Zecoola Shoes Dongguan Co., Ltd. Professional B2B Manufacturing.', zh: '东莞市友安纳鞋业有限公司 版权所有' },
    thankYou: { en: 'Thank You', zh: '谢谢' }
  }
};
