import { testHook } from 'test/TestHook';
import { useEllipsis } from './useEllipsis';

describe('useEllipsis', () => {
  jest.useFakeTimers();

  it('has an initial value of "."', () => {
    testHook(() => {
      const ellipsis = useEllipsis();

      expect(ellipsis).toBe('.');
    });
  });
});
