import { useTranslation } from 'react-i18next';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './views/Home';
import './index.css';
import { useEffect } from 'react';
import LocaleSwitch from './components/LocaleSwitch';
import Hello from './views/Hello';

function App() {
  const { t, i18n } = useTranslation('routes');
  const home = t('home-route');
  const hello = t('hello-route');
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (pathname.startsWith('/es')) i18n.changeLanguage('es');
    else i18n.changeLanguage('en');
    i18n.changeLanguage()
  }, [pathname]);

  return (
    <>
      <LocaleSwitch />
      <Routes>
        <Route path={`${home}`} element={<Home helloPath={hello} />} />
        <Route path={`${hello}`} element={<Hello />} />
      </Routes>
    </>
  );
}

export default App;
