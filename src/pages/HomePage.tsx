import { ArrowRight, Bolt, MessageCircle, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { SearchInput } from '../components/ui/SearchInput';
import { ProductCard } from '../components/product/ProductCard';
import { FAQSection } from '../components/faq/FAQSection';
import { TestimonialCard } from '../components/testimonial/TestimonialCard';
import { features } from '../data/features';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';
import { HERO_STATS, SITE_NAME } from '../constants/site';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { useToast } from '../hooks/useToast';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { Toast } from '../components/ui/Toast';

export function HomePage() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebouncedValue(search);
  const { toast, showToast } = useToast();

  const filteredProducts = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase();
    if (!query) return products;

    return products.filter((product) => {
      const haystack = [
        product.name,
        product.description,
        ...product.highlights,
        ...product.variants.flatMap((variant) => [variant.label, variant.price, variant.badge]),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [debouncedSearch]);

  const handleBuy = (name: string, price: string, badge: string) => {
    const message = `Halo, saya ingin order ${name} (${badge}) dengan harga ${price}. Mohon info ketersediaannya.`;
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
    showToast(`Membuka WhatsApp untuk ${name} ${badge}`);
  };

  const handleHeroOrder = () => {
    const firstProduct = products[0];
    if (!firstProduct) return;

    const firstVariant = firstProduct.variants[0];
    if (!firstVariant) return;

    handleBuy(firstProduct.name, firstVariant.price, firstVariant.badge);
  };

  return (
    <div className="min-h-screen bg-white">
      <a href="#konten" className="sr-only focus:not-sr-only">
        Lewati ke konten
      </a>

      <Navbar onOrderClick={handleHeroOrder} />

      <main id="konten">
        <section id="beranda" className="container-page py-8 sm:py-12 lg:py-16">
          <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-fadeUp">
              <Badge className="mb-4 bg-lemon">Xzeerh Store</Badge>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Katalog toko online premium apps yang cepat, tegas, dan langsung order via WhatsApp 24 jam respon.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-black/75 sm:text-lg">
                {SITE_NAME} dibangun dengan gaya neobrutalism, tanpa login, tanpa backend, tanpa payment gateway,
                Menyediakan layanan premium yang murah serta membangun kepercayaan terhadap layanan yang tersedia. 
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button onClick={handleHeroOrder} size="lg">
                  <MessageCircle className="h-5 w-5" />
                  Order Sekarang
                </Button>
                <Button variant="secondary" size="lg" onClick={() => { window.location.hash = '#produk'; }}>
                  <ArrowRight className="h-5 w-5" />
                  Lihat Produk
                </Button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {HERO_STATS.map((stat) => (
                  <Card key={stat.label} className="p-4">
                    <p className="text-2xl font-black">{stat.value}</p>
                    <p className="mt-1 text-sm text-black/70">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="animate-slideIn overflow-hidden p-0">
              <div className="border-b-4 border-black bg-lemon p-5">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  <p className="font-black">Order Preview</p>
                </div>
              </div>
              <div className="space-y-4 p-5">
                <div className="rounded-brutal border-4 border-black bg-white p-4 shadow-brutalSm">
                  <p className="text-sm font-bold text-black/60">Contoh pesan WhatsApp</p>
                  <p className="mt-2 text-sm leading-7">
                    Halo, saya ingin order CapCut Premium (Private) dengan harga Rp15.000. Mohon info
                    ketersediaannya.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="neobrutal-card-sm p-4">
                    <Bolt className="h-6 w-6" />
                    <p className="mt-3 font-black">Cepat</p>
                    <p className="mt-1 text-sm text-black/70">Klik sekali, langsung chat.</p>
                  </div>
                  <div className="neobrutal-card-sm p-4">
                    <ShieldCheck className="h-6 w-6" />
                    <p className="mt-3 font-black">Rapi</p>
                    <p className="mt-1 text-sm text-black/70">Data terpisah dan mudah dirawat.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="keunggulan" className="border-y-4 border-black bg-white">
          <div className="container-page py-10 lg:py-14">
            <div className="max-w-2xl">
              <Badge className="bg-sky">Keunggulan</Badge>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Didesain untuk tampil premium dan tetap ringan.</h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} className="h-full">
                  <div className="mb-4 inline-flex rounded-brutal border-4 border-black bg-white p-3 shadow-brutalSm">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-black">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/70">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="produk" className="container-page py-10 lg:py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge className="bg-green">Produk</Badge>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Pilih paket yang paling cocok.</h2>
            </div>
            <div className="w-full sm:max-w-md">
              <SearchInput value={search} onChange={setSearch} onClear={() => setSearch('')} />
            </div>
          </div>

          <div className="mt-8 grid gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onBuy={handleBuy} />
              ))
            ) : (
              <Card className="text-center">
                <p className="text-lg font-black">Produk tidak ditemukan</p>
                <p className="mt-2 text-sm text-black/70">Coba kata kunci lain seperti “Sharing”, “Private”, atau nama app.</p>
              </Card>
            )}
          </div>
        </section>

        <section id="cara-order" className="border-y-4 border-black bg-lemon/30">
          <div className="container-page py-10 lg:py-14">
            <Badge className="bg-red">Cara Order</Badge>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Tiga langkah sederhana.</h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ['Pilih produk', 'Pilih kartu produk dan paket yang diinginkan.'],
                ['Klik beli sekarang', 'Tombol akan membuka WhatsApp dengan pesan otomatis.'],
                ['Konfirmasi order', 'Kirim pesan dan tunggu info ketersediaan.'],
              ].map(([title, description], index) => (
                <Card key={title} className="relative overflow-hidden">
                  <div className="absolute right-4 top-4 text-4xl font-black text-black/10">{index + 1}</div>
                  <p className="text-xl font-black">{title}</p>
                  <p className="mt-3 text-sm leading-7 text-black/70">{description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="container-page py-10 lg:py-14">
          <FAQSection />
        </section>

        <section id="testimoni" className="border-y-4 border-black bg-white">
          <div className="container-page py-10 lg:py-14">
            <Badge className="bg-sky">Testimoni</Badge>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Bukti sosial yang sederhana namun kuat.</h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <div className="container-page py-6">
        <Card className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-black">Siap untuk membeli disini?</p>
            <p className="text-sm text-black/70">Jika anda merasa ragu dengan kami maka jangan order, jika anda merasa tidak ragu maka orderlah layanan yang kami sediakan, 100% amanah dan terpercaya.</p>
          </div>
          <Button onClick={handleHeroOrder}>
            <MessageCircle className="h-4 w-4" />
            Mulai Order
          </Button>
        </Card>
      </div>
      <Toast open={toast.open} message={toast.message} />
    </div>
  );
}
