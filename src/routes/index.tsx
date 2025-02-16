import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Layout } from '../components/Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/menu', element: <Menu /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);