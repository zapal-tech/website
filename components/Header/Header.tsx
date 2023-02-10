import Link from 'next/link';
import { useMemo } from 'react';

import { useWindowSize } from 'hooks';

import { useAppDispatch } from 'store';
import { setIsMobileMenuOpen } from 'store/generalSlice';

import { Logo, Navigation, Text, Banner, Button } from 'components';

import { HeaderButton } from './components/HeaderButton/HeaderButton';
import { MobileMenu } from './components/MobileButton/MobileMenu';

import media from 'styles/media.module.scss';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const windowSize = useWindowSize();
  const dispatch = useAppDispatch();

  const isLaptop = useMemo(
    () => windowSize.width && windowSize.width >= parseInt(media.breakpointLaptop),
    [windowSize],
  );

  const handleBurgerButtonClick = () => dispatch(setIsMobileMenuOpen(true));

  return (
    <>
      <Banner className={styles.Banner} />

      <header className={styles.Header}>
        <Link href="/">
          <Logo withName />
        </Link>

        {isLaptop ? <Navigation /> : null}

        <div className={styles.Header__Buttons}>
          {isLaptop ? (
            <Button variant="secondary">LET&apos;S TALK</Button>
          ) : (
            <HeaderButton>
              <Text size="tiny" className={styles.Header__ButtonText}>
                LET&apos;S TALK
              </Text>
            </HeaderButton>
          )}

          {isLaptop ? null : (
            <HeaderButton className={styles.Header__BurgerButton} onClick={handleBurgerButtonClick}>
              <span />
              <span />
            </HeaderButton>
          )}
        </div>

        <MobileMenu />
      </header>
    </>
  );
};
