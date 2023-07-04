import Apple from 'public/icons/apple.svg';
import HandM from 'public/icons/h-and-m.svg';
import Jysk from 'public/icons/jysk.svg';
import Lego from 'public/icons/lego.svg';
import Oracle from 'public/icons/oracle.svg';
import Spotify from 'public/icons/spotify.svg';

import { SupportUkraineSections } from 'types/supportUkraine';

import { Text } from 'components';
import { Link } from 'components/Link/Link';

import styles from './BanRussianBusiness.module.scss';

const svgList = [Apple, Oracle, HandM, Jysk, Lego, Spotify];

export const BanRussianBusiness = () => {
  return (
    <div id={SupportUkraineSections.BanRussianBusinesses} className={styles.BanRussianBusiness}>
      <div className={styles.BanRussianBusiness__ListBox}>
        <Text className={styles.BanRussianBusiness__FoundationTitle} size="heading2">
          4/ BAN RUSSIAN BUSINESS OR URGE OTHER BRANDS TO DO SO
        </Text>
        <Text className={styles.BanRussianBusiness__FoundationText} size="small">
          Supporting russian businesses means supporting the russian regime. By collaborating with their market players,
          businesses are investing in numerous war crimes that are occurring now. So we encourage everyone to:
        </Text>
        <div className={styles.BanRussianBusiness__List}>
          <Text className={styles.BanRussianBusiness__Link}>
            Not buy products made by Russian brands or manufactured in Russia.
          </Text>

          <Text className={styles.BanRussianBusiness__Link}>
            EWithdraw all company assets from russia and stop being present there.
          </Text>

          <Text className={styles.BanRussianBusiness__Link}>
            Stop working with russian companies or companies that support or ignore the russian war against Ukraine.
          </Text>
        </div>
      </div>

      <div className={styles.BanRussianBusiness__BrendsBlock}>
        <div className={styles.BanRussianBusiness__BrendsTextBox}>
          <Text size="small">A number of global businesses have already realized this (just to name a few)</Text>
          <Text size="small">
            It will be impossible for Russia to finance a war if we isolate its economy from the outside world. In
            addition, the russian society may finally protest and overthrow the dictatorship. If not for the many lost
            lives of Ukrainians, then at least for their own comfort.
          </Text>
        </div>

        <div className={styles.BanRussianBusiness__GlobalBrendsList}>
          {svgList.map((Item) => (
            <div className={styles.BanRussianBusiness__GlobalBrendItem} key={Item}>
              <Item className={styles.BanRussianBusiness__GlobalBrendSvg} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.BanRussianBusiness__LinkBox}>
        <Link href="https://en.wikipedia.org/wiki/Category:Ukrainian_brands">LINK</Link>
        <Text size="small" className={styles.BanRussianBusiness__LinkText}>
          You can harm the Russian economy by boycotting the brands that still choose to operate in russia. Their taxes,
          directly and indirectly, fund all the war crimes russia commits against Ukrainian people. This regularly
          updated list provided by Yale School of Management shows which businesses exited or chose to stay in the
          russian market.
        </Text>
      </div>
    </div>
  );
};
