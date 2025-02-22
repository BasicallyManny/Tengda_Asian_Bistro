import { motion } from 'framer-motion';
import { sushiAppetizer, sushiPlatter, rollAndHandRolls, soup, salad, appetizer, sushiSashimi, specialRolls, kidHibAndSides, tasteOfAsia, healthyDiet, soda } from "../menuItems/dinnerMenuItems"

import MenuSection from "../menuItems/MenuSection.tsx";

//Import images
import rollAndHandRollImage from '../assets/menuImages/rollAndHandRollDinner.jpg'
import sushiAppetizerImage from '../assets/menuImages/sushiAppetizerDinner.jpg'
import  sushiPlatterDinnerImage  from '../assets/menuImages/sushiPlatterDinner.jpg'
import soupDinnerImage from '../assets/menuImages/soupDinner.jpg'
import saladDinnerImage from '../assets/menuImages/saladDinnerImage.jpg'
import appetizerDinnerImage from '../assets/menuImages/appetizerDinner.jpg'
import sashimiDinnerImage from '../assets/menuImages/sashimiDinner.jpg'
import specialRollsDinner from '../assets/menuImages/specialRollsDinner.jpg'
import healthyDietDinner from '../assets/menuImages/healthyDinner.jpg'
import tasteOfAsiaDinner from '../assets/menuImages/tasteOfAsiaDinner.jpg';
import sodaImage from '../assets/menuImages/sodaDinner.jpg'
import hibachiDinnerKids from '../assets/menuImages/hibachiDinnerKids.jpg'
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
        <MenuSection title="Appetizer" items={appetizer} imageSrc={appetizerDinnerImage} />
        <MenuSection title="Sushi Appetizer" items={sushiAppetizer}imageSrc={sushiAppetizerImage}  />
        <MenuSection title="Sushi Platter" items={sushiPlatter} imageSrc={sushiPlatterDinnerImage}  />
        <MenuSection title="Roll & Hand Rolls" items={rollAndHandRolls} imageSrc={rollAndHandRollImage} />
        <MenuSection title="Special Rolls" items={specialRolls} imageSrc={specialRollsDinner} />
        <MenuSection title="Soup" items={soup} imageSrc={soupDinnerImage}  />
        <MenuSection title="Salad" items={salad} imageSrc={saladDinnerImage} />
        <MenuSection title="Sashimi" items={sushiSashimi} imageSrc={sashimiDinnerImage} />
        <MenuSection title="Kid's Hibachi & Sides" items={kidHibAndSides} imageSrc={hibachiDinnerKids} />
        <MenuSection title="Taste of Asia" items={tasteOfAsia} imageSrc={tasteOfAsiaDinner} />
        <MenuSection title="Healthy Diet" items={healthyDiet} imageSrc={healthyDietDinner} />
        <MenuSection title="Soda" items={soda} imageSrc={sodaImage} />
      </motion.div>
    </div>
  </div>
);