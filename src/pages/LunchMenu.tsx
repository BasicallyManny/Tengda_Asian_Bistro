import React from 'react';
import { motion } from 'framer-motion';
import { hibachiLunchItems, tasteOfAsiaLunchItems, sushiAndLunchBoxe, twoRollSpecial, threeRollSpecial } from "../menuItems/lunchMenuItems";

const MenuSection = ({ title, items, imageSrc }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="rounded-lg bg-neutral-800 p-6 shadow-lg"
  >
    {imageSrc && (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-6 relative h-48 rounded-lg overflow-hidden"
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
        <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-amber-400">
          {title}
        </h2>
      </motion.div>
    )}
    {!imageSrc && (
      <h2 className="text-2xl font-bold mb-6 text-center text-amber-400 border-b border-amber-400/20 pb-3">
        {title}
      </h2>
    )}
    <ul className="space-y-4">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group hover:bg-neutral-700/50 rounded-lg transition-colors duration-200 p-4"
        >
          <div className="flex justify-between items-center">
            <motion.span 
              className="text-lg font-medium group-hover:text-amber-400 transition-colors duration-200"
              whileHover={{ scale: 1.02 }}
            >
              {item.name}
            </motion.span>
            <motion.span 
              whileHover={{ scale: 1.1 }}
              className="font-semibold text-amber-400 bg-neutral-900/50 px-3 py-1 rounded-full"
            >
              {item.price}
            </motion.span>
          </div>
          {item.description && (
            <p className="text-neutral-300 mt-2 leading-relaxed">
              {item.description}
            </p>
          )}
        </motion.li>
      ))}
    </ul>
  </motion.section>
);

export const LunchMenu = () => (
  <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center text-amber-400"
      >
        Our Lunch Menu
      </motion.h1>
      <motion.div 
        className="space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <MenuSection 
          title="Hibachi Lunch" 
          items={hibachiLunchItems} 
          imageSrc="/api/placeholder/800/400" 
        />
        <MenuSection 
          title="Taste of Asia Lunch" 
          items={tasteOfAsiaLunchItems} 
          imageSrc="/api/placeholder/800/400" 
        />
        <MenuSection title="Sushi & Lunch Boxes" items={sushiAndLunchBoxe} />
        <MenuSection title="Two Roll Special" items={twoRollSpecial} />
        <MenuSection 
          title="Three Roll Special" 
          items={threeRollSpecial}
          imageSrc="/api/placeholder/800/400" 
        />
      </motion.div>
    </div>
  </div>
);

export default LunchMenu;