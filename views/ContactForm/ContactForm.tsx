import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { CSSTransition } from 'react-transition-group';
import * as yup from 'yup';

import { ContactFormState } from 'types/contactForm';

import { useGlobalContext } from 'hooks/useGlobalContext';
import { useMediaQuery } from 'hooks/useMediaQuery';

import { Button, Container, Text } from 'components';
import { Input } from 'components/Input/Input';
import { TextArea } from 'components/TextArea/TextArea';

import { Namespace } from 'i18n';

import media from 'styles/media.module.scss';

import styles from './ContactForm.module.scss';

type MessageState = { isShow: boolean; type: 'error' | 'success' };

export const ContactForm: React.FC = () => {
  const { t } = useTranslation([Namespace.ContactForm, Namespace.Common]);
  const { clearContactForm, closeModal, contactForm, setContactFormFieldValue } = useGlobalContext();
  const isLaptop = useMediaQuery({ width: { min: parseInt(media.breakpointLaptop) } });
  const [messageState, setMessageState] = useState<MessageState>({ isShow: false, type: 'success' });

  const schema = useMemo(
    () =>
      yup.object<ContactFormState>({
        firstName: yup.string().required(t('validation.required')!),
        lastName: yup.string().required(t('validation.required')!),
        email: yup.string().email(t('validation.email')!).required(t('validation.required')!),
        company: yup.string(),
        message: yup.string().required(t('validation.required')!),
      }),
    [t],
  );

  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const { control, handleSubmit } = useForm<ContactFormState>({
    values: contactForm,
    resolver: yupResolver(schema),
    shouldFocusError: false,
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  useEffect(() => {
    if (isLaptop) firstNameInputRef.current?.focus();
  }, [isLaptop]);

  const handleChange = (name: string, value: string) =>
    setContactFormFieldValue({ name: name as keyof ContactFormState, value });

  const clearFormAndCloseModal = () => {
    clearContactForm();
    closeModal();
  };

  const submitForm = async (data: ContactFormState) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.status === 201) {
      setMessageState({ isShow: true, type: 'success' });

      return setTimeout(clearFormAndCloseModal, 4000);
    }

    setMessageState({ isShow: true, type: 'error' });
    setTimeout(clearFormAndCloseModal, 7500);
  };

  return (
    <Container className={styles.ContactForm}>
      <CSSTransition
        in={messageState.isShow}
        timeout={300}
        classNames={{
          enter: styles['ContactForm__Status--Enter'],
          enterActive: styles['ContactForm__Status--EnterActive'],
          enterDone: styles['ContactForm__Status--EnterDone'],
          exit: styles['ContactForm__Status--Exit'],
          exitActive: styles['ContactForm__Status--ExitActive'],
          exitDone: styles['ContactForm__Status--ExitDone'],
        }}
        mountOnEnter
        unmountOnExit
      >
        <Container className={styles.ContactForm__Status}>
          <Text size="heading2" uppercase>
            {t(`${messageState.type}.title`)}
          </Text>

          <Text>{t(`${messageState.type}.subtitle`)}</Text>
        </Container>
      </CSSTransition>

      <CSSTransition
        in={!messageState.isShow}
        timeout={300}
        classNames={{
          enter: styles['ContactForm__Greetings--Enter'],
          enterActive: styles['ContactForm__Greetings--EnterActive'],
          enterDone: styles['ContactForm__Greetings--EnterDone'],
          exit: styles['ContactForm__Greetings--Exit'],
          exitActive: styles['ContactForm__Greetings--ExitActive'],
          exitDone: styles['ContactForm__Greetings--ExitDone'],
        }}
      >
        <div className={styles.ContactForm__Greetings}>
          <Text size="heading1" className={styles.ContactForm__Title} uppercase>
            {t('title')}
          </Text>

          <Text size="small" className={styles.ContactForm__Subtitle}>
            {t('subtitle')}
          </Text>
        </div>
      </CSSTransition>

      <CSSTransition
        in={!messageState.isShow}
        timeout={300}
        classNames={{
          enter: styles['ContactForm__Form--Enter'],
          enterActive: styles['ContactForm__Form--EnterActive'],
          enterDone: styles['ContactForm__Form--EnterDone'],
          exit: styles['ContactForm__Form--Exit'],
          exitActive: styles['ContactForm__Form--ExitActive'],
          exitDone: styles['ContactForm__Form--ExitDone'],
        }}
      >
        <form className={styles.ContactForm__Form} onSubmit={handleSubmit(submitForm)} autoComplete="on">
          <div className={styles.ContactForm__Fields}>
            <Input
              name="firstName"
              control={control}
              onChange={handleChange}
              autoComplete="given-name"
              placeholder={t('form.firstName')}
              inputRef={firstNameInputRef}
              required
            />

            <Input
              name="lastName"
              control={control}
              onChange={handleChange}
              autoComplete="family-name"
              placeholder={t('form.lastName')}
              required
            />

            <Input
              name="email"
              control={control}
              onChange={handleChange}
              autoComplete="email"
              placeholder={t('form.email')}
              required
            />

            <Input
              name="company"
              control={control}
              onChange={handleChange}
              autoComplete="organization"
              placeholder={t('form.company')}
            />

            <TextArea
              className={styles.ContactForm__Message}
              name="message"
              control={control}
              onChange={handleChange}
              placeholder={t('form.message')}
              rows={isLaptop ? 6 : 2}
              required
            />
          </div>

          <div className={styles.ContactForm__Buttons}>
            {/* <Button variant="secondary" slider={false}>{t('form.file')}</Button> */}
            <Button variant="secondary">{t('form.submit')}</Button>
          </div>
        </form>
      </CSSTransition>
    </Container>
  );
};
