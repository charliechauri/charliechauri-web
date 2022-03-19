import React, { FC } from 'react';

export type SelectOptionProps = {
  value: string;
  displayValue: string;
};

export const SelectOption: FC<SelectOptionProps> = ({
  value,
  displayValue,
}) => <option value={value}>{displayValue}</option>;

export default SelectOption;
