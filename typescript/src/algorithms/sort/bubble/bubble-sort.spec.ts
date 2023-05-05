import { describe, expect, it } from 'vitest';
import { bubbleSort1, bubbleSort2 } from './bubble-sort';

describe('bubbleSort', () => {
  describe('bubbleSort', () => {
    it('should sort an array', () => {
      expect(bubbleSort1([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
      expect(bubbleSort1([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
      expect(bubbleSort1([3, 1, 5, 4, 2])).toEqual([1, 2, 3, 4, 5]);
      expect(bubbleSort1([1, 2, 3, 1, 2])).toEqual([1, 1, 2, 2, 3]);
    });
  });

  describe('bubblesort2', () => {
    it('should sort an array', () => {
      expect(bubbleSort2([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
      expect(bubbleSort2([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
      expect(bubbleSort2([3, 1, 5, 4, 2])).toEqual([1, 2, 3, 4, 5]);
      expect(bubbleSort2([1, 2, 3, 1, 2])).toEqual([1, 1, 2, 2, 3]);
    });
  });
});
