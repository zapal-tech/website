import clsx from 'clsx';
import dynamic from 'next/dynamic';
import CloseIcon from 'public/icons/close.svg';

import { useAppDispatch, useAppSelector } from 'store';
import { selectIsMobileMenuOpen, setIsMobileMenuOpen } from 'store/generalSlice';
import { openModal } from 'store/modalSlice';

import { Container, Navigation, SocialLinks } from 'components';

import { HeaderButton } from '../HeaderButton/HeaderButton';

import styles from './MobileMenu.module.scss';

const ContactForm = dynamic(() => import('views/ContactForm/ContactForm').then((mod) => mod.ContactForm));

export const MobileMenu: React.FC = () => {
  const isOpen = useAppSelector(selectIsMobileMenuOpen);
  const dispatch = useAppDispatch();

  const handleCloseButtonClick = () => dispatch(setIsMobileMenuOpen(false));
  const handleContactFormButtonClick = () => {
    dispatch(setIsMobileMenuOpen(false));
    dispatch(openModal(<ContactForm />));
  };

  return (
    <Container type="aside" className={clsx(styles.MobileMenu, isOpen && styles['MobileMenu--Open'])}>
      <HeaderButton className={styles.MobileMenu__CloseButton} onClick={handleCloseButtonClick}>
        <CloseIcon />
      </HeaderButton>

      <Navigation />

      <button className={styles.MobileMenu__ContactFormButton} onClick={handleContactFormButtonClick}>
        BECOME A CLIENT
      </button>

      <SocialLinks className={styles.MobileMenu__Social} />
    </Container>
  );
};
