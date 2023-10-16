import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './index.css'
import './lib/i18n';
import { ThemeProvider } from '@/components/theme-select/theme-provider.tsx';
import router from './router.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider storageKey="theme">
        <Suspense>
          <RouterProvider router={router}/>
        </Suspense>
        <Toaster position='bottom-right'/>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

