
import { ContentData, BrandItem } from './types';
import { Award, CheckCircle, PenTool, Factory } from 'lucide-react';

/**
 * 💡 修改图片指南 (How to Change Images):
 * 1. 本地图片: 将图片放入 public 文件夹，直接写文件名 (如 'logo.png')
 * 2. 外部链接: 直接粘贴完整的网址 (如 'https://your-cloud-storage.com/image.jpg')
 *    这种方式最简单，不需要通过 GitHub 批量删除或修改只读文件。
 */
export const ASSET_URL: string = ''; 

const getPath = (filename: string): string => {
  // 如果已经是完整的网址(http/https)，直接返回
  if (filename.startsWith('http')) return filename;
  
  // 否则走本地相对路径逻辑
  if (!ASSET_URL) return `/${filename}`;
  const baseUrl = ASSET_URL.endsWith('/') ? ASSET_URL : `${ASSET_URL}/`;
  const cleanFilename = filename.startsWith('/') ? filename.slice(1) : filename;
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
    { label: { en: 'Home', zh: '首页' }, href: 'hero' },
    { label: { en: 'About', zh: '关于我们' }, href: 'about' },
    { label: { en: 'Milestones', zh: '发展历程' }, href: 'milestones' },
    { label: { en: 'Services', zh: '服务' }, href: 'services' },
    { label: { en: 'Showcase', zh: '产品展示' }, href: 'products' }, 
    { label: { en: 'Factory', zh: '工厂' }, href: 'gallery' },
    { label: { en: 'Contact', zh: '联系' }, href: 'contact' },
  ],
  hero: {
    title: 'ZECOOLA',
    slogan: {
      en: 'PRECISION ENGINEERING. GLOBAL EXCELLENCE.',
      zh: '卓越工艺，全球视野'
    },
    cta: {
      en: 'Explore Solutions',
      zh: '了解更多'
    }
  },
  about: {
    title: { en: 'Corporate Profile', zh: '关于我们' },
    image: getPath('about.webp'),
    mainText: {
      p1: {
        en: 'ZECOOLA is a premier footwear R&D and manufacturing powerhouse, built on a foundation of over 50 years of collective industry expertise. Our strategic leadership team brings together diverse perspectives from China, Taiwan, and the United States.',
        zh: 'ZECOOLA 是一家领先的鞋类研发与制造企业，拥有超过50年的行业深厚积淀。我们的管理团队汇聚了来自中国、台湾和美国的多元文化视野与专业经验。'
      },
      p2: {
        en: 'We specialize in high-performance technical footwear, blending advanced engineering with contemporary aesthetics. From professional athletic gear to premium casual lines, we deliver manufacturing excellence at scale.',
        zh: '我们专注于高性能技术鞋类，将先进工程技术与现代美学完美结合。从专业运动装备到高端休闲系列，我们提供规模化的卓越制造服务。'
      },
      imageCaption: {
        en: '"A global mindset in footwear manufacturing."',
        zh: '“具备全球视野的鞋类制造专家。”'
      }
    },
    features: [
      {
        number: '01',
        title: { en: '50+ Years of Mastery', zh: '50+年行业深耕' },
        desc: { en: 'A distinguished group of footwear veterans with a lifelong passion for craft and innovation.', zh: '汇聚鞋业资深专家团队，对制鞋工艺与持续创新充满热忱。' },
        icon: Award
      },
      {
        number: '02',
        title: { en: 'One-Stop Service', zh: '一站式服务方案' },
        desc: { en: 'A strategic venture team providing end-to-end execution from vision to reality.', zh: '战略化的执行团队，提供从设计愿景到成品交付的全流程服务。' },
        icon: CheckCircle
      },
      {
        number: '03',
        title: { en: 'Professional Design', zh: '专业美学设计' },
        desc: { en: 'Fusing functional performance with market-leading aesthetics to innovate and excel.', zh: '将功能性能与市场领先的美学相结合，不断追求创新与卓越。' },
        icon: PenTool
      },
      {
        number: '04',
        title: { en: 'Qualified Factory', zh: '认证品质工厂' },
        desc: { en: 'Allied with certified facilities that guarantee world-class manufacturing quality.', zh: '联合多家国际认证工厂，确保世界一流的制造品质。' },
        icon: Factory
      }
    ]
  },
  milestone: {
    title: { en: 'Our Heritage', zh: '公司历程' },
    subtitle: { en: 'The strategic evolution of ZECOOLA from regional specialist to global partner.', zh: 'ZECOOLA 从区域专家到全球合作伙伴的战略演变历程。' },
    items: [
      { year: '2008', title: { en: 'Operational Inception', zh: '业务启航' }, description: { en: ['Established specialized production for technical safety footwear components.'], zh: ['建立东莞大盛体育用品有限公司，专注安全鞋类部件生产。'] } },
      { year: '2016', title: { en: 'Corporate Foundation', zh: '正式成立' }, description: { en: ['ZECOOLA Shoes was officially incorporated in Dongguan, China.'], zh: ['2016年底，Zecoola鞋业（东莞）有限公司在东莞正式成立。'] } },
      { year: '2017', title: { en: 'Global Integration', zh: '国际化整合' }, description: { en: ['Secured full import/export licensure.', 'Established international financial operations in Hong Kong.', 'Commenced strategic partnership with Base Protection (Italy).'], zh: ['获得全额进出口经营权。', '在香港设立国际财务运营中心。', '开启与意大利 Base Protection 的战略合作。'] } },
      { year: '2018', title: { en: 'Facility Autonomy', zh: '垂直整合' }, description: { en: ['Achieved 100% in-house production through fully-owned manufacturing lines.'], zh: ['通过自有流水线实现了100%的内部自主化生产。'] } },
      { year: '2019', title: { en: 'Scaling Capacity', zh: '产能扩增' }, description: { en: ['Inaugurated high-end assembly lines with specialized daily capacity of 800 pairs.'], zh: ['启用高端组装线，日产能提升至800双。'] } },
      { year: '2020', title: { en: 'Strategic Node', zh: '战略节点' }, description: { en: ['Expanded presence to Singapore.', 'Optimized Southeast Asian financial and logistics hubs.'], zh: ['业务版图扩张至新加坡。', '优化东南亚财务与物流中心。'] } },
      { year: '2021', title: { en: 'Market Penetration', zh: '进军美洲' }, description: { en: ['Formal entry into the U.S. market.', 'Secured first-tier contracts with Gator Waders.'], zh: ['正式进入美国市场。', '与 Gator Waders 达成一级供应合同。'] } },
      { year: '2022', title: { en: 'Growth & Verticals', zh: '垂直领域增长' }, description: { en: ['Partnered with Cypher Pickleball for specialized performance gear.'], zh: ['与 Cypher Pickleball 合作开发专业运动装备。'] } },
      { year: '2023', title: { en: 'Brand Identity', zh: '品牌升级' }, description: { en: ['Strategic rebranding of manufacturing facilities to Uanna Shoes.'], zh: ['工厂战略性更名为东莞市友安纳鞋业。'] } },
      { year: '2024', title: { en: 'Infrastructure Expansion', zh: '基建扩张' }, description: { en: ['Operationalized new component production facility in Shaanxi province.'], zh: ['在陕西省新建并启用鞋材生产基地。'] } },
      { year: '2025', title: { en: 'Modernization 2.0', zh: '现代化2.0' }, description: { en: ['Relocation to state-of-the-art campus.', 'Significant upgrades to automated stitching and outsole assembly lines.'], zh: ['整体搬迁至现代化工业园。', '对自动化针车和大底组装线进行大规模升级。'] } }
    ]
  },
  services: {
    title: { en: 'Full-Spectrum Services', zh: '全方位服务' },
    subtitle: { en: 'Leveraging a unified ecosystem to transform conceptual visions into market-ready reality.', zh: '利用统一的生态系统，将概念愿景转化为就绪的市场产品。' },
    oem: {
      title: 'OEM Manufacturing',
      desc: { en: 'We operate world-class facilities optimized for complex technical projects. Our team provides robust R&D support, competitive pricing, and rigorous quality assurance at every stage.', zh: '我们运营着针对复杂技术项目优化的世界级工厂。我们的团队在每个阶段都提供强大的研发支持、极具竞争力的定价和严苛的质量保证。' },
      image: getPath('oem.webp')
    },
    odm: {
      title: 'ODM & Co-Creation',
      desc: { en: 'Acting as an extension of your creative team, ZECCOOLA offers full-cycle development. From disruptive design concepts to material sourcing, we execute your brand\'s vision with precision.', zh: '作为您创意团队的延伸，ZECOOLA 提供全周期开发。从突破性的设计概念到原材料采购，我们精准执行您的品牌愿景。' },
      image: getPath('odm.webp')
    },
  },
  products: {
    title: { en: 'Exhibition Showcase', zh: '样品展示' },
    subtitle: { en: 'A curated selection of our high-precision manufacturing outputs, demonstrating versatility and craftsmanship.', zh: '精选高精度制造作品，展现我们的工艺多样性与卓越品质。' },
    image: getPath('product-showcase.webp')
  },
  gallery: {
    title: { en: 'Industrial Facilities', zh: '工厂展示' },
    images: [
      getPath('factory-1.webp'),
      getPath('factory-2.webp'),
      getPath('factory-3.webp'),
      getPath('factory-4.webp'),
      getPath('factory-5.webp'),
      getPath('factory-6.webp'),
    ],
    brandsTitle: { en: 'Strategic Partnerships', zh: '全球合作伙伴' }
  },
  contact: {
    title: { en: 'Connect With Us', zh: '联系我们' },
    desc: { en: 'We are ready to discuss your next project or provide technical consultations. Reach out to our team today.', zh: '我们已准备好讨论您的下一个项目。请随时联系我们的专业团队。' },
    addressLabel: { en: 'Global HQ & Factory', zh: '全球总部与工厂' },
    address: { en: '2nd Floor, Building 3, Zhuoyue Manufacturing Industrial Park, No.320\nKangle South Road, Houjie Town, Dongguan City, China', zh: '中国广东省东莞市厚街镇康乐南路320号\n卓越制造工业园3栋2楼' },
    callLabel: { en: 'Inquiries', zh: '业务咨询' },
    emailLabel: { en: 'Electronic Mail', zh: '电子邮件' },
    emailAddress: 'info@zecoola.com',
    phoneNumber: '(0769) 8121-1559',
    mapLabel: { en: 'ZECOOLA DONGGUAN', zh: '东莞友安纳' },
    mapSub: { en: 'Premier R&D Hub and Production Center.', zh: '核心研发枢纽与生产中心。' },
    form: {
      name: { en: 'Full Name', zh: '您的姓名' },
      email: { en: 'Work Email', zh: '工作邮箱' },
      phone: { en: 'Contact Number', zh: '电话号码' },
      message: { en: 'Project Brief / Message', zh: '留言内容' },
      submit: { en: 'Submit Request', zh: '提交申请' },
      submitting: { en: 'Processing...', zh: '处理中...' },
      successMessage: { en: 'Transmission successful. Our team will contact you shortly.', zh: '发送成功。我们的团队将很快与您取得联系。' },
      errorMessage: { en: 'Service interrupted. Please contact info@zecoola.com directly.', zh: '系统繁忙。请直接通过邮箱联系我们。' },
      validationContact: { en: 'Please provide at least one valid contact channel.', zh: '请至少提供一种有效的联系方式。' }
    }
  },
  footer: {
    thankYou: { en: 'PRECISION IN EVERY STEP', zh: '每一步，皆精准' },
    rights: { en: '© Zecoola Shoes Dongguan Co., Ltd. Global Manufacturing Intelligence.', zh: '东莞市友安纳鞋业有限公司 版权所有' }
  }
};
