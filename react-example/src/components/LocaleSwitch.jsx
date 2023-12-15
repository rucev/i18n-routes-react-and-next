import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function LocaleSwitch() {
    const { t, i18n } = useTranslation('routes');
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    const updateLocale = (newLocale) => {
        const route = pathname === t('home-route') ? 'home-route' : 'hello-route';
        i18n.changeLanguage(newLocale);
        navigate(t(route))
    }

    return (
        <div style={{ top: 0, padding: "1rem" }}>
            <button onClick={() => updateLocale(i18n.language === 'es' ? 'en' : 'es')}>
                {i18n.language === 'es' ? 'English Version' : 'Version en Español'}
            </button>
        </div>
    );
}

export default LocaleSwitch;
