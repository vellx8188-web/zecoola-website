
import { ContentData } from './types';
import { Award, CheckCircle, PenTool, Factory } from 'lucide-react';

// Using images for brands as requested (brand-1.png to brand-11.png)
export const BRANDS = Array.from({ length: 11 }, (_, i) => `/brand-${i + 1}.png`);

export const CONTENT: ContentData = {
  // ==============================================================================
  // 核心配置 (GLOBAL CONFIGURATION)
  // ==============================================================================
  
  // LOGO 路径
  logo: '/logo.png', 

  // ==============================================================================
  // 邮件配置 (EMAIL CONFIGURATION)
  // ==============================================================================
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
    { label: { en: 'Products', zh: '产品展示' }, href: 'products' }, // Added Products
    { label: { en: 'Gallery', zh: '工厂' }, href: 'gallery' },
    { label: { en: 'Contact', zh: '联系' }, href: 'contact' },
  ],
  hero: {
    title: 'ZECOOLA',
    slogan: {
      en: 'TOGETHER WE MAKE DIFFERENCE',
      zh: '携手共创非凡'
    },
    cta: {
      en: 'Discover More',
      zh: '了解更多'
    }
  },
  about: {
    title: { en: 'About Us', zh: '关于我们' },
    // 对应上传的文件: public/about.png
    image: '/about.png',
    mainText: {
      p1: {
        en: 'ZECOOLA is a newly formed company by a group of footwear fanatics that have more than 50 combined years of footwear experience. Across the multiple regions, our team members came from China, Taiwan and United States.',
        zh: 'ZECOOLA 是一家由一群拥有超过50年综合经验的鞋类狂热爱好者新成立的公司。我们的团队成员来自中国、台湾和美国，拥有多元文化的思维方式。'
      },
      p2: {
        en: 'We are a team with multi-culture mentality. Our expertise includes the design, development and production for professional sport shoes and casual shoes.',
        zh: '我们是一个具有多元文化思维的团队。我们的专长包括专业运动鞋和休闲鞋的设计、开发和生产。'
      },
      imageCaption: {
        en: '"A team with multi-culture mentality."',
        zh: '“一个具有多元文化思维的团队。”'
      }
    },
    features: [
      {
        number: '01',
        title: { en: '50+ Years Experience', zh: '50+年行业经验' },
        desc: { en: 'A group of footwear veterans that passinate about shoes.', zh: '一群对鞋类充满热情的行业资深人士。' },
        icon: Award
      },
      {
        number: '02',
        title: { en: 'One Stop Service', zh: '一站式服务' },
        desc: { en: 'A strategic venture team that executes the visions.', zh: '执行愿景的战略创业团队。' },
        icon: CheckCircle
      },
      {
        number: '03',
        title: { en: 'Professional Design', zh: '专业设计' },
        desc: { en: 'Function and aesthetic that innovate and excel.', zh: '创新且卓越的功能与美学设计。' },
        icon: PenTool
      },
      {
        number: '04',
        title: { en: 'Qualified Factory', zh: '认证工厂' },
        desc: { en: 'Allied certified factories that provide great quality.', zh: '提供优质质量的联盟认证工厂。' },
        icon: Factory
      }
    ]
  },
  milestone: {
    title: { en: 'Company Milestone', zh: '公司历程' },
    subtitle: { en: 'Our journey from a single factory to a global footwear partner.', zh: '从单一工厂到全球鞋业合作伙伴的历程。' },
    items: [
      {
        year: '2008',
        title: { en: 'Origins', zh: '起源' },
        description: {
          en: ['Built the shoe upper factory of Dongguan Dasheng Sporting Goods Co., Ltd. for safety shoe upper orders.'],
          zh: ['建立东莞大盛体育用品有限公司鞋面工厂，承接安全鞋面订单。']
        }
      },
      {
        year: '2016',
        title: { en: 'Foundation', zh: '成立' },
        description: {
          en: ['Zecoola Shoes Dongguan Co., Ltd was founded in Dongguan at the end of 2016.'],
          zh: ['2016年底，Zecoola鞋业（东莞）有限公司在东莞成立。']
        }
      },
      {
        year: '2017',
        title: { en: 'Expansion', zh: '扩张' },
        description: {
          en: ['Obtained Import & Export License.', 'Opened Company Bank Account at Hang Seng Bank, Hong Kong.', 'Produced first order of safety shoe uppers for Base Protection (Italy).'],
          zh: ['获得进出口许可证。', '开设香港恒生银行公司账户。', '为意大利Base Protection生产首批安全鞋面。']
        }
      },
      {
        year: '2018',
        title: { en: 'Self-Sufficiency', zh: '自给自足' },
        description: {
          en: ['Since September 2018, all orders have been produced in our own factory.'],
          zh: ['自2018年9月起，所有订单均在自有工厂生产。']
        }
      },
      {
        year: '2019',
        title: { en: 'Capacity Growth', zh: '产能增长' },
        description: {
          en: ['Assembly line set up for high-end shoe orders with a daily capacity of 800 pairs.'],
          zh: ['设立高端鞋类流水线，日产能800双。']
        }
      },
      {
        year: '2020',
        title: { en: 'Global Reach', zh: '全球布局' },
        description: {
          en: ['Zecoola Singapore established.', 'Opened company account at OCBC Bank, Singapore.'],
          zh: ['成立新加坡Zecoola。', '开设新加坡华侨银行（OCBC）公司账户。']
        }
      },
      {
        year: '2021',
        title: { en: 'US Market', zh: '进军美国' },
        description: {
          en: ['Started developing customers in the U.S. market.', 'Received 1st orders from GATOR WADERS.'],
          zh: ['开始开发美国市场客户。', '收到GATOR WADERS的首批订单。']
        }
      },
      {
        year: '2022',
        title: { en: 'Partnerships', zh: '新合作伙伴' },
        description: {
          en: ['Started developing Cypher Pickleball.', 'Received 1st orders from Cypher.'],
          zh: ['开发Cypher Pickleball品牌。', '收到Cypher的首批订单。']
        }
      },
      {
        year: '2023',
        title: { en: 'Rebranding', zh: '更名' },
        description: {
          en: ['Factory renamed to Uanna Shoes Dongguan Co., Ltd.'],
          zh: ['工厂更名为东莞市友安纳鞋业有限公司。']
        }
      },
      {
        year: '2024',
        title: { en: 'Expansion', zh: '新版图' },
        description: {
          en: ['Received 1st orders from AKGC.', 'Built the shoe upper factory in Shaanxi.'],
          zh: ['收到AKGC的首批订单。', '建立陕西鞋面工厂。']
        }
      },
      {
        year: '2025',
        title: { en: 'Modernization', zh: '现代化升级' },
        description: {
          en: ['Factory moved to a new location with upgraded production capabilities.', 'Expanded stitching and lasting lines.', 'Added outsole assembling line.'],
          zh: ['工厂搬迁至新址，升级生产能力。', '扩大针车和成型线。', '增加大底组装线。']
        }
      }
    ]
  },
  services: {
    title: { en: 'One Stop Service', zh: '一站式服务' },
    subtitle: {
      en: 'From conceptual ideas to development and production, our team is capable of providing the full service as a whole.',
      zh: '从概念构思到开发生产，我们的团队能够提供全方位的整体服务。'
    },
    oem: {
      title: 'OEM',
      desc: {
        en: 'We have the best quality factories to execute all levels of projects. With our expertise and management, our team aims to provide customers best services of R&D, most competitive prices and reliable quality.',
        zh: '我们拥有最优质的工厂来执行各级项目。凭借我们的专业知识和管理，我们的团队旨在为客户提供最佳的研发服务、最具竞争力的价格和可靠的质量。'
      },
      // 对应上传的文件: public/oem.png
      image: '/oem.png'
    },
    odm: {
      title: 'ODM',
      desc: {
        en: 'In the cloud sourcing and sharing eco-system, Zecoola positions itself as customer\'s venture team. From conceptual ideas to development and production, our innovative design team executes your vision.',
        zh: '在云采购和共享生态系统中，Zecoola定位为客户的创业团队。从概念创意到开发生产，我们的创新设计团队将您的愿景变为现实。'
      },
      // 对应上传的文件: public/odm.png
      image: '/odm.png'
    }
  },
  // ==============================================================================
  // 产品展示 (PRODUCTS / SAMPLE DISPLAY)
  // ==============================================================================
  products: {
    title: { en: 'Sample Display', zh: '样品展示' },
    subtitle: { 
      en: 'A selection of our representative works across various categories, featuring advanced technologies like K-Jump and Bdaptive.',
      zh: '我们各类别的代表作品精选，采用了 K-Jump 和 Bdaptive 等先进技术。'
    },
    categories: {
      all: { en: 'All', zh: '全部' },
      outdoor: { en: 'Outdoor & Safety', zh: '户外与安全' },
      sports: { en: 'Sports', zh: '运动系列' },
      casual: { en: 'Casual', zh: '休闲系列' }
    },
    items: [
      {
        id: '1',
        category: 'outdoor',
        image: '/sample-1.png', // User needs to upload these
        title: { en: 'Gator Waders Boots', zh: 'Gator Waders 涉水靴' },
        desc: { en: 'Waterproof hunting boots', zh: '防水狩猎靴' }
      },
      {
        id: '2',
        category: 'sports',
        image: '/sample-2.png',
        title: { en: 'K-Jump Performance', zh: 'K-Jump 专业跑鞋' },
        desc: { en: 'High rebound technology', zh: '高回弹科技' }
      },
      {
        id: '3',
        category: 'outdoor',
        image: '/sample-3.png',
        title: { en: 'Safety Work Boots', zh: '安全防护靴' },
        desc: { en: 'Heavy duty protection', zh: '重型防护' }
      },
      {
        id: '4',
        category: 'casual',
        image: '/sample-4.png',
        title: { en: 'Casual Slip-on', zh: '休闲懒人鞋' },
        desc: { en: 'Comfort lifestyle', zh: '舒适生活' }
      },
      {
        id: '5',
        category: 'sports',
        image: '/sample-5.png',
        title: { en: 'Cypher Pickleball', zh: 'Cypher 匹克球鞋' },
        desc: { en: 'Court performance', zh: '球场竞技' }
      },
      {
        id: '6',
        category: 'casual',
        image: '/sample-6.png',
        title: { en: 'Urban Sneaker', zh: '城市休闲鞋' },
        desc: { en: 'Modern aesthetic', zh: '现代美学' }
      },
      {
        id: '7',
        category: 'outdoor',
        image: '/sample-7.png',
        title: { en: 'Winter Boots', zh: '冬季保暖靴' },
        desc: { en: 'Insulated comfort', zh: '保暖舒适' }
      },
      {
        id: '8',
        category: 'sports',
        image: '/sample-8.png',
        title: { en: 'Bdaptive Runner', zh: 'Bdaptive 跑鞋' },
        desc: { en: 'Intelligent adaptive system', zh: '智能适应系统' }
      }
    ]
  },
  gallery: {
    title: { en: 'Factory Showcase', zh: '工厂展示' },
    // 对应上传的文件: public/factory-1.png 到 factory-6.png (Exactly 6 images)
    images: [
      '/factory-1.png',
      '/factory-2.png',
      '/factory-3.png',
      '/factory-4.png',
      '/factory-5.png',
      '/factory-6.png',
    ],
    brandsTitle: { en: 'Trusted Brands', zh: '合作品牌' }
  },
  contact: {
    title: { en: 'Contact Us', zh: '联系我们' },
    desc: {
      en: 'Inquiries or suggestions are welcomed. Should you wish to reach us, please drop us a line.',
      zh: '欢迎任何咨询或建议。如果您想联系我们，请随时留言。'
    },
    addressLabel: { en: 'Factory Location', zh: '工厂地址' },
    address: {
      en: '2nd Floor, Building 3, Zhuoyue Manufacturing Industrial Park, No.320\nKangle South Road, Houjie Town, Dongguan City, China',
      zh: '中国广东省东莞市厚街镇康乐南路320号\n卓越制造工业园3栋2楼'
    },
    callLabel: { en: 'Call Us', zh: '电话' },
    emailLabel: { en: 'Email', zh: '邮箱' },
    mapLabel: { en: 'ZECOOLA DONGGUAN', zh: '东莞友安纳' },
    mapSub: {
      en: 'Established in 2017. The heart of our manufacturing operations.',
      zh: '成立于2017年。我们的核心制造基地。'
    },
    form: {
      name: { en: 'Your Name', zh: '您的姓名' },
      email: { en: 'Email Address', zh: '电子邮箱' },
      phone: { en: 'Phone Number', zh: '电话号码' },
      message: { en: 'How can we help you?', zh: '请输入您的留言内容' },
      submit: { en: 'Send Message', zh: '发送留言' },
      submitting: { en: 'Sending...', zh: '发送中...' },
      successMessage: { en: 'Thank you! Your message has been sent successfully.', zh: '谢谢！您的留言已成功发送。' },
      errorMessage: { en: 'Something went wrong. Please try again later.', zh: '出错了，请稍后再试。' },
      validationContact: { en: 'Please provide either an email or a phone number.', zh: '请至少提供一种联系方式（邮箱或电话）。' }
    }
  },
  footer: {
    thankYou: { en: 'THANK YOU', zh: '感谢观看' },
    rights: {
      en: 'Zecoola Shoes Dongguan Co., Ltd. All rights reserved.',
      zh: '东莞市友安纳鞋业有限公司 版权所有'
    }
  }
};
