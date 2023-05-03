import { describe, expect, it } from 'vitest';
import { MinHeap } from './min-heap';

describe('MinHeap', () => {
  it('should insert', () => {
    const minHeap = new MinHeap<number>();
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
    const minHeap = new MinHeap<number>();
    expect(minHeap.isEmpty()).toBe(true);

    minHeap.insert(1);
    expect(minHeap.isEmpty()).toBe(false);
  });

  it('should clear', () => {
    const minHeap = new MinHeap<number>();
    minHeap.insert(1);
    minHeap.insert(2);
    minHeap.clear();
    expect(minHeap.isEmpty()).toBe(true);
  });
});
