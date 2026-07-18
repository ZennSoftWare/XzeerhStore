import { WHATSAPP_NUMBER } from '../constants/site';

export function buildWhatsAppUrl(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function formatPrice(label: string): string {
  return label.startsWith('Rp') ? label : `Rp${label}`;
}
