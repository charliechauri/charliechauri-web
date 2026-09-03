import { testHook } from 'test/TestHook';
import { vi } from 'vitest';
import { useEllipsis } from './useEllipsis';

describe('useEllipsis', () => {
  vi.useFakeTimers();

  it('has an initial value of "."', () => {
    testHook(() => {
      const ellipsis = useEllipsis();

      expect(ellipsis).toBe('.');
    });
  });
});
