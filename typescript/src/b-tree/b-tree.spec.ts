import { describe, expect, it } from 'vitest';
import { Btree } from './b-tree';

const generateEmptyTree = () => new Btree();

const generateNonEmptyTree = () => {
  const bTree = new Btree();

  bTree.insert(3);
  bTree.insert(1);
  bTree.insert(2);
  bTree.insert(4);
  bTree.insert(5);

  return bTree;
};

describe('b-tree', () => {
  it('should insert', () => {
    const bTree = generateEmptyTree();

    bTree.insert(3);
    expect(bTree.contains(3)).toBe(true);

    bTree.insert(1);
    expect(bTree.contains(1)).toBe(true);

    bTree.insert(2);
    expect(bTree.contains(2)).toBe(true);

    bTree.insert(4);
    expect(bTree.contains(4)).toBe(true);

    bTree.insert(5);
    expect(bTree.contains(5)).toBe(true);

    bTree.insert(3);
    expect(bTree.contains(3)).toBe(true);

    bTree.insert(10);
    expect(bTree.contains(10)).toBe(true);

    bTree.insert(8);
    expect(bTree.contains(8)).toBe(true);

    bTree.insert(7);
    expect(bTree.contains(7)).toBe(true);

    bTree.insert(6);
    expect(bTree.contains(6)).toBe(true);

    bTree.insert(11);
    expect(bTree.contains(11)).toBe(true);

    // bTree.insert(9);
    // expect(bTree.contains(9)).toBe(true);
  });

  it('should get', () => {
    const bTree = generateEmptyTree();
    expect(bTree.get(3)).toBeNull();

    const bTree2 = generateNonEmptyTree();

    expect(bTree2.get(0)).toBeNull();
    expect(bTree2.get(1)).toBe(1);
  });
});
