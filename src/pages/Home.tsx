import { Hero } from '../components/sections/Hero';
import { MenuPreview } from '../components/sections/MenuPreview';

export const Home = () => (
  <main>
    <Hero />
    <MenuPreview />
  </main>
);

// src/pages/Menu.tsx
export const Menu = () => (
  <div className="pt-16 min-h-screen bg-neutral-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Menu</h1>
      {/* Add menu content */}
    </div>
  </div>
);