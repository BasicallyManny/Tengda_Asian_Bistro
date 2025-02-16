import { Outlet } from 'react-router-dom';
import { Navbar } from './navigation/Navbar';

export const Layout = () => (
  <div className="min-h-screen bg-white text-black">
    <Navbar />
    <Outlet />
  </div>
);