import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { Language, Namespace } from 'i18n';

import styles from './LanguageSwitch.module.scss';

export const LanguageSwitch = () => {
  const { t, i18n } = useTranslation(Namespace.Languages);
  const router = useRouter();

  return (
    <div className={styles.LanguageSwitch}>
      <select
        className={styles.LanguageSwitch__Select}
        value={i18n.language}
        onChange={({ target }) => router.push(router.pathname, undefined, { locale: target.value })}
      >
        <option value={Language.English}>{t('en')}</option>
        <option value={Language.Ukrainian}>{t('uk')}</option>
      </select>
    </div>
  );
};
