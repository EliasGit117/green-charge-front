import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Monitor, Moon, Settings, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { DropdownMenuRadioItem } from '@/components/ui/dropdown-menu.tsx';
import React from 'react';
import { Separator } from '@/components/ui/separator'
import { useTheme } from '@/components/theme-select/theme-provider.tsx';

const SettingsPopover = () => {
  const { t, i18n } = useTranslation();
  const { setTheme, theme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5"/>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="flex flex-col gap-2">

        <span>{t('components.languageSelect.selectLanguage')}:</span>
        <div className="flex border rounded-md p-1 gap-1">
          <Button
            size="xs"
            variant="ghost"
            className="grow"
            disabled={i18n.language == 'en'}
            onClick={() => i18n.changeLanguage('en')}
          >
            English
          </Button>

          <Separator orientation="vertical" className="h-7"/>

          <Button
            size="xs"
            variant="ghost"
            className="grow"
            disabled={i18n.language == 'ru'}
            onClick={() => i18n.changeLanguage('ru')}
          >
            Русский
          </Button>
        </div>

        <span>Theme selection:</span>
        <div className="flex border rounded-md p-1 gap-1">
          <Button
            size="xs"
            variant="ghost"
            className="grow gap-2"
            disabled={theme == 'system'}
            onClick={() => setTheme('system')}
          >
            <Monitor className="h-4 w-4"/>
            {t('components.themeSelect.system')}
          </Button>

          <Separator orientation="vertical" className="h-7"/>

          <Button
            size="xs"
            variant="ghost"
            className="grow gap-2"
            disabled={theme == 'light'}
            onClick={() => setTheme('light')}
          >
            <Sun className="h-4 w-4"/>
            {t('components.themeSelect.light')}
          </Button>

          <Separator orientation="vertical" className="h-7"/>

          <Button
            size="xs"
            variant="ghost"
            className="grow gap-2"
            disabled={theme == 'dark'}
            onClick={() => setTheme('dark')}
          >
            <Moon className="h-4 w-4"/>
            {t('components.themeSelect.dark')}
          </Button>

        </div>

      </PopoverContent>
    </Popover>
  )
}

export default SettingsPopover;
