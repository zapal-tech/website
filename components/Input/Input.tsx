import clsx, { ClassValue } from 'clsx';
import { Control, useController, UseControllerProps } from 'react-hook-form';

import styles from './Input.module.scss';

export type InputProps = Omit<UseControllerProps, 'control'> & {
  id?: string;
  placeholder?: string | null;
  className?: ClassValue | ClassValue[];
  type?: 'text' | 'email' | 'number' | 'search' | 'password' | 'url' | 'tel';
  autoComplete?: string | true;
  control: Control<any, any>;
  onChange?: (name: string, value: string) => void;
  inputRef?: React.Ref<HTMLInputElement>;
  required?: boolean;
  disabled?: boolean;
};

export const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  className,
  type = 'text',
  autoComplete = 'off',
  required = false,
  disabled = false,
  onChange,
  inputRef,
  ...controllerProps
}) => {
  const { field, fieldState } = useController({ ...controllerProps, rules: { required, ...controllerProps.rules } });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(evt.target.value);

    onChange?.(controllerProps.name, evt.target.value);
  };

  return (
    <div className={clsx(styles.Input, field.value && styles['Input--HasValue'], className)}>
      <input
        {...field}
        ref={inputRef}
        className={styles.Input__Field}
        aria-placeholder={placeholder || undefined}
        id={controllerProps.name || id}
        type={type}
        autoComplete={autoComplete === true ? 'on' : autoComplete}
        onChange={handleChange}
        disabled={disabled}
        placeholder={'\u00A0'}
      />

      {placeholder && (
        <label
          className={clsx(styles.Input__Placeholder, required && styles['Input__Placeholder--Required'])}
          htmlFor={controllerProps.name || id}
        >
          {placeholder}
        </label>
      )}

      <div className={styles.Input__Border} />

      {fieldState.error && <span className={styles.Input__Error}>{fieldState.error?.message}</span>}
    </div>
  );
};
