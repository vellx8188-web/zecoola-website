
export interface NavItem {
  label: string;
  path: string;
}

export interface CapabilityCard {
  title: string;
  description: string;
  items: string[];
}

export interface Category {
  title: string;
  imageUrl: string;
}

export interface Step {
  id: number;
  title: string;
}
