import { ChevronDown } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type AccordionItemProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="neobrutal-card-sm overflow-hidden">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-3 p-4 text-left font-bold transition hover:bg-black hover:text-white"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <ChevronDown className={cn('h-5 w-5 transition-transform duration-200', open && 'rotate-180')} />
      </button>
      <div className={cn('grid transition-all duration-300', open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
        <div className="overflow-hidden">
          <div className="border-t-4 border-black p-4 text-sm leading-7 text-black/80">{children}</div>
        </div>
      </div>
    </div>
  );
}
