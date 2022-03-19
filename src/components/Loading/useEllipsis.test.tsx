import { testHook } from 'test/TestHook';
import { useEllipsis } from './useEllipsis';

describe('useEllipsis', () => {
  jest.useFakeTimers();

  it('should have an initial value "."', () => {
    testHook(() => {
      const ellipsis = useEllipsis();

      expect(ellipsis).toBe('.');
    });
  });
});
