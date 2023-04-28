class LLNode<T> {
  public data: T;
  public next: LLNode<T> | null = null;

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

export class SinglyLinkedList<T> {
  private _head: LLNode<T> | null = null;

  private _size = 0;

  get size(): number {
    return this._size;
  }

  public getByIndex(index: number): T | null {
    if (this.isEmpty() || this._head === null) {
      throw new OutOfBoundsError('Index out of bounds');
    }

    if (index < 0 || index >= this._size) {
      throw new OutOfBoundsError('Index out of bounds');
    }

    let current = this._head;
    for (let i = 0; i < index; i++) {
      if (current.next) {
        current = current.next;
      }
    }

    return current.data;
  }

  public unshift(data: T): void {
    const node = new LLNode(data);
    node.next = this._head;
    this._head = node;
    this._size++;
  }

  public push(data: T): void {
    const node = new LLNode(data);
    if (!this._head) {
      this._head = node;
    } else {
      let current = this._head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
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

    const node = new LLNode(data);

    let current = this._head;

    for (let i = 0; i < index - 1; i++) {
      if (current.next) {
        current = current.next;
      }
    }

    node.next = current.next;

    current.next = node;

    this._size++;
  }

  public shift(): void {
    if (!this._head) {
      return;
    }
    this._head = this._head.next;
    this._size--;
  }

  public pop(): void {
    if (!this._head) {
      return;
    }

    if (!this._head.next) {
      this._head = null;
      this._size--;
      return;
    }

    let current = this._head;
    while (current.next?.next) {
      current = current.next;
    }
    current.next = null;
    this._size--;
  }

  public remove(index: number): void {
    if (this.isEmpty() || this._head === null) {
      throw new OutOfBoundsError('Index out of bounds');
    }

    if (index < 0 || index >= this._size) {
      throw new OutOfBoundsError('Index out of bounds');
    }

    if (index === 0) {
      this.shift();
      return;
    }

    if (index === this._size - 1) {
      this.pop();
      return;
    }

    let current = this._head;

    for (let i = 0; i < index - 1; i++) {
      if (current.next) {
        current = current.next;
      }
    }

    if (current.next?.next) {
      current.next = current.next.next;
      this._size--;
    }
  }

  public contains(data: T): boolean {
    let current = this._head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  public indexOf(data: T): number {
    let current = this._head;
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  public isEmpty(): boolean {
    return this._size === 0;
  }

  public clear(): void {
    this._head = null;
    this._size = 0;
  }

  public toString(): string {
    let current = this._head;
    let string = '';
    while (current) {
      string += current.data + ' ';
      current = current.next;
    }
    return string.trim();
  }
}
