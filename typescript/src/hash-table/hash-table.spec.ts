import { describe, expect, it } from 'vitest';
import { HashTable } from './hash-table';

describe('HashTable', () => {
  it('should put and get', () => {
    const hashTable1 = new HashTable<string, number>();
    hashTable1.put('a', 1);
    hashTable1.put('b', 2);
    hashTable1.put('c', 3);
    expect(hashTable1.get('a')).toBe(1);
    expect(hashTable1.get('b')).toBe(2);
    expect(hashTable1.get('c')).toBe(3);

    const hashTable2 = new HashTable<number, number>();

    hashTable2.put(1, 1);
    hashTable2.put(2, 2);
    hashTable2.put(3, 3);
    expect(hashTable2.get(1)).toBe(1);
    expect(hashTable2.get(2)).toBe(2);
    expect(hashTable2.get(3)).toBe(3);
  });
});
