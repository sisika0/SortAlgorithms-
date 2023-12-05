function merge(arr, aux, lo, mid, hi, animations) {
  for (let i = lo; i <= hi; i++) {
    aux[i] = arr[i];
  }
  let i = lo;
  let j = mid + 1;
  for (let k = lo; k <= hi; k++) {
    if (i > mid) {
      arr[k] = aux[j++];
      animations.push({ type: 'swap', data: [k, j - 1], arr: [...arr] });
    } else if (j > hi) {
      arr[k] = aux[i++];
      animations.push({ type: 'swap', data: [k, i - 1], arr: [...arr] });
    } else if (aux[j] < aux[i]) {
      arr[k] = aux[j++];
      animations.push({ type: 'swap', data: [k, j - 1], arr: [...arr] });
    } else {
      arr[k] = aux[i++];
      animations.push({ type: 'swap', data: [k, i - 1], arr: [...arr] });
    }
  }
  animations.push({ type: 'reset', data: [lo, hi] });
}

function sort(arr, aux, lo, hi, animations) {
  if (lo >= hi) {
    return;
  }
  const mid = Math.floor((lo + hi) / 2);
  sort(arr, aux, lo, mid, animations);
  sort(arr, aux, mid + 1, hi, animations);
  merge(arr, aux, lo, mid, hi, animations);
}

export function mergeSortAnimation(arr = []) {
  const arrCopy = [...arr];
  const animations = [];
  const aux = new Array(arr.length);
  sort(arrCopy, aux, 0, arr.length - 1, animations);
  return animations;
}
