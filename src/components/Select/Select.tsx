import React, { FC, FormEvent, useState } from 'react';

import SelectOption, {
  SelectOptionProps as SelectOptionPropsDefinition,
} from './SelectOption';

import './Select.scss';

export interface SelectProps {
  className: string;
  initialValue: string;
  options: SelectOptionProps[];
  ariaLabel: string;
  onChange?: (newValue: string) => void;
}

const Select: FC<SelectProps> = ({
  className,
  initialValue,
  options,
  ariaLabel,
  onChange,
}) => {
  const [value, changeValue] = useState(initialValue);
  const handleChangeValue = ({
    currentTarget,
  }: FormEvent<HTMLSelectElement>) => {
    const { value: newValue } = currentTarget;

    changeValue(newValue);

    onChange?.(newValue);
  };

  return (
    <select
      onChange={handleChangeValue}
      value={value}
      className={`select ${className}`}
      aria-label={ariaLabel}
    >
      {options.map((option) => (
        <SelectOption key={option.value} {...option} />
      ))}
    </select>
  );
};

export type SelectOptionProps = SelectOptionPropsDefinition;
export default Select;
