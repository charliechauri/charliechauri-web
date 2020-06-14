import React, { FC } from 'react';

export interface SelectOptionProps {
  value: string;
  displayValue: string;
}

const SelectOption: FC<SelectOptionProps> = ({ value, displayValue }) => (
  <option value={value}>{displayValue}</option>
);

export default SelectOption;
