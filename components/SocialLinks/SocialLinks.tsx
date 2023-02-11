import Link from 'next/link';
import FacebookIcon from 'public/icons/facebook.svg';
import InstagramIcon from 'public/icons/instagram.svg';
import LinkedInIcon from 'public/icons/linkedin.svg';
import TelegramIcon from 'public/icons/telegram.svg';

import styles from './SocialLinks.module.scss';

type SocialLink = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  path: string;
};

const links: SocialLink[] = [
  {
    icon: FacebookIcon,
    path: 'https://facebook.com/zapal.tech',
  },
  {
    icon: InstagramIcon,
    path: 'https://instagram.com/zapal.tech',
  },
  {
    icon: LinkedInIcon,
    path: 'https://linkedin.com/company/zapal',
  },
  {
    icon: TelegramIcon,
    path: 'https://t.me/Van_Vovich',
  },
];

export const SocialLinks: React.FC = () => (
  <ul className={styles.SocialLinks__List}>
    {links.map(({ icon: Icon, path }) => (
      <li key={path}>
        <Link href={path}>
          <Icon className={styles.SocialLinks__Icon} />
        </Link>
      </li>
    ))}
  </ul>
);
