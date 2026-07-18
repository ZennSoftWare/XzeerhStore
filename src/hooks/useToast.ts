import { useCallback, useEffect, useState } from 'react';

export type ToastState = {
  open: boolean;
  message: string;
};

export function useToast(autoHideMs = 2400) {
  const [toast, setToast] = useState<ToastState>({ open: false, message: '' });

  const showToast = useCallback((message: string) => {
    setToast({ open: true, message });
  }, []);

  useEffect(() => {
    if (!toast.open) return;

    const timer = window.setTimeout(() => {
      setToast({ open: false, message: '' });
    }, autoHideMs);

    return () => window.clearTimeout(timer);
  }, [toast.open, autoHideMs]);

  return { toast, showToast, setToast };
}
