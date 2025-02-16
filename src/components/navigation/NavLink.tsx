import { Link } from 'react-router-dom';
import type { NavLinkProps } from '@/types';

export const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium tracking-wider"
  >
    {children}
  </Link>
);