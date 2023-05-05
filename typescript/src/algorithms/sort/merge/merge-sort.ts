export function mergeSort<T>(array: T[]): T[] {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);

  return merge(
    mergeSort(array.slice(0, middle)),
    mergeSort(array.slice(middle)),
  );
}

function merge<T>(left: T[], right: T[]): T[] {
  const result: T[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift()!);
    } else {
      result.push(right.shift()!);
    }
  }

  return [...result, ...left, ...right];
}
