import { motion } from "framer-motion";
import sushiRoll from "../../assets/sushiRoll.webp";

//Import Icons
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";

export const Hero = () => (
  <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
    {/* Background Image Container */}
    <div className="absolute inset-0">
      {/* Image with responsive sizing and smooth loading */}
      <img
        src={sushiRoll}
        alt="Fresh Sushi Roll"
        className="w-full h-full object-cover opacity-85 object-center transform scale-100" // scale-105 prevents white edges during animations
        loading="eager" // Prioritize loading for hero image
      />

      {/* Gradient Overlay for better text readability and aesthetics */}
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
        Delight in our daily lunch specials, made fresh every day.
        Open all week long for dine-in, takeout, and delivery options.
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