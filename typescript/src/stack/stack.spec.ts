import { describe, expect, it } from 'vitest';
import { Stack } from './stack';

const generateEmptyStack = () => new Stack<string>();

const generateNonEmptyStack = () => {
  const stack = new Stack<string>();
  stack.push('any_data1');
  stack.push('any_data2');
  stack.push('any_data3');
  return stack;
};

describe('Stack', () => {
  it('should push an item', () => {
    const stack1 = generateEmptyStack();
    expect(stack1.toString()).toBe('');
    stack1.push('any_data');
    expect(stack1.peek()).toBe('any_data');
    expect(stack1.size()).toBe(1);
    expect(stack1.isEmpty()).toBe(false);
    expect(stack1.toString()).toBe('any_data');

    const stack2 = generateNonEmptyStack();
    expect(stack2.toString()).toBe('any_data3,any_data2,any_data1');
    stack2.push('any_data');
    expect(stack2.peek()).toBe('any_data');
    expect(stack2.size()).toBe(4);
    expect(stack2.isEmpty()).toBe(false);
    expect(stack2.toString()).toBe('any_data,any_data3,any_data2,any_data1');
  });

  it('should pop an item', () => {
    const stack1 = generateEmptyStack();
    expect(stack1.toString()).toBe('');
    expect(() => stack1.pop()).not.toThrow();
    expect(stack1.pop()).toBeUndefined();
    expect(stack1.size()).toBe(0);
    expect(stack1.isEmpty()).toBe(true);
    expect(stack1.toString()).toBe('');

    const stack2 = generateEmptyStack();
    expect(stack2.toString()).toBe('');
    stack2.push('any_data');
    expect(stack2.toString()).toBe('any_data');
    expect(stack2.pop()).toBe('any_data');
    expect(stack2.size()).toBe(0);
    expect(stack2.isEmpty()).toBe(true);
    expect(stack2.toString()).toBe('');

    const stack3 = generateNonEmptyStack();
    expect(stack3.toString()).toBe('any_data3,any_data2,any_data1');
    stack3.push('any_data');
    expect(stack3.toString()).toBe('any_data,any_data3,any_data2,any_data1');
    expect(stack3.pop()).toBe('any_data');
    expect(stack3.size()).toBe(3);
    expect(stack3.isEmpty()).toBe(false);
    expect(stack3.toString()).toBe('any_data3,any_data2,any_data1');
  });

  it('should peek an item', () => {
    const stack1 = generateEmptyStack();
    expect(stack1.toString()).toBe('');
    expect(() => stack1.peek()).not.toThrow();
    expect(stack1.peek()).toBeUndefined();
    expect(stack1.size()).toBe(0);
    expect(stack1.isEmpty()).toBe(true);
    expect(stack1.toString()).toBe('');

    const stack2 = generateNonEmptyStack();
    expect(stack2.toString()).toBe('any_data3,any_data2,any_data1');
    expect(stack2.peek()).toBe('any_data3');
    expect(stack2.size()).toBe(3);
    expect(stack2.isEmpty()).toBe(false);
    expect(stack2.toString()).toBe('any_data3,any_data2,any_data1');
  });

  it('should clear the stack', () => {
    const stack1 = generateEmptyStack();
    expect(stack1.toString()).toBe('');
    stack1.clear();
    expect(stack1.size()).toBe(0);
    expect(stack1.isEmpty()).toBe(true);
    expect(stack1.toString()).toBe('');

    const stack2 = generateNonEmptyStack();
    expect(stack2.toString()).toBe('any_data3,any_data2,any_data1');
    stack2.clear();
    expect(stack2.size()).toBe(0);
    expect(stack2.isEmpty()).toBe(true);
    expect(stack2.toString()).toBe('');
  });
});
