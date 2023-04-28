export class CircularQueue<T> {
  private queue: (T | null)[] = [];
  private readonly capacity: number;
  private length = 0;
  private head = 0;
  private tail = -1;

  constructor(capacity = 10) {
    this.capacity = capacity;
  }

  public enqueue(item: T): void {
    if (!this.isFull()) {
      this.tail = (this.tail + 1) % this.capacity;
      this.queue[this.tail] = item;
      this.length++;

      if (this.head === -1) {
        this.head = this.tail;
      }
    }
  }

  public dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.queue[this.head];

    this.queue[this.head] = null;
    this.head = (this.head + 1) % this.capacity;
    this.length--;

    if (this.isEmpty()) {
      this.head = -1;
      this.tail = -1;
    }
    return item;
  }

  public peek(): T | null {
    if (!this.isEmpty()) {
      return this.queue[this.head];
    }
    return null;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public isFull(): boolean {
    return this.length === this.capacity;
  }

  public clear(): void {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  }

  public size(): number {
    return this.length;
  }

  public toString(): string {
    if (this.isEmpty()) {
      return '';
    }

    let string = '';
    let i;
    for (i = this.head; i !== this.tail; i = (i + 1) % this.capacity) {
      if (this.queue[i]) {
        string += this.queue[i] + ' ';
      }
    }
    if (this.queue[i]) {
      string += this.queue[i];
    }

    return string;
  }
}
