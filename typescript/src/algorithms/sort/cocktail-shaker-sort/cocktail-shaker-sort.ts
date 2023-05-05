function swap(array: number[], i: number, j: number): void {
  [array[i], array[j]] = [array[j], array[i]];
}

export function cocktailShakerSort(array: number[]): number[] {
  const length = array.length;
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }

    for (let i = length - 1; i > 0; i--) {
      if (array[i] < array[i - 1]) {
        swap(array, i, i - 1);
        swapped = true;
      }
    }
  }

  return array;
}
