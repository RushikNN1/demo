import { PackageItem } from '../types';

export const SATTVA_SAARA_INFO = {
  name: 'Sattva Saara',
  kannadaName: 'ಸತ್ವ ಸಾರ',
  tagline: 'The Core Value of Traditional Nourishment',
  packStandard: '500g Standard Packets Only',
  fssaiLicense: '21226100000032',
  manufacturer: 'SATTVA SAARA FOOD PRODUCTS',
  address: 'Lakshmipuram Etxn., Sakleshpur - 573 134, Hassan Dist, Karnataka, India',
  whatsappNumber: '+91 91876 56607',
  rawWhatsApp: '919187656607',
  email: 'sattvasaara46@gmail.com',
};

export const PACKAGING_ITEMS: PackageItem[] = [
  {
    id: 'dosa-front',
    productId: 'dosa-mix',
    side: 'front',
    title: 'Instant Dosa Mix — Front Package',
    subtitle: 'Heritage culinary branding & appetite appeal architecture',
    imagePath: '/assets/aistudio/dosa_front_ss_fdea264c.jpeg',
    category: 'Heritage Culinary',
    netWeight: '500g',
    kannadaTitle: 'ಸತ್ವ ಸಾರ',
    description: 'Clean modern pouch design featuring crisp golden dosa presentation, verified 100% natural seals, zero maida guarantee, and bilingual Kannada script identity typography.',
    highlights: [
      '100% Vegetarian & Natural',
      'No Maida & No Preservatives',
      'No Added Sugar Formulation',
      'Crispy, Soft & Wholesome Dosas',
      'Instant 5-Minute Fermentation-Free Batter'
    ],
    ingredients: [
      { name: 'Rice', amount: '73.8g', percent: '73.8%' },
      { name: 'Urad Dal', amount: '18.45g', percent: '18.45%' },
      { name: 'Flattened Rice (Poha)', amount: '7.38g', percent: '7.38%' },
      { name: 'Fenugreek Seeds (Methi)', amount: '0.37g', percent: '0.37%' },
    ],
    nutritionalFacts: {
      calories: 366,
      protein: 11.1,
      carbs: 79.3,
      sugar: 1.3,
      addedSugar: 0,
      fat: 0.5,
      saturatedFat: 0.2,
      sodium: 9.3,
    },
    specifications: {
      packagingType: 'Stand-Up Standee Pouch with Bottom Gusset',
      finish: 'Matte BOPP Soft-Touch with Spot UV Gloss on Food Vignette',
      barrier: 'Multi-layer EVOH food barrier foil against humidity & oxidation',
      dimensions: '180mm (W) x 240mm (H) x 60mm (Gusset)',
      closure: 'Resealable airtight press-to-close zipper with tear notch',
      fssaiLicense: '21226100000032',
      location: 'Lakshmipuram Etxn., Sakleshpur - 573 134, Hassan Dist, Karnataka',
      contactNumber: '91876 56607',
      email: 'sattvasaara46@gmail.com',
    }
  },
  {
    id: 'dosa-back',
    productId: 'dosa-mix',
    side: 'back',
    title: 'Instant Dosa Mix — Back Specs & Recipe',
    subtitle: 'Bilingual illustrated culinary guide & transparent nutritional compliance',
    imagePath: '/assets/aistudio/dosa_back_ss_6b7bd300.jpeg',
    category: 'Heritage Culinary',
    netWeight: '500g',
    kannadaTitle: 'ಪೌಷ್ಟಿಕ ಮಾಹಿತಿ ಮತ್ತು ತಯಾರಿಸುವ ವಿಧಾನ',
    description: 'High-clarity back panel featuring FSSAI standardized nutritional grid, exact grammage ingredients list, 5-stage bilingual Kannada & English preparation illustrations, and verified traceability QR code.',
    highlights: [
      'Standardized FSSAI Nutritional Grid',
      'Exact Gram-per-100g Ingredient Transparency',
      '5-Step Bilingual Preparation Illustrated Iconography',
      'Moisture Protection & Clean Dry Spoon Storage Directives',
      'Direct WhatsApp Customer Care & QR Code Traceability'
    ],
    ingredients: [
      { name: 'Rice', amount: '73.8g', percent: '73.8%' },
      { name: 'Urad Dal', amount: '18.45g', percent: '18.45%' },
      { name: 'Flattened Rice (Poha)', amount: '7.38g', percent: '7.38%' },
      { name: 'Fenugreek Seeds', amount: '0.37g', percent: '0.37%' },
    ],
    nutritionalFacts: {
      calories: 366,
      protein: 11.1,
      carbs: 79.3,
      sugar: 1.3,
      addedSugar: 0,
      fat: 0.5,
      saturatedFat: 0.2,
      sodium: 9.3,
    },
    preparationSteps: [
      {
        step: 1,
        title: 'Measure Mix',
        english: 'Take 1 cup of sattva saara dosa mix in a bowl.',
        kannada: 'ಒಂದು ಪಾತ್ರೆಯಲ್ಲಿ ಒಂದು ಕಪ್ ಸತ್ತ್ವಸಾರಾ ದೋಸಾ ಮಿಕ್ಸ್ ಅನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ.',
        tip: 'Use a completely dry cup to maintain moisture integrity.'
      },
      {
        step: 2,
        title: 'Add Curd & Water',
        english: 'Add 1 cup curd and required amount of water.',
        kannada: '1 ಕಪ್ ಮೊಸರು ಹಾಗೂ ಅಗತ್ಯವಿರುವಷ್ಟು ನೀರು ಸೇರಿಸಿ.',
        tip: 'Fresh whisked curd provides authentic gentle fermentation tang.'
      },
      {
        step: 3,
        title: 'Mix & Rest',
        english: 'Add salt to taste and mix into a smooth paste of dosa batter consistency. Set aside for 5 minutes.',
        kannada: 'ರುಚಿಗೆ ತಕ್ಕಷ್ಟು ಉಪ್ಪು ಹಾಕಿ ಚೆನ್ನಾಗಿ ದೋಸೆ ಹಿಟ್ಟಿನ ಹದಕ್ಕೆ ಕಲಸಿಕೊಂಡು 5 ನಿಮಿಷಗಳ ಕಾಲ ನೆನೆಯಲು ಬಿಡಿ.',
        tip: 'Resting allows the poha and fenugreek to hydrate and bind naturally.'
      },
      {
        step: 4,
        title: 'Spread on Hot Tawa',
        english: 'Spread sufficient batter on hot tawa on medium flame. Add 1 table spoon oil or ghee to the side.',
        kannada: 'ಬಿಸಿ ತವದ ಮೇಲೆ ಅಗತ್ಯವಿರುವಷ್ಟು ಹಿಟ್ಟನ್ನು ತೆಳುವಾಗಿ ಹರಡಿ, ಸ್ವಲ್ಪ ಎಣ್ಣೆ ಅಥವಾ ತುಪ್ಪವನ್ನು ಹಾಕಿ.',
        tip: 'Pour in a circular spiral outward for signature crisp lattice holes.'
      },
      {
        step: 5,
        title: 'Golden Roast',
        english: 'Roast until it turns crispy and golden brown. Serve hot with chutney or sambar.',
        kannada: 'ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ಗರಿಗರಿಯಾಗುವಂತೆ ಬೇಯಿಸಿ, ಚಟ್ನಿ ಅಥವಾ ಸಾಂಬಾರ್‌ನೊಂದಿಗೆ ಸೇವಿಸಿ.',
        tip: 'Pairs best with fresh coconut chutney and piping hot Sakleshpur lentil sambar.'
      }
    ],
    specifications: {
      packagingType: 'Stand-Up Standee Pouch with Back Seal',
      finish: 'Matte BOPP Multi-Color Flexographic / Gravure Print',
      barrier: 'Oxygen and Moisture Resistant Metallized Film',
      dimensions: '180mm x 240mm (Back Panel Area)',
      closure: 'Airtight resealable lock',
      fssaiLicense: '21226100000032',
      location: 'Lakshmipuram Etxn., Sakleshpur - 573 134, Hassan Dist, Karnataka',
      contactNumber: '91876 56607',
      email: 'sattvasaara46@gmail.com',
    }
  },
  {
    id: 'drink-front',
    productId: 'health-drink',
    side: 'front',
    title: 'Everyday Health Drink — Front Pouch',
    subtitle: 'Minimalist matte black pouch with artisanal rustic grain composition',
    imagePath: '/assets/aistudio/Screenshot_2026-10-31_at_12.31.00_PM_3a1380bb.png',
    category: 'Health & Wellness',
    netWeight: '500g',
    kannadaTitle: 'ಸತ್ವ ಸಾರ — ದಿನನಿತ್ಯದ ಆರೋಗ್ಯ ಪಾನೀಯ',
    description: 'Sophisticated matte black premium standee pouch with centered archival label, warm earthen lighting backdrop showcasing sprouted millets, roasted nuts, whole wheat, and creamy malt drink.',
    highlights: [
      '100% Natural Botanical & Ancient Grain Blend',
      'No Added Preservatives or Chemicals',
      'Handcrafted Traditional Roasting Process',
      'No Artificial Additives or Added Fragrance',
      'Wholesome Daily Energy for All Age Groups'
    ],
    ingredients: [
      { name: 'Ancient Millets (Ragi, Foxtail, Little Millet)', percent: '45%' },
      { name: 'Sprouted Whole Grains & Pulses', percent: '25%' },
      { name: 'California Almonds & Walnuts', percent: '15%' },
      { name: 'Pumpkin & Flax Seeds', percent: '10%' },
      { name: 'Ayurvedic Spices (Cardamom, Nutmeg, Dry Ginger)', percent: '5%' }
    ],
    nutritionalFacts: {
      calories: 395,
      protein: 14.8,
      carbs: 68.2,
      sugar: 2.1,
      addedSugar: 0,
      fat: 7.2,
      saturatedFat: 1.1,
      sodium: 12.0,
    },
    specifications: {
      packagingType: 'Premium Matte Black Zipper Standee Pouch',
      finish: 'Matte Soft Velvet Texture with Center Thermal Bonded Label',
      barrier: 'Quad-layer metalized foil moisture & light barrier',
      dimensions: '185mm (W) x 260mm (H) x 65mm (Gusset)',
      closure: 'Heavy-duty airtight zip seal with notched tear header',
      fssaiLicense: '21226100000032',
      location: 'Lakshmipuram Etxn., Sakleshpur - 573 134, Hassan Dist, Karnataka',
      contactNumber: '91876 56607',
      email: 'sattvasaara46@gmail.com',
    }
  },
  {
    id: 'drink-back',
    productId: 'health-drink',
    side: 'back',
    title: 'Everyday Health Drink — Back Pouch & Specs',
    subtitle: 'Comprehensive ingredient provenance, preparation method & packaging specs',
    imagePath: '/assets/aistudio/Screenshot_2026-10-31_at_12.31.09_PM_67967dc7.png',
    category: 'Health & Wellness',
    netWeight: '500g',
    kannadaTitle: 'ಪದಾರ್ಥಗಳು ಮತ್ತು ಸಿದ್ಧತೆ ವಿಧಾನ',
    description: 'Back panel detailing complete botanical blend, sprouted pulse ratios, micro-nutrient composition, hot milk preparation guide, batch coding, and direct farm-to-table order WhatsApp link.',
    highlights: [
      'Comprehensive Sprouted Multi-Seed & Nut Formula',
      'Simple 3-Minute Hot Milk or Water Preparation',
      'Airtight Resealable Food Grade Storage Integrity',
      'FSSAI Registered Batch & Traceability Metrics',
      'Direct WhatsApp Order Hotkey: 91876 56607'
    ],
    ingredients: [
      { name: 'Sprouted Grains (Ragi, Wheat, Green Gram, Bengal Gram)', percent: '50%' },
      { name: 'Nuts (Almonds, Cashews, Walnuts, Pistachios)', percent: '20%' },
      { name: 'Seeds (Watermelon seeds, Flax seeds, Pumpkin seeds)', percent: '18%' },
      { name: 'Cardamom, Cloves, Pepper, Nutmeg', percent: '12%' }
    ],
    nutritionalFacts: {
      calories: 395,
      protein: 14.8,
      carbs: 68.2,
      sugar: 2.1,
      addedSugar: 0,
      fat: 7.2,
      saturatedFat: 1.1,
      sodium: 12.0,
    },
    preparationSteps: [
      {
        step: 1,
        title: 'Scoop Powder',
        english: 'Take 2-3 tablespoons of Sattva Saara health drink powder in a cup.',
        kannada: 'ಒಂದು ಕಪ್‌ನಲ್ಲಿ 2-3 ಚಮಚ ಸತ್ವ ಸಾರ ಪೌಡರ್ ತೆಗೆದುಕೊಳ್ಳಿ.',
        tip: 'Adjust scoops to match personal energy and satiety needs.'
      },
      {
        step: 2,
        title: 'Cold/Warm Slurry',
        english: 'Add 3-4 tablespoons of warm water or milk to form a smooth lump-free slurry.',
        kannada: 'ಸ್ವಲ್ಪ ಬಿಸಿ ನೀರು ಅಥವಾ ಹಾಲು ಸೇರಿಸಿ ಉಂಡೆಗಳಿಲ್ಲದಂತೆ ಚೆನ್ನಾಗಿ ಕಲಸಿ.',
        tip: 'Stirring cold or warm first prevents clumping when hot liquid is poured.'
      },
      {
        step: 3,
        title: 'Simmer or Pour Boiling Milk',
        english: 'Pour 200ml boiling milk or water while stirring vigorously. Simmer on low heat for 1-2 minutes.',
        kannada: 'ಕುದಿಯುವ ಹಾಲು ಅಥವಾ ನೀರನ್ನು ನಿರಂತರವಾಗಿ ಬೆರೆಸುತ್ತಾ ಸುರಿಯಿರಿ. 1-2 ನಿಮಿಷ ಬೇಯಿಸಿ.',
        tip: 'Simmering activates the sprouted grain starches for a silky milkshake consistency.'
      },
      {
        step: 4,
        title: 'Sweeten Naturally',
        english: 'Add natural jaggery, date syrup, or honey to taste and serve warm.',
        kannada: 'ರುಚಿಗೆ ತಕ್ಕಂತೆ ನೈಸರ್ಗಿಕ ಬೆಲ್ಲ ಅಥವಾ ಜೇನುತುಪ್ಪ ಸೇರಿಸಿ ಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ.',
        tip: 'Organic palm jaggery complements the toasted almond and cardamom notes.'
      }
    ],
    specifications: {
      packagingType: 'Matte Black Standee Pouch with Dual Welded Seams',
      finish: 'Matte Black Foil with Direct Flexo Print and White Label Backing',
      barrier: 'Aroma-sealed nitrogen-flushable barrier packaging',
      dimensions: '185mm x 260mm',
      closure: 'Resealable grip zipper',
      fssaiLicense: '21226100000032',
      location: 'Lakshmipuram Etxn., Sakleshpur - 573 134, Hassan Dist, Karnataka',
      contactNumber: '91876 56607',
      email: 'sattvasaara46@gmail.com',
    }
  }
];
