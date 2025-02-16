import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from './NavLink';
import { MobileNavLink } from './MobileNavLink';
import { MdRestaurantMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop and Mobile Header */}
        <div className="flex items-center h-16 mb-4">
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex md:hidden flex-1 items-center justify-between">
            {/* Menu Icon */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-800"
            >
              {isMenuOpen ? 
                <IoMdClose size={30} color='white' /> : 
                <MdRestaurantMenu size={30} color='white' />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 py-3 space-y-1 backdrop-blur-sm rounded-lg my-2">
                <MobileNavLink to="/">Home</MobileNavLink>
                <MobileNavLink to="/menu">Menu</MobileNavLink>
                <MobileNavLink to="/about">Order Now</MobileNavLink>
                <MobileNavLink to="https://order.toasttab.com/online/tengda-asian-bistro">Contact</MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};