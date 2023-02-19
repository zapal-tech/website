import { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'store';
import { closeModal, selectIsModalOpen, selectModalContent } from 'store/modalSlice';

import { Portal } from 'components';

import styles from './Modal.module.scss';

export const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsModalOpen);
  const content = useAppSelector(selectModalContent);

  const handleCloseModal = useCallback(() => isOpen && dispatch(closeModal()), [dispatch, isOpen]);

  useEffect(() => {
    const handleEscKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') handleCloseModal();
    };

    document.addEventListener('keydown', handleEscKeyDown);

    return () => document.removeEventListener('keydown', handleEscKeyDown);
  }, [isOpen, handleCloseModal]);

  return (
    <Portal selector="#__next">
      {isOpen && content && (
        <div className={styles.Modal}>
          <div className={styles.Modal__Content}>
            <button className={styles.Modal__CloseButton} onClick={handleCloseModal}>
              {/* <CloseIcon /> */}
            </button>

            {content}
          </div>
        </div>
      )}
    </Portal>
  );
};
