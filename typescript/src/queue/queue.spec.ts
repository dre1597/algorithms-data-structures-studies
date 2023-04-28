import { describe, expect, it } from 'vitest';
import { Queue } from './queue';

const generateEmptyQueue = () => new Queue<string>();

const generateNonEmptyQueue = () => {
  const queue = new Queue<string>();
  queue.enqueue('any_data1');
  queue.enqueue('any_data2');
  queue.enqueue('any_data3');
  return queue;
};

describe('Queue', () => {
  it('should enqueue an item', () => {
    const queue1 = generateEmptyQueue();
    expect(queue1.toString()).toBe('');
    queue1.enqueue('any_data');
    expect(queue1.peek()).toBe('any_data');
    expect(queue1.size()).toBe(1);
    expect(queue1.isEmpty()).toBe(false);
    expect(queue1.toString()).toBe('any_data');

    const queue2 = generateNonEmptyQueue();
    expect(queue2.toString()).toBe('any_data1,any_data2,any_data3');
    queue2.enqueue('any_data');
    expect(queue2.peek()).toBe('any_data1');
    expect(queue2.size()).toBe(4);
    expect(queue2.isEmpty()).toBe(false);
    expect(queue2.toString()).toBe('any_data1,any_data2,any_data3,any_data');
  });

  it('should dequeue an item', () => {
    const queue1 = generateEmptyQueue();
    expect(queue1.toString()).toBe('');
    expect(() => queue1.dequeue()).not.toThrow();
    expect(queue1.dequeue()).toBeUndefined();
    expect(queue1.size()).toBe(0);
    expect(queue1.isEmpty()).toBe(true);
    expect(queue1.toString()).toBe('');

    const queue2 = generateEmptyQueue();
    expect(queue2.toString()).toBe('');
    queue2.enqueue('any_data');
    expect(queue2.toString()).toBe('any_data');
    expect(queue2.dequeue()).toBe('any_data');
    expect(queue2.size()).toBe(0);
    expect(queue2.isEmpty()).toBe(true);
    expect(queue2.toString()).toBe('');

    const queue3 = generateNonEmptyQueue();
    expect(queue3.toString()).toBe('any_data1,any_data2,any_data3');
    expect(queue3.dequeue()).toBe('any_data1');
    expect(queue3.size()).toBe(2);
    expect(queue3.isEmpty()).toBe(false);
    expect(queue3.toString()).toBe('any_data2,any_data3');
  });

  it('should peek an item', () => {
    const queue1 = generateEmptyQueue();
    expect(queue1.toString()).toBe('');
    expect(() => queue1.peek()).not.toThrow();
    expect(queue1.peek()).toBeUndefined();
    expect(queue1.size()).toBe(0);
    expect(queue1.isEmpty()).toBe(true);
    expect(queue1.toString()).toBe('');

    const queue2 = generateNonEmptyQueue();
    expect(queue2.toString()).toBe('any_data1,any_data2,any_data3');
    expect(queue2.peek()).toBe('any_data1');
    expect(queue2.size()).toBe(3);
    expect(queue2.isEmpty()).toBe(false);
    expect(queue2.toString()).toBe('any_data1,any_data2,any_data3');
  });

  it('should clear the stack', () => {
    const queue1 = generateEmptyQueue();
    expect(queue1.toString()).toBe('');
    expect(() => queue1.clear()).not.toThrow();
    expect(queue1.size()).toBe(0);
    expect(queue1.isEmpty()).toBe(true);
    expect(queue1.toString()).toBe('');

    const queue2 = generateNonEmptyQueue();
    expect(queue2.toString()).toBe('any_data1,any_data2,any_data3');
    queue2.clear();
    expect(queue2.size()).toBe(0);
    expect(queue2.isEmpty()).toBe(true);
    expect(queue2.toString()).toBe('');
  });
});
