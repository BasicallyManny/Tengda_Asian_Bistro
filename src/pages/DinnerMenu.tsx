import React from 'react';
import { motion } from 'framer-motion';
import { sushiAppetizer, sushiPlatter, rollAndHandRolls, soup, salad, appetizer, sushiSashimi, specialRolls, kidHibAndSides, tasteOfAsia, healthyDiet, soda } from "../menuItems/dinnerMenuItems"

import MenuSection from "../menuItems/MenuSection.tsx";
export const DinnerMenu = () => (
  <div className="pt-16 min-h-screen bg-neutral-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Add menu content */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
       className="text-4xl font-bold mb-12 text-center text-amber-400 mt-12"
      >
        Our Dinner Menu
      </motion.h1>
      <motion.div
        className="space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <MenuSection title="Sushi Appetizer" items={sushiAppetizer}imageSrc="/api/placeholder/800/400"  />
        <MenuSection title="Sushi Platter" items={sushiPlatter} imageSrc="/api/placeholder/800/400"  />
        <MenuSection title="Roll & Hand Rolls" items={rollAndHandRolls} imageSrc="/api/placeholder/800/400" />
        <MenuSection title="Soup" items={soup} imageSrc="/api/placeholder/800/400"  />
        <MenuSection title="Salad" items={salad} imageSrc="/api/placeholder/800/400" />
        <MenuSection title="Appetizer" items={appetizer} imageSrc="/api/placeholder/800/400" />
        <MenuSection title="Sashimi" items={sushiSashimi} imageSrc="/api/placeholder/800/400" />
        <MenuSection title="Special Rolls" items={specialRolls} imageSrc="/api/placeholder/800/400" />
        <MenuSection title="Kid's Hibachi & Sides" items={kidHibAndSides} imageSrc="/api/placeholder/800/400" />
        <MenuSection title="Taste of Asia" items={tasteOfAsia} imageSrc="/api/placeholder/800/400" />
        <MenuSection title="Healthy Diet" items={healthyDiet} imageSrc="/api/placeholder/800/400" />
        <MenuSection title="Soda" items={soda} imageSrc="/api/placeholder/800/400" />
      </motion.div>
    </div>
  </div>
);