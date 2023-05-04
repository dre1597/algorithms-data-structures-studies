import { describe, expect, it } from 'vitest';
import { PriorityQueue } from './priority-queue';

const generateEmptyQueue = () => new PriorityQueue<number>();

const generateNonEmptyQueue = () => {
  const priorityQueue = new PriorityQueue<number>();
  priorityQueue.enqueue(1);
  priorityQueue.enqueue(3);
  priorityQueue.enqueue(2);
  return priorityQueue;
};

describe('PriorityQueue', () => {
  it('should enqueue', () => {
    const queue1 = generateEmptyQueue();
    expect(queue1.toString()).toBe('');
    queue1.enqueue(1);
    queue1.enqueue(3);
    queue1.enqueue(2);
    expect(queue1.toString()).toBe('3,2,1');
    expect(queue1.size()).toBe(3);

    const queue2 = generateNonEmptyQueue();
    expect(queue2.toString()).toBe('3,2,1');
    queue2.enqueue(5);
    expect(queue2.toString()).toBe('5,3,2,1');
    expect(queue2.size()).toBe(4);
  });

  it('should dequeue', () => {
    const queue1 = generateEmptyQueue();
    expect(queue1.toString()).toBe('');
    expect(queue1.dequeue()).toBe(undefined);
    expect(queue1.size()).toBe(0);
    expect(queue1.toString()).toBe('');

    const queue2 = generateNonEmptyQueue();
    expect(queue2.toString()).toBe('3,2,1');
    expect(queue2.dequeue()).toBe(3);
    expect(queue2.size()).toBe(2);
    expect(queue2.toString()).toBe('2,1');

    const queue3 = generateNonEmptyQueue();
    expect(queue3.toString()).toBe('3,2,1');
    expect(queue3.size()).toBe(3);
    queue3.enqueue(5);
    expect(queue3.toString()).toBe('5,3,2,1');
    expect(queue3.dequeue()).toBe(5);
    expect(queue3.size()).toBe(3);
    expect(queue3.toString()).toBe('3,2,1');
  });

  it('should peek', () => {
    const queue1 = generateEmptyQueue();
    expect(queue1.peek()).toBe(undefined);
    expect(queue1.toString()).toBe('');
    expect(queue1.size()).toBe(0);

    const queue2 = generateNonEmptyQueue();
    expect(queue2.peek()).toBe(3);
    expect(queue2.toString()).toBe('3,2,1');
    expect(queue2.size()).toBe(3);
  });

  it('should clear', () => {
    const queue1 = generateEmptyQueue();
    expect(queue1.toString()).toBe('');
    expect(queue1.size()).toBe(0);
    queue1.clear();
    expect(queue1.size()).toBe(0);
    expect(queue1.toString()).toBe('');

    const queue2 = generateNonEmptyQueue();
    expect(queue2.toString()).toBe('3,2,1');
    expect(queue2.size()).toBe(3);
    queue2.clear();
    expect(queue2.size()).toBe(0);
    expect(queue2.toString()).toBe('');
  });

  it('should test isEmpty', () => {
    const queue1 = generateEmptyQueue();
    expect(queue1.isEmpty()).toBe(true);

    const queue2 = generateNonEmptyQueue();
    expect(queue2.isEmpty()).toBe(false);
  });

  it('should return the size', () => {
    const queue1 = generateEmptyQueue();
    expect(queue1.size()).toBe(0);

    const queue2 = generateNonEmptyQueue();
    expect(queue2.size()).toBe(3);
  });
});
