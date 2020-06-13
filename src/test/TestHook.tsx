import React from 'react';

const TestHook = ({ callback }: { callback: () => void }) => {
  callback();

  return null;
};

export const testHook = (callback: () => void) => (
  <TestHook callback={callback} />
);
