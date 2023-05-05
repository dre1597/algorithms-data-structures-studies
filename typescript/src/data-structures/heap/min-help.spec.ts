import { describe, expect, it } from 'vitest';
import { MinHeap } from './min-heap';

const generateEmptyMinHeap = () => new MinHeap<number>();

const generateNonEmptyMinHeap = () => {
  const heap = new MinHeap<number>();
  heap.insert(1);
  heap.insert(2);
  heap.insert(3);

  return heap;
};

describe('MinHeap', () => {
  it('should insert', () => {
    const minHeap = generateEmptyMinHeap();
    minHeap.insert(5);
    expect(minHeap.size()).toBe(1);

    minHeap.insert(1);
    expect(minHeap.size()).toBe(2);

    minHeap.insert(2);
    expect(minHeap.size()).toBe(3);

    minHeap.insert(4);
    expect(minHeap.size()).toBe(4);

    minHeap.insert(3);
    expect(minHeap.size()).toBe(5);
  });

  it('should verify is empty', () => {
    const minHeap = generateEmptyMinHeap();
    expect(minHeap.isEmpty()).toBe(true);

    minHeap.insert(1);
    expect(minHeap.isEmpty()).toBe(false);
  });

  it('should clear', () => {
    const minHeap = generateEmptyMinHeap();
    minHeap.insert(1);
    minHeap.insert(2);
    minHeap.clear();
    expect(minHeap.isEmpty()).toBe(true);
  });

  it('should extract', () => {
    const minHeap = generateNonEmptyMinHeap();
    expect(minHeap.extract()).toBe(1);
    expect(minHeap.size()).toBe(2);
    expect(minHeap.extract()).toBe(2);
    expect(minHeap.size()).toBe(1);
    expect(minHeap.extract()).toBe(3);
    expect(minHeap.size()).toBe(0);
    expect(minHeap.extract()).toBe(undefined);
    expect(minHeap.size()).toBe(0);
  });

  it('should heapify', () => {
    const minHeap = generateNonEmptyMinHeap();
    const heapified = minHeap.heapify([3, 1, 5, 2, 4]);
    expect(heapified).toStrictEqual([1, 2, 5, 3, 4]);
  });
});
