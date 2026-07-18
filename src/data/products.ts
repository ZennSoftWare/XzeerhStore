import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'alight-motion',
    name: 'Alight Motion',
    description: 'Cocok untuk editing video kreatif dengan akses premium yang praktis.',
    highlights: ['Eksport lebih fleksibel', 'Siap pakai untuk editor', 'Order via WhatsApp'],
    accent: 'green',
    variants: [
      { label: 'Sharing', price: 'Rp5.000', badge: '1 tahun' },
      { label: 'Private', price: 'Rp10.000', badge: '1 tahun' },
    ],
  },
  {
    id: 'capcut-premium',
    name: 'CapCut Premium',
    description: 'Pilihan populer untuk konten cepat, cinematic, dan efisien.',
    highlights: ['Template premium', 'Workflow cepat', 'Support order otomatis'],
    accent: 'blue',
    variants: [
      { label: 'Sharing', price: 'Rp10.000', badge: '1 tahun' },
      { label: 'Private', price: 'Rp15.000', badge: '1 tahun' },
    ],
  },
  {
    id: 'wink-premium',
    name: 'Wink Premium',
    description: 'Upscale Video Enhancer & Editor serta ultra HD dalam kompresi gambar.',
    highlights: ['Durasi beragam', 'Harga ramah', 'Dibuat untuk order instan'],
    accent: 'yellow',
    variants: [
      { label: '7 Hari', price: 'Rp6.000', badge: '7 Hari' },
      { label: '30 Hari', price: 'Rp20.000', badge: '30 Hari' },
      { label: '365 Hari', price: 'Rp26.000', badge: '365 Hari' },
    ],
  },
] as const;
