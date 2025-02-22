import { motion, AnimatePresence } from 'framer-motion';
import sushiRoll from "../../assets/heroImages/sushiRoll.webp";
import galleryPreview2 from "../../assets/gallery/galleryPreview2.jpg";
import rollAndHandRolllDinner from "../../assets/menuImages/rollAndHandRollDinner.jpg";
import sashimiDinnerImg from "../../assets/menuImages/sashimiDinner.jpg";
import specialRolls from "../../assets/menuImages/specialRollsDinner.jpg";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";

import { useState, useEffect } from 'react';

export const Hero = () => {
  const images = [
    sushiRoll,
    sashimiDinnerImg,
    rollAndHandRolllDinner,
    galleryPreview2,
    specialRolls
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <AnimatePresence mode='wait'>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Gallery Image ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover opacity-85 object-center"
            loading="eager"
          />
        </AnimatePresence>

        {/* Image Navigation Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? 'bg-white' : 'bg-white/50'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
      >
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Tengda Asian Bistro
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-md md:text-2xl mb-8 max-w-2xl mx-auto text-center leading-relaxed text-white"
        >
          Experience the best Asian flavors in town, serving you since <strong>2001</strong>. 
          Enjoy our <strong>outdoor seating</strong> for a perfect dining experience. Delight 
          in our daily lunch specials, made fresh every day. Open all week 
          long for dine-in, takeout, delivery, and outdoor dining options.
        </motion.p>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex justify-center space-x-6 mt-6"
        >
          <a
            href="https://www.instagram.com/tengdaofwestport/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transform transition-all duration-300"
          >
            <GrInstagram size={30} color="#fff" />
          </a>
          <a
            href="https://www.facebook.com/tengdaofwestport"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transform transition-all duration-300"
          >
            <FaFacebookF size={30} color="#fff" />
          </a>
        </motion.div>

        {/* Order Now Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex justify-center space-x-6 mt-6"
        >
          <button className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-black rounded-full bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 hover:from-red-300 hover:via-red-400 hover:to-yellow-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 transition-all duration-300">
            <a
              href="https://order.toasttab.com/online/tengda-asian-bistro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transform transition-all duration-300"
            >
              Order Now
            </a>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};