import { Search, X } from 'lucide-react';
import { Button } from './Button';

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};

export function SearchInput({ value, onChange, onClear }: SearchInputProps) {
  return (
    <div className="neobrutal-card-sm flex items-center gap-2 p-2">
      <Search className="ml-2 h-5 w-5 shrink-0" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari produk atau badge..."
        className="w-full bg-transparent px-1 py-2 text-sm outline-none placeholder:text-black/45 sm:text-base"
      />
      {value ? (
        <Button type="button" variant="secondary" size="sm" onClick={onClear} className="shrink-0">
          <X className="h-4 w-4" />
          <span className="hidden sm:inline">Reset</span>
        </Button>
      ) : null}
    </div>
  );
}
