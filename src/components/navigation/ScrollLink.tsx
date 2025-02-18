import React from 'react';

interface ScrollLinkProps {
  to: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const ScrollLink: React.FC<ScrollLinkProps> = ({ to, onClick, className, children }) => {
  const handleClick = () => {
    const section = document.getElementById(to);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.assign(`/#${to}`); // Fallback: Navigate to section if not found
    }
    if (onClick) onClick();
  };

  return (
    <button 
      onClick={handleClick} 
      className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-bold tracking-wider transition-colors hover:border-b-2 border-white ${className}`}
    >
      {children}
    </button>
  );
};
