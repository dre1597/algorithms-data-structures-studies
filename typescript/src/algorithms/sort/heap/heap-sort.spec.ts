import { describe, expect, it } from 'vitest';
import { heapSort } from './heap-sort';

describe('heap sort', () => {
  it('should sort an array', () => {
    expect(heapSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(heapSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(heapSort([3, 1, 5, 2, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
