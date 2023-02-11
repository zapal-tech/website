import clsx, { ClassValue } from 'clsx';
import facebook from 'public/footer/facebook.svg';
import instagram from 'public/footer/instagram.svg';
import linkedin from 'public/footer/linkedin.svg';
import telegram from 'public/footer/telegram.svg';

import { SocialLinks } from 'components/SocialLinks/SocialLinks';

import styles from './Socials.module.scss';

const IconsArray = [instagram, facebook, linkedin, telegram];

export type SocialsProps = {
  className?: ClassValue | ClassValue[];
};

export const Socials: React.FC<SocialsProps> = ({ className }) => (
  // <div className={clsx(styles.Icons, className)}>
  //   {IconsArray.map((Icon, index) => (
  //     <Icon key={index} className={styles.Icons__Icon} />
  //   ))}
  // </div>
  <SocialLinks />
);
