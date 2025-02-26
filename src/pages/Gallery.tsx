import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Define TypeScript interfaces
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export const Gallery: React.FC = () => {
  // Sample gallery data
  const galleryImages: GalleryImage[] = [
    { id: 1, src: "/api/placeholder/600/400", alt: "Grilled salmon with asparagus" },
    { id: 2, src: "/api/placeholder/600/400", alt: "Chocolate lava cake" },
    { id: 3, src: "/api/placeholder/600/400", alt: "Caprese salad" },
    { id: 4, src: "/api/placeholder/600/400", alt: "Ribeye steak" },
    { id: 5, src: "/api/placeholder/600/400", alt: "Truffle pasta" },
    { id: 6, src: "/api/placeholder/600/400", alt: "Tiramisu" },
    { id: 7, src: "/api/placeholder/600/400", alt: "Bruschetta" },
    { id: 8, src: "/api/placeholder/600/400", alt: "Seafood paella" },
    { id: 9, src: "/api/placeholder/600/400", alt: "Crème brûlée" },
    { id: 10, src: "/api/placeholder/600/400", alt: "Shrimp cocktail" },
    { id: 11, src: "/api/placeholder/600/400", alt: "Beef Wellington" },
    { id: 12, src: "/api/placeholder/600/400", alt: "Cheesecake" },
  ];

  // State for selected image modal
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Child variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5 
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
          className="text-xl text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A showcase of our most delicious creations, crafted with passion and precision
        </motion.p>

        {/* Gallery collage */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryImages.map((image, index) => {
            // Create variable heights for a more natural collage look
            const isLarge = index % 5 === 0;
            const isMedium = index % 3 === 0 && !isLarge;
            
            return (
              <motion.div 
                key={image.id}
                className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer ${
                  isLarge ? 'sm:col-span-2 sm:row-span-2' : isMedium ? 'md:col-span-1 md:row-span-2' : ''
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
                      isLarge ? 'h-96 md:h-full' : isMedium ? 'h-72 md:h-full' : 'h-64'
                    } object-cover`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
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