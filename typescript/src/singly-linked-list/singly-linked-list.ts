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
  public size = 0;
  private head: LLNode<T> | null = null;

  public getByIndex(index: number): T | null {
    if (this.size === 0 || this.head === null) {
      throw new OutOfBoundsError('Index out of bounds');
    }

    if (index < 0 || index >= this.size) {
      throw new OutOfBoundsError('Index out of bounds');
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (current.next) {
        current = current.next;
      }
    }

    return current.data;
  }

  public unshift(data: T): void {
    const node = new LLNode(data);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  public push(data: T): void {
    const node = new LLNode(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  public add(index: number, data: T): void {
    if (index < 0 || index > this.size) {
      throw new OutOfBoundsError('Index out of bounds');
    }

    if (index === 0 || this.head === null) {
      this.unshift(data);
      return;
    }

    if (index === this.size || this.head.next === null) {
      this.push(data);
      return;
    }

    const node = new LLNode(data);

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      if (current.next) {
        current = current.next;
      }
    }

    node.next = current.next;

    current.next = node;

    this.size++;
  }

  public shift(): void {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    this.size--;
  }

  public pop(): void {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.next?.next) {
      current = current.next;
    }
    current.next = null;
    this.size--;
  }

  public remove(index: number): void {
    if (this.size === 0 || this.head === null) {
      throw new OutOfBoundsError('Index out of bounds');
    }

    if (index < 0 || index >= this.size) {
      throw new OutOfBoundsError('Index out of bounds');
    }

    if (index === 0) {
      this.shift();
      return;
    }

    if (index === this.size - 1) {
      this.pop();
      return;
    }

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      if (current.next) {
        current = current.next;
      }
    }

    if (current.next?.next) {
      current.next = current.next.next;
      this.size--;
    }
  }

  public clear(): void {
    this.head = null;
    this.size = 0;
  }

  public toString(): string {
    let current = this.head;
    let string = '';
    while (current) {
      string += current.data + ' ';
      current = current.next;
    }
    return string.trim();
  }
}
