class CSLLNode<T> {
  public data: T;
  public next: CSLLNode<T> | null = null;

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

export class CircularSinglyLinkedList<T> {
  private _head: CSLLNode<T> | null = null;
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
    const newNode = new CSLLNode(data);

    if (this._head === null) {
      this._head = new CSLLNode(data);
      this._head.next = this._head;
      this._size++;
      return;
    }

    let current = this._head;
    while (current.next !== this._head) {
      if (current.next) {
        current = current.next;
      }
    }

    newNode.next = this._head;
    current.next = newNode;
    this._head = newNode;
    this._size++;
  }

  public push(data: T): void {
    const newNode = new CSLLNode(data);

    if (this._head === null) {
      this._head = newNode;
      newNode.next = this._head;
      this._size++;
      return;
    }

    let current = this._head;

    while (current.next !== this._head) {
      if (current.next) {
        current = current.next;
      }
    }

    current.next = newNode;
    newNode.next = this._head;
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

    const newNode = new CSLLNode(data);

    let current = this._head;

    for (let i = 0; i < index - 1; i++) {
      if (current.next) {
        current = current.next;
      }
    }

    newNode.next = current.next;
    current.next = newNode;

    this._size++;
  }

  public shift(): void {
    if (this.isEmpty() || !this._head) {
      return;
    }

    if (this._head.next === this._head) {
      this._head = null;
      this._size--;
      return;
    }

    if (this._head.next) {
      this._head.data = this._head.next.data;
      this._head.next = this._head.next.next;
      this._size--;
    }
  }

  public pop(): void {
    if (this.isEmpty() || !this._head) {
      return;
    }

    if (this._head.next === this._head) {
      this._head = null;
      this._size--;
      return;
    }

    let current = this._head;
    while (current && current.next && current.next.next !== this._head) {
      if (current.next) {
        current = current.next;
      }
    }

    current.next = this._head;
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

  public isEmpty(): boolean {
    return this._size === 0;
  }

  public clear(): void {
    this._head = null;
    this._size = 0;
  }

  public toString(): string {
    if (this.isEmpty() || !this._head) {
      return '';
    }

    let current = this._head;
    let string = '';

    do {
      string += current.data + ' ';
      if (current.next) {
        current = current.next;
      }
    } while (current && current !== this._head);

    return string.trim();
  }
}
