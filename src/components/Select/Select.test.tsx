import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Select } from './index';

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

describe('renders learn react link', () => {    
  it('renders and change value based on user selection', () => {
    render(
      <Select
        ariaLabel="some description"
        className="custom-class"
        initialValue="first"
        options={options}
      />
    );

    const select = screen.getByLabelText(/some description/i);
  
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue('first');

    fireEvent.change(select, { target: { value: 'second' } });
    expect(select).toHaveValue('second');

    fireEvent.change(select, { target: { value: 'third' } });
    expect(select).toHaveValue('third');
  });
});
