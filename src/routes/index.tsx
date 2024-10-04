import { App } from '@/App';
import { Layout } from '@/layout/layout';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'about',
        element: <div>about whot init?</div>,
      },
      {
        path: 'contact',
        element: <div>oi! contact init</div>,
      },
    ],
  },
]);
