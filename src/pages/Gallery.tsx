import React, { useState } from 'react';
import { motion } from 'framer-motion';

//Import images
import hibachiLunchImage from '../assets/menuImages/hibachiLunch.jpg';
import sushiandLunchBoxesImage from "../assets/menuImages/sushiandLunchBoxes.jpg";
import twoRollSpecialImage from "../assets/menuImages/twoRollSpecial.jpg";
import threeRollSpecialImage from "../assets/menuImages/threeRollSpecial.jpg";

import outDoor1 from '../assets/heroImages/ourDoor1.jpg';
import outDoor2 from '../assets/heroImages/outdoor2.jpg';

import tasteOfAsia from '../assets/menuImages/tasteOfAsia.jpg';
import healthyDinner from '../assets/menuImages/healthyDinner.jpg';
import tasteOfAsiaDinner from '../assets/menuImages/tasteOfAsiaDinner.jpg';
import sashimiDinner from '../assets/menuImages/sashimiDinner.jpg';
import sushiPlatterDinner from '../assets/menuImages/sushiPlatterDinner.jpg';
import soupDinner from '../assets/menuImages/soupDinner.jpg';
import specialDinnerRolls from '../assets/menuImages/specialRollsDinner.jpg';
import sushiAppetizer from '../assets/menuImages/sushiAppetizerDinner.jpg';
import appetizerDinner from '../assets/menuImages/appetizerDinner.jpg';

import dinnerMenuImage from '../assets/pageimages/dinnerMenuImage.jpg';

import galleryPreview3 from '../assets/gallery/galleryPreview3.jpg';

// Define TypeScript interfaces
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  span?: {
    col?: number;
    row?: number;
  };

}

export const Gallery: React.FC = () => {
  // Gallery data with manual span configurations to avoid empty spaces
  const galleryImages: GalleryImage[] = [
    { id: 1, src: outDoor1, alt: "Outdoor Photo 1", span: { col: 2, row: 2 } },
    { id: 2, src: outDoor2, alt: "Outdoor Photo 2" },
    { id: 3, src: sushiandLunchBoxesImage, alt: "House Sashimi" },
    { id: 4, src: twoRollSpecialImage, alt: "Two Roll Special" },
    { id: 5, src: threeRollSpecialImage, alt: "Three Roll Special", span: { row: 2 } },
    { id: 6, src: hibachiLunchImage, alt: "Hibachi Lunch" },
    { id: 7, src: sushiPlatterDinner, alt: "Sushi Platter" },
    { id: 8, src: tasteOfAsia, alt: "Double Cooked Pork" },
    { id: 9, src: healthyDinner, alt: "Steam Mix Vegetables" },
    { id: 10, src: tasteOfAsiaDinner, alt: "Mapo Tofu", span: { row: 2 } },
    { id: 11, src: sashimiDinner, alt: "White Tuna", span: { row: 2 } },
    { id: 12, src: galleryPreview3, alt: "Pork Bun" },
    { id: 13, src: soupDinner, alt: "Miso Soup" },
    { id: 14, src: specialDinnerRolls, alt: "Deluxe Rainbow Roll", span: { col: 2 } },
    { id: 15, src: sushiAppetizer, alt: "Salmon Tar Tar", span: { row: 2 } },
    { id: 16, src: appetizerDinner, alt: "Edamame", span:{ row: 2 } },
    { id: 17, src: dinnerMenuImage, alt: "Trio Color Sushi", span: { col: 2 } },
  ];

  // State for selected image modal
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  // Child variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4 
      }
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1 
          className="text-4xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Culinary Gallery
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A showcase of our most delicious creations, crafted with passion and precision
        </motion.p>

        {/* Gallery collage with no empty spaces */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryImages.map((image) => (
            <motion.div 
              key={image.id}
              className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer ${
                image.span?.col === 2 ? 'sm:col-span-2' : ''
              } ${
                image.span?.row === 2 ? 'row-span-2' : ''
              }`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03, 
                transition: { duration: 0.3 } 
              }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-full">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className={`w-full ${
                    image.span?.row === 2 ? 'h-full min-h-full object-cover' : 
                    image.id === 14 ? 'h-48' : 
                    image.span?.col === 2 && image.span?.row === 2 ? 'h-96 md:h-full' : 
                    'h-60'
                  } object-cover`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image modal */}
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              className="max-w-4xl w-full bg-neutral-800 rounded-lg overflow-hidden relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="w-full h-auto object-contain max-h-[70vh]"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
              </div>
              <button 
                className="absolute top-4 right-4 bg-neutral-700 rounded-full p-2 hover:bg-neutral-600 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Gallery;