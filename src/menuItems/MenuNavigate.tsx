import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing the icons

interface MenuSection {
    id: string;
    title: string;
    ref: React.RefObject<HTMLDivElement | null>;
  }

interface MenuNavProps {
    sections: MenuSection[];
    activeSection: string;
    onSectionSelect: (id: string) => void;
}

const MenuNav = ({ sections, activeSection, onSectionSelect }: MenuNavProps) => {
    const [sideNavVisible, setSideNavVisible] = useState(true);

    // Toggle side navigation visibility on small screens
    const toggleSideNav = () => {
        setSideNavVisible(!sideNavVisible);
    };

    return (
        <>
            {/* Side Navigation Toggle Button (Mobile Only) */}
            <button
                onClick={toggleSideNav}
                className="md:hidden fixed top-20 left-0 z-30 p-2 bg-amber-500 text-neutral-900 rounded-r-md shadow-lg"
                aria-label={sideNavVisible ? "Hide menu navigation" : "Show menu navigation"}
            >
                {sideNavVisible ? (
                    <FaTimes size={20} />  // Close icon (FaTimes)
                ) : (
                    <FaBars size={20} />  // Hamburger menu icon (FaBars)
                )}
            </button>

            {/* Vertical Side Navigation */}
            <motion.div
                className={`fixed top-0 left-0 h-full z-20 backdrop-blur-sm shadow-lg transition-all duration-300 ${sideNavVisible ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0`}
                initial={{ x: -240 }}
                animate={{ x: sideNavVisible ? 0 : -240 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="flex items-center p-4 pt-24 h-full overflow-y-auto">
                    <motion.ul
                        className="flex flex-col space-y-3 w-48"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {sections.map((section) => (
                            <motion.li
                                key={section.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <button
                                    onClick={() => {
                                        onSectionSelect(section.id);
                                        if (window.innerWidth < 768) {
                                            setSideNavVisible(false);
                                        }
                                    }}
                                    className={`px-6 py-3 rounded-lg text-left w-full transition-all duration-300 ease-in-out transform ${activeSection === section.id
                                            ? 'bg-amber-600 text-neutral-900 font-semibold scale-105'
                                            : 'text-amber-400 hover:bg-neutral-700 hover:text-white'
                                        }`}
                                >
                                    {section.title}
                                </button>
                            </motion.li>
                        ))}
                    </motion.ul>
                </div>
            </motion.div>

            {/* Content margin adjustment for the rest of the page */}
            <div className={`hidden md:block transition-all duration-300 ${sideNavVisible ? 'ml-48' : 'ml-0'}`} />
        </>
    );
};

export default MenuNav;
