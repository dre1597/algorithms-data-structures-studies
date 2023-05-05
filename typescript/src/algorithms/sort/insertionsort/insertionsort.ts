export function insertionsort(array: number[]): number[] {
  const length = array.length;

  for (let i = 1; i < length; i++) {
    const item = array[i];
    let j = i - 1;
    for (; j >= 0 && item < array[j]; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = item;
  }

  return array;
}
