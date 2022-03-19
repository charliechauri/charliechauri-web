import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Select } from './index';

describe('renders learn react link', () => {
  const options = [
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
    expect(select.value).toBe('first');
    expect(firstOption).toBeInTheDocument();

    fireEvent.change(select, { target: { value: 'second' } });
    const secondOption = getByText('2nd');
    expect(secondOption).toBeInTheDocument();
    expect(select.value).toBe('second');

    fireEvent.change(select, { target: { value: 'third' } });
    const thirdOption = getByText('3rd');
    expect(thirdOption).toBeInTheDocument();
    expect(select.value).toBe('third');
  });
});
