import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from 'react-router-dom';

import galleryPreview1 from "../../assets/gallery/galleryPreview1.jpg";
import galleryPreview2 from "../../assets/gallery/galleryPreview2.jpg";
import galleryPreview3 from "../../assets/gallery/galleryPreview3.jpg";
import galleryPreview4 from "../../assets/gallery/galleryPreview4.jpg";

const images = [galleryPreview1, galleryPreview2, galleryPreview3, galleryPreview4];

export const GalleryPreview = () => {
  const [imagesLoaded, setImagesLoaded] = useState(Array(images.length).fill(false));

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const imageHoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.4 } },
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="pt-16 min-h-screen bg-neutral-900 text-white flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Gallery Preview</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Mobile-Only Image with Button */}
          <div className="sm:hidden flex flex-col gap-6">
            <motion.div
              className="relative overflow-hidden rounded-lg bg-neutral-800 cursor-pointer"
              initial="initial"
              whileHover="hover"
            >
              <motion.div className="absolute inset-0 bg-black/30 z-10" variants={overlayVariants} />
              <motion.img
                src={images[2]}
                alt="Gallery 3"
                loading="lazy"
                decoding="async"
                onLoad={() => handleImageLoad(2)}
                variants={imageHoverVariants}
                className={`w-full h-[30vh] sm:h-[40vh] md:h-[50vh] object-cover rounded-lg transition-opacity duration-300 ${imagesLoaded[2] ? "opacity-100" : "opacity-0"}`}
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Link to="/gallery">
                  <button className="px-6 py-2.5 text-sm font-bold text-black rounded-full bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 hover:from-red-300 hover:via-red-400 hover:to-yellow-300 transition-all duration-300">
                    View Full Gallery
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Column 1 */}
          <motion.div className="relative overflow-hidden rounded-lg sm:block hidden cursor-pointer" initial="initial" whileHover="hover">
            <motion.div className="absolute inset-0 bg-black/30 z-10" variants={overlayVariants} />
            <motion.img
              src={images[0]}
              alt="Gallery 1"
              loading="lazy"
              decoding="async"
              onLoad={() => handleImageLoad(0)}
              variants={imageHoverVariants}
              className={`w-full h-[40vh] sm:h-[55vh] md:h-[75vh] object-cover rounded-lg transition-opacity duration-300 ${imagesLoaded[0] ? "opacity-100" : "opacity-0"}`}
            />
          </motion.div>

          {/* Column 2 */}
          <div className="hidden sm:flex flex-col gap-6">
            <motion.div className="relative overflow-hidden rounded-lg cursor-pointer" initial="initial" whileHover="hover">
              <motion.div className="absolute inset-0 bg-black/30 z-10" variants={overlayVariants} />
              <motion.img
                src={images[1]}
                alt="Gallery 2"
                loading="lazy"
                decoding="async"
                onLoad={() => handleImageLoad(1)}
                variants={imageHoverVariants}
                className={`w-full h-[30vh] sm:h-[40vh] md:h-[50vh] object-cover rounded-lg transition-opacity duration-300 ${imagesLoaded[1] ? "opacity-100" : "opacity-0"}`}
              />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <Link to="/gallery">
                  <button className="px-6 py-2.5 text-sm font-bold text-black rounded-full bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 hover:from-red-300 hover:via-red-400 hover:to-yellow-300 transition-all duration-300">
                    View Full Gallery
                  </button>
                </Link>
              </div>
            </motion.div>

            <motion.div className="relative overflow-hidden rounded-lg cursor-pointer" initial="initial" whileHover="hover">
              <motion.div className="absolute inset-0 bg-black/30 z-10" variants={overlayVariants} />
              <motion.img
                src={images[2]}
                alt="Gallery 3"
                loading="lazy"
                decoding="async"
                onLoad={() => handleImageLoad(2)}
                variants={imageHoverVariants}
                className={`w-full h-[30vh] sm:h-[40vh] md:h-[50vh] object-cover rounded-lg transition-opacity duration-300 ${imagesLoaded[2] ? "opacity-100" : "opacity-0"}`}
              />
            </motion.div>
          </div>

          {/* Column 3 */}
          <motion.div className="relative overflow-hidden rounded-lg sm:block hidden cursor-pointer" initial="initial" whileHover="hover">
            <motion.div className="absolute inset-0 bg-black/30 z-10" variants={overlayVariants} />
            <motion.img
              src={images[3]}
              alt="Gallery 4"
              loading="lazy"
              decoding="async"
              onLoad={() => handleImageLoad(3)}
              variants={imageHoverVariants}
              className={`w-full h-[40vh] sm:h-[55vh] md:h-[75vh] object-cover rounded-lg transition-opacity duration-300 ${imagesLoaded[3] ? "opacity-100" : "opacity-0"}`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
