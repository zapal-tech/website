import Link from 'next/link';

import { Container, Text } from 'components';

import styles from './SitemapPage.module.scss';

const links = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contacts', href: '/contacts' },
  { title: 'Support Ukraine', href: '/support-ukraine' },
  { title: 'Terms Of Use', href: '/terms-of-use' },
  { title: 'Privacy Policy', href: '/privacy-policy' },
  { title: 'Cookies Policy', href: '/cookies-policy' },
];

export const SiteMapPage = () => (
  <Container className={styles.Sitemap}>
    <Text className={styles.Sitemap__Title} size="heading1">
      Sitemap
    </Text>
    <ul className={styles.Sitemap__List}>
      {links.map(({ title, href }) => (
        <Link target="_blank" key={title} href={href}>
          <Text className={styles.Sitemap__Text}>{title}</Text>
        </Link>
      ))}
    </ul>
  </Container>
);
