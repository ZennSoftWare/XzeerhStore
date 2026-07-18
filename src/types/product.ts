export type ProductVariant = {
  label: string;
  price: string;
  badge: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  accent: 'yellow' | 'blue' | 'green' | 'red';
  variants: ProductVariant[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  role: string;
  comment: string;
};
