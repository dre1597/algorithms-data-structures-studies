export function heapSort(array: number[]): number[] {
  const length = array.length;

  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(array, i, length);
  }

  for (let i = length - 1; i > 0; i--) {
    swap(array, 0, i);
    heapify(array, 0, i);
  }

  return array;
}

function heapify(array: number[], i: number, length: number): void {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;

  if (left < length && array[left] > array[largest]) {
    largest = left;
  }

  if (right < length && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(array, i, largest);
    heapify(array, largest, length);
  }
}

function swap(array: number[], i: number, j: number): void {
  [array[i], array[j]] = [array[j], array[i]];
}
