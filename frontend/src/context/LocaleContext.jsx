import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import bn from '../locales/bn.js';
import en from '../locales/en.js';
import { buildServiceTranslations, SERVICE_CATEGORY_COUNT } from '../data/serviceCatalog.js';

const dictionaries = { en, bn };
const LocaleContext = createContext(null);
const LOCALE_KEY = 'amarsheba-locale';

function normalizeLocale(locale) {
  return Object.hasOwn(dictionaries, locale) ? locale : 'en';
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(() => normalizeLocale(localStorage.getItem(LOCALE_KEY) || 'en'));

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem(LOCALE_KEY, locale);
  }, [locale]);

  const value = useMemo(() => {
    const mergedTranslations = {
      ...dictionaries[locale],
      common: {
        ...dictionaries[locale].common,
        searchPlaceholder:
          locale === 'bn'
            ? 'এনআইডি, পাসপোর্ট, কৃষি, কর, ইউটিলিটি, জরুরি সেবা খুঁজুন...'
            : 'Search NID, passport, agriculture, tax, utility, emergency...',
      },
      home: {
        ...dictionaries[locale].home,
        statOne: locale === 'bn' ? `${SERVICE_CATEGORY_COUNT}টি সেবা ক্যাটাগরি` : `${SERVICE_CATEGORY_COUNT} service categories`,
      },
      serviceDetails: {
        ...dictionaries[locale].serviceDetails,
        steps: locale === 'bn' ? 'আবেদন প্রক্রিয়া' : 'Application Process',
      },
      services: buildServiceTranslations(locale),
    };

    const t = (path) => path.split('.').reduce((acc, key) => acc?.[key], mergedTranslations) || path;
    const changeLocale = (nextLocale) => {
      const safeLocale = normalizeLocale(nextLocale);
      document.documentElement.lang = safeLocale;
      localStorage.setItem(LOCALE_KEY, safeLocale);
      setLocaleState(safeLocale);
    };

    return { locale, setLocale: changeLocale, t, translations: mergedTranslations };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }

  return context;
}
