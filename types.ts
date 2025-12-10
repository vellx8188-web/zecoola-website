
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
  href: string;
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
    image: string; // Changed from items array to single image
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
    emailAddress: string; // Added central email configuration
    mapLabel: LocalizedString;
    mapSub: LocalizedString;
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
}