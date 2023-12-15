import { useTranslation } from 'react-i18next';

function Hello() {
    const { t } = useTranslation('hello');
    const hello = t('hello-world');

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {hello}
                </p>
            </header>
        </div>
    );
}

export default Hello;
