import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { NAV_LINKS, SITE_NAME } from '../../constants/site';

type NavbarProps = {
  onOrderClick: () => void;
};

export function Navbar({ onOrderClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b-4 border-black bg-white/95 backdrop-blur">
      <div className="container-page flex items-center justify-between gap-3 py-3">
        <a href="#beranda" className="flex items-center gap-3 font-black uppercase tracking-tight">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-brutal border-4 border-black bg-lemon shadow-brutalSm">
            {SITE_NAME.slice(0, 1)}
          </span>
          <span className="hidden text-lg sm:inline">{SITE_NAME}</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="font-semibold transition hover:underline">
              {link.label}
            </a>
          ))}
        </nav>

        <Button size="sm" onClick={onOrderClick}>
          <MessageCircle className="h-4 w-4" />
          Order
        </Button>
      </div>
    </header>
  );
}
