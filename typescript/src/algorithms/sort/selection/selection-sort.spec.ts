import { describe, expect, it } from 'vitest';
import { selectionSort } from './selection-sort';

describe('selectionSort', () => {
  it('should sort', () => {
    expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([3, 1, 5, 4, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([1, 2, 3, 1, 2])).toEqual([1, 1, 2, 2, 3]);
  });
});
