import { motion } from 'framer-motion';

export const Hero = () => (
  <section className="relative h-screen flex items-center justify-center">
    <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center" />
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-4"
      >
        Tengda
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl tracking-wide"
      >
        Asian Bistro
      </motion.p>
    </div>
  </section>
);