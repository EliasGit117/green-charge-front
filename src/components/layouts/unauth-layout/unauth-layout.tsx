import './styles.css';
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { LucideMail, Phone, Twitter, Zap } from 'lucide-react';
import SettingsPopover from '@/components/settings-popover.tsx';

const DefaultLayout: FC = () => {

  return (
    <>
      <header>
        <div className="container flex items-center gap-4 py-4 justify-between">

          <div className="flex items-center gap-2 font-bold uppercase">
            <Zap className="text-primary h-4 w-4"/>
            <h1 className="text-primary">Green charge</h1>
          </div>

          <SettingsPopover/>
        </div>
      </header>

      <>
        <Outlet/>
      </>

      <footer className="mt-auto pb-2">
        <div className="flex justify-between container py-4 text-sm">

          <span>
            @2023 Green Charge
          </span>


          <div className="flex gap-8">
            <Link to="mailto: abc@example.com">
              <LucideMail size={18} strokeWidth={1.4} overlineThickness={1}/>
            </Link>

            <Link to="tel:+4733378901">
              <Phone size={18} strokeWidth={1.4} overlineThickness={1}/>
            </Link>

            <Link to="http://twitter.com">
              <Twitter size={18} strokeWidth={1.4} overlineThickness={1}/>
            </Link>
          </div>

        </div>
      </footer>
    </>
  );
};

export default DefaultLayout;
