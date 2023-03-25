import { useCallback, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import CloseIcon from 'public/icons/close.svg';

import { useGlobalContext } from 'hooks/useGlobalContext';

import { Portal } from 'components/Portal/Portal';

import styles from './Modal.module.scss';

export const Modal: React.FC = () => {
  const {
    isMobileMenuOpen,
    closeModal,
    modal: { content: Content },
  } = useGlobalContext();

  const handleCloseModal = useCallback(() => isMobileMenuOpen && closeModal(), [isMobileMenuOpen, closeModal]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') handleCloseModal();
    };

    document.addEventListener('keydown', handleEscKeyDown);

    return () => document.removeEventListener('keydown', handleEscKeyDown);
  }, [isMobileMenuOpen, handleCloseModal]);

  return (
    <Portal selector="#__next">
      <CSSTransition
        classNames={{
          enter: styles['Modal--Enter'],
          enterActive: styles['Modal--EnterActive'],
          enterDone: styles['Modal--EnterDone'],
          exit: styles['Modal--Exit'],
          exitActive: styles['Modal--ExitActive'],
        }}
        in={isMobileMenuOpen}
        timeout={300}
        unmountOnExit
      >
        <div className={styles.Modal}>
          <button className={styles.Modal__CloseButton} onClick={handleCloseModal} aria-label="close modal window">
            <CloseIcon />
          </button>

          <div className={styles.Modal__Content}>{Content && <Content />}</div>
        </div>
      </CSSTransition>
    </Portal>
  );
};
