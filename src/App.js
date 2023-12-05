import React, { useState } from 'react';
import Bar from './components/Bar';
import './index.css';
import { getSelectionSortAnimation } from './components/algoritms/SelectionSort';
import { getInsertionSortAnimation } from './components/algoritms/InsertionSort';
import { getShellSortAnimation } from './components/algoritms/ShellSort';
import { mergeSortAnimation } from './components/algoritms/mergeSort';
import { getQuickSortAnimation } from './components/algoritms/quickSort';
function App() {
  const [numbersArray, setNumbersArray] = useState(generateRandomNumbersArr());
  function generateRandomNumFromInterval(to, from) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }
  function setButtonsState(state) {
    document.querySelectorAll('.controlls button').forEach((button) => {
      button.disabled = state;
    });
  }
  function generateRandomNumbersArr() {
    const newArray = [];
    for (let i = 0; i < 100; i++) {
      newArray.push(generateRandomNumFromInterval(5, 600));
    }
    return newArray;
  }
  function sort(alg) {
    let animations = [];
    if (alg === 'select') {
      animations = getSelectionSortAnimation(numbersArray);
    } else if (alg === 'insertion') {
      animations = getInsertionSortAnimation(numbersArray);
    } else if (alg === 'shellSort') {
      animations = getShellSortAnimation(numbersArray);
    } else if (alg === 'MergeSort') {
      animations = mergeSortAnimation(numbersArray);
    } else if (alg === 'quickSort') {
      animations = getQuickSortAnimation(numbersArray);
    }
    let animationIndex = 0;

    function animate() {
      if (animationIndex >= animations.length) {
        return;
      }

      const animation = animations[animationIndex];
      parseAnimation(animation);

      animationIndex++;

      requestAnimationFrame(animate);
    }
    setButtonsState(true);
    animate();
  }

  function parseAnimation(animation) {
    const { type, data, arr } = animation;
    const [i, j] = data;

    if (type === 'swap') {
      document.querySelector(`#bar-${i}`).style.backgroundColor = '#ff0000';
      document.querySelector(`#bar-${j}`).style.backgroundColor = '#ff0000';
      if (arr) {
        setNumbersArray(arr);
      }
    } else if (type === 'select') {
      document.querySelector(`#bar-${i}`).style.backgroundColor = '#00ff00';
      document.querySelector(`#bar-${j}`).style.backgroundColor = '#00ff00';
    } else if (type === 'reset') {
      for (let k = i; k <= j; k++) {
        document.querySelector(`#bar-${k}`).style.backgroundColor = '#0000ff';
      }
    }
  }
  return (
    <div className="app">
      <div className="bars">
        {numbersArray.map((number, id) => {
          return (
            <Bar
              id={id}
              height={number}
              key={id}
            />
          );
        })}
      </div>
      <div className="controlls">
        <button
          className="controll"
          onClick={() => setNumbersArray(generateRandomNumbersArr())}
        >
          GenerateNewArray
        </button>
        <button
          className="controll"
          onClick={() => sort('select')}
        >
          SelectionSort
        </button>
        <button
          className="controll"
          onClick={() => sort('insertion')}
        >
          insertionSort
        </button>
        <button
          className=" controll"
          onClick={() => sort('shellSort')}
        >
          shellSort
        </button>
        <button
          className="controll"
          onClick={() => sort('MergeSort')}
        >
          MergeSort
        </button>
        <button
          className=" controll"
          onClick={() => sort('quickSort')}
        >
          quickSort
        </button>
      </div>
    </div>
  );
}

export default App;
