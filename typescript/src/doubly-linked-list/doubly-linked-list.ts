class DLNode<T> {
  public data: T;
  public next: DLNode<T> | null = null;
  public prev: DLNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class OutOfBoundsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'OutOfBoundsError';
  }
}

export class DoublyLinkedList<T> {
  private _head: DLNode<T> | null = null;
  private _tail: DLNode<T> | null = null;
  private _size = 0;

  get size(): number {
    return this._size;
  }

  public getByIndex(index: number): T | null {
    if (this.isEmpty() || this._head === null || this._tail === null) {
      throw new OutOfBoundsError('Index out of bounds');
    }

    if (index < 0 || index >= this._size) {
      throw new OutOfBoundsError('Index out of bounds');
    }

    if (index > this._size / 2) {
      let middle = this._size - 1 - index;
      let temp = this._tail;

      while (middle > 0) {
        if (temp.prev) {
          temp = temp.prev;
        }

        middle--;
      }
      return temp.data;
    }

    let temp = this._head;

    for (let i = 0; i < index; i++) {
      if (temp.next) {
        temp = temp.next;
      }
    }
    return temp.data;
  }

  public unshift(data: T): void {
    if (this.isEmpty() || this._head === null) {
      const node = new DLNode(data);

      this._head = node;
      this._tail = node;
    } else {
      const node = new DLNode(data);
      node.next = this._head;
      this._head.prev = node;
      this._head = node;
    }

    this._size++;
  }

  public push(data: T): void {
    if (this.isEmpty() || this._tail === null) {
      const node = new DLNode(data);
      this._head = node;
      this._tail = node;
    } else {
      const node = new DLNode(data);
      node.prev = this._tail;
      this._tail.next = node;
      this._tail = node;
    }
    this._size++;
  }

  public add(index: number, data: T): void {
    if (index < 0 || index > this._size) {
      throw new OutOfBoundsError('Index out of bounds');
    }

    if (index === 0 || this._head === null) {
      this.unshift(data);
      return;
    }

    if (index === this._size || this._head.next === null) {
      this.push(data);
      return;
    }

    const node = new DLNode(data);

    let current = this._head;

    for (let i = 0; i < index - 1; i++) {
      if (current.next) {
        current = current.next;
      }
    }

    node.next = current.next;
    current.next = node;
    node.prev = current;

    this._size++;
  }

  public shift(): void {
    if (!this._head) {
      return;
    }

    this._head = this._head.next;
    this._size--;
  }

  public isEmpty(): boolean {
    return this._size === 0;
  }
}
