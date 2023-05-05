import { describe, expect, it } from 'vitest';
import { insertionsort } from './insertionsort';

describe('insertionsort', () => {
  it('should sort', () => {
    expect(insertionsort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionsort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionsort([3, 1, 5, 4, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(insertionsort([1, 2, 3, 1, 2])).toEqual([1, 1, 2, 2, 3]);
  });
});
