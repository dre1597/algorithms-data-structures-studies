import { describe, expect, it } from 'vitest';
import { BinarySearchTree } from './binary-search-tree';

const generateEmptyTree = () => new BinarySearchTree<number>();

const generateNonEmptyTree = () => {
  const tree = new BinarySearchTree<number>();
  tree.insert(3);
  tree.insert(1);
  tree.insert(5);
  tree.insert(2);
  tree.insert(4);
  return tree;
};

describe('BinarySearchTree', () => {
  it('should traverse', () => {
    const tree = generateNonEmptyTree();
    expect(tree.traverse('in')).toEqual([1, 2, 3, 4, 5]);
    expect(tree.traverse('pre')).toEqual([3, 1, 2, 5, 4]);
    expect(tree.traverse('post')).toEqual([2, 1, 4, 5, 3]);
  });

  it('should insert', () => {
    const tree = generateEmptyTree();

    tree.insert(3);
    expect(tree.traverse('in')).toEqual([3]);

    tree.insert(1);
    expect(tree.traverse('in')).toEqual([1, 3]);

    tree.insert(5);
    expect(tree.traverse('in')).toEqual([1, 3, 5]);

    tree.insert(2);
    expect(tree.traverse('in')).toEqual([1, 2, 3, 5]);

    tree.insert(4);
    expect(tree.traverse('in')).toEqual([1, 2, 3, 4, 5]);
  });

  it('should remove', () => {
    const tree1 = generateNonEmptyTree();

    tree1.remove(3);

    expect(tree1.traverse('in')).toEqual([1, 2, 4, 5]);
    expect(tree1.traverse('pre')).toEqual([4, 1, 2, 5]);
    expect(tree1.traverse('post')).toEqual([2, 1, 5, 4]);

    tree1.remove(1);
    expect(tree1.traverse('in')).toEqual([2, 4, 5]);
    expect(tree1.traverse('pre')).toEqual([4, 2, 5]);
    expect(tree1.traverse('post')).toEqual([2, 5, 4]);

    tree1.remove(0);
    expect(tree1.traverse('in')).toEqual([2, 4, 5]);
    expect(tree1.traverse('pre')).toEqual([4, 2, 5]);
    expect(tree1.traverse('post')).toEqual([2, 5, 4]);

    const tree2 = generateNonEmptyTree();

    tree2.remove(5);

    expect(tree2.traverse('in')).toEqual([1, 2, 3, 4]);
    expect(tree2.traverse('pre')).toEqual([3, 1, 2, 4]);
    expect(tree2.traverse('post')).toEqual([2, 1, 4, 3]);
  });

  it('should contains', () => {
    const tree = generateNonEmptyTree();

    expect(tree.contains(3)).toBe(true);
    expect(tree.contains(1)).toBe(true);
    expect(tree.contains(5)).toBe(true);
    expect(tree.contains(-1)).toBe(false);
  });

  it('should clear', () => {
    const tree = generateNonEmptyTree();

    tree.clear();

    expect(tree.traverse('in')).toEqual([]);
    expect(tree.traverse('pre')).toEqual([]);
    expect(tree.traverse('post')).toEqual([]);
  });
});
