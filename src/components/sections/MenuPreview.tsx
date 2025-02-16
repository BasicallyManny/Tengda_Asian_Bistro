import { motion } from 'framer-motion';

export const MenuPreview = () => (
  <section className="py-24 bg-neutral-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-16">Our Specialties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            className="relative overflow-hidden rounded-lg aspect-square"
          >
            <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-black/30 hover:bg-black/50 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-semibold mb-2">Dish Name</h3>
              <p className="text-sm text-gray-200">Description of the dish goes here</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);