import Globus from 'public/icons/foreign-charity-organizations.svg';

import { SupportUkraineSections } from 'types/supportUkraine';

import { useMediaQuery } from 'hooks/useMediaQuery';

import { Text } from 'components';
import { Link } from 'components/Link/Link';

import media from 'styles/media.module.scss';

import styles from './CharityOrganisations.module.scss';

const NationalBankOfUkraine = () => {
  return (
    <div id={SupportUkraineSections.NationalBankOfUkraine} className={styles.FoundationItem}>
      <Text className={styles.FoundationTitle} size="heading3">
        National Bank of Ukraine
      </Text>
      <Text size="small" className={styles.FoundationItem__Text}>
        On the 24th of February, 2022, the National Bank of Ukraine opened fundraising accounts to help Ukrainians
        resist war. People from the whole world can send money to those accounts to support the army and people who
        suffer from war consequences.
      </Text>
      <Text size="small" className={styles.FoundationItem__Text}>
        These accounts accept multiple currencies. They have been established and opened to receive transfers from
        international partners and donors in both foreign currency (U.S. dollars, euros, UK pounds) and hryvnias.
      </Text>
      <div className={styles.FoundationItem__LinkList}>
        <div className={styles.FoundationItem__LinkBox}>
          <Link href="https://bank.gov.ua/en/">NATIONAL BANK OF UKRAINE ACCOUNT </Link>
          <Text size="small" className={styles.FoundationItem__LinkText}>
            to raise money for Humanitarian Assistance of Ukrainians.
          </Text>
        </div>

        <div className={styles.FoundationItem__LinkBox}>
          <Link href="https://bank.gov.ua/en/">NATIONAL BANK OF UKRAINE ACCOUNT </Link>
          <Text size="small" className={styles.FoundationItem__LinkText}>
            to raise money for the Armed Forces of Ukraine.
          </Text>
        </div>
      </div>
    </div>
  );
};

const NGOComeBackAlive = () => {
  return (
    <div id={SupportUkraineSections.NgoComeBackAlive} className={styles.FoundationItem}>
      <Text className={styles.FoundationItem__Title} size="heading3">
        NGO Come Back Alive
      </Text>

      <div className={styles.FoundationItem__LinkBox}>
        <Link
          className={styles.FoundationItem__Link}
          href="https://savelife.in.ua/en/donate-en/#donate-army-card-monthly"
        >
          COME BACK ALIVE NGO
        </Link>
        <Text size="small" className={styles.FoundationItem__LinkText}>
          has been operating since the beginning of the war in 2014. It is the largest fund in Ukraine that raises money
          for the army. The fund supplies and repairs equipment, arranges training for the military people and officers,
          and helps modernize the Armed Forces of Ukraine. They also provide first-hand credible information about the
          Russian war against Ukraine in Ukrainian.
        </Text>
      </div>
    </div>
  );
};

const DonateFromAbroad = () => {
  const isDesktop = useMediaQuery(`(min-width: ${media.breakpointLaptop})`);

  return (
    <div className={styles.DonateFromAbroad}>
      {isDesktop ? (
        <div className={styles.DonateFromAbroad__Title}>
          <Text size="heading3">Donate from abroad via</Text>
          <Text size="heading3">this link</Text>
        </div>
      ) : (
        <div className={styles.DonateFromAbroad__Title}>
          <Text size="heading3">Donate from abroad via this link</Text>
        </div>
      )}

      <div className={styles.DonateFromAbroad__Links}>
        <Text size="small" className={styles.DonateFromAbroad__Text}>
          Due to the speed and efficiency of cryptocurrency purchases, Come Back Alive NGO emphasizes the importance of
          donating cryptocurrency. Here are their wallets:
        </Text>
        <div className={styles.DonateFromAbroad__CryptoLinks}>
          <Link
            underline={false}
            icon={false}
            href={'https://savelife.in.ua/en/donate-en/#donate-army-crypto'}
            className={styles.DonateFromAbroad__CryptoLink}
          >
            Bitcoin – bc1qkd5az2ml7dk 5j5h672yhxmhmxe9tuf97j39fm6
          </Link>

          <Link
            underline={false}
            icon={false}
            href={'https://savelife.in.ua/en/donate-en/#donate-army-crypto'}
            className={styles.DonateFromAbroad__CryptoLink}
          >
            Ethereum (eth, usdt, usdc) - 0xa1b1bbB8070Df2450 810b8eB2425D543cfCeF79b
          </Link>

          <Link
            underline={false}
            icon={false}
            href={'https://savelife.in.ua/en/donate-en/#donate-army-crypto'}
            className={styles.DonateFromAbroad__CryptoLink}
          >
            trc20 (tether) - TX9aNri16bS xVYi6oMnKDj5RMKAMBXWzon
          </Link>
        </div>
      </div>
    </div>
  );
};

const SergiyPritulaFoundation = () => {
  return (
    <div id={SupportUkraineSections.SergiyPritula} className={styles.FoundationItem}>
      <Text className={styles.FoundationItem__Title} size="heading3">
        Sergiy Prytula’s foundations
      </Text>
      <Text size="small" className={styles.FoundationItem__Text}>
        Sergiy Prytula is a Ukrainian TV presenter and public figure. Since the beginning of the Russian-Ukrainian war
        in 2014, he has been actively volunteering to provide military aid to Ukrainian Armed Forces and humanitarian
        and financial assistance to children with cancer.
      </Text>
      <Text size="small" className={styles.FoundationItem__Text}>
        There are two Prytula’s funds that you can support right now:
      </Text>
      <div className={styles.FoundationItem__LinkBox}>
        <Link href="https://prytulafoundation.org/en">SERGIY PRYTULA CHARITY FOUNDATION</Link>
        <Text size="small" className={styles.FoundationItem__LinkText}>
          you can help by finding and purchasing the items listed in the foundation’s itinerary, delivering them to one
          of their collection points (Lviv, Ukraine, or Przemysl, Poland), or helping them distribute the items within
          Ukrainian territory.
        </Text>
        <div className={styles.FoundationItem__LinkBox}>
          <Link href="https://prytulafoundation.org/en">HELL RIDES</Link>
          <Text size="small" className={styles.FoundationItem__LinkText}>
            Ukrainian military units urgently need vehicles (SUVs, pickup trucks, ATVs). You can help reduce the need by
            donating money or contributing the required vehicle yourself.
          </Text>
        </div>
      </div>
    </div>
  );
};

const ArmySos = () => {
  return (
    <div id={SupportUkraineSections.ArmySos} className={styles.FoundationItem}>
      <Text className={styles.FoundationItem__Title} size="heading3">
        Army SOS
      </Text>
      <div className={styles.FoundationItem__LinkBox}>
        <Link uppercase href="https://armysos.com.ua/">
          Army Sos
        </Link>
        <Text size="small" className={styles.FoundationItem__LinkText}>
          you can help by finding and purchasing the items listed in the foundation’s itinerary, delivering them to one
          of their collection points (Lviv, Ukraine, or Przemysl, Poland), or helping them distribute the items within
          Ukrainian territory.
        </Text>
      </div>
      <Text size="small" className={styles.FoundationItem__LinkText}>
        They need help finding, purchasing, and delivering the required high-priority items to Poland-Ukraine borders.
      </Text>
    </div>
  );
};

const Hospitallers = () => {
  return (
    <div id={SupportUkraineSections.Hospitallers} className={styles.FoundationItem}>
      <Text className={styles.FoundationItem__Title} size="heading3">
        Hospitallers
      </Text>
      <div className={styles.FoundationItem__LinkBox}>
        <Link href="https://www.hospitallers.life/">HOSPITALLERS</Link>
        <Text size="small" className={styles.FoundationItem__LinkText}>
          you can help by finding and purchasing the items listed in the foundation’s itinerary, delivering them to one
          of their collection points (Lviv, Ukraine, or Przemysl, Poland), or helping them distribute the items within
          Ukrainian territory.
        </Text>
      </div>
      <div className={styles.FoundationItem__LinkBox}>
        <Link href="https://www.hospitallers.life/">VIA THIS LINK</Link>
        <Text size="small" className={styles.FoundationItem__LinkText}>
          You can help Hospitallers either with money transfers or by sending the required medical equipment and
          medicines to them. All the information about the organization’s accounts and their high priority needs
        </Text>
      </div>
    </div>
  );
};

const VoicesOfChildren = () => {
  return (
    <div id={SupportUkraineSections.VoicesOfChildren} className={styles.FoundationItem}>
      <Text className={styles.FoundationItem__Title} size="heading3">
        Voices of Children
      </Text>
      <div className={styles.FoundationItem__LinkBox}>
        <Link href="https://voices.org.ua/en/">THE VOICES OF CHILDREN</Link>
        <Text size="small" className={styles.FoundationItem__LinkText}>
          has been helping war-affected children since 2015 – one year after the war began between Russia and Ukraine.
          The foundation strives to ensure psychological support to children and help them overcome the trauma and
          consequences of war. In the face of Russia’s full-scale invasion of Ukraine, the charity provides non-stop
          emergency psychological help to families and children and assists in evacuation.
        </Text>
      </div>
      <div className={styles.FoundationItem__LinkBox}>
        <Link href="https://voices.org.ua/en/">MAKING FINANCIAL CONTRIBUTIONS</Link>
        <Text size="small" className={styles.FoundationItem__LinkText}>
          You can help the Voices of Children to do their job even better by becoming their partner, or volunteering
          (additional info available on their website).
        </Text>
      </div>
    </div>
  );
};

const UkraineCrisisMediaCenter = () => {
  return (
    <div id={SupportUkraineSections.UkraineCrisisMediaCenter} className={styles.FoundationItem}>
      <Text className={styles.FoundationItem__Title} size="heading3">
        Ukraine Crisis Media Center
      </Text>

      <div className={styles.FoundationItem__LinkBox}>
        <Link href="https://uacrisis.org/en/">THE UKRAINE CRISIS MEDIA CENTER</Link>
        <Text size="small" className={styles.FoundationItem__LinkText}>
          (UCMC) seeks to protect Ukraine’s sovereignty and national interests in the global information space. UCMC has
          been ensuring coverage of Ukrainian events since 2014. They currently focus on providing reliable and
          double-checked information about the full-scale Russian aggression against Ukraine.
        </Text>
      </div>

      <div className={styles.FoundationItem__LinkBox}>
        <Link href="https://uacrisis.org/en/">CHARITY FUND</Link>
        <Text size="small" className={styles.FoundationItem__LinkText}>
          Help UCMC spread verified information even more efficiently by making donations
        </Text>
      </div>
    </div>
  );
};

const ForeignCharityOrganisations = () => {
  return (
    <div id={SupportUkraineSections.ForeignCharityOrganisations} className={styles.ForeignCharityOrganisations}>
      <Text className={styles.ForeignCharityOrganisations__Title} size="heading2">
        Foreign charity organizations
      </Text>
      <Globus />
    </div>
  );
};

const HelpUsHelp = () => {
  return (
    <div id={SupportUkraineSections.HelpUsHelp} className={styles.FoundationItem}>
      <Text className={styles.FoundationItem__Title} size="heading3">
        Help Us Help
      </Text>
      <div className={styles.FoundationItem__LinkBox}>
        <Link href="https://helpushelp.charity/">MAKE DONATION</Link>
        <Text size="small" className={styles.FoundationItem__LinkText}>
          The foundation Help Us Help, based in Canada, provides medical supplies to volunteer units in Ukraine that
          need them urgently. The organization distributes supplies to Ukraine using established and trusted networks.
          Individual First Aid Kits (IFAKs) are their primary focus since Ukrainian volunteer medics caring for war
          victims urgently need them
        </Text>
      </div>
    </div>
  );
};

const WithUkraine = () => {
  return (
    <div id={SupportUkraineSections.WithUkraine} className={styles.FoundationItem}>
      <Text size="heading3" className={styles.FoundationItem__Title}>
        With Ukraine
      </Text>
      <div className={styles.FoundationItem__LinkBox}>
        <Link href="https://www.withukraine.org/">DONATION</Link>
        <Text size="small" className={styles.FoundationItem__LinkText}>
          As part of its humanitarian support to Ukraine, its refugees, and those still in the country, the Ukrainian
          Embassy in the UK has set up a central platform for donation
        </Text>
      </div>
    </div>
  );
};

const LelekaFoundation = () => {
  return (
    <div id={SupportUkraineSections.LelekaFoundation} className={styles.FoundationItem}>
      <Text size="heading3" className={styles.FoundationItem__Title}>
        Leleka Foundation
      </Text>
      <div className={styles.FoundationItem__LinkBox}>
        <Link href="https://www.leleka.care/">THE LELEKA FOUNDATION</Link>
        <Text size="small" className={styles.FoundationItem__LinkText}>
          raises charitable funds for Ukraine and implements projects promoting health and social welfare. The
          organization is currently delivering medical supplies that are in short supply in Ukraine. First aid kits,
          though, are their top priority since emergency responders and frontline fighters don’t have enough of them.
        </Text>
      </div>
    </div>
  );
};

const WarCrimes = () => {
  return (
    <div className={styles.FoundationItem}>
      <Text className={styles.FoundationItem__Title} size="heading2">
        3/ PROTEST PEACEFULLY TO DEMAND ADDITIONAL HELP FROM YOUR AUTHORITIES
      </Text>
      <Text className={styles.FoundationItem__Text} size="small">
        We have already greatly benefited from the assistance your countries have already provided us in resisting
        Russian aggression. Military and financial aid help Ukraine become stronger, increasing its resistance to
        Russian aggression. The sanctions affect the economy of russia, making it harder and harder to allocate funds
        for their occupying army at the expense of the russian people’s wellbeing.
      </Text>
      <div className={styles.FoundationItem__LinkBox}>
        <Link href="/support-ukraine">WAR CRIMES</Link>
        <Text size="small" className={styles.FoundationItem__LinkText}>
          Your authorities can still take many steps to resolve the situation. Besides starting an unprovoked war,
          Russia is also committing numerous war crimes. You can demand more financial, military, and humanitarian help
          from authorities in order to prevent war crimes from happening.
        </Text>
      </div>
    </div>
  );
};

export const CharityOrganisations = () => (
  <div id={SupportUkraineSections.UkrainianOrganizations} className={styles.UkraineBasedCharityOrganisations}>
    <Text className={styles.UkraineBasedCharityOrganisations__Title} size="heading2">
      Ukraine-Based Charity Organizations
    </Text>

    <NationalBankOfUkraine />
    <NGOComeBackAlive />
    <DonateFromAbroad />
    <SergiyPritulaFoundation />
    <ArmySos />
    <Hospitallers />
    <VoicesOfChildren />
    <UkraineCrisisMediaCenter />
    <ForeignCharityOrganisations />
    <HelpUsHelp />
    <WithUkraine />
    <LelekaFoundation />
  </div>
);