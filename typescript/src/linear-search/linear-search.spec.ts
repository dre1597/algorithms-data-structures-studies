import { describe, expect, it } from 'vitest';
import { search } from './linear-search';

describe('linear search', () => {
  it('should return -1 when the target is not found', () => {
    expect(search([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it('should return the index when the target is found', () => {
    expect(search([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(search([1, 2, 3, 4, 5], 4)).toBe(3);
  });
});
