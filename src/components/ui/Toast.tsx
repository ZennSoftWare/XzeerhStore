import { CheckCircle2 } from 'lucide-react';
import { cn } from '../../utils/cn';

type ToastProps = {
  open: boolean;
  message: string;
};

export function Toast({ open, message }: ToastProps) {
  return (
    <div
      className={cn(
        'pointer-events-none fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 transition-all duration-300',
        open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
      )}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="neobrutal-card-sm flex items-center gap-3 px-4 py-3">
        <CheckCircle2 className="h-5 w-5 shrink-0" />
        <p className="text-sm font-semibold">{message}</p>
      </div>
    </div>
  );
}
