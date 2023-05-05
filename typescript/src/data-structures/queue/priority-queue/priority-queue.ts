export class PriorityQueue<T> {
  private items: T[] = [];

  public enqueue(item: T): void {
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] < item) {
        this.items.splice(i, 0, item);
        added = true;
        return;
      }
    }

    if (!added) {
      this.items.push(item);
    }
  }

  public dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }

  public peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  public clear(): void {
    this.items = [];
  }

  public size(): number {
    return this.items.length;
  }

  public toString(): string {
    return this.items.toString();
  }
}
