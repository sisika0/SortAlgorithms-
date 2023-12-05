function partition(arr, low, high, animations) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    animations.push({ type: 'select', data: [j, high] });
    if (arr[j] < pivot) {
      i++;
      animations.push({ type: 'swap', data: [i, j], arr: [...arr] });
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  animations.push({ type: 'swap', data: [i + 1, high], arr: [...arr] });
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function quickSort(arr, low, high, animations) {
  if (low < high) {
    const pi = partition(arr, low, high, animations);
    quickSort(arr, low, pi - 1, animations);
    quickSort(arr, pi + 1, high, animations);
  }
}

export function getQuickSortAnimation(arr = []) {
  const arrCopy = [...arr];
  const animations = [];
  quickSort(arrCopy, 0, arrCopy.length - 1, animations);
  return animations;
}
