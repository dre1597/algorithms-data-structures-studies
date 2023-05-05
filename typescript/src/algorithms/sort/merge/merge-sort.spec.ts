import { describe, expect, it } from 'vitest';
import { mergeSort } from './merge-sort';

describe('mergeSort', () => {
  it('should sort', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([3, 1, 5, 4, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([1, 2, 3, 1, 2])).toEqual([1, 1, 2, 2, 3]);
  });
});
