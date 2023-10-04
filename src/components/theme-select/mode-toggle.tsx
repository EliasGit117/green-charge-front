import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup, DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Theme, useTheme } from '@/components/theme-select/theme-provider.tsx';
import React from 'react';
import { useTranslation } from 'react-i18next';

export function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
          />
          <Moon
            className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">

        <DropdownMenuRadioGroup value={theme} onValueChange={(v: Theme) => setTheme(v)}>
          <DropdownMenuRadioItem value="light">
            {t('components.themeSelect.light')}
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem value="dark">
            {t('components.themeSelect.dark')}
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem value="system">
            {t('components.themeSelect.system')}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
