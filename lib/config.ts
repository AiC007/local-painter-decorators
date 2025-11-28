export const siteConfig = {
  name: "Local Painter & Decorators",
  description: "Professional painting and decorating services for Enfield, Finchley, Highgate, Islington, Crouch End, Wood Green, Camden Town, Muswell Hill and Golders Green.",
  url: "https://www.localpainteranddecorators.co.uk",

  // NAP (Name, Address, Phone) - KEEP CONSISTENT EVERYWHERE
  business: {
    name: "Local Painter & Decorators",
    tagline: "North London",
    phone: "07400406102",
    phoneFormatted: "07400 406102",
    email: "info@localpainteranddecorators.co.uk",
    address: {
      street: "71 Church Street",
      city: "Enfield",
      region: "Greater London",
      postcode: "EN2 6AQ",
      country: "United Kingdom"
    },
    serviceArea: "North London",
    establishedYear: 2015,
    registrationNumber: "LOCAL-PAINT-001",
  },

  // WhatsApp integration (optional)
  whatsapp: {
    enabled: false, // Set to true to enable WhatsApp links
    number: "447400406102", // Format: country code + number (no spaces or +)
    defaultMessage: "Hi, I'd like a quote for painting and decorating work in North London."
  },

  // Social media (add when available)
  social: {
    facebook: "",
    instagram: "",
    google: "https://maps.google.com/?q=Local+Painter+%26+Decorators+North+London&ftid=0x48761f6f0b894cb3:0xcac1aa0970f12e51"
  },

  // Value propositions
  values: [
    "Tidy & reliable",
    "Quality materials",
    "Clear quotes",
    "Insured & guaranteed"
  ],

  // Trust indicators
  trust: {
    yearsExperience: 10, // EDIT: Adjust based on actual experience
    reviewsCount: 127, // EDIT: Update with real count
    averageRating: 4.9, // EDIT: Update with real rating
    insured: true,
    guaranteed: true
  }
};

export const services = [
  {
    slug: "interior-painting",
    name: "Interior Painting",
    shortDescription: "Transform your rooms with expert interior painting",
    icon: "🎨"
  },
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    shortDescription: "Weather-resistant exterior painting and protection",
    icon: "🏠"
  },
  {
    slug: "wallpapering",
    name: "Wallpapering",
    shortDescription: "Precision wallpaper hanging and pattern matching",
    icon: "📐"
  },
  {
    slug: "plaster-and-repairs",
    name: "Plaster & Repairs",
    shortDescription: "Professional plaster repairs and wall preparation",
    icon: "🔧"
  },
  {
    slug: "woodwork-and-trim",
    name: "Woodwork & Trim",
    shortDescription: "Expert finishing for doors, skirting and frames",
    icon: "🪵"
  },
  {
    slug: "commercial-painting",
    name: "Commercial Painting",
    shortDescription: "Minimal disruption commercial decorating",
    icon: "🏢"
  }
];

export const locations = [
  {
    slug: "enfield",
    name: "Enfield",
    postcode: "EN1",
    coordinates: { lat: 51.6521, lng: -0.0803 }
  },
  {
    slug: "finchley",
    name: "Finchley",
    postcode: "N3",
    coordinates: { lat: 51.5975, lng: -0.1882 }
  },
  {
    slug: "highgate",
    name: "Highgate",
    postcode: "N6",
    coordinates: { lat: 51.5717, lng: -0.1468 }
  },
  {
    slug: "islington",
    name: "Islington",
    postcode: "N1",
    coordinates: { lat: 51.5465, lng: -0.1058 }
  },
  {
    slug: "crouch-end",
    name: "Crouch End",
    postcode: "N8",
    coordinates: { lat: 51.5775, lng: -0.1197 }
  },
  {
    slug: "wood-green",
    name: "Wood Green",
    postcode: "N22",
    coordinates: { lat: 51.5975, lng: -0.1097 }
  },
  {
    slug: "camden-town",
    name: "Camden Town",
    postcode: "NW1",
    coordinates: { lat: 51.5416, lng: -0.1433 }
  },
  {
    slug: "muswell-hill",
    name: "Muswell Hill",
    postcode: "N10",
    coordinates: { lat: 51.5897, lng: -0.1426 }
  },
  {
    slug: "golders-green",
    name: "Golders Green",
    postcode: "NW11",
    coordinates: { lat: 51.5722, lng: -0.1949 }
  }
];
