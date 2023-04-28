export class Queue<T> {
  private items: T[] = [];

  public enqueue(item: T) {
    this.items.push(item);
  }

  public dequeue() {
    return this.items.shift();
  }

  public peek() {
    return this.items[0];
  }

  public isEmpty() {
    return this.items.length === 0;
  }

  public size() {
    return this.items.length;
  }

  public clear() {
    this.items = [];
  }

  public toString(): string {
    return this.items.toString();
  }
}
