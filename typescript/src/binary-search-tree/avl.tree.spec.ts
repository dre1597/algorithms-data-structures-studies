import { describe, expect, it } from 'vitest';
import { AvlTree } from './avl-tree';

const generateEmptyAvlTree = () => new AvlTree<number>();

const generateNonEmptyAvlTree = () => {
  const tree = new AvlTree<number>();
  tree.insert(3);
  tree.insert(1);
  tree.insert(5);
  tree.insert(2);
  tree.insert(4);
  return tree;
};

describe('BinarySearchTree', () => {
  it('should insert', () => {
    const avlTree1 = generateEmptyAvlTree();

    avlTree1.insert(3);
    expect(avlTree1.contains(3)).toBe(true);
    expect(avlTree1.traverse('in')).toEqual([3]);

    avlTree1.insert(1);
    expect(avlTree1.contains(1)).toBe(true);
    expect(avlTree1.traverse('in')).toEqual([1, 3]);

    avlTree1.insert(5);
    expect(avlTree1.contains(5)).toBe(true);
    expect(avlTree1.traverse('in')).toEqual([1, 3, 5]);

    avlTree1.insert(2);
    expect(avlTree1.contains(2)).toBe(true);
    expect(avlTree1.traverse('in')).toEqual([1, 2, 3, 5]);

    avlTree1.insert(4);
    expect(avlTree1.contains(4)).toBe(true);
    expect(avlTree1.traverse('in')).toEqual([1, 2, 3, 4, 5]);

    const avlTree2 = generateEmptyAvlTree();

    avlTree2.insert(1);
    expect(avlTree2.contains(1)).toBe(true);
    expect(avlTree2.traverse('in')).toEqual([1]);

    avlTree2.insert(2);
    expect(avlTree2.contains(2)).toBe(true);
    expect(avlTree2.traverse('in')).toEqual([1, 2]);

    avlTree2.insert(3);
    expect(avlTree2.contains(3)).toBe(true);
    expect(avlTree2.traverse('in')).toEqual([1, 2, 3]);

    avlTree2.insert(4);
    expect(avlTree2.contains(4)).toBe(true);
    expect(avlTree2.traverse('in')).toEqual([1, 2, 3, 4]);

    avlTree2.insert(5);
    expect(avlTree2.contains(5)).toBe(true);
    expect(avlTree2.traverse('in')).toEqual([1, 2, 3, 4, 5]);

    const avlTree3 = generateEmptyAvlTree();

    avlTree3.insert(5);
    expect(avlTree3.contains(5)).toBe(true);
    expect(avlTree3.traverse('in')).toEqual([5]);

    avlTree3.insert(4);
    expect(avlTree3.contains(4)).toBe(true);
    expect(avlTree3.traverse('in')).toEqual([4, 5]);

    avlTree3.insert(3);
    expect(avlTree3.contains(3)).toBe(true);
    expect(avlTree3.traverse('in')).toEqual([3, 4, 5]);

    avlTree3.insert(2);
    expect(avlTree3.contains(2)).toBe(true);
    expect(avlTree3.traverse('in')).toEqual([2, 3, 4, 5]);

    avlTree3.insert(1);
    expect(avlTree3.contains(1)).toBe(true);
    expect(avlTree3.traverse('in')).toEqual([1, 2, 3, 4, 5]);

    avlTree3.insert(1);
    expect(avlTree3.contains(1)).toBe(true);
    expect(avlTree3.traverse('in')).toEqual([1, 2, 3, 4, 5]);
  });

  it('should remove', () => {
    const avlTree1 = generateNonEmptyAvlTree();

    avlTree1.remove(3);
    expect(avlTree1.contains(3)).toBe(false);
    expect(avlTree1.traverse('in')).toEqual([1, 2, 4, 5]);

    avlTree1.remove(1);
    expect(avlTree1.contains(1)).toBe(false);
    expect(avlTree1.traverse('in')).toEqual([2, 4, 5]);

    avlTree1.remove(5);
    expect(avlTree1.contains(5)).toBe(false);
    expect(avlTree1.traverse('in')).toEqual([2, 4]);

    avlTree1.remove(2);
    expect(avlTree1.contains(2)).toBe(false);
    expect(avlTree1.traverse('in')).toEqual([4]);

    avlTree1.remove(4);
    expect(avlTree1.contains(4)).toBe(false);
    expect(avlTree1.traverse('in')).toEqual([]);

    const avlTree2 = generateNonEmptyAvlTree();

    avlTree2.remove(1);
    expect(avlTree2.contains(1)).toBe(false);
    expect(avlTree2.traverse('in')).toEqual([2, 3, 4, 5]);

    avlTree2.remove(2);
    expect(avlTree2.contains(2)).toBe(false);
    expect(avlTree2.traverse('in')).toEqual([3, 4, 5]);

    avlTree2.remove(3);
    expect(avlTree2.contains(3)).toBe(false);
    expect(avlTree2.traverse('in')).toEqual([4, 5]);

    avlTree2.remove(4);
    expect(avlTree2.contains(4)).toBe(false);
    expect(avlTree2.traverse('in')).toEqual([5]);

    avlTree2.remove(5);
    expect(avlTree2.contains(5)).toBe(false);
    expect(avlTree2.traverse('in')).toEqual([]);
  });
});
