import { SITE_NAME } from '../../constants/site';

export function Footer() {
  return (
    <footer className="border-t-4 border-black bg-white">
      <div className="container-page flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bold">{SITE_NAME}</p>
        <p className="text-sm text-black/70">Landing page katalog premium apps — cepat, sederhana, dan siap berjalan fast 24jam.</p>
      </div>
    </footer>
  );
}
