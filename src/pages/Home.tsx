import { Hero } from '../components/sections/Hero';
import { MenuPreview } from '../components/sections/MenuPreview';
import { GalleryPreview } from '../components/sections/GalleryPreview';
import { Contact } from '../components/sections/Contact';

export const Home = () => (
  <main>
    <section id="hero">
      <Hero />
    </section>
    <section id="menu-preview">
      <MenuPreview />
    </section>
    <section id="gallery-preview">
      <GalleryPreview />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </main>
);
