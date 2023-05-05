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
  });

  it('should get', () => {
    const bTree = generateEmptyTree();
    expect(bTree.get(3)).toBeNull();

    const bTree2 = generateNonEmptyTree();

    expect(bTree2.get(0)).toBeNull();
    expect(bTree2.get(1)).toBe(1);
  });

  it('should remove', () => {
    const bTree1 = generateEmptyTree();

    bTree1.remove(3);
    expect(bTree1.contains(3)).toBe(false);

    const bTree2 = generateNonEmptyTree();

    bTree2.remove(3);
    expect(bTree2.contains(3)).toBe(false);

    bTree2.remove(1);
    expect(bTree2.contains(1)).toBe(false);

    bTree2.remove(2);
    expect(bTree2.contains(2)).toBe(false);

    bTree2.remove(4);
    expect(bTree2.contains(4)).toBe(false);

    bTree2.remove(5);
    expect(bTree2.contains(5)).toBe(false);
  });
});
