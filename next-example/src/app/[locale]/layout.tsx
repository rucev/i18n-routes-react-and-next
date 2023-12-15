import './globals.css';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { ReactNode } from 'react';
import { locales } from '../../config';
import LocaleSwitch from '@/components/LocaleSwitch';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'Index' });

  return {
    title: t('hello-world')
  };
}

export default async function RootLayout({
  children,
  params: { locale }
}: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <html className='h-full' lang={locale}>
      <body className={inter.className}>
        <LocaleSwitch />
        {children}
      </body>
    </html>
  );
}