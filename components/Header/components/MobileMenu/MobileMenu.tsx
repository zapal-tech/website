import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';

import CloseIcon from 'public/icons/close.svg';

import { useGlobalContext } from 'hooks/useGlobalContext';

import { Container, Text } from 'components';
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';
import { Navigation } from 'components/Navigation/Navigation';
import { SocialLinks } from 'components/SocialLinks/SocialLinks';

import { Namespace } from 'i18n';

import { HeaderButton } from '../HeaderButton/HeaderButton';

import styles from './MobileMenu.module.scss';

const ContactForm = dynamic(() => import('views/ContactForm/ContactForm').then((mod) => mod.ContactForm));

export const MobileMenu: React.FC = () => {
  const { t } = useTranslation(Namespace.Common);
  const { isMobileMenuOpen, closeMobileMenu, openModal } = useGlobalContext();
  const containerRef = useRef<HTMLElement>(null);

  const handleCloseButtonClick = () => closeMobileMenu();
  const handleContactFormButtonClick = () => {
    closeMobileMenu();
    openModal(ContactForm);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) closeMobileMenu();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    if (isMobileMenuOpen) containerRef.current?.focus();

    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  return (
    <Container
      type="aside"
      className={clsx(styles.MobileMenu, isMobileMenuOpen && styles['MobileMenu--Open'])}
      ref={containerRef}
    >
      <HeaderButton
        className={styles.MobileMenu__CloseButton}
        onClick={handleCloseButtonClick}
        aria-label="close mobile menu"
      >
        <CloseIcon />
      </HeaderButton>

      <Navigation closeMobileMenu={closeMobileMenu} />

      <button className={styles.MobileMenu__ContactFormButton} onClick={handleContactFormButtonClick}>
        <Text size="heading3" uppercase>
          {t('becomeAClient')}
        </Text>
      </button>

      <SocialLinks className={styles.MobileMenu__Social} />

      <LanguageSwitcher className={styles.MobileMenu__LanguageSwitcher} />
    </Container>
  );
};
