import { swap } from '../functions/swap';

export function getShellSortAnimation(arr = []) {
  const copyArr = [...arr];
  const animations = [];
  let h = 1;
  while (h < copyArr.length / 3) {
    h = 3 * h + 1;
  }
  while (h > 0) {
    for (let i = h; i < copyArr.length; i++) {
      let j = i;
      while (j >= h && copyArr[j - h] > copyArr[j]) {
        animations.push({ type: 'select', data: [j - h, j] });
        swap(copyArr, j, j - h);
        animations.push({ type: 'swap', data: [j, j - h], arr: [...copyArr] });
        j -= h;
      }
    }
    h = Math.floor(h / 3);
    animations.push({ type: 'reset', data: [0, copyArr.length - 1] });
  }
  return animations;
}
