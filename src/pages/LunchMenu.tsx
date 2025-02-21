import React from 'react';
import { motion } from 'framer-motion';
import { hibachiLunchItems, tasteOfAsiaLunchItems, sushiAndLunchBoxe, twoRollSpecial, threeRollSpecial } from "../menuItems/lunchMenuItems";


import MenuSection from '../menuItems/MenuSection.tsx';

//IMPORT IMAGES
import hibachiLunchImage from '../assets/menuImages/hibachiLunch.jpg';
import tasteOfAsiaImage from '../assets/menuImages/tasteOfAsia.jpg';
import sushiandLunchBoxesImage from "../assets/menuImages/sushiandLunchBoxes.jpg";
import twoRollSpecialImage from "../assets/menuImages/twoRollSpecial.jpg";
import threeRollSpecialImage from "../assets/menuImages/threeRollSpecial.jpg";

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
          imageSrc={hibachiLunchImage}
        />
        <MenuSection
          title="Taste of Asia Lunch"
          items={tasteOfAsiaLunchItems}
          imageSrc={tasteOfAsiaImage}
        />
        <MenuSection
          title="Sushi & Lunch Boxes"
          items={sushiAndLunchBoxe}
          imageSrc={sushiandLunchBoxesImage} />
        <MenuSection
          title="Two Roll Special"
          items={twoRollSpecial}
          imageSrc={twoRollSpecialImage} />
        <MenuSection
          title="Three Roll Special"
          items={threeRollSpecial}
          imageSrc={threeRollSpecialImage}
        />
      </motion.div>
    </div>
  </div>
);

export default LunchMenu;