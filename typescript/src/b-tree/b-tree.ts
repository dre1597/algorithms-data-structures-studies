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

      return this.fixInsert(max);
    }

    const itemAndRightNode = this.children[positionIndex].insert(item, max);

    if (itemAndRightNode) {
      this.items.splice(positionIndex, 0, itemAndRightNode[0]);
      this.children.splice(positionIndex + 1, 0, itemAndRightNode[1]);

      return this.fixInsert(max);
    }

    return null;
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

  private fixInsert(max: number): [number, BTreeNode | null] {
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
}

export class Btree {
  root: BTreeNode | null = null;
  minOrder: number;

  constructor(minOrder = 2) {
    this.minOrder = minOrder;
  }

  insert(item: number): void {
    if (this.root === null) {
      this.root = new BTreeNode();
    }

    const itemAndRightNode = this.root.insert(item, this.minOrder * 2 - 1);

    if (itemAndRightNode) {
      const children = [this.root, itemAndRightNode[1]];
      this.root = new BTreeNode([itemAndRightNode[0]]);
      this.root.children = children;
    }
  }

  get(item: number): number | null {
    if (this.root === null) {
      return null;
    }

    return this.root.get(item);
  }

  contains(item: number): boolean {
    return this.get(item) !== null;
  }
}
