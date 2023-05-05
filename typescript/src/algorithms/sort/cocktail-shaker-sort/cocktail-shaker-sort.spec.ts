import { describe, expect, it } from 'vitest';
import { cocktailShakerSort } from './cocktail-shaker-sort';

describe('cocktail-shaker-sort', () => {
  it('should sort an array', () => {
    expect(cocktailShakerSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(cocktailShakerSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(cocktailShakerSort([3, 1, 5, 4, 2])).toEqual([1, 2, 3, 4, 5]);
    expect(cocktailShakerSort([1, 2, 3, 1, 2])).toEqual([1, 1, 2, 2, 3]);
  });
});
