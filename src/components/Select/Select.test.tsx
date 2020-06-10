import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Select, { SelectOptionProps } from './Select';

describe('renders learn react link', () => {
  const options: SelectOptionProps[] = [
    {
      value: 'first',
      displayValue: '1st',
    },
    {
      value: 'second',
      displayValue: '2nd',
    },
    {
      value: 'third',
      displayValue: '3rd',
    },
  ];

  const renderComponent = () =>
    render(
      <Select
        ariaLabel="some description"
        className="custom-class"
        initialValue="first"
        options={options}
      />
    );

  it('should render and change between options', () => {
    const { getByLabelText, getByText } = renderComponent();
    const select = getByLabelText(/some description/i) as HTMLSelectElement;
    const firstOption = getByText('1st');

    expect(select).toBeInTheDocument();
    expect(firstOption).toBeInTheDocument();

    fireEvent.change(select, { value: 'second' });

    const secondOption = getByText('2nd');

    expect(secondOption).toBeInTheDocument();

    fireEvent.change(select, { value: 'third' });

    const thirdOption = getByText('3rd');

    expect(thirdOption).toBeInTheDocument();
  });
});
