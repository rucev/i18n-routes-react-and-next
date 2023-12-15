import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { useTranslation } from 'react-i18next';

function Home({ helloPath }) {
    const { t } = useTranslation('home');
    const edit = t('title-edit');
    const code = t('title-code');
    const reload = t('title-reload');
    const link = t('link');

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {edit}<code>{code}</code>{reload}
                </p>
                <Link
                    to={helloPath}
                >
                    {link}
                </Link>
            </header>
        </div>
    );
}

export default Home;
