import Image from 'next/image'
import styles from './page.module.css'
import { useTranslations } from 'next-intl';
import NavigationLink from '@/components/NavigationLink';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          {t('get-started')}&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <NavigationLink
            href="/hello"
            rel="noopener noreferrer"
          >
            {t('hello')}
          </NavigationLink>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            {t('docs-title')} <span>-&gt;</span>
          </h2>
          <p>{t('docs-content')}</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            {t('learn-title')} <span>-&gt;</span>
          </h2>
          <p>{t('learn-content')}</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            {t('templates-title')} <span>-&gt;</span>
          </h2>
          <p>{t('templates-content')}</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            {t('deploy-title')} <span>-&gt;</span>
          </h2>
          <p>
            {t('deploy-content')}
          </p>
        </a>
      </div>
    </main>
  )
}
