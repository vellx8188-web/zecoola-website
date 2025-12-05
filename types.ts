
export type Language = 'en' | 'zh';

export interface LocalizedString {
  en: string;
  zh: string;
}

export interface LocalizedArray {
  en: string[];
  zh: string[];
}

export interface TeamMember {
  name: string;
  role: LocalizedString;
  image?: string; // Made optional
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
  team: {
    title: LocalizedString;
    subtitle: LocalizedString;
    members: TeamMember[];
    founderBio: LocalizedString;
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
