import { motion } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import { hibachiLunchItems, tasteOfAsiaLunchItems, sushiAndLunchBoxe, twoRollSpecial, threeRollSpecial } from "../menuItems/lunchMenuItems";
import MenuSection from '../menuItems/MenuSection.tsx';
import MenuNav from '../menuItems/MenuNavigate.tsx'

// IMPORT IMAGES
import hibachiLunchImage from '../assets/menuImages/hibachiLunch.jpg';
import tasteOfAsiaImage from '../assets/menuImages/tasteOfAsia.jpg';
import sushiandLunchBoxesImage from "../assets/menuImages/sushiandLunchBoxes.jpg";
import twoRollSpecialImage from "../assets/menuImages/twoRollSpecial.jpg";
import threeRollSpecialImage from "../assets/menuImages/threeRollSpecial.jpg";

export const LunchMenu = () => {
  const [activeSection, setActiveSection] = useState('hibachi');
  
  const hibachiRef = useRef<HTMLDivElement | null>(null);
  const tasteOfAsiaRef = useRef<HTMLDivElement | null>(null);
  const sushiLunchBoxesRef = useRef<HTMLDivElement | null>(null);
  const twoRollRef = useRef<HTMLDivElement | null>(null);
  const threeRollRef = useRef<HTMLDivElement | null>(null);
  // References for each section
  const sectionsRef = {
    hibachi: hibachiRef,
    tasteOfAsia: tasteOfAsiaRef,
    sushiLunchBoxes: sushiLunchBoxesRef,
    twoRoll: twoRollRef,
    threeRoll: threeRollRef
  };

  // Menu data with ids wrapped in useMemo
  const menuSections = useMemo(() => [
    { id: 'hibachi', title: 'Hibachi Lunch', items: hibachiLunchItems, imageSrc: hibachiLunchImage, ref: sectionsRef.hibachi },
    { id: 'tasteOfAsia', title: 'Taste of Asia Lunch', items: tasteOfAsiaLunchItems, imageSrc: tasteOfAsiaImage, ref: sectionsRef.tasteOfAsia },
    { id: 'sushiLunchBoxes', title: 'Sushi & Lunch Boxes', items: sushiAndLunchBoxe, imageSrc: sushiandLunchBoxesImage, ref: sectionsRef.sushiLunchBoxes },
    { id: 'twoRoll', title: 'Two Roll Special', items: twoRollSpecial, imageSrc: twoRollSpecialImage, ref: sectionsRef.twoRoll },
    { id: 'threeRoll', title: 'Three Roll Special', items: threeRollSpecial, imageSrc: threeRollSpecialImage, ref: sectionsRef.threeRoll }
  ], [sectionsRef.hibachi, sectionsRef.sushiLunchBoxes, sectionsRef.tasteOfAsia, sectionsRef.threeRoll, sectionsRef.twoRoll]);

  // Navigation sections for the MenuNav component
  const navSections = useMemo(() => 
    menuSections.map(({ id, title, ref }) => ({ id, title, ref })),
  [menuSections]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of menuSections) {
        const element = section.ref.current;
        if (element) {  // Ensures element is not null
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

  // Scroll to section function
  const scrollToSection = (id: string) => {
    const section = sectionsRef[id as keyof typeof sectionsRef].current;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 20, // Smaller offset
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 text-white relative">
      {/* Menu Navigation Component */}
      <MenuNav 
        sections={navSections}
        activeSection={activeSection}
        onSectionSelect={scrollToSection}
      />

      {/* Main Content - Centered */}
      <div className="md:ml-48">
        <div className="max-w-3xl mx-auto px-4 py-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-12 text-center text-amber-400 mt-12"
          >
            Our Lunch Menu
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

export default LunchMenu;