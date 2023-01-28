import { Control, useController } from 'react-hook-form';

import styles from './Input.module.scss';

export interface InputProps {
  name: string;
  id: undefined;
  label: undefined;
  control: Control;
  autoComplete: string;
}

export interface LabelInputProps extends Omit<InputProps, 'id' | 'label'> {
  id: string;
  label: string;
}

const TextField: React.FC<InputProps | LabelInputProps> = ({ name, id, label, control, autoComplete = 'off' }) => {
  const { field, fieldState } = useController({ control, name });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => field.onChange(evt.target.value);

  return (
    <div className={styles.input}>
      {id || (label && <label htmlFor={id}>{label}</label>)}

      <input {...field} autoComplete={autoComplete} onChange={handleChange} />

      {fieldState.error && <span className={styles.input__error}>{fieldState.error?.message}</span>}
    </div>
  );
};

export default TextField;
