import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DefaultLayout from '@/components/layouts/unauth-layout/UnauthLayout.tsx';
import HomePage from '@/pages/HomePage.tsx';
import './index.css'
import './lib/i18n';
import { ThemeProvider } from '@/components/ThemeSelect/theme-provider.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '',
        element: <HomePage/>
      },
      { path: 'auth', element: <h1>Auth</h1> }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>,
)

