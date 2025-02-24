import { motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import { hibachiLunchItems, tasteOfAsiaLunchItems, sushiAndLunchBoxe, twoRollSpecial, threeRollSpecial } from "../menuItems/lunchMenuItems";
import MenuSection from '../menuItems/MenuSection.tsx';

// IMPORT IMAGES
import hibachiLunchImage from '../assets/menuImages/hibachiLunch.jpg';
import tasteOfAsiaImage from '../assets/menuImages/tasteOfAsia.jpg';
import sushiandLunchBoxesImage from "../assets/menuImages/sushiandLunchBoxes.jpg";
import twoRollSpecialImage from "../assets/menuImages/twoRollSpecial.jpg";
import threeRollSpecialImage from "../assets/menuImages/threeRollSpecial.jpg";

export const LunchMenu = () => {
  const [activeSection, setActiveSection] = useState('hibachi');
  const [sideNavVisible, setSideNavVisible] = useState(true);
  const { scrollY } = useScroll();
  
  // References for each section
  const sectionsRef = {
    hibachi: useRef(null),
    tasteOfAsia: useRef(null),
    sushiLunchBoxes: useRef(null),
    twoRoll: useRef(null),
    threeRoll: useRef(null)
  };

  // Menu data with ids wrapped in useMemo
  const menuSections = useMemo(() => [
    { id: 'hibachi', title: 'Hibachi Lunch', items: hibachiLunchItems, imageSrc: hibachiLunchImage, ref: sectionsRef.hibachi },
    { id: 'tasteOfAsia', title: 'Taste of Asia Lunch', items: tasteOfAsiaLunchItems, imageSrc: tasteOfAsiaImage, ref: sectionsRef.tasteOfAsia },
    { id: 'sushiLunchBoxes', title: 'Sushi & Lunch Boxes', items: sushiAndLunchBoxe, imageSrc: sushiandLunchBoxesImage, ref: sectionsRef.sushiLunchBoxes },
    { id: 'twoRoll', title: 'Two Roll Special', items: twoRollSpecial, imageSrc: twoRollSpecialImage, ref: sectionsRef.twoRoll },
    { id: 'threeRoll', title: 'Three Roll Special', items: threeRollSpecial, imageSrc: threeRollSpecialImage, ref: sectionsRef.threeRoll }
  ], [sectionsRef.hibachi, sectionsRef.sushiLunchBoxes, sectionsRef.tasteOfAsia, sectionsRef.threeRoll, sectionsRef.twoRoll]);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      // Find which section is currently in view
      for (const section of menuSections) {
        const element = section.ref.current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
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
  const scrollToSection = (id) => {
    const section = sectionsRef[id].current;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 20, // Smaller offset
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // Toggle side navigation visibility on small screens
  const toggleSideNav = () => {
    setSideNavVisible(!sideNavVisible);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-neutral-800 text-white relative">
      {/* Side Navigation Toggle Button (Mobile Only) */}
      <button 
        onClick={toggleSideNav}
        className="md:hidden fixed top-20 left-0 z-30 p-2 bg-amber-500 text-neutral-900 rounded-r-md shadow-lg"
      >
        {sideNavVisible ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        )}
      </button>

      {/* Vertical Side Navigation */}
      <div 
        className={`fixed top-0 left-0 h-full z-20 bg-neutral-900 bg-opacity-95 backdrop-blur-sm border-r border-amber-700 shadow-lg transition-all duration-300 ${
          sideNavVisible ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="p-4 pt-24 h-full overflow-y-auto">
          <ul className="flex flex-col space-y-2 w-48">
            {menuSections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => {
                    scrollToSection(section.id);
                    if (window.innerWidth < 768) {
                      setSideNavVisible(false);
                    }
                  }}
                  className={`px-4 py-3 rounded-md text-left w-full transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-amber-500 text-neutral-900 font-medium'
                      : 'text-amber-400 hover:bg-neutral-800'
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sideNavVisible ? 'md:ml-48' : 'ml-0'}`}>
        <div className="max-w-4xl mx-auto px-4 py-16">
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

      {/* Back to top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-amber-500 text-neutral-900 shadow-lg hover:bg-amber-400 transition-all"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY?.get() > 300 ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </motion.button>
    </div>
  );
};

export default LunchMenu;