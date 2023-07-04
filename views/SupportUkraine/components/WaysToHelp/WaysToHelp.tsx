import Apple from 'public/icons/apple.svg';
import HandM from 'public/icons/h-and-m.svg';
import Jysk from 'public/icons/jysk.svg';
import Lego from 'public/icons/lego.svg';
import LinkSvg from 'public/icons/link.svg';
import Oracle from 'public/icons/oracle.svg';
import Spotify from 'public/icons/spotify.svg';

import { Text } from 'components';

import { FirstVariant } from './components/FirstVariant/FirstVariant';

import styles from './WaysToHelp.module.scss';

const svgList = [Apple, Oracle, HandM, Jysk, Lego, Spotify];

export const WaysToHelp: React.FC = () => (
  <div className={styles.WaysToHelp}>
    <div className={styles.WaysToHelp__DonateFromAbroadLinkBox}>
      <Text size="heading3">Here are some ways you can help.</Text>
      <LinkSvg className={styles.WaysToHelp__DonateFromAbroadLinkSvg} />
    </div>

    <FirstVariant />
  </div>
);
