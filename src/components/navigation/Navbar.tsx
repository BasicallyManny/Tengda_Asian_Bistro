import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from './NavLink';
import { MobileNavLink } from './MobileNavLink';

import { MdRestaurantMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-wider">Tengda</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/menu">Menu</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-800"
            >
              {isMenuOpen ? <MdRestaurantMenu size={24} /> : <IoMdClose size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink to="/">Home</MobileNavLink>
              <MobileNavLink to="/menu">Menu</MobileNavLink>
              <MobileNavLink to="/about">About</MobileNavLink>
              <MobileNavLink to="/contact">Contact</MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};