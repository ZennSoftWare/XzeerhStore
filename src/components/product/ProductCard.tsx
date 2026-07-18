import { Check, ShoppingBag } from 'lucide-react';
import { Product } from '../../types/product';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

type ProductCardProps = {
  product: Product;
  onBuy: (name: string, price: string, badge: string) => void;
};

const accentMap = {
  yellow: 'from-lemon/90',
  blue: 'from-sky/90',
  green: 'from-leaf/90',
  red: 'from-coral/90',
} as const;

export function ProductCard({ product, onBuy }: ProductCardProps) {
  return (
    <Card className="overflow-hidden p-0">
      <div className={`border-b-4 border-black bg-gradient-to-br ${accentMap[product.accent]} to-white p-5`}>
        <Badge className="mb-4">{product.name}</Badge>
        <h3 className="text-2xl font-black tracking-tight sm:text-3xl">{product.name}</h3>
        <p className="mt-2 max-w-xl text-sm leading-7 text-black/80 sm:text-base">{product.description}</p>
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <ul className="grid gap-2">
          {product.highlights.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm font-semibold">
              <Check className="h-4 w-4 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="grid gap-3">
          {product.variants.map((variant) => (
            <div key={`${product.id}-${variant.label}`} className="neobrutal-card-sm p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge>{variant.badge}</Badge>
                    <span className="font-bold">{variant.label}</span>
                  </div>
                  <p className="mt-1 text-2xl font-black">{variant.price}</p>
                </div>
                <Button
                  type="button"
                  onClick={() => onBuy(product.name, variant.price, variant.badge)}
                  className="w-full sm:w-auto"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Beli Sekarang
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
