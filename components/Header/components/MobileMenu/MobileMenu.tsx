import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import CloseIcon from 'public/icons/close.svg';

import { useAppDispatch, useAppSelector } from 'store';
import { selectIsMobileMenuOpen, setIsMobileMenuOpen } from 'store/generalSlice';
import { openModal } from 'store/modalSlice';

import { Container, LanguageSwitcher, Navigation, SocialLinks, Text } from 'components';

import { Namespace } from 'i18n';

import { HeaderButton } from '../HeaderButton/HeaderButton';

import styles from './MobileMenu.module.scss';

const ContactForm = dynamic(() => import('views/ContactForm/ContactForm').then((mod) => mod.ContactForm));

export const MobileMenu: React.FC = () => {
  const { t } = useTranslation(Namespace.Common);
  const isOpen = useAppSelector(selectIsMobileMenuOpen);
  const dispatch = useAppDispatch();

  const handleCloseButtonClick = () => dispatch(setIsMobileMenuOpen(false));
  const handleContactFormButtonClick = () => {
    dispatch(setIsMobileMenuOpen(false));
    dispatch(openModal(<ContactForm />));
  };

  return (
    <Container type="aside" className={clsx(styles.MobileMenu, isOpen && styles['MobileMenu--Open'])}>
      <HeaderButton
        className={styles.MobileMenu__CloseButton}
        onClick={handleCloseButtonClick}
        aria-label="close mobile menu"
      >
        <CloseIcon />
      </HeaderButton>

      <Navigation />

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
