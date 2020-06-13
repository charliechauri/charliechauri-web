import React from 'react';
import { render } from '@testing-library/react';

const TestHook = ({ callback }: { callback: () => void }) => {
  callback();

  return null;
};

export const testHook = (callback: () => void) =>
  render(<TestHook callback={callback} />);
