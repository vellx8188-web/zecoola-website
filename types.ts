
export type Language = 'en' | 'zh';

export interface LocalizedString {
  en: string;
  zh: string;
}

export interface LocalizedArray {
  en: string[];
  zh: string[];
}

export interface MilestoneItem {
  year: string;
  title: LocalizedString;
  description: LocalizedArray;
}

export interface NavItem {
  label: LocalizedString;
  id: string; // Changed from href to id to match constants.ts
}

// Added BrandItem interface
export interface BrandItem {
  image: string;
  url: string;
}

export interface ContentData {
  logo: string;
  emailJS: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
  nav: NavItem[];
  // V1 Properties
  hero: {
    title: string;
    slogan: LocalizedString;
    cta: LocalizedString;
  };
  about: {
    title: LocalizedString;
    image: string;
    mainText: {
      p1: LocalizedString;
      p2: LocalizedString;
      imageCaption: LocalizedString;
    };
    features: {
      number: string;
      title: LocalizedString;
      desc: LocalizedString;
      icon: any;
    }[];
  };
  milestone: {
    title: LocalizedString;
    subtitle: LocalizedString;
    items: MilestoneItem[];
  };
  services: {
    title: LocalizedString;
    subtitle: LocalizedString;
    oem: {
      title: string;
      desc: LocalizedString;
      image: string;
    };
    odm: {
      title: string;
      desc: LocalizedString;
      image: string;
    };
  };
  products: {
    title: LocalizedString;
    subtitle: LocalizedString;
    image: string;
  };
  gallery: {
    title: LocalizedString;
    images: string[];
    brandsTitle: LocalizedString;
  };
  contact: {
    title: LocalizedString;
    desc: LocalizedString;
    addressLabel: LocalizedString;
    address: LocalizedString;
    callLabel: LocalizedString;
    emailLabel: LocalizedString;
    emailAddress: string;
    phoneNumber: string;
    mapLabel: LocalizedString;
    mapSub: LocalizedString;
    // Satisfy V2 requirements
    email?: string;
    phone?: string;
    whatsapp?: string;
    form: {
      name: LocalizedString;
      email: LocalizedString;
      phone: LocalizedString;
      message: LocalizedString;
      submit: LocalizedString;
      submitting: LocalizedString;
      successMessage: LocalizedString;
      errorMessage: LocalizedString;
      validationContact: LocalizedString;
    }
  };
  footer: {
    thankYou: LocalizedString;
    rights: LocalizedString;
  };
  // V2 Properties
  home: {
    hero: {
      h1: LocalizedString;
      h2: LocalizedString;
      strengths: {
        icon: any;
        text: LocalizedString;
      }[];
      cta: LocalizedString;
    };
    whatWeDo: {
      title: LocalizedString;
      desc: LocalizedString;
      categories: {
        title: LocalizedString;
        image: string;
      }[];
      note: LocalizedString;
    };
    whyUs: {
      title: LocalizedString;
      items: {
        title: LocalizedString;
        desc: LocalizedString;
      }[];
    };
    howWeWork: {
      title: LocalizedString;
      steps: {
        id: number;
        title: LocalizedString;
      }[];
    };
  };
  aboutPage: {
    whoWeAre: {
      title: LocalizedString;
      content: LocalizedString;
    };
    mission: {
      title: LocalizedString;
      mText: LocalizedString;
      vText: LocalizedString;
    };
  };
  capabilities: {
    manufacturing: LocalizedString[];
    materials: LocalizedString[];
    qc: LocalizedString[];
  };
}
