import CloseIcon from 'public/icons/close.svg';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'store';
import { closeModal, selectIsModalOpen, selectModalContent } from 'store/modalSlice';

import { Portal } from 'components';

import styles from './Modal.module.scss';

export const Modal: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsModalOpen);
  const content = useAppSelector(selectModalContent);

  const modalRef = useRef<HTMLDivElement>(null);

  const [isShow, setIsShow] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedContent = useMemo(() => content, [isShow]);

  const handleCloseModal = useCallback(() => isOpen && dispatch(closeModal()), [dispatch, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setIsShow(true);
    } else {
      const timeout = setTimeout(() => setIsShow(false), 300);

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    // FIXME: Workaround for animation, need to be fixed
    if (isOpen && isShow) setTimeout(() => modalRef.current?.classList.add(styles['Modal--Open']), 10);
    if (!isOpen && isShow) modalRef.current?.classList.remove(styles['Modal--Open']);
  }, [isShow, isOpen]);

  useEffect(() => {
    const handleEscKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') handleCloseModal();
    };

    document.addEventListener('keydown', handleEscKeyDown);

    return () => document.removeEventListener('keydown', handleEscKeyDown);
  }, [isOpen, handleCloseModal]);

  return (
    <Portal selector="#__next">
      {isShow && (
        <div className={styles.Modal} ref={modalRef}>
          <button className={styles.Modal__CloseButton} onClick={handleCloseModal}>
            <CloseIcon />
          </button>

          <div className={styles.Modal__Content}>{memoizedContent}</div>
        </div>
      )}
    </Portal>
  );
};
