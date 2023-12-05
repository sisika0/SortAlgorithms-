import { swap } from '../functions/swap';
export function getSelectionSortAnimation(arr = []) {
  const arrCopy = [...arr];
  const animations = [];
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      animations.push({ type: 'select', data: [i, j] });
      if (arrCopy[j] < arrCopy[min]) {
        min = j;
      }
    }

    if (min !== i) {
      swap(arrCopy, i, min);
      animations.push({ type: 'swap', data: [i, min], arr: [...arrCopy] });
    }
    animations.push({ type: 'reset', data: [i, i - 1] }); // Добавляем анимацию для сброса цвета
  }
  return animations;
}
