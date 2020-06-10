import React, { FunctionComponent } from 'react';

export interface SelectOptionProps {
  value: string;
  displayValue: string;
}

const SelectOption: FunctionComponent<SelectOptionProps> = ({
  value,
  displayValue,
}) => <option value={value}>{displayValue}</option>;

export default SelectOption;
