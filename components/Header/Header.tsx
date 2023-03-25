import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { useGlobalContext } from 'hooks/useGlobalContext';
import { useMediaQuery } from 'hooks/useMediaQuery';

import { Text, Button } from 'components';
import { Banner } from 'components/Banner/Banner';
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';

import { Namespace } from 'i18n';

import { HeaderButton } from './components/HeaderButton/HeaderButton';

import media from 'styles/media.module.scss';

import styles from './Header.module.scss';

const MobileMenu = dynamic(() => import('./components/MobileMenu/MobileMenu').then((mod) => mod.MobileMenu));
const ContactForm = dynamic(() => import('views/ContactForm/ContactForm').then((mod) => mod.ContactForm));

export const Header: React.FC = () => {
  const { t } = useTranslation(Namespace.Common);
  const { openMobileMenu, openModal } = useGlobalContext();

  const isLaptop = useMediaQuery({ width: { min: parseInt(media.breakpointLaptop) } });

  const handleBurgerButtonClick = () => openMobileMenu();
  const handleFormButtonClick = () => openModal(ContactForm);

  return (
    <>
      <Banner className={styles.Banner} />

      <header className={styles.Header}>
        <Link href="/" aria-label="logo, home page">
          <Logo withName />
        </Link>

        {isLaptop && <Navigation />}

        <div className={styles.Header__Buttons}>
          {isLaptop ? (
            <Button variant="secondary" onClick={handleFormButtonClick}>
              {t('letsTalk')}
            </Button>
          ) : (
            <HeaderButton onClick={handleFormButtonClick}>
              <Text size="tiny" uppercase className={styles.Header__ButtonText}>
                {t('letsTalk')}
              </Text>
            </HeaderButton>
          )}

          {isLaptop ? (
            <LanguageSwitcher className={styles.Header__LanguageSwitcher} />
          ) : (
            <HeaderButton
              className={styles.Header__BurgerButton}
              onClick={handleBurgerButtonClick}
              aria-label="mobile menu"
            >
              <span />
              <span />
            </HeaderButton>
          )}
        </div>
      </header>

      {!isLaptop && <MobileMenu />}
    </>
  );
};
