import { createBrowserRouter, Navigate } from 'react-router-dom';
import DefaultLayout from './components/layouts/unauth-layout/unauth-layout.tsx';
import React from 'react';

const HomePage = React.lazy(() => import('./pages/home-page.tsx'));
const SignInPage = React.lazy(() => import('./pages/sign-in-page.tsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      { path: '', element: <HomePage/> },
      { path: 'sign-in', element: <SignInPage/> },
      { path: 'sign-up', element: <h1>Sign up</h1> },
      { path: '*', element: <Navigate to="/"/> }
    ]
  },
]);

export default router;
