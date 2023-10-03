import { FC, useRef, useTransition } from 'react';
import { Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HomePage: FC = () => {
  const { t, i18n } = useTranslation();
  const count = useRef(0);
  count.current++;

  return (
    <main className="container py-8">

      <h1>{t('title')}</h1>
      <h3>{count.current}</h3>
    </main>
  );
}

export default HomePage;
