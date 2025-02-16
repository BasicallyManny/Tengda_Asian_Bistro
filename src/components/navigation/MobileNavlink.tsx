import { Link } from 'react-router-dom';
import type { NavLinkProps } from '@/types';

export const MobileNavLink: React.FC<NavLinkProps> = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-lg font-bold tracking-wider"
  >
    {children}
  </Link>
);