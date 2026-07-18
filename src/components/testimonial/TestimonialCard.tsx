import { Quote } from 'lucide-react';
import { Card } from '../ui/Card';
import { Testimonial } from '../../types/product';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full">
      <Quote className="h-8 w-8" />
      <p className="mt-4 text-sm leading-7 text-black/80">"{testimonial.comment}"</p>
      <div className="mt-6 border-t-4 border-black pt-4">
        <p className="font-black">{testimonial.name}</p>
        <p className="text-sm text-black/70">{testimonial.role}</p>
      </div>
    </Card>
  );
}
