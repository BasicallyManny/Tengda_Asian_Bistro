import { motion } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import {
  sushiAppetizer, sushiPlatter, rollAndHandRolls, soup, salad,
  appetizer, sushiSashimi, specialRolls, kidHibAndSides, tasteOfAsia, healthyDiet, soda
} from "../menuItems/dinnerMenuItems";
import MenuSection from "../menuItems/MenuSection.tsx";
import MenuNav from "../menuItems/MenuNavigate.tsx";

// Import images
import rollAndHandRollImage from '../assets/menuImages/rollAndHandRollDinner.jpg';
import sushiAppetizerImage from '../assets/menuImages/sushiAppetizerDinner.jpg';
import sushiPlatterDinnerImage from '../assets/menuImages/sushiPlatterDinner.jpg';
import soupDinnerImage from '../assets/menuImages/soupDinner.jpg';
import saladDinnerImage from '../assets/menuImages/saladDinnerImage.jpg';
import appetizerDinnerImage from '../assets/menuImages/appetizerDinner.jpg';
import sashimiDinnerImage from '../assets/menuImages/sashimiDinner.jpg';
import specialRollsDinner from '../assets/menuImages/specialRollsDinner.jpg';
import healthyDietDinner from '../assets/menuImages/healthyDinner.jpg';
import tasteOfAsiaDinner from '../assets/menuImages/tasteOfAsiaDinner.jpg';
import sodaImage from '../assets/menuImages/sodaDinner.jpg';
import hibachiDinnerKids from '../assets/menuImages/hibachiDinnerKids.jpg';

export const DinnerMenu = () => {
  const [activeSection, setActiveSection] = useState('appetizer');

  // ✅ Refs at top level (fixing hook violation)
  const appetizerRef = useRef<HTMLDivElement | null>(null);
  const sushiAppetizerRef = useRef<HTMLDivElement | null>(null);
  const sushiPlatterRef = useRef<HTMLDivElement | null>(null);
  const rollAndHandRollsRef = useRef<HTMLDivElement | null>(null);
  const specialRollsRef = useRef<HTMLDivElement | null>(null);
  const soupRef = useRef<HTMLDivElement | null>(null);
  const saladRef = useRef<HTMLDivElement | null>(null);
  const sashimiRef = useRef<HTMLDivElement | null>(null);
  const kidHibAndSidesRef = useRef<HTMLDivElement | null>(null);
  const tasteOfAsiaRef = useRef<HTMLDivElement | null>(null);
  const healthyDietRef = useRef<HTMLDivElement | null>(null);
  const sodaRef = useRef<HTMLDivElement | null>(null);

  const sectionsRef = {
    appetizer: appetizerRef,
    sushiAppetizer: sushiAppetizerRef,
    sushiPlatter: sushiPlatterRef,
    rollAndHandRolls: rollAndHandRollsRef,
    specialRolls: specialRollsRef,
    soup: soupRef,
    salad: saladRef,
    sashimi: sashimiRef,
    kidHibAndSides: kidHibAndSidesRef, // 🔥 Fixed key to match the ref
    tasteOfAsia: tasteOfAsiaRef,
    healthyDiet: healthyDietRef,
    soda: sodaRef,
  };

  // 🧹 Menu data with refs
  const menuSections = useMemo(() => [
    { id: 'appetizer', title: 'Appetizer', items: appetizer, imageSrc: appetizerDinnerImage, ref: appetizerRef },
    { id: 'sushiAppetizer', title: 'Sushi Appetizer', items: sushiAppetizer, imageSrc: sushiAppetizerImage, ref: sushiAppetizerRef },
    { id: 'sushiPlatter', title: 'Sushi Platter', items: sushiPlatter, imageSrc: sushiPlatterDinnerImage, ref: sushiPlatterRef },
    { id: 'rollAndHandRolls', title: 'Roll & Hand Rolls', items: rollAndHandRolls, imageSrc: rollAndHandRollImage, ref: rollAndHandRollsRef },
    { id: 'specialRolls', title: 'Special Rolls', items: specialRolls, imageSrc: specialRollsDinner, ref: specialRollsRef },
    { id: 'soup', title: 'Soup', items: soup, imageSrc: soupDinnerImage, ref: soupRef },
    { id: 'salad', title: 'Salad', items: salad, imageSrc: saladDinnerImage, ref: saladRef },
    { id: 'sashimi', title: 'Sashimi', items: sushiSashimi, imageSrc: sashimiDinnerImage, ref: sashimiRef },
    { id: 'kidHibAndSides', title: "Kid's Hibachi & Sides", items: kidHibAndSides, imageSrc: hibachiDinnerKids, ref: kidHibAndSidesRef },
    { id: 'tasteOfAsia', title: 'Taste of Asia', items: tasteOfAsia, imageSrc: tasteOfAsiaDinner, ref: tasteOfAsiaRef },
    { id: 'healthyDiet', title: 'Healthy Diet', items: healthyDiet, imageSrc: healthyDietDinner, ref: healthyDietRef },
    { id: 'soda', title: 'Soda', items: soda, imageSrc: sodaImage, ref: sodaRef },
  ], []);

  // 🏃 Navigation sections
  const navSections = useMemo(() =>
    menuSections.map(({ id, title, ref }) => ({ id, title, ref })),
    [menuSections]);

  // 🖱️ Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of menuSections) {
        const element = section.ref.current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuSections]);

  // 🎯 Smooth scroll handler
  const scrollToSection = (id: string) => {
    const section = sectionsRef[id as keyof typeof sectionsRef].current;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 20,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 text-white relative">
      <MenuNav
        sections={navSections}
        activeSection={activeSection}
        onSectionSelect={scrollToSection}
      />
      <div className="md:ml-48">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-amber-400 mt-12"
          >
            Our Dinner Menu
          </motion.h1>

          <motion.div
            className="space-y-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {menuSections.map((section) => (
              <div key={section.id} ref={section.ref} id={section.id} className="scroll-mt-4">
                <MenuSection
                  title={section.title}
                  items={section.items}
                  imageSrc={section.imageSrc}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DinnerMenu;
