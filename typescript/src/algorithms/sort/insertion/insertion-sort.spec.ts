import { describe, expect, it } from 'vitest';
import { insertionSort } from './insertion-sort';

describe('insertionSort', () => {
  it('should sort', () => {
    expect(insertionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionSort([3, 1, 5, 4, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionSort([1, 2, 3, 1, 2])).toEqual([1, 1, 2, 2, 3]);
  });
});
