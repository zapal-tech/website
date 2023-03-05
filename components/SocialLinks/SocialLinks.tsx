import clsx, { ClassValue } from 'clsx';

import FacebookIcon from 'public/icons/facebook.svg';
import GitHubIcon from 'public/icons/github.svg';
import InstagramIcon from 'public/icons/instagram.svg';
import LinkedInIcon from 'public/icons/linkedin.svg';
import TwitterIcon from 'public/icons/twitter.svg';

import styles from './SocialLinks.module.scss';

type SocialLink = {
  name: string;
  path: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const links: SocialLink[] = [
  {
    name: 'GitHub',
    path: 'https://github.com/zapal-tech',
    icon: GitHubIcon,
  },
  {
    name: 'LinkedIn',
    path: 'https://linkedin.com/company/zapal',
    icon: LinkedInIcon,
  },
  {
    name: 'Twitter',
    path: 'https://twitter.com/ZapalTech',
    icon: TwitterIcon,
  },
  {
    name: 'Instagram',
    path: 'https://instagram.com/zapal.tech',
    icon: InstagramIcon,
  },
  {
    name: 'Facebook',
    path: 'https://facebook.com/zapal.tech',
    icon: FacebookIcon,
  },
];

export type SocialLinksProps = {
  className?: ClassValue | ClassValue[];
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => (
  <ul className={clsx(styles.SocialLinks, className)}>
    {links.map(({ icon: Icon, name, path }) => (
      <li key={path}>
        <a className={styles.SocialLinks__Link} href={path} aria-label={name} target="_blank" rel="noreferrer">
          <Icon className={styles.SocialLinks__Icon} />
        </a>
      </li>
    ))}
  </ul>
);
