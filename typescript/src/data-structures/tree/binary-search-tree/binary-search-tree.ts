export class BSTNode<T> {
  data: T;
  left: BSTNode<T> | null = null;
  right: BSTNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class BinarySearchTree<T> {
  protected _root: BSTNode<T> | null = null;

  public insert(data: T): void {
    this._root = this._rAdd(this._root, data);
  }

  public remove(data: T): void {
    this._root = this._rRemove(this._root, data);
  }

  public contains(data: T): boolean {
    return this._rContains(this._root, data);
  }

  public clear(): void {
    this._root = null;
  }

  public traverse(type: 'pre' | 'in' | 'post' = 'pre'): T[] {
    return type === 'pre'
      ? this._preOrderTransversal(this._root)
      : type === 'in'
      ? this._inOrderTraversal(this._root)
      : this._postOrderTransversal(this._root);
  }

  protected _rAdd(current: BSTNode<T> | null, data: T): BSTNode<T> {
    if (current === null) {
      return new BSTNode<T>(data);
    } else if (data < current.data) {
      if (current.left === null) {
        current.left = new BSTNode<T>(data);
      } else {
        current.left = this._rAdd(current.left, data);
      }
    } else if (data > current.data) {
      if (current.right === null) {
        current.right = new BSTNode<T>(data);
      } else {
        current.right = this._rAdd(current.right, data);
      }
    }
    return current;
  }

  protected _findMin(current: BSTNode<T>): BSTNode<T> {
    while (current !== null && current.left !== null) {
      current = current.left;
    }
    return current;
  }

  protected _rRemove(current: BSTNode<T> | null, data: T): BSTNode<T> | null {
    if (current === null) {
      return null;
    }

    if (data < current.data) {
      current.left = this._rRemove(current.left, data);
      return current;
    } else if (data > current.data) {
      current.right = this._rRemove(current.right, data);
      return current;
    } else {
      if (current.left === null && current.right === null) {
        current = null;
        return current;
      }

      if (current.left === null) {
        current = current.right;
        return current;
      } else if (current.right === null) {
        current = current.left;
        return current;
      }

      const aux = this._findMin(current.right);
      current.data = aux.data;
      current.right = this._rRemove(current.right, aux.data);
      return current;
    }
  }

  private _rContains(current: BSTNode<T> | null, data: T): boolean {
    if (current === null) {
      return false;
    }

    if (current.data < data) {
      return this._rContains(current.right, data);
    } else if (current.data > data) {
      return this._rContains(current.left, data);
    }

    return true;
  }

  private _inOrderTraversal(node: BSTNode<T> | null, values: T[] = []): T[] {
    if (!node) {
      return values;
    }

    values = this._inOrderTraversal(node.left, values);
    values.push(node.data);
    values = this._inOrderTraversal(node.right, values);

    return values;
  }

  private _preOrderTransversal(node: BSTNode<T> | null, values: T[] = []): T[] {
    if (!node) {
      return values;
    }

    values.push(node.data);
    values = this._preOrderTransversal(node.left, values);
    values = this._preOrderTransversal(node.right, values);

    return values;
  }

  private _postOrderTransversal(
    node: BSTNode<T> | null,
    values: T[] = [],
  ): T[] {
    if (!node) {
      return values;
    }

    values = this._postOrderTransversal(node.left, values);
    values = this._postOrderTransversal(node.right, values);
    values.push(node.data);

    return values;
  }
}
