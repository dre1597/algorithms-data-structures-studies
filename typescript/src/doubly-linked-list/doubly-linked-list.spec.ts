import { describe, expect, it } from 'vitest';
import { DoublyLinkedList, OutOfBoundsError } from './doubly-linked-list';

const generateEmptyList = (): DoublyLinkedList<string> =>
  new DoublyLinkedList<string>();

const generateNonEmptyList = (): DoublyLinkedList<string> => {
  const list = new DoublyLinkedList<string>();
  list.push('any_data1');
  list.push('any_data2');
  list.push('any_data3');
  list.push('any_data4');
  list.push('any_data5');
  return list;
};

describe('DoublyLinkedList', () => {
  describe('getByIndex', () => {
    it('should get by index', () => {
      const list = generateNonEmptyList();

      expect(list.getByIndex(1)).toBe('any_data2');
      expect(list.getByIndex(3)).toBe('any_data4');
    });

    it('should throw OutOfBoundsError if didnt pass a valid index', () => {
      const list1 = generateEmptyList();

      expect(() => list1.getByIndex(0)).toThrow(OutOfBoundsError);

      const list2 = generateNonEmptyList();

      expect(() => list2.getByIndex(-1)).toThrow(OutOfBoundsError);
      expect(() => list2.getByIndex(list2.size)).toThrow(OutOfBoundsError);
    });
  });

  describe('unshift', () => {
    it('should add to front', () => {
      const list1 = generateEmptyList();
      list1.unshift('any_data');

      expect(list1.getByIndex(0)).toBe('any_data');
      expect(list1.size).toBe(1);

      const list2 = generateNonEmptyList();

      list2.unshift('any_data');

      expect(list2.getByIndex(0)).toBe('any_data');
      expect(list2.size).toBe(6);
    });
  });

  describe('push', () => {
    it('should add to back', () => {
      const list1 = generateEmptyList();
      list1.push('any_data');

      expect(list1.getByIndex(list1.size - 1)).toBe('any_data');
      expect(list1.size).toBe(1);

      const list2 = generateNonEmptyList();

      list2.push('any_data');

      expect(list2.getByIndex(list2.size - 1)).toBe('any_data');
      expect(list2.size).toBe(6);
    });
  });

  describe('add', () => {
    it('should add to index', () => {
      const list1 = generateEmptyList();
      list1.add(0, 'any_data');

      expect(list1.getByIndex(0)).toBe('any_data');
      expect(list1.size).toBe(1);

      const list2 = generateNonEmptyList();

      list2.add(0, 'any_data');

      expect(list2.getByIndex(0)).toBe('any_data');
      expect(list2.size).toBe(6);

      const list3 = generateNonEmptyList();

      list3.add(2, 'any_data');

      expect(list3.getByIndex(2)).toBe('any_data');
      expect(list3.size).toBe(6);

      const list4 = generateNonEmptyList();

      list4.add(list4.size, 'any_data');

      expect(list4.getByIndex(list4.size - 1)).toBe('any_data');
      expect(list4.size).toBe(6);
    });

    it('should throw OutOfBoundsError if didnt pass a valid index', () => {
      const list = generateNonEmptyList();

      expect(() => list.add(-1, 'any_data')).toThrow(OutOfBoundsError);

      expect(() => list.add(list.size + 1, 'any_data')).toThrow(
        OutOfBoundsError,
      );
    });
  });

  describe('shift', () => {
    it('should remove from front', () => {
      const list1 = generateEmptyList();

      list1.unshift('any_data');
      list1.shift();

      expect(() => list1.getByIndex(0)).toThrow(OutOfBoundsError);
      expect(list1.size).toBe(0);

      const list2 = generateNonEmptyList();

      list2.push('any_data');
      list2.shift();

      expect(() => list2.getByIndex(0)).not.toBe('any_data');
      expect(list2.size).toBe(5);
    });

    it('should not throw if the list is empty', () => {
      const list = generateEmptyList();
      expect(() => list.shift()).not.toThrow();
      expect(list.size).toBe(0);
    });
  });
});
