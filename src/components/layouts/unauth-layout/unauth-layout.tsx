import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserCircle, Zap } from 'lucide-react';
import './styles.css';
import LanguageSelect from '@/components/language-select.tsx';
import { ModeToggle } from '@/components/ThemeSelect/mode-toggle.tsx';

const DefaultLayout: FC = () => {

  return (
    <>
      <header className="border-b">
        <section className="container flex items-center gap-4 py-4 justify-between">

          <section className="flex items-center gap-2">
            <Zap className="text-primary" size={18}/>
            <h1 className="text-primary font-semibold">Green charge</h1>
          </section>


          <section className="flex gap-4 items-center">
            <ModeToggle/>

            <LanguageSelect/>

            {/*<Link to="auth">*/}
            {/*  <UserCircle strokeWidth={1.5}/>*/}
            {/*</Link>*/}
          </section>
        </section>
      </header>

      <>
        <Outlet/>
      </>

      <footer className="mt-auto">
        <div className="container py-4">
          <h3>
            Footer
          </h3>
        </div>
      </footer>
    </>
  );
};

export default DefaultLayout;
