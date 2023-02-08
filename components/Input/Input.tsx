import clsx, { ClassValue } from 'clsx';
import { Control, useController, UseControllerProps } from 'react-hook-form';

import styles from './Input.module.scss';

export type InputProps = Omit<UseControllerProps, 'control'> & {
  id?: string;
  placeholder?: string;
  className?: ClassValue | ClassValue[];
  autoComplete?: string;
  type?: 'text' | 'email' | 'number' | 'search' | 'password' | 'url';
  control: Control<any, any>;
  required?: boolean;
  disabled?: boolean;
};

export const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  className,
  autoComplete = 'off',
  required = false,
  disabled = false,
  ...controllerProps
}) => {
  const { field, fieldState } = useController(controllerProps);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => field.onChange(evt.target.value);

  return (
    <div className={clsx(styles.Input, field.value && styles['Input--HasValue'], className)}>
      <input
        {...field}
        className={styles.Input__Field}
        aria-placeholder={placeholder}
        id={controllerProps.name || id}
        autoComplete={autoComplete}
        onChange={handleChange}
        required={required}
        disabled={disabled}
        placeholder={'\u00A0'}
      />

      {placeholder && (
        <label className={styles.Input__Placeholder} htmlFor={controllerProps.name || id}>
          {placeholder}
          {required && <span>*</span>}
        </label>
      )}

      {fieldState.error && <span className={styles.Input__Error}>{fieldState.error?.message}</span>}
    </div>
  );
};
