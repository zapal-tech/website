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

const svgList = [
  { icon: Apple, link: 'https://edition.cnn.com/2022/03/01/tech/apple-russia/index.html' },
  {
    icon: Oracle,
    link: 'https://www.reuters.com/business/oracle-says-it-has-suspended-all-operations-russia-2022-03-02/',
  },
  { icon: HandM, link: '' },
  { icon: Jysk, link: 'https://finans.dk/erhverv/ECE13790545/jysk-lukker-butikkerne-i-rusland/?ctxref=forside' },
  { icon: Lego, link: 'https://finans.dk/erhverv/ECE13790545/jysk-lukker-butikkerne-i-rusland/?ctxref=forside' },
  {
    icon: Spotify,
    link: 'https://www.reuters.com/technology/spotify-closes-its-office-russia-response-attack-ukraine-2022-03-02/',
  },
];

export const BanRussianBusiness = () => (
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
          Not buy products made by russian brands or manufactured in russia.
        </Text>

        <Text className={styles.BanRussianBusiness__Link}>
          Withdraw all company assets from russia and stop being present there.
        </Text>

        <Text className={styles.BanRussianBusiness__Link}>
          Stop working with russian companies or companies that support or ignore the russian war against Ukraine.
        </Text>
      </div>
    </div>

    <div className={styles.BanRussianBusiness__BrandsBlock}>
      <div className={styles.BanRussianBusiness__BrandsTextBox}>
        <Text size="small">A number of global businesses have already realized this (just to name a few)</Text>
        <Text size="small">
          It will be impossible for russia to finance a war if we isolate its economy from the outside world. In
          addition, the russian society may finally protest and overthrow the dictatorship. If not for the many lost
          lives of Ukrainians, then at least for their own comfort.
        </Text>
      </div>

      <div className={styles.BanRussianBusiness__GlobalBrandsList}>
        {svgList.map((Item) => (
          <Link
            key={Item.icon}
            className={styles.BanRussianBusiness__GlobalBrandItem}
            icon={false}
            target="_blank"
            underline={false}
            href={Item.link}
          >
            <Item.icon className={styles.BanRussianBusiness__GlobalBrandSvg} />
          </Link>
        ))}
      </div>
    </div>

    <div className={styles.BanRussianBusiness__LinkBox}>
      <Link
        uppercase
        href="https://som.yale.edu/story/2022/over-1000-companies-have-curtailed-operations-russia-some-remain"
      >
        Ban russian businesses
      </Link>
      <Text size="small" className={styles.BanRussianBusiness__LinkText}>
        You can harm the russian economy by boycotting the brands that still choose to operate in russia. Their taxes,
        directly and indirectly, fund all the war crimes russia commits against Ukrainian people. This regularly updated
        list provided by Yale School of Management shows which businesses exited or chose to stay in the russian market.
      </Text>
    </div>
  </div>
);
