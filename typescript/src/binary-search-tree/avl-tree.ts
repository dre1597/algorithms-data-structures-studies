import { BinarySearchTree, BSTNode } from './binary-search-tree';

const enum BalanceFactor {
  UNBALANCED_RIGHT = -2,
  SLIGHTLY_UNBALANCED_RIGHT = -1,
  BALANCED = 0,
  SLIGHTLY_UNBALANCED_LEFT = 1,
  UNBALANCED_LEFT = 2,
}

export class AvlTree<T> extends BinarySearchTree<T> {
  public insert(data: T): void {
    this._root = this._rAdd(this._root, data);
  }

  public remove(data: T): void {
    this._root = this._rRemove(this._root, data);
  }

  protected _rAdd(node: BSTNode<T>, data: T): BSTNode<T> {
    if (node === null) {
      return new BSTNode(data);
    } else if (node.data > data) {
      node.left = this._rAdd(node.left, data);
    } else if (node.data < data) {
      node.right = this._rAdd(node.right, data);
    } else {
      return node;
    }

    const balanceState = this._getBalancedFactor(node);

    if (balanceState === BalanceFactor.UNBALANCED_LEFT) {
      if (node.left.data > data) {
        node = this._rotateLL(node);
      } else {
        return this._rotateLR(node);
      }
    }

    if (balanceState === BalanceFactor.UNBALANCED_RIGHT) {
      if (node.right.data < data) {
        node = this._rotateRR(node);
      } else {
        return this._rotateRL(node);
      }
    }

    return node;
  }

  protected _rRemove(node: BSTNode<T>, data: T): BSTNode<T> {
    if (node === null) {
      return null;
    }

    if (node.data > data) {
      node.left = this._rRemove(node.left, data);
      return node;
    } else if (node.data < data) {
      node.right = this._rRemove(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const aux = this._findMin(node.right);
      node.data = aux.data;
      node.right = this._rRemove(node.right, node.data);
      return node;
    }
  }

  private _getBalancedFactor(current: BSTNode<T>): BalanceFactor {
    const heightDifference =
      this._getNodeHeight(current?.left) - this._getNodeHeight(current?.right);

    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  private _rotateLL(node: BSTNode<T>): BSTNode<T> {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  private _rotateRR(node: BSTNode<T>): BSTNode<T> {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  private _rotateLR(node: BSTNode<T>): BSTNode<T> {
    node.left = this._rotateRR(node.left);
    return this._rotateLL(node);
  }

  private _rotateRL(node: BSTNode<T>): BSTNode<T> {
    node.right = this._rotateLL(node.right);
    return this._rotateRR(node);
  }

  private _getNodeHeight(current: BSTNode<T> | null): number {
    if (current === null) {
      return -1;
    }
    return (
      1 +
      Math.max(
        this._getNodeHeight(current.left),
        this._getNodeHeight(current.right),
      )
    );
  }
}
