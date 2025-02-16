import { Outlet } from 'react-router-dom';
import { Navbar } from './navigation/Navbar';

export const Layout = () => (
  <div className="min-h-screen bg-neutral-900 text-white">
    <Navbar />
    <Outlet />
  </div>
);