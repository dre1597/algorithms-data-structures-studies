import { describe, expect, it } from 'vitest';
import { binarySearch } from './binary-search';

describe('binary search', () => {
  it('should work', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
    expect(binarySearch(['a', 'b', 'c', 'd', 'e'], 'a')).toBe(0);
    expect(binarySearch(['a', 'b', 'c', 'd', 'e'], 'z')).toBe(-1);
    expect(binarySearch(['a', 'b', 'c', 'd', 'á'], 'á')).toBe(4);
  });
});
