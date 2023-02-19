import clsx from 'clsx';
import CloseButtonIcon from 'public/icons/close-btn.svg';

import { useAppDispatch, useAppSelector } from 'store';
import { selectIsMobileMenuOpen, setIsMobileMenuOpen } from 'store/generalSlice';

import { Navigation, SocialLinks } from 'components';

import { HeaderButton } from '../HeaderButton/HeaderButton';

import styles from './MobileMenu.module.scss';

export const MobileMenu: React.FC = () => {
  const isOpen = useAppSelector(selectIsMobileMenuOpen);
  const dispatch = useAppDispatch();

  const handleCloseButtonClick = () => dispatch(setIsMobileMenuOpen(false));

  return (
    <div className={clsx(styles.MobileMenu, isOpen && styles['MobileMenu--Open'])}>
      <div className={styles.MobileMenu__CloseButton}>
        <HeaderButton onClick={handleCloseButtonClick}>
          <CloseButtonIcon />
        </HeaderButton>
      </div>

      <Navigation />

      <button className={styles.MobileMenu__Button}>BECOME A CLIENT</button>

      <div className={styles.MobileMenu__SocialLinks}>
        <SocialLinks />
      </div>
    </div>
  );
};
