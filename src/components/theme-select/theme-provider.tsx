import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

export type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider(p: ThemeProviderProps) {
  const {
    children,
    defaultTheme = 'system',
    storageKey = 'vite-ui-theme',
    ...props
  } = p;

  const [theme, setTheme] =
    useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme);

  const onMediaQueryChangeRed = useRef((e: MediaQueryListEvent) => {
    const docEl = window.document.documentElement;
    docEl.classList.remove('light', 'dark');
    docEl.classList.add((e.matches ? 'dark' : 'light'));
  });

  const removeListener = () => window
    .matchMedia('(prefers-color-scheme: dark)')
    .removeEventListener('change', onMediaQueryChangeRed.current);


  const addListener = () => window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', onMediaQueryChangeRed.current);

  const isMediaDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    const docEl = window.document.documentElement;

    if (theme === 'system') {
      docEl.classList.add(isMediaDark() ? 'dark' : 'light')
      addListener();
    } else {
      removeListener();
      docEl.classList.remove('light', 'dark');
      docEl.classList.add(theme);
    }

    return () => {
      removeListener();
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
