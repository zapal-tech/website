import clsx, { ClassValue } from 'clsx';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { Language, Namespace } from 'configs/i18n';

import styles from './LanguageSwitcher.module.scss';

export type LanguageSwitcherProps = {
  className?: ClassValue | ClassValue[];
};

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation(Namespace.Languages);
  const router = useRouter();

  const handleChangeLanguage = (language: Language) =>
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      undefined,
      { locale: language },
    );

  return (
    <div className={clsx(styles.LanguageSwitcher, className)} aria-label="Language switcher">
      <button
        className={clsx(
          styles.LanguageSwitcher__Control,
          i18n.language === Language.English && styles['LanguageSwitcher__Control--Active'],
          styles['LanguageSwitcher__Control--Left'],
        )}
        onClick={() => handleChangeLanguage(Language.English)}
        aria-label={`Language name: ${t('en.name')}, language native name: ${t('en.nativeName')}`}
      >
        {t('en.code')}
      </button>

      <button
        className={clsx(
          styles.LanguageSwitcher__Control,
          i18n.language === Language.Ukrainian && styles['LanguageSwitcher__Control--Active'],
          styles['LanguageSwitcher__Control--Right'],
        )}
        onClick={() => handleChangeLanguage(Language.Ukrainian)}
        aria-label={`Language name: ${t('uk.name')}, language native name: ${t('uk.nativeName')}`}
      >
        {t('uk.code')}
      </button>
    </div>
  );
};
