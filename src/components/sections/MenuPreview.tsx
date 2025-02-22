import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from React Router
import lunchMenuImage from "../../assets/pageimages/lunchMenuImage.jpg";
import dinnerMenuImage from "../../assets/pageimages/dinnerMenuImage.jpg";

const menuItems = [
  {
    name: 'Lunch Menu',
    description: 'Take a look at our delicious lunch Menu',
    imageUrl: lunchMenuImage,
    link: '/lunch-menu',
  },
  {
    name: 'Dinner Menu',
    description: 'Take a look at our delicious dinner Menu',
    imageUrl: dinnerMenuImage,
    link: '/dinner-menu',
  },
];

export const MenuPreview = () => (
  <section className="pt-32 py-12 bg-neutral-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl text-white font-bold text-center mb-16">The Menus</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center items-center">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg aspect-square"
          >
            <Link to={item.link} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl text-white font-bold mb-2">{item.name}</h3>
                <p className="text-m text-white">{item.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
