import clsx, { ClassValue } from 'clsx';
import FacebookIcon from 'public/icons/facebook.svg';
import GitHubIcon from 'public/icons/github.svg';
import InstagramIcon from 'public/icons/instagram.svg';
import LinkedInIcon from 'public/icons/linkedin.svg';
import TwitterIcon from 'public/icons/twitter.svg';

import styles from './SocialLinks.module.scss';

type SocialLink = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  path: string;
};

const links: SocialLink[] = [
  {
    icon: GitHubIcon,
    path: 'https://github.com/zapal-tech',
  },
  {
    icon: LinkedInIcon,
    path: 'https://linkedin.com/company/zapal',
  },
  {
    icon: TwitterIcon,
    path: 'https://twitter.com/ZapalTech',
  },
  {
    icon: InstagramIcon,
    path: 'https://instagram.com/zapal.tech',
  },
  {
    icon: FacebookIcon,
    path: 'https://facebook.com/zapal.tech',
  },
];

export type SocialLinksProps = {
  className?: ClassValue | ClassValue[];
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => (
  <ul className={clsx(styles.SocialLinks, className)}>
    {links.map(({ icon: Icon, path }) => (
      <li key={path}>
        <a className={styles.SocialLinks__Link} href={path} target="_blank" rel="noreferrer">
          <Icon className={styles.SocialLinks__Icon} />
        </a>
      </li>
    ))}
  </ul>
);
