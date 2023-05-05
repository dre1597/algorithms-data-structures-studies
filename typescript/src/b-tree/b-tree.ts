class BTreeNode {
  items: number[];
  children: BTreeNode[] = [];
  next: BTreeNode | null = null;

  constructor(items: number[] = []) {
    this.items = items;
  }

  public insert(item: number, max: number): [number, BTreeNode] | null {
    const [positionIndex, found] = this.findPosition(item);

    if (found) {
      return null;
    }

    if (this.isLeaf()) {
      this.items.splice(positionIndex, 0, item);

      return this.checkShouldSplit(max);
    }

    const itemAndRightNode = this.children[positionIndex].insert(item, max);

    if (itemAndRightNode) {
      this.items.splice(positionIndex, 0, itemAndRightNode[0]);
      this.children.splice(positionIndex + 1, 0, itemAndRightNode[1]);

      return this.checkShouldSplit(max);
    }

    return null;
  }

  public remove(
    item: number | null,
    min: number,
    replace?: [BTreeNode, number],
  ): number | null {
    const [positionIndex, found] = this.findPosition(item);

    if (this.isLeaf()) {
      let out: number | null = null;

      if (found) {
        out = this.items.splice(positionIndex, 1)[0];

        if (replace) {
          const [node, index] = replace;
          node.items[index] = out;
        }
      }
      return out;
    }

    const child = this.children[positionIndex];
    const out = found
      ? child.remove(null, min, [this, positionIndex])
      : child.remove(item, min);

    if (child.items.length < min) {
      this._growChild(positionIndex, min);
    }

    return out;
  }

  public get(item: number): number | null {
    const [positionIndex, found] = this.findPosition(item);

    if (found) {
      return this.items[positionIndex];
    }

    if (!this.isLeaf()) {
      return this.children[positionIndex].get(item);
    }

    return null;
  }

  private isLeaf(): boolean {
    return this.children.length === 0;
  }

  private findPosition(value: number): [number, boolean] {
    let i = 0;
    for (; i < this.items.length && value > this.items[i]; i++) {}
    return [i, value === this.items[i]];
  }

  private checkShouldSplit(max: number): [number, BTreeNode | null] {
    if (this.items.length <= max) {
      return null;
    }

    return this.splitChild(Math.floor(max / 2));
  }

  private splitChild(index: number): [number, BTreeNode] {
    const right = new BTreeNode();
    right.items = this.items.slice(index + 1);

    const item = this.items.pop();

    if (!this.isLeaf()) {
      right.children = this.children.splice(index + 1);
    }

    right.next = this.next;
    this.next = right;

    return [item, right];
  }

  private _growChild(index: number, min: number) {
    if (index > 0 && this.children[index - 1].items.length > min) {
      const child = this.children[index];
      const getFrom = this.children[index];
      const item = getFrom.items.pop();

      child.items.splice(0, 0, this.items[index - 1]);

      this.items[index - 1] = item;

      if (!child.isLeaf()) {
        child.children.splice(0, 0, getFrom.children.pop());
      }
    } else if (
      index < this.items.length &&
      this.children[index + 1].items.length > min
    ) {
      const child = this.children[index];
      const getFrom = this.children[index + 1];
      const item = getFrom.items.shift();

      child.items.push(this.items[index]);

      if (!child.isLeaf()) {
        child.children.push(getFrom.children.shift());
      }

      this.items[index] = item;
    } else {
      if (index >= this.items.length) {
        index--;
      }

      const child = this.children[index];
      const mergeItem = this.items.splice(index, 1)[0];
      const mergeChild = this.children.splice(index + 1, 1)[0];
      child.children.push(...mergeChild.children);
      child.items.push(mergeItem, ...mergeChild.items);
      child.next = mergeChild.next;
    }
  }
}

export class Btree {
  private _root: BTreeNode | null = null;
  private readonly _minOrder: number;

  constructor(minOrder = 2) {
    this._minOrder = minOrder;
  }

  public insert(item: number): void {
    if (this._root === null) {
      this._root = new BTreeNode();
    }

    const itemAndRightNode = this._root.insert(item, this._minOrder * 2 - 1);

    if (itemAndRightNode) {
      const children = [this._root, itemAndRightNode[1]];
      this._root = new BTreeNode([itemAndRightNode[0]]);
      this._root.children = children;
    }
  }

  public remove(item: number): void {
    if (!this._root) {
      return;
    }

    this._root.remove(item, this._minOrder - 1);

    if (this._root.items.length === 0) {
      this._root = this._root.children[0] || null;
    }
  }

  public get(item: number): number | null {
    if (this._root === null) {
      return null;
    }

    return this._root.get(item);
  }

  public contains(item: number): boolean {
    return this.get(item) !== null;
  }
}
