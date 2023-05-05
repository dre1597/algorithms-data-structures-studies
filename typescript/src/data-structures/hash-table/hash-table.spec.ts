import { describe, expect, it } from 'vitest';
import { HashTable } from './hash-table';

const generateEmptyTable = <K, V>(): HashTable<K, V> => new HashTable<K, V>();

const generateNonEmptyTable = (): HashTable<string, number> => {
  const table = new HashTable<string, number>();
  table.put('a', 1);
  table.put('b', 2);
  table.put('c', 3);
  return table;
};

describe('HashTable', () => {
  it('should put and get', () => {
    const hashTable1 = generateEmptyTable<string, number>();
    expect(hashTable1.isEmpty()).toBe(true);
    expect(hashTable1.size()).toBe(0);
    expect(hashTable1.toString()).toBe('');

    hashTable1.put('a', 1);
    hashTable1.put('b', 2);
    hashTable1.put('c', 3);

    expect(hashTable1.get('a')).toBe(1);
    expect(hashTable1.get('b')).toBe(2);
    expect(hashTable1.get('c')).toBe(3);
    expect(hashTable1.isEmpty()).toBe(false);
    expect(hashTable1.size()).toBe(3);
    expect(hashTable1.toString()).toBe(
      '{"23":{"key":"a","value":1},"24":{"key":"b","value":2},"25":{"key":"c","value":3}}',
    );

    const hashTable2 = generateEmptyTable<number, number>();
    expect(hashTable2.isEmpty()).toBe(true);
    expect(hashTable2.size()).toBe(0);
    expect(hashTable2.toString()).toBe('');

    hashTable2.put(1, 1);
    hashTable2.put(2, 2);
    hashTable2.put(3, 3);

    expect(hashTable2.get(1)).toBe(1);
    expect(hashTable2.get(2)).toBe(2);
    expect(hashTable2.get(3)).toBe(3);
    expect(hashTable2.isEmpty()).toBe(false);
    expect(hashTable2.size()).toBe(3);
    expect(hashTable2.toString()).toBe(
      '{"1":{"key":1,"value":1},"2":{"key":2,"value":2},"3":{"key":3,"value":3}}',
    );
  });

  it('should remove', () => {
    const hashTable = generateNonEmptyTable();
    expect(hashTable.isEmpty()).toBe(false);
    expect(hashTable.size()).toBe(3);
    expect(hashTable.toString()).toBe(
      '{"23":{"key":"a","value":1},"24":{"key":"b","value":2},"25":{"key":"c","value":3}}',
    );

    hashTable.remove('a');
    expect(hashTable.get('a')).toBeUndefined();
    expect(hashTable.isEmpty()).toBe(false);
    expect(hashTable.size()).toBe(2);
    expect(hashTable.toString()).toBe(
      '{"24":{"key":"b","value":2},"25":{"key":"c","value":3}}',
    );

    hashTable.remove('b');
    expect(hashTable.get('b')).toBeUndefined();
    expect(hashTable.isEmpty()).toBe(false);
    expect(hashTable.size()).toBe(1);
    expect(hashTable.toString()).toBe('{"25":{"key":"c","value":3}}');

    expect(hashTable.get('c')).toBe(3);
  });

  it('should clear', () => {
    const hashTable = generateNonEmptyTable();
    hashTable.clear();
    expect(hashTable.isEmpty()).toBe(true);
    expect(hashTable.size()).toBe(0);
    expect(hashTable.toString()).toBe('');
  });
});
