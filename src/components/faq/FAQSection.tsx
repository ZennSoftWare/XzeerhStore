import { faqItems } from '../../data/faq';
import { AccordionItem } from '../ui/Accordion';
import { Card } from '../ui/Card';

export function FAQSection() {
  return (
    <Card className="space-y-4">
      <div>
        <h2 className="text-3xl font-black tracking-tight">FAQ</h2>
        <p className="mt-2 text-sm text-black/70">Jawaban cepat untuk pertanyaan yang paling sering muncul.</p>
      </div>
      <div className="grid gap-3">
        {faqItems.map((item, index) => (
          <AccordionItem key={item.question} title={item.question} defaultOpen={index === 0}>
            {item.answer}
          </AccordionItem>
        ))}
      </div>
    </Card>
  );
}
