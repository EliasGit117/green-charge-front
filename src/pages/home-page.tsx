import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HomePage: FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <main className="container py-8 flex flex-col gap-4">
      <h1 className="text-4xl">{t('title')}</h1>

      <Link to='sign-in'>Sign in</Link>
      <Link to='sign-up'>Sign up</Link>
    </main>
  );
}

export default HomePage;
