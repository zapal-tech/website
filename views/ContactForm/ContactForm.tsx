import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'next-i18next';
import { useEffect, useRef, useState } from 'react';
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

const schema = yup.object<ContactFormState>({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  company: yup.string(),
  message: yup.string().required(),
});

export const ContactForm: React.FC = () => {
  const { t } = useTranslation(Namespace.ContactForm);
  const { clearContactForm, closeModal, contactForm, setContactFormFieldValue } = useGlobalContext();
  const isLaptop = useMediaQuery({ width: { min: parseInt(media.breakpointLaptop) } });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const { control, handleSubmit } = useForm<ContactFormState>({
    values: contactForm,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (isLaptop) firstNameInputRef.current?.focus();
  }, []);

  const handleChange = (name: string, value: string) =>
    setContactFormFieldValue({ name: name as keyof ContactFormState, value });

  const submitForm = async (data: ContactFormState) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.status === 201) {
      setShowSuccessMessage(true);

      setTimeout(() => {
        clearContactForm();
        closeModal();
      }, 3000);
    }
  };

  return (
    <Container className={styles.ContactForm}>
      {showSuccessMessage ? (
        <div>
          <Text size="heading2" className={styles.ContactForm__Success} uppercase>
            Success
          </Text>

          <Text className={styles.ContactForm__Success} uppercase>
            Your message sent
          </Text>
        </div>
      ) : (
        <>
          <div className={styles.ContactForm__Greetings}>
            <Text size="heading1" className={styles.ContactForm__Title} uppercase>
              {t('title')}
            </Text>

            <Text size="small" className={styles.ContactForm__Subtitle}>
              {t('subtitle')}
            </Text>
          </div>
          <form className={styles.ContactForm__Form} onSubmit={handleSubmit(submitForm)}>
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
        </>
      )}
    </Container>
  );
};
