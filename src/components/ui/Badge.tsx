import { HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border-4 border-black bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-brutalSm',
        className,
      )}
      {...props}
    />
  );
}
