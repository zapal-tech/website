import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { Namespace } from 'configs/i18n';

import { useGlobalContext } from 'hooks/useGlobalContext';
import { useMediaQuery } from 'hooks/useMediaQuery';

import { Text, Button } from 'components';

import { Banner } from '../Banner/Banner';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';

import { HeaderButton } from './components/HeaderButton/HeaderButton';

import media from 'styles/media.module.scss';

import styles from './Header.module.scss';

const MobileMenu = dynamic(() => import('./components/MobileMenu/MobileMenu').then((mod) => mod.MobileMenu));
const ContactForm = dynamic(() => import('views/ContactForm/ContactForm').then((mod) => mod.ContactForm));

export const Header: React.FC = () => {
  const { t } = useTranslation(Namespace.Common);
  const { openMobileMenu, openModal } = useGlobalContext();

  const isLaptop = useMediaQuery(`(min-width: ${media.breakpointLaptop})`);

  const handleBurgerButtonClick = () => openMobileMenu();
  const handleFormButtonClick = () => openModal(ContactForm);

  const BurgerButton: React.FC = () => (
    <HeaderButton className={styles.Header__BurgerButton} onClick={handleBurgerButtonClick} aria-label="mobile menu">
      <span />
      <span />
    </HeaderButton>
  );

  const DesktopContactFormButton: React.FC = () => (
    <Button variant="secondary" onClick={handleFormButtonClick}>
      {t('letsTalk')}
    </Button>
  );

  const MobileContactFormButton: React.FC = () => (
    <HeaderButton onClick={handleFormButtonClick}>
      <Text size="tiny" uppercase className={styles.Header__ButtonText}>
        {t('letsTalk')}
      </Text>
    </HeaderButton>
  );

  return (
    <>
      <Banner className={styles.Banner} />

      <header className={styles.Header}>
        <Link href="/" aria-label="logo, home page">
          <Logo withName />
        </Link>

        {isLaptop && <Navigation />}

        <div className={styles.Header__Buttons}>
          {isLaptop ? <DesktopContactFormButton /> : <MobileContactFormButton />}

          {isLaptop ? <LanguageSwitcher className={styles.Header__LanguageSwitcher} /> : <BurgerButton />}
        </div>
      </header>

      {!isLaptop && <MobileMenu />}
    </>
  );
};
