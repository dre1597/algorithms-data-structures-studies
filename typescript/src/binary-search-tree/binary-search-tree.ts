class BSTNode<T> {
  data: T;
  left: BSTNode<T> | null = null;
  right: BSTNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class BinarySearchTree<T> {
  private _root: BSTNode<T> | null = null;
  private _size = 0;

  get size(): number {
    return this._size;
  }

  public insert(data: T): void {
    this._root = this._pointerReinforcementAdd(this._root, data);
  }

  public traverse(type: 'pre' | 'in' | 'post' = 'pre'): T[] {
    return type === 'pre'
      ? this._preOrderTransversal(this._root)
      : type === 'in'
      ? this._inOrderTraversal(this._root)
      : this._postOrderTransversal(this._root);
  }

  private _pointerReinforcementAdd(
    current: BSTNode<T> | null,
    data: T,
  ): BSTNode<T> {
    if (current === null) {
      this._size++;
      return new BSTNode<T>(data);
    } else if (data < current.data) {
      current.left = this._pointerReinforcementAdd(current.left, data);
    } else if (data > current.data) {
      current.right = this._pointerReinforcementAdd(current.right, data);
    }
    return current;
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
