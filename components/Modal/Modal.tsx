import { useCallback, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import CloseIcon from 'public/icons/close.svg';

import { useGlobalContext } from 'hooks/useGlobalContext';

import { Portal } from '../Portal/Portal';

import styles from './Modal.module.scss';

export const Modal: React.FC = () => {
  const {
    closeModal,
    modal: { isOpen, content: Content },
  } = useGlobalContext();

  const handleCloseModal = useCallback(() => isOpen && closeModal(), [isOpen, closeModal]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') handleCloseModal();
    };

    document.addEventListener('keydown', handleEscKeyDown);

    return () => document.removeEventListener('keydown', handleEscKeyDown);
  }, [isOpen, handleCloseModal]);

  return (
    <Portal selector="#app">
      <CSSTransition
        classNames={{
          enter: styles['Modal--Enter'],
          enterActive: styles['Modal--EnterActive'],
          enterDone: styles['Modal--EnterDone'],
          exit: styles['Modal--Exit'],
          exitActive: styles['Modal--ExitActive'],
        }}
        in={isOpen}
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
