import { useState } from 'react';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import CategoryList from './components/CategoryList/CategoryList';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import PromoBanners from './components/PromoBanners/PromoBanners';
import BrandList from './components/BrandList/BrandList';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { useProducts } from './hooks/useProducts';
import type { Product } from './types/product';

export default function App() {
  const { products, loading, error } = useProducts();
  const [selected, setSelected] = useState<Product | null>(null);

  const showcase = { products, loading, error, onSelect: setSelected };

  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <CategoryList />
        <ProductShowcase id="produtos" title="Produtos relacionados" variant="tabs" {...showcase} />
        <PromoBanners />
        <ProductShowcase title="Produtos relacionados" variant="see-all" {...showcase} />
        <PromoBanners />
        <BrandList />
        <ProductShowcase title="Produtos relacionados" variant="see-all" {...showcase} />
      </main>
      <Newsletter />
      <Footer />
      {selected && <Modal product={selected} onClose={() => setSelected(null)} />}
    </>
  );
}