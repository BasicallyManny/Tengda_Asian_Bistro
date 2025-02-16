import { Link } from 'react-router-dom';
import type { NavLinkProps } from '@/types';

export const NavLink: React.FC<NavLinkProps> = ({ to, children, openInNewTab }) => {
  // If openInNewTab is true, render an anchor tag instead of Link
  if (openInNewTab) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white mt-8 px-3 py-2 rounded-md text-lg font-bold tracking-wider"
      >
        {children}
      </a>
    );
  }

  // Default internal Link behavior
  return (
    <Link
      to={to}
      className="text-gray-300 hover:text-white mt-8 px-3 py-2 rounded-md text-lg font-bold tracking-wider"
    >
      {children}
    </Link>
  );
};
