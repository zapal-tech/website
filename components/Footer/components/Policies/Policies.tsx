import { useTranslation } from 'next-i18next';

import { Link, Text } from 'components';

import { Namespace } from 'i18n';

import styles from './Policies.module.scss';

export const Policies: React.FC = () => {
  const { t } = useTranslation([Namespace.Footer, Namespace.Navigation]);

  return (
    <div className={styles.Policies}>
      <Text className={styles.Policies__Title} size="small">
        {t('policies', { ns: Namespace.Footer })}
      </Text>

      <Text size="small">
        <Link href="/terms-of-use" className={styles.Policies__Link} underline={false} uppercase={false} icon={false}>
          {t('termsOfUse.title', { ns: Namespace.Navigation })}
        </Link>
      </Text>
      <Text size="small">
        <Link href="/privacy-policy" className={styles.Policies__Link} underline={false} uppercase={false} icon={false}>
          {t('privacyPolicy.title', { ns: Namespace.Navigation })}
        </Link>
      </Text>
      <Text size="small">
        <Link href="/cookies-policy" className={styles.Policies__Link} underline={false} uppercase={false} icon={false}>
          {t('cookiesPolicy.title', { ns: Namespace.Navigation })}
        </Link>
      </Text>
      <Text size="small">
        <Link href="/sitemap.xml" className={styles.Policies__Link} underline={false} uppercase={false} icon={false}>
          {t('sitemap.title', { ns: Namespace.Navigation })}
        </Link>
      </Text>
    </div>
  );
};
