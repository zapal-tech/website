import Link from 'next/link';

import { SupportUkraineSections } from 'types/supportUkraine';

import { Text } from 'components';

import styles from './TableOfContent.module.scss';

export const TableOfContent: React.FC = () => (
  <>
    <Text uppercase className={styles.TableOfContent__Title} size="heading2">
      Table Of Content
    </Text>

    <div className={styles.TableOfContent__List}>
      <Link
        key={SupportUkraineSections.AboutZapal}
        href={`#${SupportUkraineSections.AboutZapal}`}
        className={styles.TableOfContent__Link}
      >
        What About Zapal?
      </Link>
      <Link
        key={SupportUkraineSections.HumanitarianRelief}
        href={`#${SupportUkraineSections.HumanitarianRelief}`}
        className={styles.TableOfContent__Link}
      >
        1/ Donate Money for Humanitarian or Military Relief
      </Link>

      <div className={styles.TableOfContent__FirstChild}>
        <Link
          key={SupportUkraineSections.UkrainianOrganizations}
          href={`#${SupportUkraineSections.UkrainianOrganizations}`}
          className={styles.TableOfContent__Link}
        >
          Ukraine-Based Charity Organizations
        </Link>

        <div className={styles.TableOfContent__FirstChild__Child}>
          <Link
            key={SupportUkraineSections.NationalBankOfUkraine}
            href={`#${SupportUkraineSections.NationalBankOfUkraine}`}
            className={styles.TableOfContent__Link}
          >
            National Bank of Ukraine
          </Link>
          <Link
            key={SupportUkraineSections.NgoComeBackAlive}
            href={`#${SupportUkraineSections.NgoComeBackAlive}`}
            className={styles.TableOfContent__Link}
          >
            NGO Come Back Alive
          </Link>
          <Link
            key={SupportUkraineSections.SergiyPritula}
            href={`#${SupportUkraineSections.SergiyPritula}`}
            className={styles.TableOfContent__Link}
          >
            Sergiy Prytula’s foundations
          </Link>
          <Link
            key={SupportUkraineSections.ArmySos}
            href={`#${SupportUkraineSections.ArmySos}`}
            className={styles.TableOfContent__Link}
          >
            Army SOS
          </Link>
          <Link
            key={SupportUkraineSections.Hospitallers}
            href={`#${SupportUkraineSections.Hospitallers}`}
            className={styles.TableOfContent__Link}
          >
            Hospitallers
          </Link>
          <Link
            key={SupportUkraineSections.VoicesOfChildren}
            href={`#${SupportUkraineSections.VoicesOfChildren}`}
            className={styles.TableOfContent__Link}
          >
            Voices of Children
          </Link>
          <Link
            key={SupportUkraineSections.UkraineCrisisMediaCenter}
            href={`#${SupportUkraineSections.UkraineCrisisMediaCenter}`}
            className={styles.TableOfContent__Link}
          >
            Ukraine Crisis Media Center
          </Link>
        </div>

        <Link
          key={SupportUkraineSections.ForeignCharityOrganisations}
          href={`#${SupportUkraineSections.ForeignCharityOrganisations}`}
          className={styles.TableOfContent__Link}
        >
          Foreign charity organizations
        </Link>
        <Link
          key={SupportUkraineSections.HelpUsHelp}
          href={`#${SupportUkraineSections.HelpUsHelp}`}
          className={styles.TableOfContent__Link}
        >
          Help Us Help
        </Link>
        <Link
          key={SupportUkraineSections.WithUkraine}
          href={`#${SupportUkraineSections.WithUkraine}`}
          className={styles.TableOfContent__Link}
        >
          With Ukraine
        </Link>
        <Link
          key={SupportUkraineSections.LelekaFoundation}
          href={`#${SupportUkraineSections.LelekaFoundation}`}
          className={styles.TableOfContent__Link}
        >
          Leleka Foundation
        </Link>
      </div>

      <Link
        key={SupportUkraineSections.ReadAndShaireCredibleInformation}
        href={`#${SupportUkraineSections.ReadAndShaireCredibleInformation}`}
        className={styles.TableOfContent__Link}
      >
        2/ Read and Share Only Credible Information About Ukraine
      </Link>
      <Link
        key={SupportUkraineSections.ProtestPeacefully}
        href={`#${SupportUkraineSections.ProtestPeacefully}`}
        className={styles.TableOfContent__Link}
      >
        3/ Protest Peacefully to Demand Additional Help From Your Authorities
      </Link>
      <Link
        key={SupportUkraineSections.BanRussianBusinesses}
        href={`#${SupportUkraineSections.BanRussianBusinesses}`}
        className={styles.TableOfContent__Link}
      >
        4/ Ban Russian Business or Urge Other Brands To Do So
      </Link>
      <Link
        key={SupportUkraineSections.SupportUkrainianBusinesses}
        href={`#${SupportUkraineSections.SupportUkrainianBusinesses}`}
        className={styles.TableOfContent__Link}
      >
        5/ Support Ukrainian Businesses
      </Link>
      <Link
        key={SupportUkraineSections.HelpRefugers}
        href={`#${SupportUkraineSections.HelpRefugers}`}
        className={styles.TableOfContent__Link}
      >
        6/ Help Refugees in Your Country
      </Link>

      <Link
        key={SupportUkraineSections.Conclusion}
        href={`#${SupportUkraineSections.Conclusion}`}
        className={styles.TableOfContent__Link}
      >
        Conclusion
      </Link>
    </div>
  </>
);
