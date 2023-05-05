export class MinHeap<T> {
  private heap: T[] = [];

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.size() <= 0;
  }

  clear(): void {
    this.heap = [];
  }

  insert(value: T): void {
    if (value !== null) {
      const index = this.heap.length;
      this.heap.push(value);
      this._siftUp(index);
    }
  }

  extract(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    if (this.size() === 1) {
      return this.heap.pop();
    }

    const value = this.heap[0];
    const lastElement = this.heap.pop();

    if (lastElement) {
      this.heap[0] = lastElement;
    }

    this._siftDown(0);
    return value;
  }

  public heapify(array: T[]): T[] {
    if (array) {
      this.heap = array;
    }

    const maxIndex = Math.floor(this.size() / 2) - 1;

    for (let i = maxIndex; i >= 0; i--) {
      this._siftDown(i);
    }

    return this.heap;
  }

  private _siftUp(index: number): void {
    let parentIndex = this._getParentIndex(index);

    while (
      index > 0 &&
      parentIndex &&
      this.heap[parentIndex] > this.heap[index]
    ) {
      this._swap(parentIndex, index);
      index = parentIndex;
      parentIndex = this._getParentIndex(index);
    }
  }

  private _siftDown(index: number) {
    let smallest = index;
    const left = this._getLeftIndex(index);
    const right = this._getRightIndex(index);
    const size = this.size();

    if (left < size && this.heap[smallest] > this.heap[left]) {
      smallest = left;
    }

    if (right < size && this.heap[smallest] > this.heap[right]) {
      smallest = right;
    }

    if (index !== smallest) {
      this._swap(index, smallest);
      this._siftDown(smallest);
    }
  }

  private _getParentIndex(index: number): number | undefined {
    if (index !== 0) {
      return undefined;
    }
    return Math.floor((index - 1) / 2);
  }

  private _getLeftIndex(index: number): number {
    return 2 * index + 1;
  }

  private _getRightIndex(index: number): number {
    return 2 * index + 2;
  }

  private _swap(a: number, b: number): void {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}
