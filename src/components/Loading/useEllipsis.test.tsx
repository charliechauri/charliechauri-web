import { waitFor } from '@testing-library/react';
import { testHook } from 'test/TestHook';
import useEllipsis from './useEllipsis';

describe('useEllipsis', () => {
  jest.useRealTimers();

  it('should have an initial value "."', () => {
    testHook(() => {
      const ellipsis = useEllipsis();

      expect(ellipsis).toBe('.');
    });
  });

  it('should update each second', () => {
    testHook(async () => {
      const ellipsis = useEllipsis();

      expect(ellipsis).toBe('.');

      expect(setTimeout).toBeCalledTimes(2);

      await waitFor(() => expect(setTimeout).toBeCalledTimes(4));

      await waitFor(() => expect(setTimeout).toBeCalledTimes(5));
    });
  });
});
