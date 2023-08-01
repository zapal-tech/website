import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Namespace } from 'configs/i18n';

import { ApiPage } from 'types/api';
import { Page } from 'types/page';
import { Routes } from 'types/routes';

import { Container, Text } from 'components';

import { AppLayout } from 'layouts';

import styles from './Sitemap.module.scss';

export type SitemapProps = Page<{
  page: ApiPage;
}>;

export const Sitemap: React.FC<SitemapProps> = () => {
  const { t } = useTranslation([Namespace.Sitemap, Namespace.Navigation]);

  const links = [
    {
      title: t('home.title', { ns: Namespace.Navigation }),
      href: Routes.Home,
    },
    {
      title: t('about.title', { ns: Namespace.Navigation }),
      href: Routes.About,
    },
    // {
    //   title: t('blog.title', { ns: Namespace.Navigation }),
    //   href: Routes.Blog,
    // },
    {
      title: t('projects.title', { ns: Namespace.Navigation }),
      href: Routes.Projects,
    },
    {
      title: t('contacts.title', { ns: Namespace.Navigation }),
      href: Routes.Contacts,
    },
    {
      title: t('supportUkraine.title', { ns: Namespace.Navigation }),
      href: Routes.SupportUkraine,
    },
    {
      title: t('termsOfUse.title', { ns: Namespace.Navigation }),
      href: Routes.TermsOfUse,
    },
    {
      title: t('privacyPolicy.title', { ns: Namespace.Navigation }),
      href: Routes.PrivacyPolicy,
    },
    {
      title: t('cookiesPolicy.title', { ns: Namespace.Navigation }),
      href: Routes.CookiesPolicy,
    },
  ];

  return (
    <AppLayout>
      <Container className={styles.Sitemap}>
        <Text type="h1" className={styles.Sitemap__Title} size="heading1" uppercase>
          {t('title')}
        </Text>

        <nav>
          <ul className={styles.Sitemap__List}>
            {links.map(({ title, href }) => (
              <li key={title}>
                <Link target="_blank" href={href}>
                  <Text className={styles.Sitemap__Text} size="heading3">
                    {title}
                  </Text>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </AppLayout>
  );
};
