import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { useMediaQuery } from 'hooks';

import { useAppDispatch } from 'store';
import { setIsMobileMenuOpen } from 'store/generalSlice';
import { openModal } from 'store/modalSlice';

import { Logo, Navigation, Text, Banner, Button, LanguageSwitcher } from 'components';

import { Namespace } from 'i18n';

import { HeaderButton } from './components/HeaderButton/HeaderButton';
import { MobileMenu } from './components/MobileMenu/MobileMenu';

import media from 'styles/media.module.scss';

import styles from './Header.module.scss';

const ContactForm = dynamic(() => import('views/ContactForm/ContactForm').then((mod) => mod.ContactForm));

export const Header: React.FC = () => {
  const { t } = useTranslation(Namespace.Common);
  const dispatch = useAppDispatch();

  const isLaptop = useMediaQuery({ width: { min: parseInt(media.breakpointLaptop) } });

  const handleBurgerButtonClick = () => dispatch(setIsMobileMenuOpen(true));
  const handleFormButtonClick = () => dispatch(openModal(ContactForm));

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
