export function bubbleSort1(array: number[]): number[] {
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j + 1] < array[j]) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
}

export function bubbleSort2(array: number[]): number[] {
  const length = array.length;

  for (let i = 0; i < length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < length - i - 1; j++) {
      if (array[j + 1] < array[j]) {
        swap(array, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}

function swap(array: number[], i: number, j: number) {
  [array[i], array[j]] = [array[j], array[i]];
}
