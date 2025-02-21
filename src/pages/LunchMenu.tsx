import React from 'react';
import { motion } from 'framer-motion';
import { hibachiLunchItems, tasteOfAsiaLunchItems, sushiAndLunchBoxe, twoRollSpecial, threeRollSpecial } from "../menuItems/lunchMenuItems";

import MenuSection from '../menuItems/MenuSection.tsx';


export const LunchMenu = () => (
  <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
    <div className="max-w-4xl mx-auto px-4 py-16">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12 text-center text-amber-400 mt-12"
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
        <MenuSection title="Sushi & Lunch Boxes" items={sushiAndLunchBoxe} imageSrc="/api/placeholder/800/400" />
        <MenuSection title="Two Roll Special" items={twoRollSpecial} imageSrc="/api/placeholder/800/400" />
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