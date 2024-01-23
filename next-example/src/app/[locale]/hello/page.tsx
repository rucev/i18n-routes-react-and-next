import styles from '../page.module.css'
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default function HelloPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const t = useTranslations('Index');

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>{t('hello-world')}</h1>
      </div>
    </main>
  )
}
