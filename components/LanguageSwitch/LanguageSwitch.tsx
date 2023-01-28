// import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'store';
import { changeLanguage, selectCurrentLanguage } from 'store/i18nSlice';

import { Language } from 'i18n';

import styles from './LanguageSwitch.module.scss';

export const LanguageSwitch = () => {
  // const { t } = useTranslation(Namespace.Languages);
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(selectCurrentLanguage);

  return (
    <div className={styles['language-switch']}>
      <select
        className={styles['language-switch__select']}
        value={currentLanguage}
        onChange={({ target }) => dispatch(changeLanguage(target.value as Language))}
      >
        <option value={Language.English}>{'en'}</option>
        <option value={Language.Ukrainian}>{'uk'}</option>
      </select>
    </div>
  );
};
