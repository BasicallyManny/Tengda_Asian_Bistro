import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Gallery } from '../pages/Gallery';
import { Layout } from '../components/Layout';
import { LunchMenu } from '../pages/LunchMenu';
import { DinnerMenu } from '../pages/DinnerMenu';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/gallery', element: <Gallery /> }, // ➡ Added gallery route
      { path: '/lunch-menu', element: <LunchMenu /> }, // ➡ Added lunch menu route
      { path: '/dinner-menu', element: <DinnerMenu /> }, // ➡ Added dinner menu route
    ],
  },
]);
