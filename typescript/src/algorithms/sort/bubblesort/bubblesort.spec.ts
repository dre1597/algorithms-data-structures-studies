import { describe, expect, it } from 'vitest';
import { bubblesort1, bubblesort2 } from './bubblesort';

describe('bubblesort', () => {
  describe('bubblesort1', () => {
    it('should sort an array', () => {
      expect(bubblesort1([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
      expect(bubblesort1([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
      expect(bubblesort1([3, 1, 5, 4, 2])).toEqual([1, 2, 3, 4, 5]);
      expect(bubblesort1([1, 2, 3, 1, 2])).toEqual([1, 1, 2, 2, 3]);
    });
  });

  describe('bubblesort2', () => {
    it('should sort an array', () => {
      expect(bubblesort2([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
      expect(bubblesort2([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
      expect(bubblesort2([3, 1, 5, 4, 2])).toEqual([1, 2, 3, 4, 5]);
      expect(bubblesort2([1, 2, 3, 1, 2])).toEqual([1, 1, 2, 2, 3]);
    });
  });
});
