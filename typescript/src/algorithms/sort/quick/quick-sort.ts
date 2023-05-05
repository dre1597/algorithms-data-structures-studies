export function quickSort(array: number[]): number[] {
  rQuickSort(array, 0, array.length - 1);
  return array;
}

function rQuickSort(array: number[], left: number, right: number): void {
  if (left < right) {
    const pivot = partition(array, left, right);
    rQuickSort(array, left, pivot - 1);
    rQuickSort(array, pivot + 1, right);
  }
}

function partition(array: number[], left: number, right: number): number {
  const pivot = array[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (array[j] < pivot) {
      swap(array, i, j);
      i++;
    }
  }

  swap(array, i, right);

  return i;
}

function swap(array: number[], i: number, j: number): void {
  [array[i], array[j]] = [array[j], array[i]];
}
