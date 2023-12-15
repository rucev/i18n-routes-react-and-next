'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../navigation';

export default function LocaleSwitch() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const updateLocale = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
    }

    return (
        <div style={{ top: 0, padding: "1rem" }}>
            <button onClick={() => updateLocale(locale === 'es' ? 'en' : 'es')}>
                {locale === 'es' ? 'English Version' : 'Version en Español'}
            </button>
        </div>
    );
}
