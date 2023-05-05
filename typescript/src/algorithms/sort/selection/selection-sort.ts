export function selectionSort(array: number[]): number[] {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[i]) {
        swap(array, i, j);
      }
    }
  }

  return array;
}

function swap(array: number[], i: number, j: number) {
  [array[i], array[j]] = [array[j], array[i]];
}
