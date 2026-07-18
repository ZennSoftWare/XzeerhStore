import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 border-4 border-black font-bold transition-all duration-200 focus:outline-none focus:ring-0 active:translate-x-1 active:translate-y-1';

    const variants = {
      primary: 'bg-lemon text-black shadow-brutal hover:-translate-y-1 hover:-translate-x-1',
      secondary: 'bg-white text-black shadow-brutal hover:bg-gray-100 hover:-translate-y-1 hover:-translate-x-1',
      ghost: 'bg-transparent text-black shadow-none border-black hover:bg-black hover:text-white',
    } as const;

    const sizes = {
      sm: 'rounded-brutal px-3 py-2 text-sm',
      md: 'rounded-brutal px-4 py-3 text-sm sm:text-base',
      lg: 'rounded-brutal px-5 py-4 text-base sm:text-lg',
    } as const;

    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
    );
  },
);

Button.displayName = 'Button';
