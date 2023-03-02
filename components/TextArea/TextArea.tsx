import clsx, { ClassValue } from 'clsx';
import { Control, useController, UseControllerProps } from 'react-hook-form';

import styles from './TextArea.module.scss';

export type TextAreaProps = Omit<UseControllerProps, 'control'> & {
  id?: string;
  placeholder?: string | null;
  className?: ClassValue | ClassValue[];
  autoComplete?: string | true;
  rows?: number;
  control: Control<any, any>;
  onChange?: (name: string, value: string) => void;
  required?: boolean;
  disabled?: boolean;
};

export const TextArea: React.FC<TextAreaProps> = ({
  id,
  placeholder,
  className,
  rows,
  autoComplete = 'off',
  required = false,
  disabled = false,
  onChange,
  ...controllerProps
}) => {
  const { field, fieldState } = useController({ ...controllerProps, rules: { required, ...controllerProps.rules } });

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    field.onChange(evt.target.value);

    onChange?.(controllerProps.name, evt.target.value);
  };

  return (
    <div className={clsx(styles.TextArea, field.value && styles['TextArea--HasValue'], className)}>
      <textarea
        {...field}
        className={styles.TextArea__Field}
        aria-placeholder={placeholder || undefined}
        id={controllerProps.name || id}
        rows={rows}
        autoComplete={autoComplete === true ? 'on' : autoComplete}
        onChange={handleChange}
        disabled={disabled}
        placeholder={'\u00A0'}
      />

      {placeholder && (
        <label
          className={clsx(styles.TextArea__Placeholder, required && styles['TextArea__Placeholder--Required'])}
          htmlFor={controllerProps.name || id}
        >
          {placeholder}
        </label>
      )}

      <div className={styles.TextArea__Border} />

      {fieldState.error && <span className={styles.TextArea__Error}>{fieldState.error?.message}</span>}
    </div>
  );
};
