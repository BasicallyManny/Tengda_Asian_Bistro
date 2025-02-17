import { motion } from "framer-motion";
import { useState } from "react";

import galleryPreview1 from "../../assets/gallery/galleryPreview1.jpg";
import galleryPreview2 from "../../assets/gallery/galleryPreview2.jpg";
import galleryPreview3 from "../../assets/gallery/galleryPreview3.jpg";
import galleryPreview4 from "../../assets/gallery/galleryPreview4.jpg";

const images = [
  galleryPreview1, // First column
  galleryPreview2, // Top of second column (with button)
  galleryPreview3, // Bottom of second column (scales on hover)
  galleryPreview4, // Third column
];

export const GalleryPreview = () => {
  const [imagesLoaded, setImagesLoaded] = useState(Array(images.length).fill(false));

  const handleImageLoad = (index) => {
    setImagesLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  // Animation variants
  const imageHoverVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] },
    },
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Gallery Preview</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center">
          {/* Mobile-Only Image: Image[2] with Button */}
          <div className="sm:hidden flex flex-col gap-6">
            {/* Top Image with Button Overlay */}
            <motion.div
              className="relative overflow-hidden rounded-lg bg-neutral-800 cursor-pointer"
              initial="initial"
              whileHover="hover"
            >
              <motion.div className="absolute inset-0 bg-black/30 z-10" variants={overlayVariants} />
              <motion.img
                src={images[2]}
                alt="Gallery 3"
                srcSet={`${images[2]}?w=400 400w, ${images[2]}?w=800 800w, ${images[2]}?w=1200 1200w`}
                sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
                loading="lazy"
                decoding="async"
                onLoad={() => handleImageLoad(2)}
                variants={imageHoverVariants}
                className={`w-full h-[30vh] sm:h-[40vh] md:h-[50vh] rounded-lg object-cover transition-opacity duration-300 ${
                  imagesLoaded[2] ? "opacity-100" : "opacity-0"
                }`}
              />
              {/* Button always visible */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-gray-900 rounded-full bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 hover:from-red-300 hover:via-red-400 hover:to-yellow-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 transition-all duration-300">
                  View Full Gallery
                </button>
              </div>
            </motion.div>
          </div>

          {/* Column 1: Taller Image for larger screens */}
          <motion.div
            className="relative overflow-hidden rounded-lg bg-neutral-800 cursor-pointer sm:block hidden"
            initial="initial"
            whileHover="hover"
          >
            <motion.div className="absolute inset-0 bg-black/30 z-10" variants={overlayVariants} />
            <motion.img
              src={images[0]}
              alt="Gallery 1"
              srcSet={`${images[0]}?w=400 400w, ${images[0]}?w=800 800w, ${images[0]}?w=1200 1200w`}
              sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
              loading="lazy"
              decoding="async"
              onLoad={() => handleImageLoad(0)}
              variants={imageHoverVariants}
              className={`w-full h-[40vh] sm:h-[55vh] md:h-[75vh] rounded-lg object-cover transition-opacity duration-300 ${
                imagesLoaded[0] ? "opacity-100" : "opacity-0"
              }`}
            />
          </motion.div>

          {/* Column 2: Two Stacked Images for larger screens */}
          <div className="flex flex-col gap-6 sm:block hidden">
            {/* Top Image with Button Overlay */}
            <motion.div
              className="relative overflow-hidden rounded-lg bg-neutral-800 cursor-pointer"
              initial="initial"
              whileHover="hover"
            >
              <motion.div className="absolute inset-0 bg-black/30 z-10" variants={overlayVariants} />
              <motion.img
                src={images[1]}
                alt="Gallery 2"
                srcSet={`${images[1]}?w=400 400w, ${images[1]}?w=800 800w, ${images[1]}?w=1200 1200w`}
                sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
                loading="lazy"
                decoding="async"
                onLoad={() => handleImageLoad(1)}
                variants={imageHoverVariants}
                className={`w-full h-[30vh] sm:h-[40vh] md:h-[50vh] rounded-lg object-cover transition-opacity duration-300 ${
                  imagesLoaded[1] ? "opacity-100" : "opacity-0"
                }`}
              />
              {/* Button always visible */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <button className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-gray-900 rounded-full bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 hover:from-red-300 hover:via-red-400 hover:to-yellow-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 transition-all duration-300">
                  View Full Gallery
                </button>
              </div>
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              className="relative overflow-hidden rounded-lg bg-neutral-800 cursor-pointer"
              initial="initial"
              whileHover="hover"
            >
              <motion.div className="absolute inset-0 bg-black/30 z-10" variants={overlayVariants} />
              <motion.img
                src={images[2]}
                alt="Gallery 3"
                srcSet={`${images[2]}?w=400 400w, ${images[2]}?w=800 800w, ${images[2]}?w=1200 1200w`}
                sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
                loading="lazy"
                decoding="async"
                onLoad={() => handleImageLoad(2)}
                variants={imageHoverVariants}
                className={`w-full h-[30vh] sm:h-[40vh] md:h-[50vh] rounded-lg object-cover transition-opacity duration-300 ${
                  imagesLoaded[2] ? "opacity-100" : "opacity-0"
                }`}
              />
            </motion.div>
          </div>

          {/* Column 3: Taller Image for larger screens */}
          <motion.div
            className="relative overflow-hidden rounded-lg bg-neutral-800 cursor-pointer sm:block hidden"
            initial="initial"
            whileHover="hover"
          >
            <motion.div className="absolute inset-0 bg-black/30 z-10" variants={overlayVariants} />
            <motion.img
              src={images[3]}
              alt="Gallery 4"
              srcSet={`${images[3]}?w=400 400w, ${images[3]}?w=800 800w, ${images[3]}?w=1200 1200w`}
              sizes="(max-width: 600px) 400px, (max-width: 1024px) 800px, 1200px"
              loading="lazy"
              decoding="async"
              onLoad={() => handleImageLoad(3)}
              variants={imageHoverVariants}
              className={`w-full h-[40vh] sm:h-[55vh] md:h-[75vh] rounded-lg object-cover transition-opacity duration-300 ${
                imagesLoaded[3] ? "opacity-100" : "opacity-0"
              }`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
