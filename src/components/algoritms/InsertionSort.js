import { swap } from '../functions/swap';
export function getInsertionSortAnimation(arr = []) {
  const arrCopy = [...arr];
  const animations = [];
  for (let i = 1; i < arrCopy.length; i++) {
    let j = i;
    while (j > 0 && arrCopy[j] < arrCopy[j - 1]) {
      swap(arrCopy, j, j - 1);
      animations.push({ type: 'swap', data: [j, j - 1], arr: [...arrCopy] });
      j--;
    }
  }
  return animations;
}
