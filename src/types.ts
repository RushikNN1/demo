export interface PackageItem {
  id: string;
  productId: 'dosa-mix' | 'health-drink';
  side: 'front' | 'back';
  title: string;
  subtitle: string;
  imagePath: string;
  category: string;
  netWeight: string;
  highlights: string[];
  kannadaTitle: string;
  description: string;
  ingredients?: { name: string; amount?: string; percent?: string }[];
  nutritionalFacts?: {
    calories: number;
    protein: number;
    carbs: number;
    sugar: number;
    addedSugar: number;
    fat: number;
    saturatedFat: number;
    sodium: number;
  };
  preparationSteps?: {
    step: number;
    title: string;
    english: string;
    kannada: string;
    tip?: string;
  }[];
  specifications: {
    packagingType: string;
    finish: string;
    barrier: string;
    dimensions: string;
    closure: string;
    fssaiLicense: string;
    location: string;
    contactNumber: string;
    email: string;
  };
}

export type ScreenId = 'gallery' | 'anatomy' | 'recipe' | 'order';
