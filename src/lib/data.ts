import {
  Briefcase,
  Brush,
  Clapperboard,
  LayoutGrid,
  LucideIcon,
  Palette,
  Smartphone,
} from 'lucide-react';

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export const categories: Category[] = [
  {
    id: 'fashion',
    name: 'Fashion Design',
    description: 'Custom clothing for events, daily wear, and more.',
    icon: Palette,
  },
  {
    id: 'graphic-design',
    name: 'Graphic Design',
    description: 'Posters, social media assets, and illustrations.',
    icon: Brush,
  },
  {
    id: 'branding',
    name: 'Branding & Logo',
    description: 'Develop a unique brand identity and logo.',
    icon: Briefcase,
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Design',
    description: 'User-friendly interfaces for web and mobile.',
    icon: Smartphone,
  },
  {
    id: 'interior-design',
    name: 'Interior Design',
    description: 'Design functional and beautiful living spaces.',
    icon: LayoutGrid,
  },
  {
    id: 'event-outfits',
    name: 'Event Outfits',
    description: 'Stunning attire for weddings, parties, and galas.',
    icon: Clapperboard,
  },
];

export type Designer = {
  id: string;
  name: string;
  specialty: string;
  tagline: string;
  rating: number;
  reviews: number;
  location: string;
  startingPrice: number;
  imageId: string;
  tags: string[];
  portfolioImageIds: string[];
  bio: string;
  experience: number;
  languages: string[];
  services: Service[];
  designerReviews: DesignerReview[];
  faq: DesignerFAQ[];
};

export type Service = {
  id: string;
  title: string;
  description: string;
  price: number;
  deliveryTime: string;
  revisions: number;
}

export type DesignerReview = {
  id: string;
  clientName: string;
  rating: number;
  review: string;
  projectType: string;
  date: string;
}

export type DesignerFAQ = {
  id: string;
  question: string;
  answer: string;
}

export const designers: Designer[] = [
  {
    id: 'olivia-chen',
    name: 'Olivia Chen',
    specialty: 'Fashion Designer – Event Wear',
    tagline: 'Crafting unforgettable moments with bespoke gowns.',
    rating: 4.9,
    reviews: 120,
    location: 'New York, USA (EST)',
    startingPrice: 50000,
    imageId: 'designer-1',
    tags: ['Evening gowns', 'Indian wear', 'Western fusion'],
    portfolioImageIds: ['portfolio-fashion-1', 'portfolio-fashion-2'],
    bio: "With a decade of experience in the high-fashion industry, Olivia specializes in creating breathtaking custom gowns for life's most important events. Her design philosophy blends classic elegance with modern sensibilities, ensuring each piece is both timeless and unique. She has worked with clients globally, from red-carpet celebrities to brides-to-be.",
    experience: 10,
    languages: ['English', 'Mandarin'],
    services: [
      { id: 's1', title: 'Custom Evening Gown', description: 'A fully customized gown for galas, proms, or red carpet events.', price: 65000, deliveryTime: '4-6 Weeks', revisions: 3 },
      { id: 's2', title: 'Bridal Couture', description: 'Bespoke wedding dress design from sketch to final fitting.', price: 150000, deliveryTime: '3-4 Months', revisions: 5 },
    ],
    designerReviews: [
      { id: 'r1', clientName: 'Jessica L.', rating: 5, review: 'Olivia created the dress of my dreams for my wedding. The attention to detail was incredible!', projectType: 'Bridal Couture', date: 'August 2023' },
      { id: 'r2', clientName: 'Samantha B.', rating: 5, review: 'Felt like a star at the gala. The dress was a showstopper!', projectType: 'Custom Evening Gown', date: 'June 2023' },
    ],
    faq: [
      {id: 'f1', question: 'What do you need from me to start?', answer: 'I typically start with a consultation to understand your vision, style preferences, and the event details. Reference images and measurements are also very helpful.'},
      {id: 'f2', question: 'How many revisions are included?', answer: 'Each service package includes a specific number of revisions. For a custom gown, this usually involves a muslin fitting and two additional fittings to ensure a perfect fit.'}
    ]
  },
  {
    id: 'ben-carter',
    name: 'Ben Carter',
    specialty: 'Senior Brand & UI/UX Designer',
    tagline: 'Building beautiful brands and intuitive digital experiences.',
    rating: 5.0,
    reviews: 215,
    location: 'London, UK (GMT)',
    startingPrice: 80000,
    imageId: 'designer-2',
    tags: ['Branding', 'UI/UX', 'Web Design'],
    portfolioImageIds: ['portfolio-branding-1', 'portfolio-uiux-1'],
    bio: "Ben is a multidisciplinary designer with a passion for creating cohesive brand identities and seamless user experiences. He helps startups and established companies alike to define their visual language and connect with their audience in a meaningful way. His work is driven by research, strategy, and a clean, modern aesthetic.",
    experience: 12,
    languages: ['English'],
    services: [
      { id: 's1', title: 'Full Brand Identity Package', description: 'Logo, color palette, typography, and brand guidelines.', price: 120000, deliveryTime: '3-4 Weeks', revisions: 3 },
      { id: 's2', title: 'UI/UX for Mobile App', description: 'Complete user interface and experience design for one mobile app (up to 15 screens).', price: 250000, deliveryTime: '6-8 Weeks', revisions: 2 },
    ],
    designerReviews: [
      { id: 'r1', clientName: 'TechStart Inc.', rating: 5, review: 'Ben completely transformed our brand. The new UI is fantastic and user engagement is up 40%!', projectType: 'Brand & UI/UX', date: 'September 2023' },
    ],
    faq: [
        {id: 'f1', question: 'What is your design process?', answer: 'My process is collaborative, starting with discovery and strategy, moving to concept development, and then refinement based on your feedback. I believe in clear communication throughout the project.'}
    ]
  },
  {
    id: 'sofia-rossi',
    name: 'Sofia Rossi',
    specialty: 'Interior Designer',
    tagline: 'Transforming spaces into personal sanctuaries.',
    rating: 4.8,
    reviews: 88,
    location: 'Milan, Italy (CET)',
    startingPrice: 100000,
    imageId: 'designer-3',
    tags: ['Residential', 'Minimalist', 'Sustainable Design'],
    portfolioImageIds: ['portfolio-interior-1', 'portfolio-branding-2'],
    bio: "Sofia believes that our environments deeply affect our well-being. She specializes in creating residential interiors that are not only beautiful but also functional and sustainable. Her style is characterized by clean lines, natural materials, and a sense of calm.",
    experience: 8,
    languages: ['Italian', 'English'],
    services: [
      { id: 's1', title: 'Single Room Design', description: 'A complete design plan for one room, including layout, furniture selection, and color scheme.', price: 75000, deliveryTime: '2-3 Weeks', revisions: 2 },
    ],
    designerReviews: [
      { id: 'r1', clientName: 'Marco P.', rating: 5, review: 'Sofia has a wonderful eye for detail. Our living room is now our favorite place to be.', projectType: 'Single Room Design', date: 'July 2023' },
    ],
    faq: [
        {id: 'f1', question: 'Do you manage the purchasing and installation?', answer: 'My design packages focus on the design plan itself. However, I offer project management services at an additional fee to handle procurement and oversee installation.'}
    ]
  },
  {
    id: 'liam-goldberg',
    name: 'Liam Goldberg',
    specialty: 'Graphic Designer – Posters & Merch',
    tagline: 'Bold visuals that make a statement.',
    rating: 4.9,
    reviews: 150,
    location: 'Tel Aviv, Israel (IST)',
    startingPrice: 25000,
    imageId: 'designer-4',
    tags: ['Poster Design', 'T-Shirts', 'Illustration'],
    portfolioImageIds: ['portfolio-branding-2', 'portfolio-uiux-1'],
    bio: 'Liam creates vibrant and impactful graphics for events, bands, and brands. His style is eclectic, drawing inspiration from street art, vintage posters, and pop culture. If you want your design to stand out and be noticed, Liam is your guy.',
    experience: 7,
    languages: ['Hebrew', 'English'],
    services: [],
    designerReviews: [],
    faq: [],
  },
  {
    id: 'aisha-khan',
    name: 'Aisha Khan',
    specialty: 'Fashion Designer – Indian Fusion Wear',
    tagline: 'Where tradition meets contemporary style.',
    rating: 5.0,
    reviews: 95,
    location: 'Mumbai, India (IST)',
    startingPrice: 40000,
    imageId: 'designer-5',
    tags: ['Lehengas', 'Sarees', 'Indo-Western'],
    portfolioImageIds: ['portfolio-fashion-1', 'portfolio-interior-1'],
    bio: 'Aisha is a celebrated designer known for her modern take on traditional Indian attire. She works with skilled artisans to create exquisite pieces that are perfect for weddings, festivals, and special occasions. Her designs are a celebration of color, texture, and craftsmanship.',
    experience: 9,
    languages: ['Hindi', 'English'],
    services: [],
    designerReviews: [],
    faq: [],
  },
  {
    id: 'kenji-tanaka',
    name: 'Kenji Tanaka',
    specialty: 'UI/UX Designer – SaaS & Mobile Apps',
    tagline: 'Solving complex problems with simple, elegant design.',
    rating: 4.9,
    reviews: 180,
    location: 'Tokyo, Japan (JST)',
    startingPrice: 150000,
    imageId: 'designer-6',
    tags: ['SaaS', 'iOS', 'Android', 'User Research'],
    portfolioImageIds: ['portfolio-uiux-1', 'portfolio-branding-1'],
    bio: 'Kenji is a data-driven UI/UX designer who excels at creating user-centric products. He has a deep understanding of user psychology and applies it to design interfaces that are not only beautiful but also highly intuitive and effective. He has helped numerous tech companies improve their user retention and conversion rates.',
    experience: 11,
    languages: ['Japanese', 'English'],
    services: [],
    designerReviews: [],
    faq: [],
  },
];

export const featuredDesigners = designers.slice(0, 3);

export type Project = {
  id: string;
  title: string;
  designerName: string;
  status: 'Active' | 'Completed' | 'Pending';
  budget: number;
  dueDate: string;
}

export const clientProjects: Project[] = [
    {id: 'p1', title: 'Evening Gown for Gala', designerName: 'Olivia Chen', status: 'Active', budget: 65000, dueDate: '2023-12-15'},
    {id: 'p2', title: 'Startup Brand Identity', designerName: 'Ben Carter', status: 'Completed', budget: 120000, dueDate: '2023-09-30'},
    {id: 'p3', title: 'Living Room Redesign', designerName: 'Sofia Rossi', status: 'Completed', budget: 75000, dueDate: '2023-08-10'},
]

export type DesignerProject = {
  id: string;
  title: string;
  clientName: string;
  status: 'New Request' | 'Active' | 'Completed';
  budget: number;
  receivedDate: string;
}

export const designerProjects: DesignerProject[] = [
    {id: 'dp1', title: 'Wedding Dress Design', clientName: 'Emily R.', status: 'New Request', budget: 150000, receivedDate: '2023-11-05'},
    {id: 'dp2', title: 'Mobile App UI', clientName: 'Innovate Co.', status: 'Active', budget: 250000, receivedDate: '2023-10-20'},
    {id: 'dp3', title: 'Band T-Shirt Illustration', clientName: 'The Rockers', status: 'Completed', budget: 30000, receivedDate: '2023-09-01'},
]

export const faqData = [
    {
      id: "q1",
      question: "How do payments work?",
      answer: "When you hire a designer, you fund the project upfront. We hold the payment securely in an escrow account. The funds are only released to the designer after you have approved the final work. This protects both clients and designers."
    },
    {
      id: "q2",
      question: "What is escrow?",
      answer: "Escrow is a financial arrangement where a third party (DesignVerse) holds and regulates payment of the funds required for two parties involved in a given transaction. It helps make transactions safer by keeping the payment secure until all terms are met."
    },
    {
      id: "q3",
      question: "How do I become a designer on DesignVerse?",
      answer: "Click on the 'Become a Designer' button and submit your application. We have a vetting process to ensure our marketplace is filled with high-quality, professional talent. You'll need to provide your portfolio and some information about your experience."
    },
    {
      id: "q4",
      question: "What if I'm not happy with the design?",
      answer: "All projects include a set number of revisions. We encourage clear communication with your designer throughout the process. If you're still not satisfied after all revisions, our dispute resolution team can step in to mediate and find a fair solution."
    },
    {
      id: "q5",
      question: "Can I get a refund?",
      answer: "Refunds are handled on a case-by-case basis through our dispute resolution process. Since funds are held in escrow, we can ensure a fair outcome if the project goals are not met."
    }
  ]
