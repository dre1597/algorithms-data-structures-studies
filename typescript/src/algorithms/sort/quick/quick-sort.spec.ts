import { describe, expect, it } from 'vitest';
import { quickSort } from './quick-sort';

describe('quick sort', () => {
  it('should sort', () => {
    expect(quickSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);

    expect(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);

    expect(quickSort([1, 5, 3, 10, 6, 2, 9, 8, 7, 4])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
});
