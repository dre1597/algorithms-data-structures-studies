export function binarySearch<T>(array: T[], target: T): number {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const guess = array[mid];

    if (guess === target) {
      return mid;
    } else if (guess > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}
