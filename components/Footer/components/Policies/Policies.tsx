import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useMemo } from 'react';

import { Text } from 'components';

import { Namespace } from 'i18n';

import styles from './Policies.module.scss';

export const Policies: React.FC = () => {
  const { t } = useTranslation([Namespace.Footer, Namespace.Navigation]);

  const policies = useMemo(
    () => [
      {
        title: t('termsOfUse.title', { ns: Namespace.Navigation }),
        path: '/terms-of-use',
      },
      {
        title: t('privacyPolicy.title', { ns: Namespace.Navigation }),
        path: '/privacy-policy',
      },
      {
        title: t('cookiesPolicy.title', { ns: Namespace.Navigation }),
        path: '/cookies-policy',
      },
      {
        title: t('sitemap.title', { ns: Namespace.Navigation }),
        path: '/sitemap.xml',
      },
    ],
    [t],
  );

  return (
    <div className={styles.Policies}>
      <Text className={styles.Policies__Title} size="small" uppercase>
        {t('policies', { ns: Namespace.Footer })}
      </Text>

      {policies.map(({ title, path }) => (
        <Link key={path} href={path} className={styles.Policies__Link}>
          <Text className={styles.Policies__LinkText} size="small">
            {title}
          </Text>
        </Link>
      ))}
    </div>
  );
};
