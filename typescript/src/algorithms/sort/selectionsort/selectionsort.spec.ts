import { describe, expect, it } from 'vitest';
import { selectionsort } from './selectionsort';

describe('selectionsort', () => {
  it('should sort', () => {
    expect(selectionsort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionsort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionsort([3, 1, 5, 4, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionsort([1, 2, 3, 1, 2])).toEqual([1, 1, 2, 2, 3]);
  });
});
